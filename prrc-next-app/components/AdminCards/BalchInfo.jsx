import React from 'react';
import Image from 'next/image';

const BalchAdmin = () => {
  return (
    <>
      <div className="box-content size-90 border-0">
        <a href="#" className="group relative block bg-black h-full ">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              alt="Dr. Robert Balch"
              src="/balch.jpg"
              width={500}
              height={500}
              className="absolute inset-0 h-120 w-full object-cover opacity-85 transition-opacity group-hover:opacity-45 "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/23 to-transparent h-[50%] pointer-events-none" />

            <div className="relative p-2 sm:p-6 lg:p-2">
              <p className="text-sm font-medium uppercase tracking-widest text-switch2">
                Director
              </p>

              <p className="text-l font-bold text-white sm:text-2xl">
                Dr. Robert Balch
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-52">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-switch2">
                    See more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                      &rarr;
                    </span>
                  </p>
                  <p className="text-sm text-white pt-1">
                    Dr. Robert Balch is the Director of the Petroleum Recovery
                    Research Center located on the campus...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* <div class="row offset-2 my-5">
        <div className="col-5">
          <div class="card">
            <img class="card-img-top" src="../images/balch.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">Dr. Robert Balch</h5>
              <div>
                <i class="fa fa-phone"> </i> P: (575) 835-5305
              </div>
              <div className="flex items-center mb-2">
                <i className="fas fa-envelope mr-2"></i>
                <span>E: robert.balch@nmt.edu</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-building mr-2"></i>
                <span>O: Kelly 208</span>
              </div>

              <button
                class="btn btn-primary"
                onclick="openPDF('Resumes/Balch-CV March 2024.docx')">
                Resume
              </button> 
            </div>
          </div>
        </div>
        <div className="w-5/12 mx-8">
          <div className="bg-white rounded-lg shadow-none">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Dr. Robert Balch</h4>
              <div className="text-gray-600 mb-4">Director</div>
              <div className="text-gray-700 ">
                Dr. Robert Balch is the Director of the Petroleum Recovery
                Research Center located on the campus of New Mexico Tech. At the
                university he also holds Adjunct Professor positions in
                Petroleum Engineering and Geophysics and has been research
                advisor to more than 40 graduate students. During his 20 years
                at the PRRC he has been principal Investigator on a range of
                enhanced oil recovery projects focused on developing and
                applying solutions to problems at many scales using geological,
                geophysical, and engineering data. Dr. Balch is the Principal
                Investigator of the Southwest Partnerships Phase III
                demonstration project where 1,000,000 metric tonnes of
                anthropogenic CO2 is being injected for combined storage and EOR
                into a mature waterflood in North Texas. During the course of
                his work he has published more than 45 papers, is a frequent
                invited speaker, and has presented his research at more than 100
                meetings or events. Dr. Balch has held an appointment as an Oil
                Conservation Commissioner for the State of New Mexico since June
                of 2011.
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BalchAdmin;
