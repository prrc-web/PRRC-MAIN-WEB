/**
 * The nine research groups.
 *
 * Transcribed from the block that had been commented out in
 * `components/layouts/Research.tsx`, so the wording is PRRC's own copy, not
 * rewritten. The live page was rendering nine empty placeholder cards before
 * this module existed; it now renders these eight.
 *
 * DRAFT DATA — the real home for this is a Payload `research-groups` collection
 * (see specs/assessment-future-improvements.md §9.1). This module exists so the
 * search UI can be built and judged now, frontend-first, without waiting for the
 * CMS. The interface below is the contract to keep when that swap happens.
 */
export interface ResearchGroup {
  slug: string;
  title: string;
  /** Lead scientist / section head. Empty where the source copy left it blank. */
  leadScientist: string;
  description: string;
  /** Filler until real group artwork exists. */
  imageUrl: string;
  /** References RESEARCH_TAGS slugs. Browse vocabulary — broad, shared, external. */
  tagSlugs: string[];
  /**
   * Group-specific search terms: the jargon that belongs to this group only.
   *
   * These used to be separate narrow tags ("CO2 Flooding", "Permian Basin").
   * They cannot live in ResearchTag.synonyms any more, because a synonym hangs
   * off a broad tag and would therefore match every group carrying that tag —
   * "CO2 foam" would find the petrophysics group just for being a materials
   * group. Keeping them per group restores precise recall without bloating the
   * taxonomy. Search-only; never rendered.
   */
  keywords: string[];
}

const FILLER_IMAGE = '/PRRClogolightoldtransparent.png';

export const RESEARCH_GROUPS: ResearchGroup[] = [
  {
    slug: 'advanced-materials',
    title: 'Advanced Materials in Hydrocarbon Production',
    leadScientist: '',
    description:
      'Advanced materials (AM) involve engineering properties of existing materials for improved performance, with examples like titanium and carbon fiber. Nanotechnology, focusing on dimensions of 1 to 100 nanometers, is a crucial aspect of AM research, allowing for the manipulation of materials at the nanoscale for enhanced properties and applications in hydrocarbon recovery technologies.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['advanced-materials', 'oil-gas'],
    keywords: [
      'nanotechnology',
      'nanoparticles',
      'nanomaterials',
      'nanoscale',
      'carbon fiber',
      'titanium',
      'materials',
    ],
  },
  {
    slug: 'asp',
    title: 'Alkali Surfactant Polymers (ASP)',
    leadScientist: 'Dr. Guoyin Zhang',
    description:
      'Formulates and develops alkali surfactant polymer (ASP) treatments for enhanced recovery of oil and evaluates existing ASP treatments.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['oil-gas'],
    keywords: [
      'ASP',
      'alkali surfactant polymer',
      'surfactant',
      'surfactants',
      'polymer',
      'chemical flooding',
      'surfactant flooding',
      'polymer flooding',
      'EOR',
      'enhanced oil recovery',
    ],
  },
  {
    slug: 'gas-flooding',
    title: 'Gas Flooding Processes and Flow Heterogeneities',
    leadScientist: 'Dr. Sai Wang',
    description:
      'Studies carbon storage in geologic formations, improving conformance control and sweep efficiency in CO2 flooding, injectivity changes associated with water alternating with gas injection (WAG) and improved modeling of CO2 foam-enhancing processes and WAG injection.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['carbon-management', 'oil-gas'],
    keywords: [
      'CO2 flooding',
      'CO2 EOR',
      'CO2 foam',
      'WAG',
      'water alternating gas',
      'miscible flooding',
      'immiscible flooding',
      'injectivity',
      'conformance control',
      'sweep efficiency',
      'flow heterogeneity',
      'thief zone',
      'EOR',
      'enhanced oil recovery',
    ],
  },
  {
    // PLACEHOLDER RECORD — Dory has no GREAT copy yet. The card, the route and
    // the group page all derive from this entry, so filling in `description`,
    // `leadScientist` and `keywords` is the only change needed once it arrives.
    // No keywords on purpose: inventing jargon would make GREAT match searches
    // it has no claim to.
    slug: 'great',
    title: 'GREAT',
    leadScientist: '',
    description:
      'A research group at the PRRC. Its overview, personnel and current projects will be published here as the group provides them.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['critical-minerals-mining', 'energy-systems-grid', 'geothermal-energy'],
    keywords: [],
  },
  {
    slug: 'isog',
    title: 'Industry Service & Outreach Group (ISOG)',
    leadScientist: '',
    description:
      'Makes public data available in intuitive and user-friendly formats and works with other organizations to provide information about new or under-used technologies available to the independent oil and gas community.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: [
      'outreach-technology-transfer',
      'energy-systems-grid',
      'critical-minerals-mining',
      'energy-policy-economics',
      'geothermal-energy',
      'renewable-energy',
    ],
    keywords: [
      'public data',
      'ISOG',
      'independent oil and gas',
      'technology transfer',
      'under-used technologies',
      'training',
    ],
  },
  {
    slug: 'petrophysics',
    title: 'Petrophysics and Surface Chemistry',
    leadScientist: 'Tian Fan',
    description:
      'Studies surface and interfacial properties of crude oils, wettability alteration and crude oil/brine/rock interactions, stability of asphaltenes, and the effects of surfactants used in core cleaning on wettability assessment.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['advanced-materials', 'geology-geosciences'],
    keywords: [
      'petrophysics',
      'wettability',
      'wettability alteration',
      'surface chemistry',
      'interfacial tension',
      'IFT',
      'contact angle',
      'asphaltenes',
      'COBR',
      'crude oil brine rock',
      'core cleaning',
      'surfactant',
    ],
  },
  {
    slug: 'produced-water',
    title: 'Produced Water in Petroleum Engineering',
    leadScientist: 'Dr. Jianjia Yu',
    description:
      'Pursues advanced methods of treating oilfield produced water through innovative membrane technology.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['water-environment'],
    keywords: [
      'produced water',
      'oilfield water',
      'brine',
      'membrane technology',
      'water treatment',
      'water reuse',
      'salinity',
    ],
  },
  {
    slug: 'react',
    title: 'Reservoir Evaluation/Advanced Computational Technologies (REACT)',
    leadScientist: 'Dr. William Ampomah',
    description:
      'Develops new technologies using computational intelligence, geostatistics and fuzzy logic to solve the unique problems encountered in reservoir characterization and numerical simulation of oil and gas reservoirs using data of all scales.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: [
      'data-science-ai',
      'geology-geosciences',
      'critical-minerals-mining',
      'energy-policy-economics',
      'geothermal-energy',
    ],
    keywords: [
      'REACT',
      'computational intelligence',
      'geostatistics',
      'fuzzy logic',
      'reservoir characterization',
      'reservoir simulation',
      'numerical simulation',
      'geomodeling',
      'data analytics',
      'machine learning',
      'Permian Basin',
      'Delaware Basin',
    ],
  },
  {
    slug: 'reservoir-sweep',
    title: 'Reservoir Sweep Improvement',
    leadScientist: 'Dr. Randall Seright',
    description:
      'Performs research and development to improve reservoir sweep efficiency and reduce saltwater production during oil and gas recovery operations.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['oil-gas', 'water-environment'],
    keywords: [
      'sweep efficiency',
      'conformance control',
      'water shutoff',
      'mobility control',
      'saltwater production',
      'thief zones',
      'polymer gels',
      'EOR',
      'enhanced oil recovery',
    ],
  },
];
