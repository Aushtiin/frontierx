import React from "react";
import logo from "../assets/logo2.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-16 bg-[#0d0d0d] flex justify-center items-center">
      <Image src={logo} alt="logo"/>
    </div>
  );
};

export default Footer;
