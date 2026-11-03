import React from 'react';
import type { ResearchGroup } from '../../data/researchGroups';
import ResearchGroupHeader from '../headers/ResearchGroupHeader';
import SectionHeading from '../ResearchGroups/SectionHeading';

interface ResearchGroupPageProps {
  group: ResearchGroup;
}

/**
 * Individual research-group page — four content sections.
 *
 *   1. Hero: "Project Overview" + the group's name + its mission.  ✅
 *   2. "At a Glance" / "Recent Projects and Materials".            ✅ heading only
 *   3. ─┐
 *   4. ─┘ reserved — content not written yet
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

      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        {/* SECTION 2 of 4 — heading in place, content still to come. */}
        <section aria-labelledby="at-a-glance">
          <SectionHeading
            titleId="at-a-glance"
            title="At a Glance"
            subtitle="Recent Projects and Materials"
          />
          <div className="mt-12">{/* Projects and materials will render here. */}</div>
        </section>

        {/* SECTIONS 3–4 — reserved. */}
      </main>
    </div>
  );
};

export default ResearchGroupPage;
