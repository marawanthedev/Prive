import React from "react";
import "./template.scss";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
const Template = (props) => {
  return (
    <div className="template">
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Template;
