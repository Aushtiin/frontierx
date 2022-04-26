import React, { useState } from "react";
import styles from "../../styles/Header.module.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search-icon.svg";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`${styles.header} flex justify-center py-4 p-8`}>
        <div className="flex items-center justify-between container ">
          <Image src={logo} alt="logo" width="100%" />
          <div
            className={`${styles.rightContainer} ml-auto flex content-center`}
          >
            <div className={`flex content-center ${styles.inputGroup}`}>
              <Image src={search} alt="search-icon" width="12px" />
              <input
                className={`${styles.input} ml-2`}
                type="text"
                placeholder="Lorem Ipsum"
              />
            </div>
            <div className="flex content-center">
              <span className={`${styles.link}`}>Lorem</span>
              <span className={`${styles.link}`}>Lorem</span>
              <span className={`${styles.link}`}>Lorem</span>
            </div>
          </div>
          <div className={`ml-auto ${styles.mobileRightContainer}`}>
            <i
              onClick={() => setOpen(!open)}
              className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.mobileMenu} ${open ? styles.open : ""} p-2`}>
        <div className="flex-col flex">
          <div className={`flex content-center ${styles.inputGroup} mb-2`}>
            <Image src={search} alt="search-icon" width="12px" />
            <input
              className={`${styles.input} ml-2`}
              type="text"
              placeholder="Lorem Ipsum"
            />
          </div>
          <span className={`${styles.link}  mb-2`}>Lorem</span>
          <span className={`${styles.link}  mb-2`}>Lorem</span>
          <span className={`${styles.link}`}>Lorem</span>
        </div>
      </div>
    </>
  );
};

export default Header;
