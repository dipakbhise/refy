import { teamBuildingData } from "@/config/utils";
import Image from "next/image";
import React from "react";

const TeamBuilding = () => {
  return (
    <React.Fragment>
      <div className="m-[20px]">
        <div className="flex justify-center items-center my-[30px] flex-col">
          <div>
            <span className="text-[50px] font-bold">Team Building</span>
          </div>
          <div>
            {" "}
            <Image src={"/title-line.svg"} width={339} height={38} />
          </div>
        </div>

        <div>
          {teamBuildingData.map((item, index) => (
            <React.Fragment key={index}>
              <div className={`flex justify-between items-center ${index % 2 != 0 && 'flex-row-reverse'} mt-10 flex-wrap`}>
                <div><Image src={item.imageUrl} width={600} height={493}/></div>
                <div className={` ${index % 2 != 0 ? 'ml-[10%]':'mr-[10%]'}`}>
                    <div><span className="text-[70px] text-[#D9D9D9]">{index + 1}</span></div>
                    <div className="my-6"><span className="text-[32px] font-bold">{item.title}</span></div>
                    {item.highlight.map((point, ind)=>(
                        <React.Fragment key={ind}>
                            <div>
                                <li className="text-[18px] text-[#5A5A5A] leading-[38.73px]">{point}</li>
                            </div>

                        </React.Fragment>
                    ))}
                    {/* <div><span className="text-[70px] text-[#D9D9D9]">{index + 1}</span></div> */}

                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamBuilding;
