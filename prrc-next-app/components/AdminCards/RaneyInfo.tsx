import React from 'react';
import AdminCard from './AdminCard';

const RaneyAdmin = () => (
  <AdminCard
    name="Jennifer Raney"
    title="Deputy Director"
    imageUrl="/raney.jpg"
    description=" Background in carbon capture, utilization, and storage (CCUS) projects and U.S. EPA Class VI..."
    phone="(505) 810-3658"
    email="jennifer.raney@nmt.edu"
    office="Kelly"
  />
);

// const RaneyAdmin = () => {
//   return (
//     <>
//       <div className="box-content size-90 border-0">
//         <a href="#" className="group relative block bg-black h-full ">
//           <div className="relative h-full w-full overflow-hidden">
//             <img
//               alt="Jennifer Raney"
//               src="/raney.jpg"
//               className="absolute inset-0 h-120 w-full object-cover opacity-85 transition-opacity group-hover:opacity-45 "
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/23 to-transparent h-[50%] pointer-events-none" />

//             <div className="relative p-2 sm:p-6 lg:p-2">
//               <p className="text-sm font-medium uppercase tracking-widest text-switch2">
//                 Deputy Director
//               </p>

//               <p className="text-l font-bold text-white sm:text-2xl">
//                 Jennifer Raney
//               </p>

//               <div className="mt-32 sm:mt-48 lg:mt-54">
//                 <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
//                   <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-switch2">
//                     See more
//                     <span
//                       aria-hidden="true"
//                       className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
//                       &rarr;
//                     </span>
//                   </p>
//                   <p className="text-sm text-white">
//                     Background in carbon capture, utilization, and storage
//                     (CCUS) projects and U.S. EPA Class VI...
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </a>
//       </div>

/* <div className="flex justify-center my-12">
        <div className="w-5/12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full"
              src="../images/Raney headshot.jpg"
              alt="Jennifer Raney"
            />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2">Jennifer Raney, M.S.</h5>
              <div className="flex items-center mb-2">
                <i className="fas fa-phone mr-2"></i>
                <span>P: (505) 810-3658</span>
              </div>
              <div className="flex items-center mb-2">
                <i className="fas fa-envelope mr-2"></i>
                <span>E: jennifer.raney@nmt.edu</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-building mr-2"></i>
                <span>O: Kelly</span>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => openPDF('')}>
                Resume
              </button>{' '}
              
            </div>
          </div>
        </div>
        <div className="w-5/12 ml-8">
          <div className="bg-white rounded-lg shadow-none">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Jennifer Raney, M.S.</h4>
              <div className="text-gray-600 mb-4">Deputy Director</div>
              <div className="text-gray-700">
                <h5 className="font-bold mb-2">Research Applications:</h5>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Background in carbon capture, utilization, and storage
                    (CCUS) projects and U.S. EPA Class VI permitting, CO2
                    enhanced oil recovery and produced water research.
                  </li>
                  <li>
                    Legislative and public outreach for local, state, and
                    federal agencies for energy research on Department of Energy
                    grants.
                  </li>
                  <li>
                    Tribal and community engagement with energy research
                    applications in the western United States.
                  </li>
                </ul>
                <h5 className="font-bold mb-2">Current projects:</h5>
                <ul className="list-disc list-inside">
                  <li>
                    Carbon Utilization and Storage Partnership of the Western
                    United States (CUSP), Department of Energy;{' '}
                    <a
                      href="https://www.cuspwest.org/"
                      className="text-blue-500 hover:underline">
                      https://www.cuspwest.org/
                    </a>
                  </li>
                  <li>
                    San Juan Basin CarbonSAFE Phase III: Ensuring Safe
                    Subsurface Storage of CO2 in Saline Reservoirs, Department
                    of Energy;{' '}
                    <a
                      href="https://www.sanjuancarbonsafe.org/"
                      className="text-blue-500 hover:underline">
                      https://www.sanjuancarbonsafe.org/
                    </a>
                  </li>
                  <li>
                    Permian Energy Development Lab, National Science Foundation;{' '}
                    <a
                      href="https://pedl.tech/"
                      className="text-blue-500 hover:underline">
                      https://pedl.tech/
                    </a>
                  </li>
                  <li>
                    Navajo Nation Water Purification Program (N4WPP), Department
                    of Energy{' '}
                    <a
                      href="https://www.nmt.edu/restore/"
                      className="text-blue-500 hover:underline">
                      https://www.nmt.edu/restore/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */

export default RaneyAdmin;
