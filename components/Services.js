import Image from "next/image";
import React from "react";

const ServicesComp = () => {
  return (
    <React.Fragment>
      <div className="mx-[20px] my-[50px]">
        <div className="flex justify-center my-[30px] flex-col">
          <div>
            <span className="text-[50px] font-bold">Services</span>
          </div>
          <div>
            {" "}
            <Image src={"/title-line.svg"} width={216} height={24} />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex flex-col w-[45%] md-[50%] mr-[40px] mt-[60px] flex-wrap">
            <div>
              <span className="text-[#5A5A5A] text-[18px] leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br /><br />

                Lorem ipsum dolor sit amet consectetur. In eget facilisi porta
                amet tincidunt sed tempor. Morbi habitant erat vitae odio.
                Maecenas orci pellentesque sapien id non velit adipiscing mi.
                Eget ultrices viverra duis ut bibendum neque penatibus tempus
                justo.
              </span>
            </div>

            <div className="w-[680px] h-[680px] bg-[#EAF4FF] mt-[40px] rounded-3xl flex flex-col justify-center items-center p-[20px]">
              <div className="flex flex-col justify-center items-center">
                 ̰ <Image src={"/setup.svg"} width={497} height={300} />
                <div className="flex justify-center">
                  <span className="text-[32px] font-bold my-[20px] leading-[38.73px] text-[#333333]">
                    Setup office
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className="text-[18px] font-thin text-center leading-[30px] text-[#5A5A5A] w-[75%]">
                  Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna sed gravida sed elementum amet.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
               ̰ <Image src={"/payroll.svg"} width={497} height={300} />
              <div className="flex justify-center">
                <span className="text-[32px] font-bold my-[20px] leading-[38.73px] text-[#333333]">
                Payroll Management
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-[18px] font-thin text-center leading-[30px] text-[#5A5A5A] w-[70%]">
                Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna sed gravida sed elementum amet.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[50%] sm-w[100%] md-[50%] items-center flex-wrap">
            <div className="flex flex-col justify-center">
               ̰ <Image src={"/thirdparty.svg"} width={497} height={300} />
              <div className="flex justify-center">
                <span className="text-[32px] font-bold my-[20px] leading-[38.73px] text-[#333333]">
                  Third-party Arrangement
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-[18px] font-thin text-center leading-[30px] text-[#5A5A5A]">
                  Vendors, Cafeteria etc.
                  <br /> Lorem ipsum dolor sit amet consectetur. Purus tellus
                  quam
                </span>
              </div>
            </div>

            <div className="w-[680px] h-[680px] bg-[#EAF4FF] mt-[40px] rounded-3xl flex flex-col justify-center items-center p-[20px] ">
              <div className="flex flex-col justify-center  items-center">
                 ̰ <Image src={"/consultancy.svg"} width={497} height={300} />
                <div className="flex justify-center">
                  <span className="text-[32px] font-bold my-[20px] leading-[38.73px] text-[#333333]">
                  Consultancy
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className="text-[18px] font-thin text-center leading-[30px] text-[#5A5A5A] w-[75%]">
                  Optimize cost, Execution strategy, Streamlining business Lorem ipsum dolor sit amet consectetur purus tellus quam
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesComp;
