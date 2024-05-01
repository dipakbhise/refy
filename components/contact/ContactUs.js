import React from "react";
import Title from "../common/Title";
import Form from "./Form";
import Address from "./Address";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="mx-[40px]">
        <Title title={"Contact Us"} />
        <Form />
        <Address/>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
