import React from 'react';

const WangStaff = () => {
  return (
    <>
      <div className="row offset-2 my-5">
        <div className="col-5">
          <div className="card">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Sai Wang</h5>
              <div>
                <i className="fa fa-phone"> </i> P: (575)-835-5838
              </div>
              <div>
                <i className="fa fa-envelope"></i> E: sai.wang@nmt.edu
              </div>
              <div>
                <i className="fa fa-building"></i> O: Kelly 120
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
              <h4 className="card-title fw-bold">Sai Wang</h4>
              <div className="card-subtitle mb-2 text-muted">
                Research Engineer II
              </div>
              <div className="card-text">
                <div>
                  <h5 className="fw-bold">Research & Applications:</h5>
                  <ul>
                    <li>
                      Carbon geological storage, carbon mineralization, and CO2
                      enhanced oil recovery
                    </li>
                    <li>
                      Experience on U.S. EPA Class II and Class VI permitting,
                      MRV application and other regulation/permit support
                    </li>
                    <li>Well completion and field operation</li>
                    <li>
                      Lab experience on petrophysics, surface chemistry and
                      geochemistry
                    </li>
                    <li>Hydrogen production and storage</li>
                  </ul>
                </div>
                <div>
                  <h5 className="fw-bold">Current projects:</h5>
                  <ol>
                    <li>
                      Carbon Utilization and Storage Partnership of the Western
                      United States (CUSP), Department of Energy;
                      https://www.cuspwest.org/
                    </li>
                    <li>
                      San Juan Basin CarbonSAFE Phase III: Ensuring Safe
                      Subsurface Storage of CO2 in Saline Reservoirs, Department
                      of Energy; https://www.sanjuancarbonsafe.org/
                    </li>
                    <li>
                      Advancing Characterization of Faults through Deployment of
                      Novel Geophysical, Geochemical and Geomechanical
                      Technologies at the San Juan Basin CarbonSAFE Site,
                      Department of Energy.
                    </li>
                    <li>
                      Carbon Ore, Rare Earth, and Critical Minerals (CORE-CM)
                      Assessment of San Juan River-Raton Coal Basin, Department
                      of Energy;
                      https://geoinfo.nmt.edu/staff/mclemore/REEinCoalWeb.html
                    </li>
                    <li>
                      Regional Resource Assessment for CO2 Storage in New Mexico
                      and Surrounding Areas: Identification, Characterization
                      and Evaluation of in-situ Mineralization Site/Complex,
                      Department of Energy.
                    </li>
                    <li>
                      Uinta Basin CarbonSAFE II: Storage Complex Feasibility,
                      Department of Energy.
                    </li>
                    <li>
                      Subsurface Seismic Structural Characterization of the
                      Hogback Monocline and Thermal Characterization of the San
                      Juan Basin, New Mexico. Department of Energy.
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

export default WangStaff;
