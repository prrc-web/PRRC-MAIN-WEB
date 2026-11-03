import React from 'react';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '../components/dashboard/Navbar';
import Footer from '../components/dashboard/Footer';

/**
 * Global typeface — Montserrat, replacing Times New Roman.
 *
 * Only the three weights the type system actually uses are loaded, so the
 * hierarchy cannot drift:
 *   800 Extra Bold -> primary headers
 *   500 Medium     -> subheaders, and titles (tags, card labels) in ALL CAPS
 *   400 Regular    -> body
 *
 * next/font self-hosts the font files at build time: no runtime request to
 * Google, no third-party dependency, and automatic fallback metrics so text
 * doesn't reflow on swap.
 *
 * `variable` exposes --font-montserrat for Tailwind's font-sans/font-header
 * stacks; `className` sets the family outright so every descendant inherits it.
 */
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${montserrat.className}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
