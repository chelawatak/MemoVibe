import React from "react";
import myicon from "../image/icon.png";

const Footer = () => {
  return (
    <div className="container my-5"  style={{ borderTop: "0.5px solid grey" }}>
      <center className="my-2">
        <img src={myicon} alt="" />
        <span className="cloud mx-1">Memovibe </span>
      </center>

      <center> Made by Aniket Chelawat</center>
      <center>All Rights Reserved.</center>
    </div>
  );
};

export default Footer;
