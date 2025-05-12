import React from "react";
import "../styles/globals.css";
import Navbar from "../../components/dashboard/Navbar";
import Footer from "../../components/dashboard/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
