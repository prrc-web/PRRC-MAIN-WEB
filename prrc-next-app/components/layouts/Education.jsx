import React from 'react';
import EducationHeader from '../headers/EducationHeaders';
import Image from 'next/image';

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
            <div className="container px-5 py-10 md:py-24 mx-auto flex flex-wrap">
              <div className="mx-auto max-w-prose relative">
                <h1 className="pt-8 md:pt-16 text-4xl md:text-5xl lg:text-6xl font-bold title-font text-white">
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
        <div className="mx-auto max-w-screen bg-gray-50 py-8 md:py-12 px-4 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                  Graduate Research Program
                </h1>

                <p className="mt-4 md:mt-8 text-gray-700 text-base md:text-lg">
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
                className="rounded w-full"
                alt="Our Students"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-200 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center pt-10 md:pt-20">
          Our Students
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mx-20 my-20">
          <article className="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src="/Jianjia_Yu.webp"
                className="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 className="text-lg font-medium text-white">
                  Jianjia Yu&apos;s Students
                </h3>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">Zongjie He</strong>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Graduate
                  </p>
                </a>
              </li>
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">
                    Gabriela Torres Fernandez
                  </strong>
                  <p className="mt-1 text-xs font-medium text-gray-300">Graduate</p>
                </a>
              </li>
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">
                    Carlos Carrillo
                  </strong>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate
                  </p>
                </a>
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src="/Dung_Bui.webp"
                className="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 className="text-lg font-medium text-white">
                  Dung Bui&apos;s Students
                </h3>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">Anthony Hama</strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Ph.D. Student
                  </p>
                </a>
              </li>

              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">
                    Nathaniel Nimo Yeboah
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Master Student
                  </p>
                </a>
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src="/Sai_Wang.webp"
                className="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 className="text-lg font-medium text-white">
                  Sai Wang&apos;s Students
                </h3>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">
                    Elizabeth Appiah
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Graduate Research Assistant
                  </p>
                </a>
              </li>

              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">Mercy Akomprah</strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate Research Assistant
                  </p>
                </a>
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src="/Robert_Czarnota.webp"
                className="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 className="text-lg font-medium text-white">
                  Robert Czarnota&apos;s Students
                </h3>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">
                    Godsway Akpabli
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate
                  </p>
                </a>
              </li>

              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">
                    Kwamena Opoku Duartey
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">Graduate</p>
                </a>
              </li>

              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">
                    Justice Sarkodie Kyeremeh
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">Graduate</p>
                </a>
              </li>

              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">Anthony Morgan</strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">Postdoc</p>
                </a>
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-gray-700 bg-nmtblue p-4">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                src="/Jean-Lucien.webp"
                className="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />

              <div>
                <h3 className="text-lg font-medium text-white">
                  Jean-Lucien&apos;s Students
                </h3>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">Hadrian Keith</strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate
                  </p>
                </a>
              </li>

              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4">
                  <strong className="font-medium text-white">
                    Gabriel Frimpong
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Undergraduate
                  </p>
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>

        <section className="bg-gray-800 lg:grid lg:h-screen lg:place-content-center">
  
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
    </>
  );
}
