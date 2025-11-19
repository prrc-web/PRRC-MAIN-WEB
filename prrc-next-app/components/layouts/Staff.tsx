import React from 'react';
import StaffHeader from '../headers/StaffHeaders';
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

export default function Staff() {
  return (
    <>
      <div>
        <div className="max-w-screen-xl mx-auto px-4 my-10 md:my-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center text-nmtblue pt-10 md:pt-20 mb-5">
            At the Petroleum Recovery Research Center, our staff focuses on
            research and engineering.
          </h1>
          <div className="h-20 w-full bg-gradient-to-b from-white to-nmtblue"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 py-15 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-2xl mx-auto text-center lg:mb-7">
            <p className="text-4xl md:text-4xl md:leading-tight py-5 text-nmtblue">
              Meet our Staff
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
        <p className="mt-1 text-gray-500 max-w-2xl text-lg mx-auto text-center px-4 pb-20 ">
          Our dedicated staff powers every success at the PRRC. By driving
          innovative research and sustaining critical engineering operations,
          they achieve transformative advancements in petroleum recovery.
        </p>
      </div>
    </>
  );
}
