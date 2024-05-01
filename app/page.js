import Banner from "@/components/home/Banner";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import TeamBuilding from "@/components/home/TeamBuilding";
import ServicesComp from "@/components/home/Services";
import Revolution from "@/components/home/Revolution";

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
