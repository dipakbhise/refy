import CartComp from "@/components/cart/CartComp";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const Cart = () => {
  return (
    <React.Fragment>
      <Navbar />
      <CartComp />
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
