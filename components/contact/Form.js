"use client";
import Image from "next/image";
import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const Form = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    const payload = { firstname: name, lastname: lastname, email: email };

    try{
      const res = await fetch("api", {
        method: "POST",
        body: JSON.stringify(payload),
      });
    }catch{(error)=>{console.log("error",error)}}


  };
  return (
    <React.Fragment>
      <div className="flex justify-between my-6">
        <div className="flex flex-col mt-4">
          <div className="w-[90%] mb-4">
            <span className="text-[18px] font-thin text-start leading-[30px] text-[#5A5A5A]">
              Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sed proin
              metus.
            </span>
          </div>

          <form onSubmit={(e) => postData(e)}>
            <div>
              <Input title={"Name"} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="my-4">
              <Input
                title={"Last Name"}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <Input
                title={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button text={"Submit"} type={"submit"} />
          </form>
        </div>

        <div>
          <Image src={"/form.svg"} width={680} height={449} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
