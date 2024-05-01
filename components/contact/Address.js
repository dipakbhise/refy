import Image from "next/image";
import React from "react";

const Address = () => {
  return (
    <React.Fragment>
      <div className="flex  my-10">
        <div className="w-[40%]">
          <Image src={"/map.svg"} width={680} height={449} />
        </div>
        <div className="ml-10 w-[50%]">
          <div>
            <span className="text-[18px] ">Address: </span>
            <span>
              Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sed proin
              metus. Lorem ipsum dolor sit amet consectetur. Ultrices feugiat
              sed proin metus. Lorem ipsum dolor sit amet consectetur. Ultrices
              feugiat sed proin metus. Lorem ipsum dolor sit amet consectetur.
              Ultrices feugiat sed proin metus.
            </span>
          </div>
          <div className="my-10">
            <span className="text-[18px] ">Phone: </span>
            <a href="tel:+919999999999" className="text-[#8B90B6]">
              Call Now
            </a>
          </div>
          <div>
            <span className="text-[18px] ">Email: </span>
            <a href="mailto:dipakbhise420@gmail.com" className="text-[#8B90B6]">Send email</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Address;
