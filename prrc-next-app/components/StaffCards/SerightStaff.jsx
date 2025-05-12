import React from 'react';

const SerightStaff = () => {
  return (
    <>
      <div className="row offset-2 my-5">
        <div className="col-5">
          <div className="card">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Randall S. Seright PhD</h5>
              <div>
                <i className="fa fa-phone"> </i> P: (575) 835-5571
              </div>
              <div>
                <i className="fa fa-envelope"></i> E: randy.seright@nmt.edu
              </div>
              <div>
                <i className="fa fa-building"></i> O: Kelly 257
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
              <h4 className="card-title fw-bold">Dr. Randall S. Seright</h4>
              <div className="card-subtitle mb-2 text-muted">
                Section Head/Research Group within PRRC: Reservoir Sweep
                Improvement
              </div>
              <div className="card-text">
                <div>
                  <h5 className="fw-bold">Research & Applications:</h5>
                  <p>
                    Senior Engineer Randy Seright is Associate Director at the
                    PRRC, Adjunct Professor in the Department of Petroleum and
                    Chemical Engineering, and Section head of the PRRC's
                    Reservoir Sweep Improvement group. His research focuses on
                    developing methods to prevent fluid channeling through
                    reservoirs and to reduce excess water and gas production
                    during oil recovery, especially using polymers and gels.
                  </p>
                  <p>
                    He has extensive interests and experience in improving sweep
                    efficiency during water flooding and chemical flooding. He
                    holds a B.S. degree in Chemical Engineering from Montana
                    State University (Bozeman) and a Ph.D. degree in Chemical
                    Engineering from the University of Wisconsin (Madison).
                  </p>
                  <p>
                    He worked for Exxon Production Research Company for eight
                    years before joining the PRRC. He is a longtime member of
                    the Society of Petroleum Engineers and has been a registered
                    professional engineer in Texas since 1983.
                  </p>
                  <p>
                    He has provided a short course on Water Shutoff in 17
                    countries. He received the SPE/DOE IOR Pioneer award in 2008
                    for his work on using polymer and gels to improve oil
                    recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerightStaff;
