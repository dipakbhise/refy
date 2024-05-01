import ContactUs from "@/components/contact/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
