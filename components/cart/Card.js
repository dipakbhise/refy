import React from "react";

const Card = ({service}) => {
  return (
    <React.Fragment>
      <div className="w-[920px] h-[236px] border-2 border-[#DADADA] flex items-center">
        <div>
          <img
            src={`https://source.unsplash.com/720x460/?${service}`}
            className="w-[297px] h-[196px] m-4"
          />
        </div>
        <div>
          <span className="font-bold">{service}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
