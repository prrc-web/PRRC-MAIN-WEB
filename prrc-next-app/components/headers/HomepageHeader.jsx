import React from 'react';
import SvgWaves from '../svgContent/SvgWaves';

const HompageHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#112233] via-[#334455] to-[#112233]">
      <div className="container mx-auto px-24 pt-3 text-white">
        <div className="w-full mx-auto">
          <div className="rounded-lg ">
            <h1 className="text-6xl md:text-6xl sm:text-lg font-light tracking-loose mb-4 mt-35 text-center">
              Petroleum Recovery Research Center
            </h1>
            <h4 className="text-3xl md:text-3xl mb-6 text-center">
              · A Division of New Mexico Tech ·
            </h4>
            <p className="text-2xl mt-10 font-sans text-center font-medium">
              Our Focus
            </p>
            <div className="max-w-screen mx-auto text-lg md:text-xl leading-relaxed my-4 text-center">
              <p>
                The PRRC's research includes improved methods of enhanced oil
                and gas recovery and diversified energy technologies related to
                the oil and gas industry. Our research direction continues to
                evolve with New Mexico's industry.
              </p>
            </div>
          </div>
          <div className="text-center mb-0 mt-27 ">
            <SvgWaves className="w-full mx-auto" />
          </div>
        </div>
      </div>
    </div>

    // <div className="container mx-auto px-24 py-3 Nav-Header-BG text-white">
    //   <div className="w-full mx-auto">
    //     <div className="rounded-lg shadow-lg">
    //       <div className="text-center p-8 md:p-12">
    //         <h2 className="text-4xl md:text-5xl font-bold mb-4">
    //           Petroleum Recovery Research Center
    //         </h2>
    //         <p className="text-xl md:text-2xl mb-6">
    //           A Division of New Mexico Tech
    //         </p>
    //         <h4 className="text-2xl md:text-3xl mb-6">
    //           Our Focus
    //         </h4>
    //         <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
    //           The PRRC's research includes improved methods of enhanced oil and
    //           gas recovery and diversified energy technologies related to the
    //           oil and gas industry. Our research direction continues to evolve
    //           with New Mexico's industry.
    //         </div>
    //       </div>
    //       <div className="text-center mb-8">
    //         <SvgWaves className="w-full max-w-4xl mx-auto" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HompageHeader;
