import React from 'react';
import CarrilloAdmin from '../AdminCards/CarilloInfo';
import BalchAdmin from '../AdminCards/BalchInfo';
import BenalilAdmin from '../AdminCards/BenalilInfo';
import MclemorAdmin from '../AdminCards/MclemorInfo';
import RaneyAdmin from '../AdminCards/RaneyInfo';
import AdministrationHeader from '../headers/AdministrationHeader';
import WeiAdmin from '../AdminCards/WeiInfo';

export default function Administration() {
  return (
    <>
      <div className="max-w-screen bg-white ">
        <AdministrationHeader />

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-2xl px-4 py-8 text-center">
            <h1 className="text-5xl font-semibold tracking-loose text-gray-900">
              This page is under maitenance.
            </h1>

            <p className="mt-7 text-2xl text-gray-800">
              We appreciate your patience as we work to restore the content.
            </p>
            <div className="mt-10 border-t border-gray-400">
              <p className="mt-10 text-gray-500">
                Behind every success at the PRRC is our dedicated admin. By
                supporting efficient operations through coordination of
                workflows, they lay the foundation for transformative research
                advancements.
              </p>
              <a
                href="Homepage"
                className="mt-6 pb-8 inline-block rounded-lg px-3 py-2 text-lg font-medium text-switch2 border border-transparent hover:text-xl focus:outline-hidden focus:text-xl">
                Go Back Home
                <span
                  aria-hidden="true"
                  className="block transition-all -rotate-180 text-md ">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* <container className="mx-30 my-20">
          <h1 className="text-6xl font-medium justify-center text-nmtblue p-20 mt-5 mb-5">
            Our administrative   ensures all managerial operations at the
            Petroleum Recovery Research Center.
          </h1>
          <div className="h-20 w-full bg-gradient-to-b from-white to-nmtblue"></div>
        </container> */}

        {/* <div className="max-w-screen px-4 py-20 sm:px-6 lg:px-8 lg:py-14  ">
          
          <div className="max-w-2xl mx-auto text-center  lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight py-10 text-nmtblue">
              Meet our Administrative Team
            </h2>
          </div>
         

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b-2 border-gray-50 py-10 ">
            <div className="h-full">
              <BalchAdmin />
            </div>
            <div className="h-full">
              <RaneyAdmin />
            </div>
            <div className="h-full">
              <WeiAdmin />
            </div>
            <div className="h-full">
              <CarrilloAdmin />
            </div>
            <div className="h-full">
              <BenalilAdmin />
            </div>
            <div className="h-full">
              <MclemorAdmin />
            </div>
          </div>
          
        </div>
        <p className="mt-1 text-gray-500 max-w-2xl text-lg mx-auto text-center px-10 pb-20 ">
          Behind every success at the PRRC is our dedicated admin. By supporting
          efficient operations through coordination of workflows, they lay the
          foundation for transformative research advancements.
        </p>
        */}
      </div>
    </>
  );
}
