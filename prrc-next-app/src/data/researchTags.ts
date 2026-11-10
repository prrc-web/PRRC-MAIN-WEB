/**
 * Controlled tag vocabulary for research groups.
 *
 * Tags are deliberately NOT free text. A research group points at tag slugs, and
 * each tag carries the synonyms users actually type. The synonyms are the whole
 * point: they are what makes "carbon capture", "CCUS", "CO2 capture" and
 * "sequestration" all resolve to the same tag, instead of us maintaining four
 * near-duplicate tags forever.
 *
 * REVISED (supervisor feedback): the first draft was built bottom-up from PRRC's
 * own project language and came out too specific — "CO2 Flooding", "Reservoir
 * Sweep & Conformance", "Permian Basin" are methods and places, not things an
 * external reader scans a page for. This set is topic-level and externally
 * legible: twelve broad energy categories.
 *
 * Where did the specific vocabulary go? Two places, on purpose:
 *   1. `synonyms` here — category-level words and near-synonyms, search-only,
 *      never displayed. Anything that is one facet of a category (nanoparticles,
 *      WAG, wettability) stays OUT, because a synonym sits on the tag and would
 *      therefore match every group carrying that tag.
 *   2. `keywords` on each group in researchGroups.ts — the jargon that belongs to
 *      one group only, so "CO2 foam" finds the gas-flooding group and nothing
 *      else. Precise recall without polluting the taxonomy.
 *
 * Names are stored in title case; the chip renders them upper-case via
 * .type-title. Slugs are stable identifiers — do not change one without
 * migrating `tagSlugs` in researchGroups.ts.
 *
 * Some categories have no group yet (geothermal, renewables, grid, critical
 * minerals, policy) and are expected to gain one later. They stay in this list
 * on purpose: the index derives its chips from this vocabulary, so a category
 * renders only once a group declares its slug — adding the group is all it takes,
 * no code change here.
 *
 * Backend note: this is the shape the Payload `tags` collection should mirror
 * ({ name, slug, synonyms[] }), so swapping this module for an API call later
 * does not change any consumer.
 */
export interface ResearchTag {
  slug: string;
  name: string;
  synonyms: string[];
}

export const RESEARCH_TAGS: ResearchTag[] = [
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    synonyms: [
      'petroleum',
      'oil and gas',
      'oilfield',
      'upstream',
      'hydrocarbon',
      'hydrocarbons',
      'hydrocarbon recovery',
      'independent oil and gas',
    ],
  },
  {
    slug: 'carbon-management',
    name: 'Carbon Management',
    synonyms: [
      'CCUS',
      'CCS',
      'carbon capture',
      'carbon capture and storage',
      'carbon capture utilization and storage',
      'CO2 capture',
      'CO2 storage',
      'carbon storage',
      'geologic carbon storage',
      'carbon sequestration',
      'sequestration',
      'CO2 injection',
      'decarbonization',
      'emissions',
    ],
  },
  {
    slug: 'geothermal-energy',
    name: 'Geothermal Energy',
    synonyms: ['geothermal', 'geothermal systems', 'heat recovery', 'enhanced geothermal'],
  },
  {
    slug: 'water-environment',
    name: 'Water & Environment',
    synonyms: [
      'produced water',
      'oilfield water',
      'brine',
      'water treatment',
      'water reuse',
      'water management',
      'membrane technology',
      'membranes',
      'saltwater',
      'salinity',
      'environment',
      'environmental',
      'sustainability',
    ],
  },
  {
    slug: 'renewable-energy',
    name: 'Renewable Energy',
    synonyms: ['renewables', 'solar', 'wind', 'bioenergy', 'hydrogen', 'energy transition'],
  },
  {
    slug: 'energy-systems-grid',
    name: 'Energy Systems & Grid',
    synonyms: ['grid', 'power systems', 'grid integration', 'energy systems', 'load management'],
  },
  {
    slug: 'critical-minerals-mining',
    name: 'Critical Minerals & Mining',
    synonyms: [
      'critical minerals',
      'mining',
      'mineral extraction',
      'mineral resources',
      'lithium',
      'rare earth',
      'rare earth elements',
    ],
  },
  {
    slug: 'advanced-materials',
    name: 'Advanced Materials',
    synonyms: ['advanced materials', 'materials science', 'materials engineering'],
  },
  {
    slug: 'data-science-ai',
    name: 'Data Science & AI',
    synonyms: [
      'data science',
      'machine learning',
      'artificial intelligence',
      'AI',
      'data analytics',
      'modeling',
    ],
  },
  {
    slug: 'geology-geosciences',
    name: 'Geology & Geosciences',
    synonyms: [
      'geology',
      'geoscience',
      'geosciences',
      'basin',
      'Permian',
      'Permian Basin',
      'Delaware Basin',
      'West Texas',
      'southeastern New Mexico',
      'Permian Energy Development Lab',
    ],
  },
  {
    slug: 'energy-policy-economics',
    name: 'Energy Policy & Economics',
    synonyms: ['policy', 'economics', 'regulation', 'energy policy', 'economic analysis'],
  },
  {
    slug: 'outreach-technology-transfer',
    name: 'Outreach & Technology Transfer',
    synonyms: [
      'outreach',
      'technology transfer',
      'public data',
      'industry outreach',
      'ISOG',
      'training',
      'education',
      'outreach and technology transfer',
    ],
  },
];
