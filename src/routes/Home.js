import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import FeatureSection from "../components/feature/FeatureSection";

function Home() {
    return (
      <>
        <Navbar/>
        <Hero/>
        <FeatureSection/>
        <Footer/>
      </>
    );
  }
  
  export default Home;