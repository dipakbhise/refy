import AboutUs from "@/components/about/AboutUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Title from "@/components/common/Title";
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
