import React from 'react';
import StaffCard from './StaffCard';

const ElKaseehStaff = () => (
  <StaffCard
    name="George El-kaseeh"
    title="Research Associate III"
    imageUrl="/prrcblankuser.jpeg"
    description="Resesarch and Applications: Developed and field implemented time-lapse monitoring programs for Carbon Capture and Storage (CCS) and Carbon Capture, Utilization and..."
    phone="(281)-704-1086"
    email="george.el-kaseeh@nmt.edu"
    office="--"
  />
);

// const ElKaseehStaff = () => {
//   return (
//     <>
//       <div className="row offset-2 my-5">
//         <div className="col-5">
//           <div className="card">
//             <img className="card-img-top" src="" alt="" />
//             <div className="card-body">
//               <h5 className="card-title">George El-kaseeh</h5>
//               <div>
//                 <i className="fa fa-phone"> </i> P: (281)-704-1086
//               </div>
//               <div>
//                 <i className="fa fa-envelope"></i> E: george.el-kaseeh@nmt.edu
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
//               <h4 className="card-title fw-bold">George El-kaseeh</h4>
//               <div className="card-subtitle mb-2 text-muted">
//                 Research Engineer
//               </div>
//               <div className="card-subtitle mb-2 text-muted">
//                 Industry Service Outreach Section Head
//               </div>
//               <div className="card-text">
//                 <div>
//                   <h5 className="fw-bold">Research & Applications:</h5>
//                   <ul>
//                     <li>
//                       Developed and field implemented time-lapse monitoring
//                       programs for Carbon Capture and Storage (CCS) and Carbon
//                       Capture, Utilization and Storage (CCUS/EOR) projects
//                     </li>
//                     <li>
//                       Subsurface CO2 monitoring plan development and field
//                       implementation
//                     </li>
//                     <li>Industry services and outreach</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default ElKaseehStaff;
