import React from 'react';
import StaffCard from './StaffCard';

const RobertCzarnotaStaff = () => (
  <StaffCard
    name="Robert Czarnota, PhD"
    title="Research Associate III"
    imageUrl="/prrcblankuser.jpeg"
    description="Resesarch and Applications: Performing experimental research related to Carbon Capture, Utilization, and Storage (CCUS) sponsored by DOE..."
    phone="(575)-835-5805"
    email="robert.czarnota@nmt.edu"
    office="Kelly 126"
  />
);

// const RobertCzarnotaStaff = () => {
//   return (
//     <>
//       <div class="row offset-2 my-5">
//         <div className="col-5">
//           <div class="card">
//             <img class="card-img-top" src="" alt="" />
//             <div class="card-body">
//               <h5 class="card-title">Robert Czarnota, PhD</h5>
//               <div>
//                 <i class="fa fa-phone"> </i> P: (575)-835-5805
//               </div>
//               <div>
//                 <i class="fa fa-envelope"></i> E: robert.czarnota@nmt.edu
//               </div>
//               <div>
//                 <i class="fa fa-building"></i> O: Kelly 126
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-5">
//           <div className="card border-0">
//             <div className="card-body">
//               <h4 className="card-title fw-bold">Robert Czarnota, PhD </h4>
//               <div className="card-subtitle mb-2 text-muted">
//                 Research Associate III, Research Group within PRRC: Gas Flooding
//                 Process & Flow Heterogeneities
//               </div>
//               <div className="card-text">
//                 <div>
//                   <h5 className="fw-bold">Research & Applications:</h5>
//                   <ul>
//                     <li>
//                       Performing experimental research related to Carbon
//                       Capture, Utilization, and Storage (CCUS) sponsored by DOE
//                     </li>
//                     <li>
//                       Collaboration with oil and gas companies providing
//                       midstream services in New Mexico and Texas to submit
//                       application for authorization to inject CO2 (UIC, NEPA,
//                       MRV)
//                     </li>
//                     <li>
//                       Technical support for permanent well plugging and
//                       abandonment activities on Marginal Conventional Wells in
//                       New Mexico
//                     </li>
//                   </ul>
//                   <h5 className="fw-bold">Current projects</h5>
//                   <ol>
//                     <li>
//                       Carbon Utilization and Storage Partnership of the Western
//                       United States (CUSP), Department of Energy;{' '}
//                       <a href="https://www.cuspwest.org/">
//                         https://www.cuspwest.org/
//                       </a>
//                     </li>
//                     <li>
//                       San Juan Basin CarbonSAFE Phase III: Ensuring Safe
//                       Subsurface Storage of CO2 in Saline Reservoirs, Department
//                       of Energy;{' '}
//                       <a href="https://www.sanjuancarbonsafe.org/">
//                         https://www.sanjuancarbonsafe.org/
//                       </a>
//                     </li>
//                     <li>
//                       Mitigating Emissions from Marginal Conventional Wells in
//                       New Mexico
//                     </li>
//                     <li>Multiple industry sponsored projects</li>
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

export default RobertCzarnotaStaff;
