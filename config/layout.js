import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/common/layout/navbar"), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(
  () => import("../components/common/semantic/footer"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
