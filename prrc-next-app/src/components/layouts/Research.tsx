import React, { useMemo, useState } from 'react';
import ResearchHeader from '../headers/ResearchHeaders';
import ResearchGroupCards from '../ResearchGroups/ResearchGroupCards';
import ResearchSearch from '../ResearchGroups/ResearchSearch';
import ResearchTagFilter from '../ResearchGroups/ResearchTagFilter';
import { RESEARCH_GROUPS } from '../../data/researchGroups';
import { RESEARCH_TAGS } from '../../data/researchTags';
import { searchResearchGroups } from '../../lib/searchResearchGroups';

export default function Research() {
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Client-side on purpose: eight groups is a few kB, so filtering in memory is
  // instant and needs no endpoint, debounce or loading state. When the corpus
  // outgrows that, swap searchResearchGroups() for a fetch — the call site stays.
  const results = useMemo(
    () =>
      searchResearchGroups(RESEARCH_GROUPS, RESEARCH_TAGS, {
        query,
        tagSlugs: selectedTags,
      }),
    [query, selectedTags],
  );

  const trimmedQuery = query.trim();
  const hasFilters = trimmedQuery.length > 0 || selectedTags.length > 0;

  const toggleTag = (slug: string) =>
    setSelectedTags((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );

  const clearAll = () => {
    setQuery('');
    setSelectedTags([]);
  };

  return (
    // Page shell is transparent on purpose: the Ore Blue + topography canvas
    // is painted once, globally, on <body> (styles/globals.css). An opaque
    // bg-oreBlue here would hide it while looking identical.
    <div className="min-h-screen bg-transparent">
      <ResearchHeader />

      <div className="mx-auto mt-20 w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Section intro. PLACEHOLDER COPY — the outreach coordinator supplies
            the real blurb; this only reserves the space so the layout is final.
            Centered to match the band of cards below it, not the left-aligned
            label + field row. */}
        <div className="text-center">
          <h2 className="type-header text-2xl tracking-widest text-whiteSands sm:text-4xl">
            RESEARCH GROUPS
          </h2>
          <p className="type-subheader mx-auto mt-4 max-w-2xl text-base text-pretty text-cloudCircuit sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Label and field share one row so the container's left margin stays
            put; the field gives up the width the label needs. Below sm they
            stack, label above the field. */}
        <div className="mt-20 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <label
            htmlFor="research-search"
            className="type-subheader shrink-0 text-lg text-whiteSands">
            Find a Group
          </label>

          <div className="min-w-0 flex-1">
            <ResearchSearch
              value={query}
              onChange={setQuery}
              onClear={() => setQuery('')}
              placeholder="Search research groups — try “carbon capture”, “produced water”, “Permian Basin”"
            />
          </div>
        </div>

        {/* Tag chips sit directly below the field as a browse affordance.
            Selection is AND-ed — see ResearchTagFilter. */}
        <ResearchTagFilter
          className="mt-5"
          tags={RESEARCH_TAGS}
          selectedTagSlugs={selectedTags}
          onToggle={toggleTag}
          onClear={() => setSelectedTags([])}
        />

        <p role="status" aria-live="polite" className="mt-5 text-sm text-cloudCircuit">
          {results.length === RESEARCH_GROUPS.length
            ? `Showing all ${RESEARCH_GROUPS.length} research groups`
            : `Showing ${results.length} of ${RESEARCH_GROUPS.length} research groups`}
        </p>

        {results.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(({ group }) => (
              <ResearchGroupCards
                key={group.slug}
                name={group.title}
                title={group.leadScientist}
                imageUrl={group.imageUrl}
                description={group.description}
                href={`/ResearchPage/${group.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-graphiteSky/30 bg-techieBlue/60 p-8 text-center">
            <p className="text-cloudCircuit">
              {trimmedQuery && selectedTags.length > 0 ? (
                <>
                  No research groups match{' '}
                  <span className="font-semibold text-whiteSands">“{trimmedQuery}”</span> with all
                  of the selected tags.
                </>
              ) : trimmedQuery ? (
                <>
                  No research groups match{' '}
                  <span className="font-semibold text-whiteSands">“{trimmedQuery}”</span>.
                </>
              ) : (
                <>No research group carries all of the selected tags.</>
              )}
            </p>
            <p className="mt-2 text-sm text-graphiteSky">
              Try removing a tag, or a broader term — for example “carbon capture”, “produced water”
              or “Permian Basin”.
            </p>
            {hasFilters && (
              <button
                type="button"
                onClick={clearAll}
                className="mt-5 rounded-md border border-quantumBlue/60 px-4 py-2 text-sm font-medium text-quantumBlue transition-colors hover:bg-quantumBlue hover:text-whiteSands">
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/card-img.png"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Advanced Materials in Hydrocarbon Production
                </h5>
                <h6 className="card-subtitle mb-2">Section Head:</h6>
                <p className="card-text">
                  Advanced materials (AM) involve engineering properties of
                  existing materials for improved performance, with examples
                  like titanium and carbon fiber. Nanotechnology, focusing on
                  dimensions of 1 to 100 nanometers, is a crucial aspect of AM
                  research, allowing for the manipulation of materials at the
                  nanoscale for enhanced properties and applications in
                  hydrocarbon recovery technologies.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/alkali-surfactant-polymers Picture.png"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Alkali Surfactant Polymers (ASP)</h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. Guoyin Zhang
                </h6>
                <p className="card-text">
                  Formulates and develops alkali surfactant polymer (ASP)
                  treatments for enhanced recovery of oil and evaluates existing
                  ASP treatments.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/Gas Flooding.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Gas Flooding Processes and Flow Heterogeneities
                </h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. Sai Wang
                </h6>
                <p className="card-text">
                  Studies carbon storage in geologic formations, improving
                  conformance control and sweep efficiency in CO2 flooding,
                  injectivity changes associated with water alternating with gas
                  injection (WAG) and improved modeling of CO2 foam-enhancing
                  processes and WAG injection.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/ISOG.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Industry Service &amp; Outreach Group (ISOG)
                </h5>
                <h6 className="card-subtitle mb-2">Lead</h6>
                <p className="card-text">
                  Makes public data available in intuitive and user-friendly
                  formats and works with other organizations to provide
                  information about new or under-used technologies available to
                  the independent oil and gas community.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/Petrophysics.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Petrophysics and Surface Chemistry
                </h5>
                <h6 className="card-subtitle mb-2">Lead Scientist: Tian Fan</h6>
                <p className="card-text">
                  Studies surface and interfacial properties of crude oils,
                  wettability alteration and crude oil/brine/rock interactions,
                  stability of asphaltenes, and the effects of surfactants used
                  in core cleaning on wettability assessment.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/Produced Water.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="300"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Produced Water in Petroleum Engineering
                </h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. Jianjia Yu
                </h6>
                <p className="card-text">
                  Pursues advanced methods of treating oilfield produced water
                  through innovative membrane technology.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/REACT.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="300"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Reservoir Evaluation/Advanced Computational Technologies
                  (REACT)
                </h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. William Ampomah
                </h6>
                <p className="card-text">
                  Develops new technologies using computational intelligence,
                  geostatistics and fuzzy logic to solve the unique problems
                  encountered in reservoir characterization and numerical
                  simulation of oil and gas reservoirs using data of all scales.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/Res Sweep.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="300"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Reservoir Sweep Improvement</h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. Randall Seright
                </h6>
                <p className="card-text">
                  Performs research and development to improve reservoir sweep
                  efficiency and reduce saltwater production during oil and gas
                  recovery operations.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
