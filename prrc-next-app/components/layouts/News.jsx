import React from 'react';
import CarrilloAdmin from '../AdminCards/CarilloInfo';
import BalchAdmin from '../AdminCards/BalchInfo';
import BenalilAdmin from '../AdminCards/BenalilInfo';
import MclemorAdmin from '../AdminCards/MclemorInfo';
import RaneyAdmin from '../AdminCards/RaneyInfo';
import AdministrationHeader from '../headers/AdministrationHeader';
import WeiAdmin from '../AdminCards/WeiInfo';

export default function News() {
  return (
    <>
      <div className="max-w-screen mx-auto ">
        <AdministrationHeader />
        <container className="mx-30 my-20">
          <h1 className="text-6xl font-medium justify-center text-nmtblue p-20 mt-5 mb-5">
            Our administrative team ensures all managerial operations at the
            Petroleum Recovery Research Center.
          </h1>
          <div className="h-20 w-full bg-gradient-to-b from-white to-nmtblue"></div>
        </container>
        <div className="max-w-screen mx-auto py-2 bg-nmtblue  ">
          <p className="text-2xl text-center text-monochrome2 mb-5 px-48  pt-20 ">
            Behind every success at the PRRC is our dedicated admin. By
            supporting efficient operations through coordination of workflows,
            they lay the foundation for transformative research advancements.
          </p>
          <container className="grid  bg-nmtblue p-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
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
          </container>
        </div>
      </div>
    </>
  );
}
