'use client'
import React from "react";

const Button = ({ text, onclick }) => {
  return (
    <div className="mt-[30px]">
      <button
        className="bg-gradient-to-r from-[#18B0E9] to-[#0D80DF] w-[156px] h-[48px] rounded-[24px] text-white font-extrabold text-[16px] hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:bg-white hover:text-violet-600 hover:border-2 hover:border-violet-600 hover:border-solid ease-linear delay-50"
        onClick={() => onclick()}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
