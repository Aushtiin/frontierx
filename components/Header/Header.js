import React, { useState } from "react";
import styles from "../../styles/Header.module.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search-icon.svg";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`z-10 fixed w-[100vw] bg-bg100 flex justify-center px-4 h-[90px]`}
      >
        <div className="flex items-center justify-between container ">
          <Image src={logo} alt="logo" />
          <div
            className={`${styles.rightContainer} ml-auto flex content-center`}
          >
            <div
              className={`flex content-center px-[1em] py-[0.8em] mr-[1em] max-w-[600px] bg-inputBg w-[50vw] rounded-md`}
            >
              <Image src={search} alt="search-icon" width="12px" />
              <input
                className={`text-white w-[100%] bg-[transparent] text-xs ml-2 focus:outline-0`}
                type="text"
                placeholder="Lorem Ipsum"
              />
            </div>
            <div className="flex content-center">
              <span
                className={`inline-block text-white text-xs p-[0.5em] mr-[1em] cursor-pointer self-center hover:bg-inputBg hover:rounded`}
              >
                Lorem
              </span>
              <span
                className={`inline-block text-white text-xs p-[0.5em] mr-[1em] cursor-pointer self-center hover:bg-inputBg hover:rounded`}
              >
                Lorem
              </span>
              <span
                className={`inline-block text-white text-xs p-[0.5em] cursor-pointer self-center hover:bg-inputBg hover:rounded`}
              >
                Lorem
              </span>
            </div>
          </div>
          <div className={`ml-auto ${styles.mobileRightContainer}`}>
            <i
              onClick={() => setOpen(!open)}
              className={`${
                open ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              } text-xl text-white`}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.mobileMenu} w-[100vw] bg-bg100 mt-[75px] z-10 absolute ${open ? styles.open : ""} p-2`}>
        <div className="flex-col flex">
          <div
            className={`flex content-center px-[1em] py-[0.8em] w-full rounded-md bg-inputBg mb-2`}
          >
            <Image src={search} alt="search-icon" width="12px" />
            <input
              className={`ml-2 text-white w-full bg-[transparent] text-xs focus:outline-0`}
              type="text"
              placeholder="Lorem Ipsum"
            />
          </div>
          <span
            className={`inline-block text-white text-xs p-[0.5em] mr-[1em] cursor-pointer mb-[4px] hover:bg-inputBg hover:rounded`}
          >
            Lorem
          </span>
          <span
            className={`inline-block text-white text-xs p-[0.5em] mr-[1em] mb-[4px] cursor-pointer hover:bg-inputBg hover:rounded`}
          >
            Lorem
          </span>
          <span
            className={`inline-block text-white text-xs p-[0.5em] cursor-pointer mb-[4px] hover:bg-inputBg hover:rounded`}
          >
            Lorem
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
