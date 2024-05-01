import React from "react";
import Button from "../common/Button";

const Card = ({job}) => {
  return (
    <React.Fragment>
      <div className="w-[1050px] h-[236px] border-2 border-[#DADADA] flex items-center">
        <div>
          <img
            src={`https://source.unsplash.com/720x460/?${job.name}`}
            className="w-[297px] h-[196px] m-4"
          />
        </div>
        <div className="flex flex-col justify-between h-full p-4">
          <div><span className="font-bold">{job.name}</span></div>
          <div><span className="">Locatio: {job.location}</span></div>
          <div><span className="">Type: {job.type}</span></div>
          <div><span className="">Description: {job.desc}</span></div>
          <div><Button text={"Apply Now"}/></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
