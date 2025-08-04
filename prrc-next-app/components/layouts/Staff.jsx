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
        <container className="mx-30 my-20 max-w-screen-xl">
          <h1 className="text-6xl font-medium justify-center text-nmtblue p-25 mt-45 mb-5">
            At the Petroleum Recovery Research Center, our staff focuses on
            research and engineering.
          </h1>
          <div className="h-20 w-full bg-gradient-to-b from-white to-nmtblue"></div>
        </container>

        <div className="max-w-screen px-4 py-15 sm:px-6 lg:px-8 lg:py-14  ">
          <div className="max-w-2xl mx-auto text-center  lg:mb-7">
            <p className="text-4xl md:text-4xl md:leading-tight py-5 text-nmtblue">
              Meet our Staff
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b-2 border-gray-50 py-10 px-40 ">
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
        <p className="mt-1 text-gray-500 max-w-2xl text-lg mx-auto text-center px-10 pb-20 ">
          Our dedicated staff powers every success at the PRRC. By driving
          innovative research and sustaining critical engineering operations,
          they achieve transformative advancements in petroleum recovery.
        </p>
      </div>
    </>
  );
}

// export default function Staff() {
//   return (
//     <>
//       <div className="p-2 bg-white">
//         <StaffHeader />
//         <div className="p-2 bg-gray-800">
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
//             <div className="h-full">
//               <AmosuStaff />
//             </div>
//             <div className="h-full">
//               <AmpohmahStaff />
//             </div>
//             <div className="h-full">
//               <BuiStaff />
//             </div>
//             <div className="h-full">
//               <CatherStaff />
//             </div>
//             <div className="h-full">
//               <CzarnotaStaff />
//             </div>
//             <div className="h-full">
//               <ElKaseehStaff />
//             </div>
//             <div className="h-full">
//               <FanStaff />
//             </div>
//             <div className="h-full">
//               <FonquergneStaff />
//             </div>
//             <div className="h-full">
//               <RuanStaff />
//             </div>
//             <div className="h-full">
//               <SerightStaff />
//             </div>
//             <div className="h-full">
//               <SimmonsStaff />
//             </div>
//             <div className="h-full">
//               <UlmerScholleStaff />
//             </div>
//             <div className="h-full">
//               <WangStaff />
//             </div>
//             <div className="h-full">
//               <YuStaff />
//             </div>
//             <div className="h-full">
//               <ZhangStaff />
//             </div>
//           </div>
//         </div>
//         /*{' '}
//         <div className="flex flex-1 items-center justify-center">
//           <div className="mx-auto max-w-2xl px-4 py-8 text-center">
/* <h1 className="text-5xl font-semibold tracking-loose text-gray-900">
              This page is under maitenance.
            </h1>

            <p className="mt-7 text-2xl text-gray-800">
              We appreciate your patience as we work to restore the content.
            </p>
            <div className="mt-10 border-t border-gray-400">
              <p className="mt-10 text-gray-500">
                Explore the diverse expertise and accomplishments of our
                talented staff members, each contributing to the success of our
                projects and the growth of their departments. Through a
                combination of skill, creativity, and collaboration, the PRRC
                has embarked on exciting ventures and delivered impactful
                results. Browse the to discover research projects and learn more
                about the individuals shaping the future within the Petrolum
                Research Recovery Center & New Mexico Tech.
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
              </a> */
//           </div>
//         </div>{' '}
//         */
//       </div>
//     </>
//   );
// }
