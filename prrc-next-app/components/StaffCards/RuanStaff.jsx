import React from 'react';
import StaffCard from './StaffCard';

const RuanStaff = () => (
  <StaffCard
    name="Tongjun (Roger) Ruan Ph.D"
    title=" Research Engineer IV"
    imageUrl="/prrcblankuser.jpeg"
    description="Research & Applications: Computer Simulation, Embedded System and Inertial Measurement, Database System and its Applications, Expert System... "
    phone="(575)-835-5220"
    email="tongjun.ruan@nmt.edu"
    office="Kelly 218"
  />
);

// const RuanStaff = () => {
//   return (
//     <>
//       <div className="row offset-2 my-5">
//         <div className="col-5">
//           <div className="card">
//             <img className="card-img-top" src="" alt="" />
//             <div className="card-body">
//               <h5 className="card-title">Tongjun (Roger) Ruan Ph.D</h5>
//               <div>
//                 <i className="fa fa-phone"> </i> P: (575)-835-5220
//               </div>
//               <div>
//                 <i className="fa fa-envelope"></i> E: tongjun.ruan@nmt.edu
//               </div>
//               <div>
//                 <i className="fa fa-building"></i> O: Kelly 218
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
//               <h4 className="card-title fw-bold">Tongjun Ruan Ph.D</h4>
//               <div className="card-subtitle mb-2 text-muted">
//                 Research Engineer IV
//               </div>
//               <div className="card-text">
//                 <div>
//                   <h5 className="fw-bold">Research & Applications:</h5>
//                   <ul>
//                     <li>Computer Simulation</li>
//                     <li>Embedded System and Inertial Measurement</li>
//                     <li>Database System and its Applications</li>
//                     <li>Expert System</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h5 className="fw-bold">Current projects:</h5>
//                   <ol>
//                     <li>
//                       San Juan Basin CarbonSAFE Phase III: Ensuring Safe
//                       Subsurface Storage of CO2 in Saline Reservoirs, Department
//                       of Energy; https://www.sanjuancarbonsafe.org/
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

export default RuanStaff;
