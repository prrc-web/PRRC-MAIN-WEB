'use client'; // Required for Next.js App Router to handle window scrolling and React state

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Scroll Event Listener: Triggers the Ankar.ai visual transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click Outside Listener: Closes the megamenu if the user clicks the page body
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard Accessibility: Closes menu on 'Escape' key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md text-[#0c2753]' 
          : 'bg-gradient-to-b from-[#020403]/90 to-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#78291c] rounded-md">
            {/* The alt text here is strict and descriptive per institutional ADA rules */}
            <img
              src={isScrolled ? '/logo-nmt-navy.svg' : '/logo-white.svg'}
              alt="Petroleum Recovery Research Center Home"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* DESKTOP MENU SECTION */}
          <ul className="hidden md:flex space-x-8 h-full items-center" role="menubar">
            <li role="none" className="h-full flex items-center">
              
              {/* MEGAMENU TRIGGER BUTTON */}
              <button
                className="flex items-center space-x-1 hover:text-[#2D928D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#78291c] rounded-md px-3 py-2 font-medium"
                aria-haspopup="true"
                aria-expanded={openMenu === 'research'}
                onClick={() => toggleMenu('research')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMenu('research');
                  }
                }}
              >
                <span>Research Areas</span>
                {/* Decorative icon hidden from screen readers */}
                <svg aria-hidden="true" className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'research' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* MEGAMENU PANEL */}
              {openMenu === 'research' && (
                <div
                  className="absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 text-[#020403]"
                  role="menu"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3 gap-8">
                    
                    {/* COLUMN 1 */}
                    <div>
                      {/* Bypassing the H4/H5 ban by using a styled paragraph tag with an ID */}
                      <p id="nav-col-focus" className="font-bold text-[#0c2753] mb-4 text-lg uppercase tracking-wider">
                        Focus Areas
                      </p>
                      {/* Tying the links to the paragraph ID for screen readers */}
                      <ul aria-labelledby="nav-col-focus" className="space-y-3">
                        <li role="none">
                          <Link href="/ccus" role="menuitem" className="block hover:text-[#2D928D] focus:text-[#2D928D] focus:outline-none focus:ring-2 focus:ring-[#78291c] rounded-sm transition-colors">
                            Carbon Capture (CCUS)
                          </Link>
                        </li>
                        <li role="none">
                          <Link href="/reservoir" role="menuitem" className="block hover:text-[#2D928D] focus:text-[#2D928D] focus:outline-none focus:ring-2 focus:ring-[#78291c] rounded-sm transition-colors">
                            Reservoir Sweep Improvement
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Additional columns would go here... */}
                    
                  </div>
                </div>
              )}
            </li>

            {/* A Standard, Non-Megamenu Link for comparison */}
            <li role="none">
              <Link 
                href="/staff" 
                role="menuitem" 
                className="hover:text-[#2D928D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#78291c] rounded-md px-3 py-2 font-medium"
              >
                Staff Directory
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
