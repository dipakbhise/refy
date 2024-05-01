import React from "react";
import Title from "./Title";
import Form from "./Form";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="mx-[20px]">
        <Title title={"Contact Us"} />
        <Form />
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
