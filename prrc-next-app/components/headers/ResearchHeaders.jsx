import React from 'react';
import SvgWaves from '../svgContent/SvgWaves';

const ResearchHeader = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#112233] via-[#334455] to-[#112233]">
        <div className="container mx-auto px-24 pt-3 text-white">
          <div className="w-full mx-auto">
            <div className="rounded-lg ">
              <h1 className="text-6xl md:text-6xl font-semibold tracking-loose mb-4 mt-35 text-center">
                Research
              </h1>
              <h4 className="text-2xl md:text-3xl mb-6 text-center">
                See our projects
              </h4>
              <div className="max-w-3xl mx-auto  leading-relaxed mb-8"></div>
            </div>
            <div className="text-center mb-8 mt-27 ">
              <SvgWaves className="w-full max-w-4xl mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid pt-3 pb-2 Nav-Header-BG navbar-dark my-">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron3 jumbotron-fluid text-center">
              <h1 class="display-4">Research</h1>
              <div>
                <h3>see our projects</h3>
                <div />
                <div className="col-12 col-lg-6 offset-lg-3"></div>
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

export default ResearchHeader;
