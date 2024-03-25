import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ServicesSection from "../components/services/ServicesSection";
import TestimonialsSection from "../components/testimonial/TestimonialsSection";

function Service() {
    return (
      <>
        <Navbar/>
        <ServicesSection/>
        <TestimonialsSection/>
        <Footer/>
      </>
    );
  }
  
  export default Service;