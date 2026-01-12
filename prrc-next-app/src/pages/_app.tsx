import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/dashboard/Navbar';
import Footer from '../components/dashboard/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
