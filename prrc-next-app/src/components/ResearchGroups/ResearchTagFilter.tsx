import React from 'react';
import type { ResearchTag } from '../../data/researchTags';

export interface ResearchTagFilterProps {
  tags: ResearchTag[];
  selectedTagSlugs: string[];
  onToggle: (slug: string) => void;
  /** Renders a "Clear tags" affordance once something is selected. */
  onClear?: () => void;
  /**
   * Optional per-tag group counts, rendered as a badge on each chip. Callers are
   * expected to filter the tag list down to tags that are actually attached to a
   * group (see layouts/Research.tsx) — this component only renders what it is
   * given.
   */
  counts?: Record<string, number>;
  className?: string;
}

/**
 * Tag chips for the research groups index.
 *
 * Multi-select and AND-ed: a group must carry every selected tag. Picking two
 * unrelated tags can therefore legitimately return nothing — the page shows an
 * empty state for that rather than silently widening the search.
 *
 * Labels come straight from ResearchTag.name and are upper-cased by .type-title.
 * The vocabulary is deliberately broader than the current group list (see
 * researchTags.ts); the caller hides unattached categories rather than showing a
 * chip that cannot match anything.
 */
const ResearchTagFilter: React.FC<ResearchTagFilterProps> = ({
  tags,
  selectedTagSlugs,
  onToggle,
  onClear,
  counts,
  className = '',
}) => {
  const selected = new Set(selectedTagSlugs);
  const hasSelection = selectedTagSlugs.length > 0;

  return (
    <div
      role="group"
      aria-label="Filter research groups by tag"
      className={`flex flex-wrap items-center gap-2 ${className}`}>
      {tags.map((tag) => {
        const isSelected = selected.has(tag.slug);
        const count = counts?.[tag.slug];

        return (
          <button
            key={tag.slug}
            type="button"
            aria-pressed={isSelected}
            aria-label={
              count === undefined
                ? undefined
                : `${tag.name} — ${count} ${count === 1 ? 'group' : 'groups'}`
            }
            onClick={() => onToggle(tag.slug)}
            className={[
              'type-title rounded-full border px-3 py-1.5 text-sm transition-colors',
              isSelected
                ? 'border-quantumBlue bg-quantumBlue text-whiteSands'
                : 'border-graphiteSky/50 text-cloudCircuit hover:border-quantumBlue hover:text-whiteSands',
            ].join(' ')}>
            {tag.name}
            {count !== undefined && (
              <span aria-hidden="true" className="ml-1.5 text-[11px] tabular-nums opacity-70">
                {count}
              </span>
            )}
          </button>
        );
      })}

      {hasSelection && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-full px-3 py-1.5 text-sm font-medium text-graphiteSky underline underline-offset-2 transition-colors hover:text-whiteSands">
          Clear tags
        </button>
      )}
    </div>
  );
};

export default ResearchTagFilter;
