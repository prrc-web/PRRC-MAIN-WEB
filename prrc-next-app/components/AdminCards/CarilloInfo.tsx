import React from 'react';
import AdminCard from './AdminCard';

const CarrilloAdmin = () => (
  <AdminCard
    name="Chyanne Carrillo"
    title="Administrative Coordinator"
    imageUrl="/prrcblankuser.jpeg"
    description="Chyanne Carrillo coordinates the Administrative Office at the PRRC, supporting the other Admin..."
    phone="(575) 835-5142"
    email="chyanne.carrillo@nmt.edu<"
    office="Kelly 206"
  />
);
// <>
//   <div className="box-content size-90 border-0">
//     <a href="#" className="group relative block bg-black h-full ">
//       <div className="relative h-full w-full overflow-hidden">
//         <img
//           alt="Chyanne Carrillo"
//           src="/prrcblankuser.jpeg"
//           className="absolute inset-0 h-120 w-full object-cover opacity-85 transition-opacity group-hover:opacity-45 "
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/23 to-transparent h-[50%] pointer-events-none" />

//         <div className="relative p-2 sm:p-6 lg:p-2">
//           <p className="text-sm font-medium uppercase tracking-widest text-switch2">
//             Administrative Coordinator
//           </p>

//           <p className="text-l font-bold text-white sm:text-2xl">
//             Chyanne Carrillo
//           </p>

//           <div className="mt-32 sm:mt-48 lg:mt-54">
//             <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
//               <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-switch2">
//                 See more
//                 <span
//                   aria-hidden="true"
//                   className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
//                   &rarr;
//                 </span>
//               </p>
//               <p className="text-sm text-white">
//                 Chyanne Carrillo coordinates the Administrative Office at
//                 the PRRC, supporting the other Admin...
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </a>
//   </div>

{
  /* <div className="flex justify-center my-12">
        <div className="w-5/12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full"
              src="../images/sunset pumpjack.png"
              alt="Chyanne Carrillo"
            />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2">Chyanne Carrillo</h5>
              <div className="flex items-center mb-2">
                <i className="fas fa-phone mr-2"></i>
                <span>P: (575) 835-5142</span>
              </div>
              <div className="flex items-center mb-2">
                <i className="fas fa-envelope mr-2"></i>
                <span>E: chyanne.carrillo@nmt.edu</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-building mr-2"></i>
                <span>O: Kelly 206</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 ml-8">
          <div className="bg-white rounded-lg shadow-none">
            <div className="p-6">
              <h5 className="text-2xl font-bold mb-2">Chyanne Carrillo</h5>
              <div className="text-gray-600 mb-4">
                Administrative Coordinator
              </div>
              <p className="text-gray-700">
                Chyanne Carrillo coordinates the Administrative Office at the
                PRRC, supporting the other Admin staff as well as the Research
                Groups and graduate students.
              </p>
            </div>
          </div>
        </div>
      </div> */
}

export default CarrilloAdmin;
