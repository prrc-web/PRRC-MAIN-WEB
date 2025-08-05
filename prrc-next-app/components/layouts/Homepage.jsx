import React from 'react';
import Banner from '../dashboard/Banner';
import HompageHeader from '../headers/HomepageHeader';

export default function Homepage() {
  return (
    <>
      <HompageHeader />
      <Banner />

      <section class="max-w-screen  py-30 px-20  bg-gray-50 border-b-2 border-gray-200 lg:h-screen lg:place-content-center">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="lg:w-3/4">
            <h2 class="text-6xl text-gray-800 font-bold text-center ">
              Objectives of the PRRC
            </h2>
            <p class="mt-9 text-gray-500 ">
              In order to sustain a diversified program, the PRRC&apos;s research
              continuously expands to embrace important new areas. Currently
              these include membrane technology, nanotechnology, and
              chemical/optics sensors; areas of study undertaken by our newest
              research groups.
            </p>
            <p class="mt-5">
              {/* <a
                class="inline-flex items-center gap-x-1 text-sm text-switch2 decoration-2 hover:text-xl focus:outline-hidden focus:text-xl font-medium "
                href="#">
                Learn More
                <span
                  aria-hidden="true"
                  className="block transition-all  text-md ">
                  &rarr;
                </span>
              </a> */}
            </p>
          </div>

          <div class="space-y-6 lg:space-y-10">
            <div class="flex gap-x-5 sm:gap-x-8">
              <span class="shrink-0 inline-flex justify-center items-center size-10 rounded-full  bg-white text-gray-800  mx-auto ">
                <img
                  src="/AddressingKeyTechnicalChallenges1.png"
                  alt="Addressing Key Technical Challenges"
                />
              </span>
              <div class="grow">
                <h3 class="text-base s sm:text-xl font-semibold text-xl ">
                  Addressing Key Technical Challenges
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400"></p>
              </div>
            </div>

            <div class="flex gap-x-5 sm:gap-x-8">
              <span class="shrink-0 inline-flex justify-center items-center size-9 rounded-full  bg-white text-gray-800  mx-auto ">
                <img
                  src="/FacilitatingDataCollectionSharingAnalysis1.png"
                  alt="Facilitating Data Collection, Sharing, and Analysis"
                />
              </span>
              <div class="grow">
                <h3 class="text-base sm:text-xl font-semibold text-gray-800 text-xl ">
                  Facilitating Data Collection, Sharing, and Analysis
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400"></p>
              </div>
            </div>

            <div class="flex gap-x-5 sm:gap-x-8">
              <span class="shrink-0 inline-flex justify-center items-center size-9.5 rounded-full  bg-white text-gray-800  mx-auto ">
                <img
                  src="/EvaluatingRegionalIngrastructure1.png"
                  alt="Evaluating Regional Infrastructure Development"
                />
              </span>
              <div class="grow">
                <h3 class="text-base sm:text-xl font-semibold text-gray-800 text-xl ">
                  Evaluating Regional Infrastructure
                </h3>
                <p class="mt-1 text-gray-600 "></p>
              </div>
            </div>

            <div class="flex gap-x-5 sm:gap-x-8">
              <span class="shrink-0 inline-flex justify-center items-center size-11 rounded-full  bg-white text-gray-800  mx-auto ">
                <img
                  src="/PromotingRegionalTechnologyTransfer1.png"
                  alt="Promoting Regional Technology Transfer"
                />
              </span>
              <div class="grow">
                <h3 class="text-base sm:text-xl font-semibold text-gray-800 text-xl ">
                  Promoting Regional Technology Transfer
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen px-10 py-30  mx-auto bg-gray-800 lg:h-screen lg:place-content-center">
        <div className="text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-6xl text-white font-bold md:text-6xl md:leading-tight">
            View our latest news
          </h2>
          <p className="mt-1 text-monochrome2">
            Discover the results of our recent efforts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-10 mb-10 lg:mb-14">
          <a
            className="group box-content size-80 relative rounded-xl block bg-black h-full bg-black  object-cover  "
            href="https://youtu.be/PGU6WgMjhsY">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-t-xl opacity-85 transition-opacity group-hover:opacity-45 overflow-hidden"
                src="/pumpjackTX.jpg"
                alt="Blog Image"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className=" text-xs uppercase text-switch2">Watch</p>
              <h3 className="mt-2 mb-4 text-lg font-medium text-gray-300 font-sans group-hover:opacity-70">
                New Mexico and PRRC Lead in CO₂ Sequestration.
              </h3>
              <p className=" text-sm text-gray-400"></p>
            </div>
          </a>

          <a
            className="group box-content size-80 relative rounded-xl block bg-black h-full bg-black  object-cover  "
            href="https://www.linkedin.com/posts/petroleum-recovery-research-center_geothermalenergy-cleanenergy-energytransition-activity-7303483893087682560-Obbp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACb8E4cBi7W-zkynSkJS81r6LMWxW4AdYq8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-t-xl opacity-85 transition-opacity group-hover:opacity-45 overflow-hidden"
                src="/NewMexicoTechECAM.jpeg"
                alt="Blog Image"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className=" text-xs uppercase text-switch2">Read</p>
              <h3 className="mt-2 mb-4 text-lg font-medium text-gray-300 font-sans group-hover:opacity-70">
                Exciting discussions last Tuesday on New Mexico geothermal
                energy at New Mexico Institute of Mining and Technology!
              </h3>
              <p className=" text-sm text-gray-400"></p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a
            className="group box-content size-80 relative rounded-xl block bg-black h-full bg-black  object-cover  "
            href="https://www.linkedin.com/posts/petroleum-recovery-research-center_ccus2025-carbonmanagement-geologicalstorage-activity-7302473832123047936-4CmU?utm_source=share&utm_medium=member_desktop&rcm=ACoAACb8E4cBi7W-zkynSkJS81r6LMWxW4AdYq8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-60 object-cover rounded-t-xl opacity-85 transition-opacity group-hover:opacity-45 overflow-hidden"
                src="/CCUS.jpeg"
                alt="Blog Image"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className=" text-xs uppercase text-switch2">Join</p>
              <h3 className="mt-2 mb-4 text-lg font-medium text-gray-300 font-sans group-hover:opacity-70">
                Join Our Researchers at SPE CCUS Houston 2025!
              </h3>
              <p className=" text-sm text-gray-400"></p>
            </div>
          </a>
          {/* End Card */}

          {/* Card */}
          <a
            className="group box-content size-80 relative rounded-xl block bg-black h-full bg-black  object-cover  "
            href="https://www.linkedin.com/posts/petroleum-recovery-research-center_steminnm-newmexicotech-nmtday2025-activity-7298413137215598592-Fqpn?utm_source=share&utm_medium=member_desktop&rcm=ACoAACb8E4cBi7W-zkynSkJS81r6LMWxW4AdYq8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-60 object-cover rounded-t-xl opacity-85 transition-opacity group-hover:opacity-45 overflow-hidden"
                src="/earthscienceday.jpeg"
                alt="Blog Image"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className=" text-xs uppercase text-switch2">Watch</p>
              <h3 className="mt-2 mb-4 text-lg font-medium text-gray-300 font-sans group-hover:opacity-70">
                The Petroleum Recovery Research Center was at the Roundhouse for
                New Mexico Tech Day and Earth Science Day!
              </h3>
              <p className=" text-sm text-gray-400"></p>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Grid */}

        {/* Card */}
        {/* <div className="text-center">
          <div className="inline-block bg-gray-800 group rounded-full">
            <div className="py-3 px-4 flex items-center gap-x-2 group-hover:text-xl focus:text-xl">
              <p className="text-white">See more</p>
              <a
                className="inline-flex items-center gap-x-1.5 text-switch2  group-hover:text-xl focus:outline-hidden focus:text-xl font-medium"
                href="../docs/index.html">
                here
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:text-xl text-md ">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div> */}
        {/* End Card */}
      </section>
      {/* End Card Blog */}

      {/* <div className="row p-3">
        <div className="col-md-3 text-center"></div>
        <div className="col-md-6 text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Collections</strong>
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Collection of PRRC Publications
              </h6>
              <br />
              <a href="PublicationsPage">
                <button type="button" className="btn btn-dark rounded-pill">
                  PRRC Thesis and Dissertations
                </button>
              </a>
              <p></p>
              <a href="PublicationsPage">
                <button type="button" className="btn btn-dark rounded-pill">
                  PRRC Review Newsletters
                </button>
              </a>
              <p></p>
              <a href="PublicationsPage">
                <button type="button" className="btn btn-dark rounded-pill">
                  PTTC Workshop Collection
                </button>
              </a>
              <p></p>
              <a href="PublicationsPage">
                <button type="button" className="btn btn-dark rounded-pill">
                  PRRC Workshop Collection
                </button>
              </a>
            </div>
          </div>
          <br />
          <br />
        </div>
        <div className="col-md-4 text-center"></div>
      </div> */}
    </>
  );
}
