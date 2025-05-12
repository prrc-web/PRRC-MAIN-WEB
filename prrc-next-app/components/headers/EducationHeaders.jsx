import React from 'react';
import SvgWaves from '../svgContent/SvgWaves';

const EducationHeader = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#112233] via-[#334455] to-[#112233]">
        <div className="container mx-auto px-24 pt-3 text-white">
          <div className="w-full mx-auto">
            <div className="rounded-lg ">
              <h1 className="text-6xl md:text-6xl font-semibold tracking-loose mb-4 mt-35 text-center">
                Education
              </h1>
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
              <h1 class="display-4"> Education</h1>
              <div>
                <h4> Our mission & promise to our students</h4>
                <div />
                <div className="col-12 col-lg-6 offset-lg-3">
                  The PRRC supports New Mexico Tech's educational mission
                  through teaching and collaboration with other NMIMT divisions.
                  In our graduate program, we seek out top quality students in a
                  variety of disciplines to study and work under the guidance of
                  world-renowned scientists in a research setting. The PRRC also
                  supports NMIMT's educational goals through our inclusion of
                  undergraduate students and high school interns in our research
                  program. The majority of PRRC's graduate students go on to
                  high-level energy research positions in industry or in
                  teaching positions at research universities. Many of our
                  graduates take positions in New Mexico's hydrocarbon industry.
                  They maintain close ties with us—PRRC graduates support the
                  Institute as alumni and frequently send their children to
                  NMIMT as a result of their positive educational experience.
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

export default EducationHeader;
