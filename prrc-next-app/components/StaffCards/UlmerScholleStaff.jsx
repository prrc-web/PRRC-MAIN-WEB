import React from 'react';
import StaffCard from './StaffCard';

const UlmerScholleStaff = () => (
  <StaffCard
    name="Dana S. Ulmer-Scholle, Ph.D."
    title="Research Scientist V"
    imageUrl="/prrcblankuser.jpeg"
    description="Research & Applications: Carbon capture, utilization, and storage (CCUS) projects and U.S. EPA Class II and VI permitting... "
    phone="(505)-440-3639"
    email="dana.ulmer-scholle@nmt.edu"
    office="Kelly 116"
  />
);

// const UlmerScholleStaff = () => {
//   return (
//     <>
//       <div className="row offset-2 my-5">
//         <div className="col-5">
//           <div className="card">
//             <img className="card-img-top" src="" alt="" />
//             <div className="card-body">
//               <h5 className="card-title">Dana S. Ulmer-Scholle, Ph.D.</h5>
//               <div>
//                 <i className="fa fa-phone"> </i> P: (505)-440-3639
//               </div>
//               <div>
//                 <i className="fa fa-envelope"></i> E: dana.ulmer-scholle@nmt.edu
//               </div>
//               <div>
//                 <i className="fa fa-building"></i> O: Kelly 116
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
//               <h4 className="card-title fw-bold">
//                 Dana S. Ulmer-Scholle, Ph.D.
//               </h4>
//               <div className="card-subtitle mb-2 text-muted">
//                 Research Scientist V
//               </div>
//               <div className="card-subtitle mb-2 text-muted">PRRC - REACT</div>
//               <div className="card-text">
//                 <div>
//                   <h5 className="fw-bold">Research & Applications:</h5>
//                   <ul>
//                     <li>
//                       Carbon capture, utilization, and storage (CCUS) projects
//                       and U.S. EPA Class II and VI permitting
//                     </li>
//                     <li>
//                       Building geologic basin models utilizing well log and
//                       seismic data
//                     </li>
//                     <li>
//                       Geologic characterization of CO2 reservoirs and seals
//                       using core descriptions, petrographic analysis, XRD and
//                       SEM analysis, and other analytical techniques
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h5 className="fw-bold">Current projects:</h5>
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
//                       Subsurface Seismic Structural Characterization of the
//                       Hogback Monocline and Thermal Characterization of the San
//                       Juan Basin, New Mexico
//                     </li>
//                     <li>
//                       Regional Resource Assessment for CO2 Storage in New Mexico
//                       and Surrounding Areas: Identification, Characterization
//                       and Evaluation of in-situ Mineralization Site/Complex
//                     </li>
//                     <li>
//                       Permian Regional Carbon Sequestration Hub (8) CUSP: Four
//                       Corners Regional Initiative
//                     </li>
//                   </ol>
//                 </div>
//                 <div>
//                   <h5 className="fw-bold">Industrial projects:</h5>
//                   <ol>
//                     <li>
//                       Targa Delaware, LLC: Delaware Basin project in support of
//                       developing Class II permits in New Mexico and Texas (Red
//                       Hills, Copperhead, Bull Moose, and Wildcat areas)
//                     </li>
//                     <li>
//                       Omni Midstream Partners, LLC: Texas Delaware Basin project
//                       in the Mi Vida and Evetts areas
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

export default UlmerScholleStaff;
