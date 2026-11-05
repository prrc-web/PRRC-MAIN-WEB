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
 *   3. "Personnel".                                                ✅ heading only
 *   4. "Publications".                                             ✅ heading only
 *
 * Everything on this page comes from the group's entry in RESEARCH_GROUPS — the
 * same record the index and the search read — so the group's name and mission
 * are stated in exactly one place.
 */
const ResearchGroupPage = ({ group }: ResearchGroupPageProps) => {
  return (
    // Transparent shell — the Ore Blue + topography canvas lives on <body>.
    <div className="min-h-screen bg-transparent">
      {/* SECTION 1 of 4 */}
      <ResearchGroupHeader title={group.title} mission={group.description} />

      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        {/* SECTION 2 of 4 — heading in place, content still to come. */}
        <section aria-labelledby="at-a-glance">
          <SectionHeading
            headerId="at-a-glance"
            title="At a Glance"
            header="Recent Projects and Materials"
          />
          <div className="mt-12">{/* Projects and materials will render here. */}</div>
        </section>

        {/* SECTION 3 of 4 — header in place, content still to come. */}
        <section aria-labelledby="personnel" className="mt-24 sm:mt-32">
          <SectionHeading headerId="personnel" header="Personnel" />
          <div className="mt-12">{/* Personnel will render here. */}</div>
        </section>

        {/* SECTION 4 of 4 — header in place, content still to come. */}
        <section aria-labelledby="publications" className="mt-24 sm:mt-32">
          <SectionHeading headerId="publications" header="Publications" />
          <div className="mt-12">{/* Publications will render here. */}</div>
        </section>
      </main>
    </div>
  );
};

export default ResearchGroupPage;
