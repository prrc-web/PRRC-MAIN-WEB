import React from 'react';
import StaffHeader from '../headers/StaffHeader';
import AmosuStaff from '../StaffCards/AmosuStaff';
import AmpohmahStaff from '../StaffCards/AmpomahStaff';
import BuiStaff from '../StaffCards/BuiStaff';
import CatherStaff from '../StaffCards/CatherStaff';
import CzarnotaStaff from '../StaffCards/CzarnotaStaff';
import ElKaseehStaff from '../StaffCards/ElKaseehStaff';
import FanStaff from '../StaffCards/FanStaff';
import FonquergneStaff from '../StaffCards/FonquergneStaff';
import RuanStaff from '../StaffCards/RuanStaff';
import SerightStaff from '../StaffCards/SerightStaff';
import SimmonsStaff from '../StaffCards/SimmonsStaff';
import UlmerScholleStaff from '../StaffCards/UlmerScholleStaff';
import WangStaff from '../StaffCards/WangStaff';
import YuStaff from '../StaffCards/YuStaff';
import ZhangStaff from '../StaffCards/ZhangStaff';
// Administration cards moved here from components/layouts/Administration.tsx so
// staff and administration can live on one page. Card order is that page's order.
import BalchAdmin from '../AdminCards/BalchInfo';
import RaneyAdmin from '../AdminCards/RaneyInfo';
import WeiAdmin from '../AdminCards/WeiInfo';
import CarrilloAdmin from '../AdminCards/CarilloInfo';
import BenalilAdmin from '../AdminCards/BenalilInfo';
import MclemorAdmin from '../AdminCards/MclemorInfo';

export default function Staff() {
  return (
    <>
      <div>
        <StaffHeader />

        {/* Category 1 — Administration. Heading uses the primary header weight
            (.type-header, Montserrat 800) and is centred, using the same size and
            tracking as the category heading on the research index. */}
        <section
          aria-labelledby="administration-heading"
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:mb-7">
            <h2
              id="administration-heading"
              className="type-header text-2xl tracking-widest text-whiteSands sm:text-4xl">
              Administration
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-10">
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

          <p className="mt-1 text-cloudCircuit max-w-2xl text-lg mx-auto text-center px-4 pb-10 sm:pb-16">
            Behind every success at the PRRC is our dedicated admin. By
            supporting efficient operations through coordination of workflows,
            they lay the foundation for transformative research advancements.
          </p>
        </section>

        {/* Category 2 — Staff. Unchanged: same heading, same card order. */}
        <div className="max-w-screen-xl mx-auto px-4 py-15 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-2xl mx-auto text-center lg:mb-7">
            <p className="type-header text-2xl tracking-widest text-whiteSands sm:text-4xl">
              Staff
            </p>
          </div>

          {/* Responsive grid with consistent spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-10">
            <div className="h-full">
              <AmosuStaff />
            </div>
            <div className="h-full">
              <AmpohmahStaff />
            </div>
            <div className="h-full">
              <BuiStaff />
            </div>
            <div className="h-full">
              <CatherStaff />
            </div>
            <div className="h-full">
              <CzarnotaStaff />
            </div>
            <div className="h-full">
              <ElKaseehStaff />
            </div>
            <div className="h-full">
              <FanStaff />
            </div>
            <div className="h-full">
              <FonquergneStaff />
            </div>
            <div className="h-full">
              <RuanStaff />
            </div>
            <div className="h-full">
              <SerightStaff />
            </div>
            <div className="h-full">
              <SimmonsStaff />
            </div>
            <div className="h-full">
              <UlmerScholleStaff />
            </div>
            <div className="h-full">
              <WangStaff />
            </div>
            <div className="h-full">
              <YuStaff />
            </div>
            <div className="h-full">
              <ZhangStaff />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
