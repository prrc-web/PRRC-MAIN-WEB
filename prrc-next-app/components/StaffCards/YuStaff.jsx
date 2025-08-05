import React from 'react';
import StaffCard from './StaffCard';

const YuStaff = () => (
  <StaffCard
    name="Jianjia Yu"
    title="Assistant Professor of Chemical Engineering"
    imageUrl="/prrcblankuser.jpeg"
    description="Research & Applications: Produced waters sampling, characterization, and treatment. Especially, both bench and pilot-scales membrane-based filtration process for... "
    phone="(575)-835-5570"
    email="jianjia.yu@nmt.edu"
    office="Kelly 258"
  />
);

// const YuStaff = () => {
//   return (
//     <>
//       <div className="row offset-2 my-5">
//         <div className="col-5">
//           <div className="card">
//             <img className="card-img-top" src="" alt="" />
//             <div className="card-body">
//               <h5 className="card-title">Jianjia Yu</h5>
//               <div>
//                 <i className="fa fa-phone"> </i> P: (575)-835-5570
//               </div>
//               <div>
//                 <i className="fa fa-envelope"></i> E: jianjia.yu@nmt.edu
//               </div>
//               <div>
//                 <i className="fa fa-building"></i> O: Kelly 258
//               </div>
//               <button class="btn btn-primary" onclick="openPDF('')">
//                 Resume
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-5">
//           <div className="card border-0">
//             <div className="card-body">
//               <h4 className="card-title fw-bold">Jianjia Yu</h4>
//               <div className="card-subtitle mb-2 text-muted">
//                 Assistant Professor of Chemical Engineering
//               </div>
//               <div className="card-text">
//                 <div>
//                   <h5 className="fw-bold">Research & Applications:</h5>
//                   <ul>
//                     <li>
//                       Produced waters sampling, characterization, and treatment.
//                       Especially, both bench and pilot-scales membrane-based
//                       filtration process for desalination and resources
//                       recovery.
//                     </li>
//                     <li>
//                       Carbon capture from flue gas, direct air capture, hydrogen
//                       purification based on membrane-based separation processes.
//                     </li>
//                     <li>
//                       CO2 foam EOR, nanoparticles-assisted CO2 foam EOR, and
//                       nanoparticles synthesis and characterization.
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h5 className="fw-bold">Current projects:</h5>
//                   <ol>
//                     <li>
//                       Advanced hybrid membrane process for simultaneous recovery
//                       of clean water and lithium from high-salinity brines.
//                     </li>
//                     <li>
//                       Water equity and workforce development on the Navajo
//                       Nation.
//                     </li>
//                     <li>
//                       Permanently Hydrophilic Membrane for Organic Matters
//                       Removal from Oilfield Produced Water.
//                     </li>
//                     <li>
//                       Pilot-scale validation of a novel Janus hollow fiber
//                       membrane based DCMD process for high salinity produced
//                       water desalination by using waste heat.
//                     </li>
//                     <li>
//                       Hydrophilic-omniphobic HF membrane-based DCMD and
//                       crystallization for zero liquid discharge of oilfield
//                       produced water.
//                     </li>
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default YuStaff;
