import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <AboutUs/>
      <Footer />
    </React.Fragment>
  );
};

export default About;
