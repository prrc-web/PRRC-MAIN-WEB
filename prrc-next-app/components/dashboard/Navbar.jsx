import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const routeToHomePage = () => {
    router.push('/');
  };

  const routeToAdministrationPage = () => {
    router.push('/AdministrationPage');
  };

  const routeToStaffPage = () => {
    router.push('/StaffPage');
  };

  const routeToEducationPage = () => {
    router.push('/EducationPage');
  };

  const routeToPublicationsPage = () => {
    router.push('/PublicationsPage');
  };

  const routeToResearchPage = () => {
    router.push('/ResearchPage');
  };

  const routeToSafetyPage = () => {
    router.push('/SafetyPage');
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-900 light:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={routeToHomePage}>
          <span className="self-center text-wrap text-white ">
            <h4 className="text-lg font-light font-header">
              Petroleum Recovery Research Center
            </h4>
            <p className="text-sm text-center text-monochrome2">
              A Division of New Mexico Tech
            </p>
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="https://www.nmt.edu/" className="hidden md:block">
            <img
              src="/Mountain_White.png"
              alt="New Mexico Tech Logo"
              className="h-20 max-w-[10em] object-contain object-end"
            />
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={handleToggle}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-300 hover:text-switch2 rounded-sm md:bg-transparent md:p-0 "
                onClick={routeToHomePage}
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="/AdministrationPage"
                className="block py-2 px-3 text-gray-300  rounded-sm  md:p-0 hover:text-switch2 "
                onClick={routeToAdministrationPage}>
                Administration
              </a>
            </li>
            <li>
              <a
                href="/StaffPage"
                className="block py-2 px-3 text-gray-300 rounded-sm hover:text-switch2 md:p-0 "
                onClick={routeToStaffPage}>
                Staff
              </a>
            </li>
            <li>
              <a
                href="/EducationPage"
                className="block py-2 px-3 text-gray-300 rounded-sm hover:text-switch2 md:p-0"
                onClick={routeToEducationPage}>
                Education
              </a>
            </li>
            <li>
              <a
                href="/PublicationsPage"
                className="block py-2 px-3 text-gray-300 rounded-sm hover:text-switch2 md:p-0"
                onClick={routeToPublicationsPage}>
                Publications
              </a>
            </li>
            <li>
              <a
                href="/ResearchPage"
                className="block py-2 px-3 text-gray-300 rounded-sm hover:text-switch2 md:p-0"
                onClick={routeToResearchPage}>
                Research
              </a>
            </li>
            <li>
              <a
                href="/SafetyPage"
                className="block py-2 px-3 text-gray-300 rounded-sm hover:text-switch2 md:p-0"
                onClick={routeToSafetyPage}>
                Safety
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

{
  /* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Links
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    onClick="dropdown-toggle">
                    <a className="dropdown-item" href="https://www.nmt.edu/">
                      New Mexico Tech
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://gotech.nmt.edu/gotech/">
                      Go Tech NMT
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://netl.doe.gov/sites/default/files/2018-11/SWP-final-report.pdf">
                      South West Partnership
                    </a>
                  </div>
                </li> */
}
