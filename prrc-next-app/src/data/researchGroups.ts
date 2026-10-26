/**
 * The eight research groups.
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
  /** References RESEARCH_TAGS slugs. */
  tagSlugs: string[];
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
    tagSlugs: ['advanced-materials'],
  },
  {
    slug: 'asp',
    title: 'Alkali Surfactant Polymers (ASP)',
    leadScientist: 'Dr. Guoyin Zhang',
    description:
      'Formulates and develops alkali surfactant polymer (ASP) treatments for enhanced recovery of oil and evaluates existing ASP treatments.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['enhanced-oil-recovery', 'surfactants-polymers'],
  },
  {
    slug: 'gas-flooding',
    title: 'Gas Flooding Processes and Flow Heterogeneities',
    leadScientist: 'Dr. Sai Wang',
    description:
      'Studies carbon storage in geologic formations, improving conformance control and sweep efficiency in CO2 flooding, injectivity changes associated with water alternating with gas injection (WAG) and improved modeling of CO2 foam-enhancing processes and WAG injection.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['carbon-capture', 'co2-flooding', 'enhanced-oil-recovery', 'reservoir-sweep'],
  },
  {
    slug: 'isog',
    title: 'Industry Service & Outreach Group (ISOG)',
    leadScientist: '',
    description:
      'Makes public data available in intuitive and user-friendly formats and works with other organizations to provide information about new or under-used technologies available to the independent oil and gas community.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['outreach-technology-transfer'],
  },
  {
    slug: 'petrophysics',
    title: 'Petrophysics and Surface Chemistry',
    leadScientist: 'Tian Fan',
    description:
      'Studies surface and interfacial properties of crude oils, wettability alteration and crude oil/brine/rock interactions, stability of asphaltenes, and the effects of surfactants used in core cleaning on wettability assessment.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['wettability', 'reservoir-characterization', 'surfactants-polymers'],
  },
  {
    slug: 'produced-water',
    title: 'Produced Water in Petroleum Engineering',
    leadScientist: 'Dr. Jianjia Yu',
    description:
      'Pursues advanced methods of treating oilfield produced water through innovative membrane technology.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['produced-water'],
  },
  {
    slug: 'react',
    title: 'Reservoir Evaluation/Advanced Computational Technologies (REACT)',
    leadScientist: 'Dr. William Ampomah',
    description:
      'Develops new technologies using computational intelligence, geostatistics and fuzzy logic to solve the unique problems encountered in reservoir characterization and numerical simulation of oil and gas reservoirs using data of all scales.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['simulation-geomodeling', 'reservoir-characterization', 'permian-basin'],
  },
  {
    slug: 'reservoir-sweep',
    title: 'Reservoir Sweep Improvement',
    leadScientist: 'Dr. Randall Seright',
    description:
      'Performs research and development to improve reservoir sweep efficiency and reduce saltwater production during oil and gas recovery operations.',
    imageUrl: FILLER_IMAGE,
    tagSlugs: ['reservoir-sweep', 'produced-water', 'enhanced-oil-recovery'],
  },
];
