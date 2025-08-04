import React from 'react';
import StaffCard from './StaffCard';

const FanStaff = () => (
  <StaffCard
    name="Tianguang Fan, M.S."
    title="Research Associate III, Research Group within PRRC: Gas Flooding Process & Flow Heterogeneities"
    imageUrl="/prrcblankuser.jpeg"
    description="Research & Applications: Asphaltene onset study and deposition in capillary tubing. Asphaltene instability evaluation and phase behavior at reservoir "
    phone="(575) 835-5542"
    email="Tianguang.Fan@nmt.edu"
    office="--"
  />
);

// const FanStaff = () => {
//   return (
//     <>
//       <div className="row offset-2 my-5">
//         <div className="col-5">
//           <div className="card">
//             <img className="card-img-top" src="" alt="" />
//             <div className="card-body">
//               <h5 className="card-title">Tianguang Fan, M.S.</h5>
//               <div>
//                 <i className="fa fa-phone"> </i> P: (575) 835-5542
//               </div>
//               <div>
//                 <i className="fa fa-envelope"></i> E: Tianguang.Fan@nmt.edu
//               </div>
//               <div>
//                 <i className="fa fa-building"></i> O: --
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
//               <h4 className="card-title fw-bold">Tianguang Fan, M.S.</h4>
//               <div className="card-subtitle mb-2 text-muted">
//                 Research Scientist/Section Head
//               </div>
//               <div className="card-subtitle mb-2 text-muted">
//                 PRRC - Petrophysics Group
//               </div>
//               <div className="card-text">
//                 <div>
//                   <h5 className="fw-bold">Research & Applications:</h5>
//                   <ul>
//                     <li>
//                       Asphaltene onset study and deposition in capillary tubing.
//                       Asphaltene instability evaluation and phase behavior at
//                       reservoir conditions and its impact on flow assurance
//                     </li>
//                     <li>
//                       Crude oil fraction and chemical analysis including SARA,
//                       hydrocarbon composition, acid and base number, molecular
//                       weight, viscosity, density, refractive index, etc.
//                     </li>
//                     <li>
//                       Water/oil interfacial phenomena and surface chemistry
//                       study including interfacial tension, surface energy,
//                       contact angle, and Zeta potential, etc. Crude
//                       oil/brine/rock wettability study on flat substrates and in
//                       reservoir condition and their impact on EOR
//                     </li>
//                     <li>
//                       Polymer core flooding and polymer rheology in porous
//                       media.
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h5 className="fw-bold">Current Projects:</h5>
//                   <ol>
//                     <li>
//                       Chevron Energy Technology project IV, “Study of Asphaltene
//                       Deposition Mechanism from Core Flooding Experiments”
//                     </li>
//                     <li>
//                       San Juan Basin CarbonSAFE Phase III: Ensuring Safe
//                       Subsurface Storage of CO2 in Saline Reservoirs, Department
//                       of Energy;{' '}
//                       <a href="https://www.sanjuancarbonsafe.org">
//                         https://www.sanjuancarbonsafe.org
//                       </a>
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

export default FanStaff;
