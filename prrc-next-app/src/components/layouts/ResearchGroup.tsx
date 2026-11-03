import React from 'react';
import Link from 'next/link';
import type { ResearchGroup } from '../../data/researchGroups';

interface ResearchGroupPageProps {
  group: ResearchGroup;
}

/**
 * Individual research-group page — SCAFFOLD, intentionally blank.
 *
 * Only two things are here on purpose: the group's name (so you can tell which
 * page you're on) and a way back to the index. The empty <main> below reserves
 * height so the fixed footer doesn't ride up under the heading.
 *
 * Everything else belongs inside <main>: description, imagery, tag chips
 * linking to related groups, lead-scientist block, publications. When this
 * fills in, the data comes from the same RESEARCH_GROUPS entry that the index
 * and the search already read, so there is one source of truth.
 *
 * `pt` clears the fixed navbar (~112px tall at desktop).
 */
const ResearchGroupPage = ({ group }: ResearchGroupPageProps) => {
  return (
    <div className="min-h-screen bg-oreBlue">
      <div className="mx-auto w-full max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        <Link
          href="/ResearchPage"
          className="type-subheader inline-flex items-center gap-2 text-sm text-cloudCircuit transition-colors hover:text-whiteSands">
          <span aria-hidden="true">&larr;</span>
          All research groups
        </Link>

        <h1 className="type-header mt-6 text-3xl text-balance text-whiteSands sm:text-4xl">
          {group.title}
        </h1>
      </div>

      {/* Empty on purpose — reserved for the group's content. */}
      <main className="mx-auto min-h-[50vh] w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* TODO: group description, imagery, tags, lead scientist, publications. */}
      </main>
    </div>
  );
};

export default ResearchGroupPage;
