import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <div className="bg-primary-darkVoilet w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] text-center">
        <img
          src="images/bg-boost-mobile.svg"
          alt=""
          className="w-screen md:hidden h-[18.75rem]"
        />
        <img
          src="images/bg-boost-desktop.svg"
          alt=""
          className="w-screen hidden md:flex h-[15.625rem]"
        />
        <BoostLinks />
      </div>
      <Footer />
    </>
  );
}

export default App;