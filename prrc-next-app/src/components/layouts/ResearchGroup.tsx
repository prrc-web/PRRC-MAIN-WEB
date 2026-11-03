import React from 'react';
import type { ResearchGroup } from '../../data/researchGroups';
import ResearchGroupHeader from '../headers/ResearchGroupHeader';

interface ResearchGroupPageProps {
  group: ResearchGroup;
}

/**
 * Individual research-group page — four content sections.
 *
 *   1. Hero: "Project Overview" + the group's name + its mission.  ✅ built
 *   2. ─┐
 *   3.  ├ reserved — content not written yet
 *   4. ─┘
 *
 * Only section 1 exists so far. The empty <main> holds the space so the footer
 * doesn't ride up under the hero until 2–4 land.
 *
 * Everything on this page comes from the group's entry in RESEARCH_GROUPS — the
 * same record the index and the search read — so the group's name and mission
 * are stated in exactly one place.
 */
const ResearchGroupPage = ({ group }: ResearchGroupPageProps) => {
  return (
    <div className="min-h-screen bg-oreBlue">
      {/* SECTION 1 of 4 */}
      <ResearchGroupHeader title={group.title} mission={group.description} />

      <main className="mx-auto min-h-[50vh] w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* SECTIONS 2–4 — reserved. */}
      </main>
    </div>
  );
};

export default ResearchGroupPage;
