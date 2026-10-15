import React from 'react';
import ResearchHeader from '../headers/ResearchHeaders';
import ResearchGroupCards from '../ResearchGroups/ResearchGroupCards';

export default function Research() {
  return (
    <div className="min-h-screen bg-[#182952]">
      <ResearchHeader />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <ResearchGroupCards
              key={i}
              name=""
              title=""
              imageUrl="/PRRClogolightoldtransparent.png"
              description=""
              href="#"
            />
          ))}
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
