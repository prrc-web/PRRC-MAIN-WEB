import React from 'react';
import SafetyHeader from '../headers/SafetyHeader';

export default function Safety() {
  return (
    <div>
      <SafetyHeader />

      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-10 w-screen max-w-screen-xl px-7 py-20  md:grid md:grid-cols-2 md:items-center md:gap-4 ">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Ensuring the
              <strong className="text-nmtred"> safety </strong>
              of our staff remains our utmost priority at
              <strong className="text-nmtred"> New Mexico Tech.</strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              We are dedicated to fostering a secure environment through
              rigorous safety measures and protocols, reflecting our unwavering
              commitment to the well-being and protection of our personnel.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6"></div>
          </div>

          <img
            src="/safety-picture.png"
            alt="New Mexico Tech Safety"
            viewBox="0 0 1024 768"
            className="mx-auto hidden max-w-md text-gray-900 md:block h-96"></img>
        </div>
      </section>

      <section className="bg-gray-800 lg:grid lg:h-screen lg:place-content-center">
        <div class="bg-gray-800">
          <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
            <h1 class="font-semibold text-white text-6xl pb-15">
              New Mexico Tech Safety Contacts
            </h1>
            <div class="max-w-4xl">
              <div
                href="#"
                className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                  <div className="mt-4 sm:mt-0">
                    <h2 className="text-3xl font-medium text-pretty text-white">
                      Hazmat/Lab Safety Specialist
                    </h2>

                    <p className="mt-1 text-xl text-white">
                      Benjamin E. Thomas
                    </p>

                    <p className="mt-4  text-pretty text-lg text-white">
                      For safety concerns, or to report an incident 8:00 AM —
                      5:00 PM, Monday — Friday, please contact the NMT safety
                      officer listed above. For safety concerns, or to report an
                      incident after hours or on weekends, please call Campus
                      Police ( P: 575-517-0646). For emergencies, dialing 0 or
                      911 from a campus phone line will get you to Campus
                      Police.
                    </p>
                  </div>
                </div>

                <dl className="mt-6 flex gap-4 lg:gap-6">
                  <div>
                    <dt className="text-sm font-medium text-white">PHONE</dt>

                    <dd className="text-xs text-white">(575)-835-5495</dd>
                  </div>

                  <div>
                    <dt className="text-sm font-medium text-white">EMAIL</dt>

                    <dd className="text-xs text-white">hazmat@nmt.edu</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-white">OFFICE</dt>

                    <dd className="text-xs text-white">ROB 113</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-screen  py-10  px-30 mx-auto bg-monochrome2 lg:h-screen lg:place-content-center">
        <div class="mx-auto text-center mb-10 lg:mb-14">
          <h1 class="font-semibold text-6xl text-nmtblue font-bold  md:leading-tight ">
            Additional Safety Resources
          </h1>
          <p class="mt-1 text-gray-600 ">View our safety documents</p>
        </div>

        <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
          <a
            class="group flex flex-col bg-gray-800 border-2 border-gray-200 bg-grey-800 rounded-xl "
            href="#">
            <div class="my-7 mx-7">
              <h3 class="text-xl font-semibold text-white group-hover:text-gray-400 ">
                Laboratory Emergency Procedures
              </h3>
              <p class="mt-3 text-gray-400 group-hover:text-gray-600 ">
                Emergency procedures for accidents, injuries, spills, and other
                hazards, ensuring safety and compliance.
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1 text-sm text-switch2 decoration-2 group-hover:underline group-focus:underline font-medium ">
                Read more
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>

          <a
            class="group bg-gray-800 flex flex-col border-2 border-gray-200 rounded-xl "
            href="#">
            <div class="my-7 mx-7">
              <h3 class="text-xl font-semibold text-white group-hover:text-gray-400 ">
                Fire Safety Instructions
              </h3>
              <p class="mt-3 text-gray-400 group-hover:text-gray-600 ">
                Evacuation routes, fire extinguisher use, emergency contacts,
                and procedures for responding to fires or smoke.
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1 text-sm text-switch2 decoration-2 group-hover:underline group-focus:underline font-medium ">
                Read more
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>

          <a
            class="group flex flex-col bg-gray-800 border-2 border-gray-200 rounded-xl "
            src="/Using_a_Fire_Extinguisher.pdf">
            <div class="my-7 mx-7">
              <h3 class="text-xl font-semibold text-white group-hover:text-gray-400 ">
                Using a Fire Extinguisher
              </h3>
              <p class="mt-3 text-gray-400 group-hover:text-gray-600 ">
                The PASS method, identifying extinguisher types, and next steps
                if the fire cannot be quickly controlled.
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1 text-sm text-switch2 decoration-2 group-hover:underline group-focus:underline font-medium">
                Read more
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* <div className="row ms-5 me-5 my-5">
        <div className="col-md-4 ">
          <div className="card">
            <img
              className="card-img-top"
              src="/safety-picture.png"
              alt="Card image cap"
              style={{ maxHeight: '30rem', objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className="col-8 col-md-8 col-xl-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">New Mexico Tech Safety Contacts</h2>
              <br />
              <h5 className="card-subtitle mb-2 text-muted">
                Benjamin E. Thomas - Hazmat/Lab Safety Specialist
              </h5>
              <p></p>
              <h6>
                <i className="fa fa-phone" /> P: (575)-835-5495
              </h6>
              <h6>
                <i className="fa fa-envelope" /> E: hazmat@nmt.edu
              </h6>
              <h6>
                <i className="fa fa-building" /> O: ROB 113
              </h6>

              <p className="card-text">
                For safety concerns, or to report an incident 8:00 AM — 5:00 PM,
                Monday — Friday, please contact the NMT safety officer listed
                above. For safety concerns, or to report an incident after hours
                or on weekends, please call Campus Police (P: 575-517-0646). For
                emergencies, dialing 0 or 911 from a campus phone line will get
                you to Campus Police.
              </p>
              <h5>
                <strong>Additional Safety Resources</strong>
              </h5>
              <a href="" target="_blank">
                NMT Lab Safety Inspection Guide (PDF, 3.1 MB)
              </a>
              <p></p>
              <a href="" target="_blank">
                Safety Manual (PDF, 242 KB)
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
