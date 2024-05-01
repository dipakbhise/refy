'use client'
import React from "react";
import { footerMenu } from "../config/utils";
import Link from "next/link";

const Footer = () => {

  return (
    <>
      {" "}
      <div className="bg-[#162251] text-white p-4 mx-[20px] rounded-t-2xl flex justify-center ">
        <div className="flex justify-center  items-center w-full">
          {/* <div>
            <span className="md:text-[1rem] text-[0.8rem]">
              © {new Date().getFullYear()} TechieDipak. All rights reserved.
            </span>
          </div> */}
          <div className="flex items-center ">
            {footerMenu.map((item, index) => (
              <div className={`${footerMenu.length != index + 1 && "mr-[10vw]"}  text-[16px] leading-[26px]`} key={index}>
                <Link href={item?.url}>{item?.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
