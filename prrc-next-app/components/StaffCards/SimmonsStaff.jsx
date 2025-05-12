import React from 'react';

const SimmonsStaff = () => {
  return (
    <>
      <div className="row offset-2 my-5">
        <div className="col-5">
          <div className="card">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Jason Simmons, M.S.</h5>
              <div>
                <i className="fa fa-phone"> </i> P: (575)-495-9661
              </div>
              <div>
                <i className="fa fa-envelope"></i> E: jason.simmons@nmt.edu
              </div>
              <div>
                <i className="fa fa-building"></i> O: --
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
              <h4 className="card-title fw-bold">Jason Simmons, M.S.</h4>
              <div className="card-subtitle mb-2 text-muted">
                Research Associate II
              </div>
              <div className="card-subtitle mb-2 text-muted">REACT</div>
              <div className="card-text">
                <div>
                  <h5 className="fw-bold">Research & Applications:</h5>
                  <ul>
                    <li>
                      Experimentalist and groundwater hydrologist with interests
                      in geomechanics, fluid-rock interaction, aqueous
                      geochemistry, and environmental tracers
                    </li>
                    <li>
                      Several years research experience in GCCS exploring the
                      relationship between diagenesis and hydro-chemomechanical
                      changes during injection
                    </li>
                    <li>
                      Implementation of a monitoring strategy including seismic
                      data acquisition, groundwater sampling, and soil CO2 flux
                      measurements to identify leakage of injected fluids from
                      the subsurface
                    </li>
                    <li>
                      Data collection, organization, and analysis using GIS
                      software to support local and regional hydrology and
                      geochemistry in numerous settings including UIC Class VI
                      applications
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="fw-bold">Current projects:</h5>
                  <ol>
                    <li>
                      FORGE - A Novel Linear Sensing Array and Machine Learning
                      Approach for Determining Geothermal Heat Sweep Efficiency,
                      Department of Energy;{' '}
                      <a href="https://utahforge.com/">
                        https://utahforge.com/
                      </a>
                    </li>
                    <li>
                      Resource assessments of basalt and mining wastes that
                      could be used to store large amounts of CO2 via
                      mineralization, Department of Energy
                    </li>
                    <li>
                      Carbon Utilization and Storage Partnership of the Western
                      United States (CUSP), Department of Energy – Focused
                      Project and Escalante Plant Project{' '}
                      <a href="https://www.cuspwest.org/">
                        https://www.cuspwest.org/
                      </a>
                    </li>
                    <li>
                      San Juan Basin CarbonSAFE Phase III: Ensuring Safe
                      Subsurface Storage of CO2 in Saline Reservoirs, Department
                      of Energy;{' '}
                      <a href="https://www.sanjuancarbonsafe.org/">
                        https://www.sanjuancarbonsafe.org/
                      </a>
                    </li>
                    <li>
                      Tracking of Produced Water Recycling Volumes, New Mexico
                      Energy, Minerals, and Natural Resources Oil Conservation
                      Division
                    </li>
                    <li>Industrial Projects, Targa Northern Delaware LLC</li>
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

export default SimmonsStaff;
