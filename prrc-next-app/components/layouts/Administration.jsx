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
      <div>
        <container className="mx-30 my-20 max-w-screen-xl">
          <h1 className="text-6xl font-medium justify-center text-nmtblue p-25 mt-45 mb-5">
            Our administrative team ensures all managerial operations at the
            Petroleum Recovery Research Center.
          </h1>
          <div className="h-20 w-full bg-gradient-to-b from-white to-nmtblue"></div>
        </container>

        <div className="max-w-screen px-4 py-15 sm:px-6 lg:px-8 lg:py-14  ">
          <div className="max-w-2xl mx-auto text-center  lg:mb-7">
            <p className="text-4xl md:text-4xl md:leading-tight py-5 text-nmtblue">
              Meet our Administration
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b-2 border-gray-50 py-10 px-40 ">
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
      </div>
    </>
  );
}
