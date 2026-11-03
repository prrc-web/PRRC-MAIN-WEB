import React from 'react';
import Link from 'next/link';
import TopoField from '../backgrounds/TopoField';

/**
 * SECTION 1 of 4 — group hero. Same plumbing as the research-groups index
 * header (ResearchHeaders): full-bleed animated Topo Field, a dark wash so the
 * type stays crisp over the contour lines, and a mask that fades the bottom
 * quarter into the page background.
 *
 * Tailored to the group, and following the type system rather than the wording:
 *   "Project Overview" — Title: 500 Medium, all caps, tracked (kicker)
 *   group's name       — Primary Header: 800 Extra Bold, and the page's h1
 *   mission            — Body: 400 Regular
 * The kicker is a <p>, so the outline stays one h1 (the group) per page.
 *
 * Top padding is deliberately deeper below lg: the navbar is fixed and grows to
 * ~185px around tablet widths when its links wrap, so the back link would
 * otherwise slide underneath it. Measured nav heights: 121px @390, 185px @768,
 * 113px @1440 — hence pt-40 / sm:pt-52 before the lg centering takes over.
 */
const BOTTOM_FADE_MASK =
  'linear-gradient(to bottom, #000 75%, transparent 100%)';

interface ResearchGroupHeaderProps {
  /** The research group's name. */
  title: string;
  /** The group's mission copy — the `description` field in RESEARCH_GROUPS. */
  mission: string;
}

const ResearchGroupHeader = ({ title, mission }: ResearchGroupHeaderProps) => {
  return (
    <section
      className="relative w-full lg:h-screen lg:place-content-center"
      style={{ WebkitMaskImage: BOTTOM_FADE_MASK, maskImage: BOTTOM_FADE_MASK }}>
      {/* Animated WebGL topographic field background */}
      <TopoField className="absolute inset-0 w-full h-full" />
      {/* Subtle dark wash behind text so it stays crisp over the contour lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />

      <div className="relative z-20 mx-auto w-screen max-w-7xl px-4 pb-16 pt-40 sm:px-6 sm:pb-24 sm:pt-52 lg:px-8 lg:py-32">
        <div className="flex flex-col items-start justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="w-full min-w-0 max-w-prose text-left">
            <Link
              href="/ResearchPage"
              className="type-subheader inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-whiteSands">
              <span aria-hidden="true">&larr;</span>
              All research groups
            </Link>

            {/* Title role: 500 Medium, all caps, tracked. */}
            <p className="type-title mt-6 text-sm tracking-widest text-white sm:text-base">
              Project{' '}
              <strong className="font-medium text-indigo-300">Overview</strong>
            </p>

            {/* Header role: Extra Bold. The group's name is the page's subject,
                so it carries the h1. */}
            <h1 className="type-header mt-3 text-3xl text-balance text-whiteSands sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="type-body mt-4 text-base text-pretty text-gray-300 sm:text-lg/relaxed">
              {mission}
            </p>
          </div>

          {/* PRRC logo — replaces the AddressingKeyTechnicalChallenges.svg
              filler. Square source (700x700), so it renders as a square mark. */}
          <img
            src="/PRRC-Logo-WhiteBG.png"
            alt=""
            aria-hidden="true"
            className="h-auto w-[clamp(200px,52vw,500px)] select-none pointer-events-none opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchGroupHeader;
