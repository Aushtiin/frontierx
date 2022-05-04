import Image from "next/image";
import React from "react";
import styles from "../styles/Body.module.css";
import backdrop from "../assets/header.svg";
import avatar from "../assets/avatar.svg";
import vector from "../assets/vector.svg";
import vector2 from "../assets/vector2.svg";
import vector3 from "../assets/vector3.svg";
import vector4 from "../assets/vector4.svg";
import share from "../assets/share.svg";
import discord from "../assets/discord.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import help from "../assets/help.svg";

const Body = () => {
  return (
    <div className={`${styles.body} bg-bodyBg p-[1em] pt-[8em] bg-[length:1000%]`}>
      <div className={`relative flex justify-center rounded`}>
        <Image src={backdrop} alt="backdrop" className="rounded" />
        <div className={`${styles.avatar} absolute bottom-[-57px] flex justify-center w-full`}>
          <Image src={avatar} alt="avatar" className={`${styles.avi}`} />
        </div>
      </div>
      <div className={`${styles.midSection} flex flex-col mt-14 mb-20`}>
        <h1 className={`${styles.headerText} text-white text-[45px] font-bold mt-2 mb-2`}>
          Lorem ipsum
        </h1>
        <span className={`text-subText font-normal text-base mb-2`}>
          Created by: <span className="text-[#f13348]">Lorem ipsum</span>
        </span>
        <span className="text-white text-sm font-bold">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </span>
        <div className={`${styles.tabcontainer} flex mt-6 items-center`}>
          <div
            className={`bg-box hover:bg-bg100 flex items-center justify-center p-2 px-4 rounded mr-4 cursor-pointer w-[184px]`}
          >
            <Image src={vector} alt="vector" />
            <span className={`text-subText  text-[15px] ml-2`}>Lorem ipsum</span>
          </div>
          <div
            className={`bg-box hover:bg-bg100 flex items-center p-2 px-4 rounded mr-4 cursor-pointer w-[184px] justify-center`}
          >
            <Image src={vector2} alt="vector" />
            <span className={`text-subText  text-[15px] ml-2`}>Lorem ipsum</span>
          </div>
          <div className={`bg-box hover:bg-bg100 flex items-center p-2 px-4 rounded cursor-pointer w-[184px] justify-center`}>
            <Image src={vector3} alt="vector" />
            <span className={`text-subText  text-[15px] ml-2`}>Lorem ipsum</span>
          </div>
        </div>
      </div>
      <div className={`${styles.bottomSection} flex justify-center`}>
        <div className={`${styles.firstBox} w-[600px] h-full rounded bg-boxBg p-8`}>
          <div className="flex justify-between mb-5">
            <div className="flex">
              <Image src={vector2} alt="vector" />
              <span className={`text-base text-subText  ml-2`}>Lorem ipsum</span>
            </div>
            <Image src={vector4} alt="vector" />
          </div>
          <div className={` leading-3 text-start mb-10 `}>
            <span className={`text-sm text-white font-normal`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              assumenda, reprehenderit harum amet eaque itaque accusamus ipsa
              earum, ad sunt nihil voluptas commodi non illum praesentium?
              Consequatur asperiores nesciunt vitae!
            </span>
          </div>
          <div className="flex flex-col mb-8">
            <div
              className={`${styles.shareContainer} w-[20em] flex justify-between mb-6`}
            >
              <div className="flex items-center">
                <Image src={share} alt="vector" height="18px" />
                <span className="text-sm ml-2 text-default-red">
                  Loremipsum.com
                </span>
              </div>
              <div className="flex items-center">
                <Image src={discord} alt="vector" height="18px" />
                <span className="text-sm ml-2 text-default-red">
                  @Loremipsum
                </span>
              </div>
            </div>
            <div className={`${styles.shareContainer} w-[20em] flex justify-between`}>
              <div className="flex items-center">
                <Image src={insta} alt="vector" height="18px" />
                <span className="text-sm ml-2 text-default-red">
                  Loremipsum.com
                </span>
              </div>
              <div className="flex items-center">
                <Image src={twitter} alt="vector" height="18px" />
                <span className="text-sm ml-2 text-white">@Loremipsum</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.sectioncontainer} w-[600px] flex flex-col`}>
          <div className={`${styles.SecondBox} bg-boxBg rounded bg-bg100 p-8 mb-8`}>
            <div className="flex justify-between mb-5">
              <div className="flex">
                <Image src={vector2} alt="vector" />
                <span className={`text-base text-subText ml-2 mr-1`}>
                  Lorem ipsum
                </span>
                <Image src={help} alt="vector" />
              </div>
              <Image src={vector4} alt="vector" />
            </div>
            <div
              className={`${styles.midBox} h-[350px] grid grid-cols-3 auto-cols-auto gap-3 grid-rows-layout`}
            >
              <div className="flex flex-col text-center  justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">
                  Accessories & Ears
                </span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">9%</span>
              </div>
              <div className="flex flex-col text-center  justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">Arms</span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">15%</span>
              </div>
              <div className="flex flex-col text-center  justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">Background</span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">2%</span>
              </div>
              <div className="flex flex-col text-center  justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">Eye</span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">32%</span>
              </div>
              <div className="flex flex-col text-center  justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">Glasses</span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">3%</span>
              </div>
              <div className="flex flex-col text-center  justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">
                  Heair & Hats
                </span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">2%</span>
              </div>
              <div className="flex flex-col text-center justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">Head</span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">92%</span>
              </div>
              <div className="flex flex-col text-center   justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">
                  Legs & Clothes
                </span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">9%</span>
              </div>
              <div className="flex flex-col text-center  justify-center items-center bg-bg100 text-white p-3 rounded">
                <span className="text-xs mb-1 text-[#8E8B8F]">Mouth</span>
                <span className="font-bold mb-1">Lorem ipsum</span>
                <span className="text-xs text-[#8E8B8F]">46%</span>
              </div>
            </div>
          </div>
          <div className={`${styles.bottomBox} max-w-[600px] min-w-[auto] rounded bg-boxBg py-6 px-8 mb-8`}>
            <div className="flex justify-between">
              <div className="flex">
                <Image src={vector2} alt="vector" />
                <span className={`text-base text-subText ml-2 mr-1`}>
                  Lorem ipsum
                </span>
              </div>
              <Image src={vector4} alt="vector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
