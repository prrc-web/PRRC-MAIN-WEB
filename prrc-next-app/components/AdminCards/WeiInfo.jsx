import React from 'react';
<<<<<<< HEAD
import Image from 'next/image';

const WeiAdmin = () => {
  return (
    <>
      <div className="box-content size-90 border-0">
        <a href="#" className="group relative block bg-black h-full ">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              alt="Rouke Wei"
              src="/wei.jpg"
              width={500}
              height={500}
              className="absolute inset-0 h-120 w-full object-cover opacity-85 transition-opacity group-hover:opacity-45 "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/23 to-transparent h-[50%] pointer-events-none" />
=======
import AdminCard from './AdminCard';

const WeiAdmin = () => (
  <AdminCard
    name="Rouke Wei"
    title="Associate Director of Operation and Finance"
    imageUrl="/wei.jpg"
    description="Rouke Wei oversees administrative and business duties at the PRRC. Rouke offers pre-award and..."
    phone="(575)-835-5398"
    email="rouke.wei@nmt.edu"
    office="Kelly 202"
  />
);
>>>>>>> 03c0f1afbb667d0b9f2a3f2b07e9eae00ed3e6dc

// const WeiAdmin = () => {
//   return (
//     <>
//       <div className="box-content size-90 border-0">
//         <a href="#" className="group relative block bg-black h-full ">
//           <div className="relative h-full w-full overflow-hidden">
//             <img
//               alt="Rouke Wei"
//               src="/wei.jpg"
//               className="absolute inset-0 h-120 w-full object-cover opacity-85 transition-opacity group-hover:opacity-45 "
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/23 to-transparent h-[50%] pointer-events-none" />

//             <div className="relative p-2 sm:p-6 lg:p-2">
//               <p className="text-sm font-medium uppercase tracking-widest text-switch2">
//                 Associate Director of Operation and Finance
//               </p>

//               <p className="text-l font-bold text-white sm:text-2xl">
//                 Rouke Wei
//               </p>

//               <div className="mt-32 sm:mt-48 lg:mt-49">
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
//                     Rouke Wei oversees administrative and business duties at the
//                     PRRC. Rouke offers pre-award and...
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
            <img className="w-full" src="../images/Rouke.jpg" alt="Rouke Wei" />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2">Rouke Wei</h5>
              <div className="flex items-center mb-2">
                <i className="fas fa-phone mr-2"></i>
                <span>P: (575)-835-5398</span>
              </div>
              <div className="flex items-center mb-2">
                <i className="fas fa-envelope mr-2"></i>
                <span>E: rouke.wei@nmt.edu</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-building mr-2"></i>
                <span>O: Kelly 202</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 ml-8">
          <div className="bg-white rounded-lg shadow-none">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Rouke Wei</h4>
              <div className="text-gray-600 mb-2">
                Associate Director of Operation and Finance
              </div>
              <div className="text-gray-600 font-bold mb-4">
                PRRC - Administration
              </div>
              <div className="text-gray-700">
                Rouke Wei oversees administrative and business duties at the
                PRRC. Rouke offers pre-award and post-award fiscal
                administrative support to PRRC researchers and their sponsoring
                agencies. She also provides PRRC administrative, financial
                support, and guidance for the federal, state, and industrial
                contracts.
              </div>
            </div>
          </div>
        </div>
      </div> */
export default WeiAdmin;
