import React from 'react';
import StaffCard from './StaffCard';

const AmosuStaff = () => (
  <StaffCard
    name="Adewale Amosu PhD"
    title="Postdoctoral Research Engineer"
    imageUrl="/prrcblankuser.jpeg"
    description="Multi-disciplinary research focuses on solving problems encountered in the study of the..."
    phone="--"
    email="adewale.amosu@nmt.edu"
    office="--"
  />
);

export default AmosuStaff;

// const AmosuStaff = () => {
//   return (
//     <>
//       <div className="box-content size-90 border-0">
//         <a href="#" className="group relative block bg-black h-full ">
//           <div className="relative h-full w-full overflow-hidden">
//             <img
//               alt="Adewale Amosu PhD"
//               src="/balch.jpg"
//               className="absolute inset-0 h-120 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 "
//             />

//             <div className="relative p-2 sm:p-6 lg:p-2">
//               <p className="text-sm font-medium uppercase tracking-widest text-switch2">
//                 Postdoctoral Research Engineer REACT Group
//               </p>

//               <p className="text-l font-bold text-white sm:text-2xl">
//                 Adewale Amosu PhD
//               </p>

//               <div className="mt-32 sm:mt-48 lg:mt-48">
//                 <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
//                   <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-switch2">
//                     See more
//                     <span
//                       aria-hidden="true"
//                       className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
//                       &rarr;
//                     </span>
//                   </p>
//                   <p className="text-sm text-white pt-1">
//                     Multi-disciplinary research focuses on solving problems
//                     encountered in the study of the...
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </a>
//       </div>

/* <div class="row offset-2 my-5">
        <div className="col-5">
          <div class="card">
            <img class="card-img-top" src="" alt="" />
            <div class="card-body">
              <h5 class="card-title">Adewale Amosu PhD</h5>
              <div>
                <i class="fa fa-phone"> </i> P: --
              </div>
              <div>
                <i class="fa fa-envelope"></i> E: adewale.amosu@nmt.edu
              </div>
              <div>
                <i class="fa fa-building"></i> O: --
              </div>

              <button class="btn btn-primary" onclick="openPDF ()">
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card border-0">
            <div className="card-body">
              <h4 className="card-title fw-bold">Adewale Amosu PhD</h4>
              <div className="card-subtitle mb-2 text-muted">
                Postdoctoral Research Engineer REACT Group{' '}
              </div>
              <div className="card-text">
                <div>
                  <h5 className="fw-bold">Research & Applications:</h5>
                  <ul>
                    <li>
                      Multi-disciplinary research focuses on solving problems
                      encountered in the study of the Earth’s subsurface, using
                      various geophysical, geological, data science, and
                      artificial intelligence tools.
                    </li>
                    <li>
                      Integrating seismic data analysis, petrophysics, petroleum
                      geology, machine learning, and their extensive
                      applications in carbon sequestration operations.
                    </li>
                    <li>
                      Working on several U.S. Department of Energy-funded
                      projects on carbon sequestration.
                    </li>
                    <li>
                      Member of the Society of Petroleum Engineers, Society of
                      Exploration Geophysicists, American Association Petroleum
                      Geologists, and the International Association for
                      Mathematical Geosciences.
                    </li>
                  </ul>

                  <h5 className="fw-bold">Current projects:</h5>
                  <ol>
                    <li>San Juan Basin CarbonSAFE Phase III</li>
                    <li>Advanced Fault Characterization Project</li>
                    <li>
                      Subsurface Seismic Structural Characterization of the
                      Hogback Monocline and Thermal Characterization of the San
                      Juan Basin, New Mexico
                    </li>
                    <li>CUSP: Four Corners Regional Initiative</li>
                    <li>
                      Four Corners Carbon Storage Hub: CarbonSAFE Phase III
                      Project
                    </li>
                    <li>
                      Permian Regional Carbon Sequestration Hub (PRCS Hub)
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
