import React from 'react';
import TopoField from '../backgrounds/TopoField';

/**
 * The bottom quarter of the header fades to fully transparent, so the component
 * dissolves into the page background instead of ending on a hard edge.
 * Stops: fully opaque to 75%, then 0% opacity at 100% (the bottom 1/4 = 25%).
 *
 * A mask rather than an overlay: it makes the component itself transparent and
 * lets whatever is behind it show through, so it stays decoupled from the page
 * background colour.
 */
const BOTTOM_FADE_MASK =
  'linear-gradient(to bottom, #000 75%, transparent 100%)';

const ResearchHeader = () => {
  return (
    <section
      className="relative w-full lg:h-screen lg:place-content-center"
      style={{ WebkitMaskImage: BOTTOM_FADE_MASK, maskImage: BOTTOM_FADE_MASK }}>
      {/* Animated WebGL topographic field background */}
      <TopoField className="absolute inset-0 w-full h-full" />
      {/* Subtle dark wash behind text so it stays crisp over the contour lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />
      <div className="relative z-20 mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col lg:flex-row items-start justify-center lg:items-center lg:justify-between gap-10 lg:gap-16">
          <div className="w-full min-w-0 max-w-prose text-left">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our
            <strong className="font-extrabold text-indigo-300"> Research </strong>
          </h1>

          <p className="mt-4 text-base font-medium text-pretty text-gray-300 sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            {/* <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#">
              Get Started
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#">
              Learn More
            </a> */}
          </div>
          </div>

          {/* PRRC logo — replaced the AddressingKeyTechnicalChallenges.svg
              filler (which itself replaced the lab-coat photo 2026-10-14).
              Decorative here: the heading beside it carries the meaning. */}
          <img
            src="/PRRC-Logo-WhiteBG.png"
            alt=""
            aria-hidden="true"
            className="h-auto w-[clamp(200px,52vw,500px)] opacity-80 select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchHeader;
