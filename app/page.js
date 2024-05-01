import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import TeamBuilding from "@/components/TeamBuilding";
import ServicesComp from "@/components/Services";
import Revolution from "@/components/Revolution";

const Test = () => {
  return (
    <React.Fragment>
      <div className={`${styles.top}`}>
        <Navbar />
        <Banner />
      </div>
      <TeamBuilding/>
      <ServicesComp/>
      <Revolution/>
      <Footer />
    </React.Fragment>
  );
};

export default Test;
