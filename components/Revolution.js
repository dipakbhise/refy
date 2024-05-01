import Image from "next/image";
import React from "react";
import Button from "./Button";

const Revolution = () => {
  return (
    <React.Fragment>
      <div className="mx-[20px] my-[50px]">
        <div className="flex justify-between">
          <div className="flex my-[30px] flex-col w-[680px]">
            <div>
              <span className="text-[50px] font-bold">
                Let's Revolutionize Your Business
              </span>
            </div>
            <div>
              {" "}
              <Image src={"/title-line.svg"} width={216} height={24} />
            </div>
            <div>
              <li className="text-[18px] text-[#5A5A5A] leading-[38.73px]">
                Ads
              </li>
              <li className="text-[18px] text-[#5A5A5A] leading-[38.73px]">
                Increasing footprints
              </li>
            </div>
            <br/>
            <div>
              <span className="text-[#5A5A5A] text-[18px] leading-[30px]">
                Lorem ipsum dolor sit amet consectetur. In eget facilisi porta
                amet tincidunt sed tempor. Morbi habitant erat vitae odio.
                Maecenas orci pellentesque sapien id non velit adipiscing mi.
                Eget ultrices viverra duis ut bibendum neque penatibus tempus
                justo.
              </span>
            </div>
            <Button text={"Contact Us"}/>
          </div>

          <div>
            <div>
              {" "}
              <Image src={"/revolution.svg"} width={497} height={497} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Revolution;
