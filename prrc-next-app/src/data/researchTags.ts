/**
 * Controlled tag vocabulary for research groups.
 *
 * Tags are deliberately NOT free text. A research group points at tag slugs, and
 * each tag carries the synonyms users actually type. The synonyms are the whole
 * point: they are what makes "carbon capture", "CCUS", "CO2 capture" and
 * "sequestration" all resolve to the same tag, instead of us maintaining four
 * near-duplicate tags forever.
 *
 * DRAFT — derived from copy that already lives in this repo (the eight group
 * descriptions formerly commented out in layouts/Research.tsx, the old Navbar
 * megamenu, Aboutus.tsx and the staff bios). Prune or reword freely.
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
    slug: 'carbon-capture',
    name: 'Carbon Capture',
    synonyms: [
      'CCUS',
      'carbon capture utilization and storage',
      'carbon capture and storage',
      'CCS',
      'CO2 capture',
      'carbon sequestration',
      'sequestration',
      'geologic carbon storage',
      'carbon storage',
      'CO2 storage',
    ],
  },
  {
    slug: 'produced-water',
    name: 'Produced Water',
    synonyms: [
      'oilfield water',
      'oilfield brine',
      'brine',
      'produced water treatment',
      'water treatment',
      'membrane technology',
      'water reuse',
      'saltwater',
      'salinity',
    ],
  },
  {
    slug: 'permian-basin',
    name: 'Permian Basin',
    synonyms: [
      'Permian',
      'Delaware Basin',
      'West Texas',
      'southeastern New Mexico',
      'Permian Energy Development Lab',
    ],
  },
  {
    slug: 'enhanced-oil-recovery',
    name: 'Enhanced Oil Recovery',
    synonyms: ['EOR', 'improved oil recovery', 'IOR', 'tertiary recovery'],
  },
  {
    slug: 'co2-flooding',
    name: 'CO2 Flooding',
    synonyms: [
      'CO2 EOR',
      'CO2 injection',
      'WAG',
      'water alternating gas',
      'miscible flooding',
      'immiscible flooding',
      'CO2 foam',
    ],
  },
  {
    slug: 'reservoir-sweep',
    name: 'Reservoir Sweep & Conformance',
    synonyms: [
      'sweep efficiency',
      'conformance control',
      'conformance',
      'mobility control',
      'water shutoff',
      'thief zone',
      'flow heterogeneity',
      'channeling',
    ],
  },
  {
    slug: 'surfactants-polymers',
    name: 'Surfactants & Polymers',
    synonyms: [
      'ASP',
      'alkali surfactant polymer',
      'alkali-surfactant-polymer',
      'chemical flooding',
      'polymer flooding',
      'surfactant flooding',
    ],
  },
  {
    slug: 'wettability',
    name: 'Wettability & Surface Chemistry',
    synonyms: [
      'wettability alteration',
      'wettability',
      'surface chemistry',
      'interfacial tension',
      'IFT',
      'contact angle',
      'asphaltene',
      'crude oil brine rock',
      'COBR',
    ],
  },
  {
    slug: 'reservoir-characterization',
    name: 'Reservoir Characterization',
    synonyms: [
      'petrophysics',
      'rock properties',
      'core analysis',
      'core flooding',
      'formation evaluation',
      'log analysis',
      'reservoir description',
    ],
  },
  {
    slug: 'simulation-geomodeling',
    name: 'Simulation & Geomodeling',
    synonyms: [
      'numerical simulation',
      'reservoir simulation',
      'geostatistics',
      'geomodeling',
      'computational intelligence',
      'machine learning',
      'fuzzy logic',
      'data analytics',
      'modeling',
    ],
  },
  {
    slug: 'advanced-materials',
    name: 'Advanced Materials & Nanotechnology',
    synonyms: [
      'nanotechnology',
      'nanoparticles',
      'nanomaterials',
      'advanced materials',
      'carbon fiber',
      'titanium',
      'nanoscale',
    ],
  },
  {
    slug: 'outreach-technology-transfer',
    name: 'Outreach & Technology Transfer',
    synonyms: [
      'technology transfer',
      'public data',
      'industry outreach',
      'ISOG',
      'training',
      'independent oil and gas',
      'outreach',
    ],
  },
];
