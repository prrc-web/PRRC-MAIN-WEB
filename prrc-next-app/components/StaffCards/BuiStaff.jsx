import React from 'react';

const BuiStaff = () => {
  return (
    <>
      <div className="row offset-2 my-5">
        <div className="col-5">
          <div className="card">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Dung Bui</h5>
              <div>
                <i className="fa fa-phone"> </i> P: 505-301-5676
              </div>
              <div>
                <i className="fa fa-envelope"></i> E: dung.bui@nmt.edu
              </div>
              <div>
                <i className="fa fa-building"></i> O:
              </div>
              <button class="btn btn-primary" onclick="openPDF('')">
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card border-0">
            <div className="card-body">
              <h4 className="card-title fw-bold">Dung Bui</h4>
              <div className="card-subtitle mb-2 text-muted">
                Postdoctoral Researcher
              </div>
              <div className="card-text">
                <div>
                  <h5 className="fw-bold">Research & Applications:</h5>
                  <ul>
                    <li>
                      Background in applying numerical modelling and machine
                      learning-based workflow for hydraulic fracturing and well
                      spacing optimization in Delaware Basin, New Mexico.
                    </li>
                    <li>
                      Conduct research in several industry and DOE projects in
                      carbon, utilization, and storage (CCUS).
                    </li>
                    <li>
                      Supervise M.S and Ph.D. students to conduct their research
                      in CCUS under PPRC’s projects.
                    </li>
                  </ul>
                  <h5 className="fw-bold">Current projects</h5>
                  <ol>
                    <li>
                      San Juan Basin CarbonSAFE Phase III: Ensuring Safe
                      Subsurface Storage of Carbon Dioxide in Saline Reservoirs,
                      Department of Energy.
                    </li>
                    <li>
                      Advancing Characterization of Faults through Deployment of
                      Novel Geophysical, Geochemical and Geomechanical
                      Technologies at the San Juan Basin (SJB) CarbonSAFE Site.
                    </li>
                    <li>
                      Several industrial applications for injecting and
                      permitting, including: Targa Resources (Wildcat, Redhills,
                      Copperhead, and Bull Moose wells) and Omnia Midstream.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuiStaff;
