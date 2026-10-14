import React from 'react';
import TopoField from '../backgrounds/TopoField';

const ResearchHeader = () => {
  return (
    <section className="relative w-full lg:h-screen lg:place-content-center">
      {/* Animated WebGL topographic field background */}
      <TopoField className="absolute inset-0 w-full h-full" />
      {/* Subtle dark wash behind text so it stays crisp over the contour lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />
      <div className="relative z-20 mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col lg:flex-row items-start justify-center lg:items-center lg:justify-between gap-10 lg:gap-16">
          <div className="w-full min-w-0 max-w-prose text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our
            <strong className="text-indigo-300"> Research </strong>
            Groups
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-300 sm:text-lg/relaxed">
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

          {/* Placeholder illustration — temporary stand-in for the bespoke vector
              Dory is drawing. Replaced the lab-coat photo 2026-10-14. */}
          <img
            src="/AddressingKeyTechnicalChallenges.svg"
            alt="Research illustration"
            className="h-auto w-[clamp(200px,52vw,500px)] opacity-60 select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchHeader;
