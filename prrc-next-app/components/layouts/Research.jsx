import React from 'react';
import ResearchHeader from '../headers/ResearchHeaders';

export default function Research() {
  return (
    <div>
      <ResearchHeader />

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-2xl px-4 py-8 text-center">
          <h1 className="text-5xl font-semibold tracking-loose text-gray-900">
            Our Research Hub is under maitenance.
          </h1>

          <p className="mt-7 text-2xl text-gray-800">
            We appreciate your patience as we work to restore the hub.
          </p>
          <div className="mt-10 border-t border-gray-400">
            <p className="mt-10 text-gray-500">
              Since the 1970s, PRRC has been at the forefront of research in
              diverse oil and gas-related fields, continually evolving over the
              years. While our early publications were archived in physical
              form, the Publication Office has seamlessly transitioned into the
              digital age. Now, you can find our groundbreaking research on this
              webpage. Explore decades of insights, innovations, and discoveries
              that have shaped the trajectory of our work.
            </p>
            <a
              href="https://www.prrc.nmt.edu/"
              className="mt-6 pb-8 inline-block rounded-lg px-3 py-2 text-lg font-medium text-switch2 border border-transparent hover:text-xl focus:outline-hidden focus:text-xl">
              Go Back Home
              <span
                aria-hidden="true"
                className="block transition-all -rotate-180 text-md ">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/card-img.png"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Advanced Materials in Hydrocarbon Production
                </h5>
                <h6 className="card-subtitle mb-2">Section Head:</h6>
                <p className="card-text">
                  Advanced materials (AM) involve engineering properties of
                  existing materials for improved performance, with examples
                  like titanium and carbon fiber. Nanotechnology, focusing on
                  dimensions of 1 to 100 nanometers, is a crucial aspect of AM
                  research, allowing for the manipulation of materials at the
                  nanoscale for enhanced properties and applications in
                  hydrocarbon recovery technologies.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/alkali-surfactant-polymers Picture.png"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Alkali Surfactant Polymers (ASP)</h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. Guoyin Zhang
                </h6>
                <p className="card-text">
                  Formulates and develops alkali surfactant polymer (ASP)
                  treatments for enhanced recovery of oil and evaluates existing
                  ASP treatments.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/Gas Flooding.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Gas Flooding Processes and Flow Heterogeneities
                </h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. Sai Wang
                </h6>
                <p className="card-text">
                  Studies carbon storage in geologic formations, improving
                  conformance control and sweep efficiency in CO2 flooding,
                  injectivity changes associated with water alternating with gas
                  injection (WAG) and improved modeling of CO2 foam-enhancing
                  processes and WAG injection.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/ISOG.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Industry Service &amp; Outreach Group (ISOG)
                </h5>
                <h6 className="card-subtitle mb-2">Lead</h6>
                <p className="card-text">
                  Makes public data available in intuitive and user-friendly
                  formats and works with other organizations to provide
                  information about new or under-used technologies available to
                  the independent oil and gas community.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/Petrophysics.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="296"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Petrophysics and Surface Chemistry
                </h5>
                <h6 className="card-subtitle mb-2">Lead Scientist: Tian Fan</h6>
                <p className="card-text">
                  Studies surface and interfacial properties of crude oils,
                  wettability alteration and crude oil/brine/rock interactions,
                  stability of asphaltenes, and the effects of surfactants used
                  in core cleaning on wettability assessment.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/Produced Water.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="300"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Produced Water in Petroleum Engineering
                </h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. Jianjia Yu
                </h6>
                <p className="card-text">
                  Pursues advanced methods of treating oilfield produced water
                  through innovative membrane technology.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/REACT.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="300"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Reservoir Evaluation/Advanced Computational Technologies
                  (REACT)
                </h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. William Ampomah
                </h6>
                <p className="card-text">
                  Develops new technologies using computational intelligence,
                  geostatistics and fuzzy logic to solve the unique problems
                  encountered in reservoir characterization and numerical
                  simulation of oil and gas reservoirs using data of all scales.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="card">
              <img
                src="../images/Res Sweep.jpg"
                alt="publications"
                className="Publications Card"
                width="auto"
                height="300"
              />
            </div>
          </div>
          <div className="col-md-4 offset-xl-0 col-xl-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Reservoir Sweep Improvement</h5>
                <h6 className="card-subtitle mb-2">
                  Lead Scientist: Dr. Randall Seright
                </h6>
                <p className="card-text">
                  Performs research and development to improve reservoir sweep
                  efficiency and reduce saltwater production during oil and gas
                  recovery operations.
                </p>
                <a href="your_target_page.html">
                  <button
                    type="button"
                    className="button-link button-link-info"
                  >
                    View Full Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
