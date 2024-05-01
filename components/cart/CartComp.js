import React from "react";
import Title from "../common/Title";
import Card from "./Card";
import Button from "../common/Button";

const cartData = [
  { service: "Office Setup" },
  { service: "Leadership Hiring" },
  { service: "Team Building" },
  { service: "Third-party Arrangement" },
  { service: "Consultancy" },
];

const CartComp = () => {
  return (
    <React.Fragment>
      <div className="m-[40px]">
        <Title title={"Cart"} />

        <div className="flex">
          <div>
            {cartData.map((cart, index) => (
              <React.Fragment key={index}>
                <div className="mb-8">
                  <Card service={cart.service} />
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="ml-20">
            <div className="mb-10">
              <span className="font-bold">Order Summary : 200</span>
            </div>
            <div  className="mb-10">
              <span  className="font-bold">Delivery Cost : 100</span>
            </div>
            <div className="mb-10">
              <span className="font-bold">Sub Total : 300 </span>
            </div>
            <div>
              <span className="font-bold">Grand Total : 300</span>
            </div>
            <div>
              <Button
                text={"Proceed to Checkout"}
                clasName="w-[200px] h-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartComp;
