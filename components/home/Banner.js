import Image from "next/image";
import React from "react";
import Button from "../common/Button";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center flex-col w-full ml-[40px] h-[75%]">
        <div className="w-[440px] text-[80px] leading-[96.82px]">
          <span className="font-bold">Provide team</span>{" "}
          <span className="font-thin">
            {" "}
            to organizations irrespective of their size
          </span>
        </div>
        <Button text={"Get Started"}/>
        
        {/* <div className='absolute top-0 right-0 h-full '>
                <Image src={"/banner.svg"} width={1532} height={1588}/>
            </div> */}
      </div>
    </React.Fragment>
  );
};

export default Banner;
