import type { ResearchGroup } from '../data/researchGroups';
import type { ResearchTag } from '../data/researchTags';

export interface ResearchSearchOptions {
  /** Raw user input. Whitespace-separated terms are AND-ed. */
  query?: string;
  /** Restrict to groups carrying ALL of these tag slugs. */
  tagSlugs?: string[];
}

export interface ResearchSearchResult {
  group: ResearchGroup;
  /** The group's tag slugs — used where tags are shown (the group info page). */
  tagSlugs: string[];
  /** Which query terms hit, so a card can explain why it matched. */
  matchedTerms: string[];
  score: number;
}

/**
 * Per-field weights. A title hit beats a tag hit beats a mention buried in the
 * description; ties fall back to title order so results are stable.
 */
const WEIGHT = {
  title: 10,
  tag: 8,
  keyword: 6,
  lead: 4,
  description: 2,
} as const;

const normalise = (value: string): string => value.toLowerCase();

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Word-start matcher, so "ai" cannot hit "available" and "gas" cannot hit
 * "gaskets". Terms of three characters or fewer also require a word end, which
 * is what keeps the synonyms "AI", "EOR" and "IFT" honest.
 *
 * Prefix matching (no trailing boundary above three characters) is deliberate:
 * it lets "sequest" and "geolog" still land, at no cost in false positives.
 */
const termMatcher = (term: string): RegExp =>
  new RegExp(`\\b${escapeRegExp(term)}${term.length <= 3 ? '\\b' : ''}`);

/**
 * Synchronous, dependency-free search over an in-memory group list.
 *
 * Deliberately client-side: there are nine groups (a few kB), so filtering in
 * memory is instant and needs no endpoint, debounce or loading state. When the
 * corpus grows enough to justify a backend query, this is the one function to
 * swap for a fetch — keep the signature and nothing else has to change.
 *
 * Tag hits are matched against each tag's name AND its synonyms, which is what
 * lets "sequestration" find a group tagged Carbon Management. Group-specific
 * jargon comes from ResearchGroup.keywords instead, so a narrow term matches the
 * one group it belongs to rather than everything sharing a broad tag.
 */
export function searchResearchGroups(
  groups: ResearchGroup[],
  tags: ResearchTag[],
  { query = '', tagSlugs = [] }: ResearchSearchOptions = {},
): ResearchSearchResult[] {
  const tagsBySlug = new Map(tags.map((tag) => [tag.slug, tag]));
  const terms = normalise(query).split(/\s+/).filter(Boolean);
  // Compiled once per search, not once per group.
  const matchers = terms.map((term) => ({ term, pattern: termMatcher(term) }));

  const results: ResearchSearchResult[] = [];

  for (const group of groups) {
    // Explicit tag filter: every requested tag must be present.
    if (tagSlugs.length > 0 && !tagSlugs.every((slug) => group.tagSlugs.includes(slug))) {
      continue;
    }

    // No query text: the whole (tag-filtered) list is the result set.
    if (terms.length === 0) {
      results.push({ group, tagSlugs: group.tagSlugs, matchedTerms: [], score: 0 });
      continue;
    }

    const title = normalise(group.title);
    const lead = normalise(group.leadScientist);
    const description = normalise(group.description);

    const keywordHaystack = normalise((group.keywords ?? []).join(' '));

    const tagHaystacks = group.tagSlugs
      .map((slug) => tagsBySlug.get(slug))
      .filter((tag): tag is ResearchTag => Boolean(tag))
      .map((tag) => normalise([tag.name, ...tag.synonyms].join(' ')));

    let score = 0;
    const matchedTerms: string[] = [];
    let everyTermHit = true;

    for (const { term, pattern } of matchers) {
      let termScore = 0;
      if (pattern.test(title)) termScore += WEIGHT.title;
      if (tagHaystacks.some((haystack) => pattern.test(haystack))) termScore += WEIGHT.tag;
      if (keywordHaystack && pattern.test(keywordHaystack)) termScore += WEIGHT.keyword;
      if (pattern.test(lead)) termScore += WEIGHT.lead;
      if (pattern.test(description)) termScore += WEIGHT.description;

      if (termScore === 0) {
        everyTermHit = false;
        break;
      }

      score += termScore;
      matchedTerms.push(term);
    }

    if (!everyTermHit) continue;

    results.push({ group, tagSlugs: group.tagSlugs, matchedTerms, score });
  }

  return results.sort((a, b) => b.score - a.score || a.group.title.localeCompare(b.group.title));
}
