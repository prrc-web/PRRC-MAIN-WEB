import React from 'react';
import StaffCard from './StaffCard';

const ZhangStaff = () => (
  <StaffCard
    name="Guoyin Zhang"
    title="Alkali/Surfactant/Polymer (ASP) Flooding Group Section Head"
    imageUrl="/prrcblankuser.jpeg"
    description="Research & Applications: ASP Group focuses on chemical flooding using alkalis, surfactants, and polymers for the purpose of enhanced oil recovery (EOR) from... "
    phone="(575)-835-5721"
    email="guoyin.zhang@nmt.edu"
    office="Kelly 256"
  />
);

// const ZhangStaff = () => {
//   return (
//     <>
//       <div className="row offset-2 my-5">
//         <div className="col-5">
//           <div className="card">
//             <img className="card-img-top" src="" alt="" />
//             <div className="card-body">
//               <h5 className="card-title">Guoyin Zhang</h5>
//               <div>
//                 <i className="fa fa-phone"> </i> P: (575)-835-5721
//               </div>
//               <div>
//                 <i className="fa fa-envelope"></i> E:{' '}
//                 <a href="mailto:guoyin.zhang@nmt.edu">guoyin.zhang@nmt.edu</a>
//               </div>
//               <div>
//                 <i className="fa fa-building"></i> O: Kelly 256
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
//               <h4 className="card-title fw-bold">Guoyin Zhang</h4>
//               <div className="card-subtitle mb-2 text-muted">
//                 Alkali/Surfactant/Polymer (ASP) Flooding Group Section Head
//               </div>
//               <div className="card-text">
//                 <div>
//                   <h5 className="fw-bold">Research & Applications:</h5>
//                   <p>
//                     ASP Group focuses on chemical flooding using alkalis,
//                     surfactants, and polymers for the purpose of enhanced oil
//                     recovery (EOR) from mature or depleted oil fields. These
//                     chemicals can be used as an individual component or as any
//                     combination between them. Through injection of these
//                     chemicals into reservoirs, both microscopic and macroscopic
//                     oil sweep efficiency can be significantly improved by
//                     manipulating interactions among brine, oil, and rock
//                     including interfacial tension, fluid miscibility, rock
//                     wettability, capillary pressure, oil/water viscosity, etc.
//                   </p>
//                 </div>
//                 <div>
//                   <h5 className="fw-bold">Current projects:</h5>
//                   <h6 className="fw-bold">Capabilities of ASP Group</h6>

//                   <li>
//                     <ui>
//                       Develop and formulate high efficient surfactants for
//                       conventional ASP flooding and SP flooding that are able to
//                       achieve ultra-low oil/water interfacial tension (10 -3
//                       mN/m), high oil/water solubilization (middle phase
//                       formation), excellent surfactant aqueous stability (thus,
//                       low chemical retention in reservoir), and low residual oil
//                       saturation. Analyses by ASP Group{' '}
//                     </ui>
//                     <ol>
//                       <li>Interfacial tension measurement.</li>
//                       <li>
//                         Surfactant aqueous stability or solubility
//                         characterization.
//                       </li>
//                       <li>
//                         Fluid rheology measurement in a viscometer and in porous
//                         media.
//                       </li>
//                       <li>Surfactant/oil/brine phase behavior tests.</li>
//                       <li>
//                         Determination of chemical (surfactant, polymer, and
//                         alkali) retention in porous media.
//                       </li>
//                       <li>
//                         Evaluation of oil recovery efficiency by coreflooding.
//                       </li>
//                     </ol>
//                   </li>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default ZhangStaff;
