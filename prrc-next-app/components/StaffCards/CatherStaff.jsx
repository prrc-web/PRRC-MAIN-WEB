import React from 'react';

const MarthaCatherStaff = () => {
  return (
    <>
      <div class="row offset-2 my-5">
        <div className="col-5">
          <div class="card">
            <img class="card-img-top" src="" alt="" />
            <div class="card-body">
              <h5 class="card-title">Martha Cather</h5>
              <div>
                <i class="fa fa-phone"> </i> P: (575)-835-5685
              </div>
              <div>
                <i class="fa fa-envelope"></i> E: martha.cather@nmt.edu
              </div>
              <div>
                <i class="fa fa-building"></i> O: Kelly 261
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
              <h4 className="card-title fw-bold">Martha Cather</h4>
              <div className="card-subtitle mb-2 text-muted">
                Senior Scientist (Retired)
              </div>
              <div className="card-text">
                <div>
                  <h5 className="fw-bold">Research & Applications:</h5>
                  <ul>
                    <li>Project Management</li>
                    <li>Industry Projects</li>
                    <li>
                      Southwest Partnership Phase III, Outreach & Technology
                      Transfer
                    </li>
                    <li>CarbonSAFE Projects, Outreach & Technology Transfer</li>
                    <li>
                      Produced Water, PRRC liaison with Produced Water Research
                      Consortia
                    </li>
                    <li>
                      PRRC, Outreach & Technology Transfer, Go-TECH support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarthaCatherStaff;
