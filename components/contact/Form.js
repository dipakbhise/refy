import Image from "next/image";
import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const Form = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between my-6">
        <div className="flex flex-col mt-4">
          <div className="w-[90%] mb-4">
            <span className="text-[18px] font-thin text-start leading-[30px] text-[#5A5A5A]">
            Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sed proin metus.
            </span>
          </div>

          <div ><Input title={"Name"} /></div>
          <div className="my-4"><Input title={"Last Name"} /></div>
          <div><Input title={"Email"} /></div>
          <Button text={"Submit"}/>
        </div>

        <div>
          <Image src={"/form.svg"} width={680} height={449} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
