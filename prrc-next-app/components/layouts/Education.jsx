import React from 'react';
import EducationHeader from '../headers/EducationHeaders';
import Image from 'next/image';
import EducationBanner from '../dashboard/EducationBanner';

export default function Education() {
  return (
    <>
      <EducationHeader />

      <section className="body-font">
        <div className="bg-nmtblue h-screen w-full bg-cover bg-center relative">
          <Image
            alt="Our Students"
            src="/students-collage-1.webp"
            layout="fill"
            objectFit="cover"
            className="absolute opacity-20"
          />
          <div>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="mx-auto max-w-prose relative">
                <h1 className="pt-16 text-6xl font-bold title-font text-white ">
                  Our mission and promise to our students
                </h1>

                <p className="flex leading-relaxed mt-15 text-xl text-gray-200 font-medium sm:text-md ">
                  The PRRC supports New Mexico Tech&apos;s educational mission
                  through teaching and collaboration with other NMIMT divisions.
                  In our graduate program, we seek out top quality students in a
                  variety of disciplines to study and work under the guidance of
                  world-renowned scientists in a research setting. The PRRC also
                  supports NMIMT&apos;s educational goals through our inclusion
                  of undergraduate students and high school interns in our
                  research program. The majority of PRRC&apos;s graduate students
                  go on to high-level energy research positions in industry or in
                  teaching positions at research universities. Many of our
                  graduates take positions in New Mexico&apos;s hydrocarbon
                  industry. They maintain close ties with us—PRRC graduates support
                  the Institute as alumni and frequently send their children to
                  NMIMT as a result of their positive educational experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen bg-gray-50  py-12 px-12">
          <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h1 className="text-5xl font-semibold text-gray-900 mb-4 ">
                  Graduate Research Program
                </h1>

                <p className="mt-8 text-gray-700">
                  Our research assistantship program offers excellent
                  opportunities for students to develop and publish research
                  under the guidance of our scientists. In addition to graduate
                  students in Petroleum Engineering, the PRRC supports graduate
                  students from a variety of disciplines including Chemical
                  Engineering, Chemistry, Computer Science, Electrical
                  Engineering, Civil & Environmental Engineering,
                  Geochemistry/Geology, Geophysics, Hydrology, and Mechanical
                  Engineering.
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/studentsPRRC.jpg"
                className="rounded"
                alt="Our Students"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-200 py-12">
        <h1 className="text-5xl font-semibold text-gray-900 mb-4 text-center pt-20">
          Our Students
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mx-20 my-20">
          <article class="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div class="flex items-center gap-4">
              <Image
                alt=""
                src="/Jianjia_Yu.webp"
                class="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 class="text-lg font-medium text-white">
                  Jianjia Yu&apos;s Students
                </h3>
              </div>
            </div>

            <ul class="mt-4 space-y-2">
              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">Zongjie He</strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">Graduate</p>
                </a>
              </li>

              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">
                    Gabriela Torres Fernandez
                  </strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">Graduate</p>
                </a>
              </li>

              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">
                    Carlos Carrillo
                  </strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate
                  </p>
                </a>
              </li>
            </ul>
          </article>

          <article class="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div class="flex items-center gap-4">
              <Image
                alt=""
                src="/Dung_Bui.webp"
                class="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 class="text-lg font-medium text-white">
                  Dung Bui&apos;s Students
                </h3>
              </div>
            </div>

            <ul class="mt-4 space-y-2">
              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">Anthony Hama</strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Ph.D. Student
                  </p>
                </a>
              </li>

              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">
                    Nathaniel Nimo Yeboah
                  </strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Master Student
                  </p>
                </a>
              </li>
            </ul>
          </article>

          <article class="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div class="flex items-center gap-4">
              <Image
                alt=""
                src="/Sai_Wang.webp"
                class="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 class="text-lg font-medium text-white">
                  Sai Wang&apos;s Students
                </h3>
              </div>
            </div>

            <ul class="mt-4 space-y-2">
              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">
                    Elizabeth Appiah
                  </strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Graduate Research Assistant
                  </p>
                </a>
              </li>

              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">Mercy Akomprah</strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate Research Assistant
                  </p>
                </a>
              </li>
            </ul>
          </article>

          <article class="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div class="flex items-center gap-4">
              <Image
                alt=""
                src="/Robert_Czarnota.webp"
                class="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 class="text-lg font-medium text-white">
                  Robert Czarnota&apos;s Students
                </h3>
              </div>
            </div>

            <ul class="mt-4 space-y-2">
              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">
                    Godsway Akpabli
                  </strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate
                  </p>
                </a>
              </li>

              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">
                    Kwamena Opoku Duartey
                  </strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">Graduate</p>
                </a>
              </li>

              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">
                    Justice Sarkodie Kyeremeh
                  </strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">Graduate</p>
                </a>
              </li>

              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">Anthony Morgan</strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">Postdoc</p>
                </a>
              </li>
            </ul>
          </article>

          <article class="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div class="flex items-center gap-4">
              <Image
                alt=""
                src="/Jean-Lucien.webp"
                class="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 class="text-lg font-medium text-white">
                  Jean-Lucien&apos;s Students
                </h3>
              </div>
            </div>

            <ul class="mt-4 space-y-2">
              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">Hadrian Keith</strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate
                  </p>
                </a>
              </li>

              <li>
                <a class="block h-full rounded-lg border border-gray-700 p-4">
                  <strong class="font-medium text-white">
                    Gabriel Frimpong
                  </strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate
                  </p>
                </a>
              </li>
            </ul>
          </article>
        </div>

        <section className="bg-gray-800 lg:grid lg:h-screen lg:place-content-center">
          <div class="bg-gray-800">
            <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
              <h1 class="font-semibold text-white text-6xl pb-15 text-center">
                Graduate Admission
              </h1>
              <div class="max-w-4xl">
                <div
                  href="#"
                  className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
                  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                    <div className="mt-4 sm:mt-0">
                      <p className="mt-4  text-pretty text-lg text-white">
                        Questions regarding Graduate Admission requirements,
                        stipends, or policies should be directed to New Mexico
                        Tech&apos;s Center for Graduate Studies.
                      </p>
                    </div>
                  </div>

                  <dl className="mt-6 flex gap-4 lg:gap-6">
                    <div>
                      <dt className="text-sm font-medium text-white">PHONE</dt>

                      <dd className="text-xs text-white">(575) 835-5513</dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-white">EMAIL</dt>

                      <dd className="text-xs text-white">graduate@nmt.edu</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-white">OFFICE</dt>

                      <dd className="text-xs text-white">
                        Fidel Center - Room 275
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h2 className="text-2xl font-medium text-gray-900 text-center px-50 mt-50 mb-50">
          We value everyone of our students and all of our staff. Thanks for
          being a part of the New Mexico Tech Family!
        </h2>
        <div className="flex items-center justify-center  bg-white">
          <Image
            src="/students-collage-1.webp"
            alt="Photos of our researchers, students, graduate students, and staff."
            layout="responsive"
            width={700}
            height={475}
            className="max-w-screen h-auto block "
          />
        </div>
      </div>

      {/* <div className="about-us-container section-container-bg-dark">
        <div className="row m-5">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7 mt-5">
                <h3>Graduate Research Program</h3>
                <p className="large-paragraph lead mt-3">
                  Our research assistantship program offers excellent
                  opportunities for students to develop and publish research
                  under the guidance of our scientists.{' '}
                </p>
                <p className="large-paragraph lead mt-2">
                  In addition to graduate students in Petroleum Engineering, the
                  PRRC supports graduate students from a variety of disciplines
                  including Chemical Engineering, Chemistry, Computer Science,
                  Electrical Engineering, Civil & Environmental Engineering,
                  Geochemistry/Geology, Geophysics, Hydrology, and Mechanical
                  Engineering.
                </p>
              </div>

              <div className="col-md-5 mt-5">
                <img
                  src="/studentsPRRC.jpg"
                  alt="PRRC Students"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '25em',
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                  className="card-img-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row m-5">
          <div className="card border-top-2">
            <div className="card-body p-5">
              <h2 className="text-center">Our Students</h2>
              <div className="row">
                <h3 className="pt-5 text-center">Jianjia Yu's students:</h3>
                <ul className="text-center">Zongjie He (Graduate)</ul>
                <ul className="text-center">
                  Gabriela Torres Fernandez (Graduate)
                </ul>
                <ul className="text-center">Carlos Carrillo (Undergraduate)</ul>

                <h3 className="text-center mt-4">Dung Bui's students:</h3>
                <ul className="text-center">Anthony Hama (Ph.D. student)</ul>
                <ul className="text-center">
                  Nathaniel Nimo Yeboah (Master student)
                </ul>

                <h3 className="text-center mt-4">Sai Wang's students:</h3>
                <ul className="text-center">
                  Elizabeth Appiah (Graduate Research Assistant)
                </ul>
                <ul className="text-center">
                  Mercy Akomprah (Undergraduate Research Assistant)
                </ul>

                <h3 className="text-center mt-4">
                  Robert Czarnota's students:
                </h3>
                <ul className="text-center">Godsway Akpabli (Undergraduate)</ul>
                <ul className="text-center">
                  Kwamena Opoku Duartey (Graduate)
                </ul>
                <ul className="text-center">
                  Justice Sarkodie Kyeremeh (Graduate)
                </ul>
                <ul className="text-center">
                  Anthony Morgan in PRRC (Postdoc)
                </ul>

                <h3 className="text-center mt-4">Jean-Lucien's students:</h3>
                <ul className="text-center">Hadrian Keith (Undergraduate)</ul>
                <ul className="text-center">
                  Gabriel Frimpong (Undergraduate)
                </ul>
              </div>
            </div>
          </div>
        </div>

        <EducationBanner />

        <div className="row m-5">
          <h2 className="text-center">
            We value everyone of our students and all of our staff. Thanks for
            being a part of the New Mexico Tech Family!
          </h2>
        </div>

        <div className="row m-4">
          <div className="col-md-12 text-center">
            <div className="card">
              <div className="card-body">
                <h4>Graduate Admission</h4>
                <p>
                  Questions regarding Graduate Admission requirements, stipends,
                  or policies should be directed to New Mexico Tech's Center for
                  Graduate Studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
