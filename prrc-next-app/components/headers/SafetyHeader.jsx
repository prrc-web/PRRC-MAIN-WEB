import React from 'react';
import SvgWaves from '../svgContent/SvgWaves';

const SafetyHeader = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#112233] via-[#334455] to-[#112233] ">
        <div className="container mx-auto px-24 pt-3 text-white">
          <div className="w-full mx-auto">
            <div className="rounded-lg ">
              <h1 className="text-6xl md:text-6xl font-semibold tracking-loose mb-1 mt-35 pt-3 text-center text-white">
                Safety
              </h1>
            </div>
            <div className="text-center mb-8 mt-27 ">
              <SvgWaves className="w-full max-w-4xl mx-auto " />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid pt-3 pb-2 Nav-Header-BG navbar-dark my-">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron3 jumbotron-fluid text-center">
              <h1 class="display-4">Safety</h1>

              <div className="col-12 col-lg-6 offset-lg-3">
                Ensuring the safety of our staff remains our utmost priority at
                New Mexico Tech. We are dedicated to fostering a secure
                environment through rigorous safety measures and protocols,
                reflecting our unwavering commitment to the well-being and
                protection of our personnel.
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-6 offset-lg-3">
                <SvgWaves />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SafetyHeader;
