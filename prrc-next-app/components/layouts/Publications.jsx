import React from 'react';
import PublicationsHeader from '../headers/PublicationsHeaders';

export default function Publications() {
  return (
    <div>
      <PublicationsHeader />
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-2xl px-4 py-8 text-center">
          <h1 className="text-5xl font-semibold tracking-loose text-gray-900">
            Our Publications Archive is under maitenance.
          </h1>

          <p className="mt-7 text-2xl text-gray-800">
            We appreciate your patience as we work to restore the archive.
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
              href="#"
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

      {/* <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="../images/Publications Files Picture.jpg"
              alt="publications"
              className="Publications Card"
              width="auto"
              height="300"
            />
            <div className="card-body">
              <h4 className="card-title">Publications</h4>
              <p className="card-text">
                The Publications Office manages reports and publications for the
                PRRC.
              </p>
              <br />
              <br />
              <a href="Publications.html" className="btn btn-primary">
                Publications Home
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 offset-xl-0 col-xl-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Collections</h5>
              <br />
              <h6 className="card-subtitle mb-2 text-muted">
                Collection of PRRC Publications
              </h6>
              <div className="button-circle-container">
                <a href="page1.html" className="circle-button">
                  <img src="../images/Publications.png" alt="Image 1" />
                  <p>PRRC Thesis and Dissertation Collection</p>
                </a>
                <a href="page2.html" className="circle-button">
                  <img src="../images/Publications.png" alt="Image 2" />
                  <p>PRRC Review Newsletters</p>
                </a>
                <a href="page3.html" className="circle-button">
                  <img src="../images/Publications.png" alt="Image 3" />
                  <p>PTTC Workshop Collection</p>
                </a>
                <a href="page4.html" className="circle-button">
                  <img src="../images/Publications.png" alt="Image 4" />
                  <p>PRRC Workshop Collection</p>
                </a>
              </div>
              <br />
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-md-6 text-center"></div>
      </div>
      <br />
      <br />
      <div className="card"></div>
      <div className="col-md-boarders col-lg-6 offset-lg-3 offset-xl-0 col-xl-12">
        <h2>
          <strong>Available Publications</strong>
        </h2>
        <p>
          The Publications Office manages reports and publications for the PRRC.
        </p>
        <br />
        <div className="row">
          <div className="col-md-boarders">
            <br />
            <p></p>
            <h5>PRRC Reports Collection</h5>
            <br />
          </div>
          <div className="col-md-boarders Publications1">
            <br />
            <p></p>
            ...
            <br />
          </div>
          <div className="col-md-boarders">
            <br />A searchable database that contains all our reports that are
            nonproprietary and are available to the public.<p></p>
            <br />
          </div>
          <div className="col-md-boarders">
            <br />
            <p></p>
            <h5>Petroleum Technology into the Second Century</h5>
            <p></p>
            <br />
          </div>
        </div>
      </div> */}
    </div>
  );
}
