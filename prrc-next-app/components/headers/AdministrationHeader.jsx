import React from 'react';
import SvgWaves from '../svgContent/SvgWaves';

const AdministrationHeader = () => {
  return (
    <>
      <div className="w-full  bg-gradient-to-r from-[#112233] via-[#334455] to-[#112233]">
        <div className="container mx-auto px-24 pt-3 text-white">
          <div className="w-full ">
            <div className="rounded-lg ">
              <h1 className="text-6xl md:text-6xl font-semibold tracking-loose mb-0 mt-35 text-center">
                Our Team
              </h1>
              <h4 className="text-2xl md:text-3xl  text-center"></h4>
            </div>
            <div className="text-center mb-0 mt-27 ">
              <SvgWaves className="w-full max-w-4xl mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid pt-3 pb-2 Nav-Header-BG navbar-dark my-">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron3 jumbotron-fluid text-center">
              <h1 class="display-4"> Administration</h1>
              <div>
                Meet our administration!
                <div />
                <div className="col-12 col-lg-6 offset-lg-3">
                  Welcome to PRRC! Meet our admins who ensure that the
                  administrative operations within the Petroleum Research
                  Recovery Center & New Mexico Tech are seamless, coordinated,
                  and efficient, paving the way for a successful future.
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3">
                  <SvgWaves />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AdministrationHeader;
