import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import ZenFitLogo from "../assets/images/logo.webp";

export const Footer = () => {
  return (
    <div className="w-full px-4 h-max bg-transparent flex flex-col pt-[100px] pb-[20px] gap-4">
      <div className="flex flex-col lg:flex-row w-full h-max">
        <div className="flex w-full lg:w-[40%] h-[40dvh] flex-col gap-4">
          <img src={ZenFitLogo} alt="" className="h-[30%] w-[50%] object-contain"  style={{objectPosition:"-0px"}}/>
          <p className="text-[#a8a8a8] w-[70%] md:w-[60%] text-[15px]">We are the only consultancy specializing in sports centers, fitness boutiques, and personal trainers.</p>
          <span className="flex gap-4">
            <a
              href=""
              className="bg-white rounded-full flex justify-center items-center w-8 h-8"
            >
              <FaPhone />
            </a>
            <a
              href=""
              className="bg-white rounded-full flex justify-center items-center w-8 h-8"
            ><IoMdMail />
            </a>
            <a
              href=""
              className="bg-white rounded-full flex justify-center items-center w-8 h-8"
            >
              <FaWhatsapp />
            </a>
          </span>
        </div>
        <div className="flex w-full lg:w-[60%] h-[30dvh]">
          <div className="flex-1 h-full flex-col gap-4 flex">
            <h1 className="text-[18px] fontFam md:text-[20px] lg:text-[22px] text-white font-medium">Pages</h1>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >Start</NavLink>
              <NavLink
                to="/methods"
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >Methodology</NavLink>
              <NavLink
                to="/about"
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >About Us</NavLink>
              <NavLink
                to="/testimonials"
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >Success stories</NavLink>
              <NavLink
                to="/contact"
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >Contact</NavLink>
            </div>
          </div>
          <div className="flex-1 h-full flex-col gap-4 flex">
            <h1 className="text-[18px] fontFam md:text-[20px] lg:text-[22px] text-white font-medium">Follow us</h1>
            <div className="flex flex-col gap-2">
              <a
                href=""
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >Instagram</a>
              <a
                href=""
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >LinkedIn</a>
            </div>
          </div>
          <div className="flex-1 h-full flex-col gap-4 flex">
            <h1 className="text-[18px] fontFam md:text-[20px] lg:text-[22px] text-white font-medium">Legal</h1>
            <div className="flex flex-col gap-2">
              <NavLink
                to=""
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >Privacy Policy</NavLink>
              <NavLink
                to=""
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >Cookie Policy</NavLink>
              <NavLink
                to=""
                className="text-[13px] md:text-[15px] lg:text-[16px] text-[#d3d3d3] hover:text-[#5286fa] duration-500 ease-in-out"
              >Legal Notice</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-[2px]"></div>
      <div className="w-full flex md:flex-row flex-col justify-center items-center md:justify-start h-[10dvh]">
        <p className="text-[13px] md:text-[14px] lg:text-[15px] text-white">© 2025 ZenFit. All rights reserved.</p>
        <span className="text-[13px] md:text-[14px] lg:text-[15px] text-white cursor-pointer">JFK x MBA</span>
      </div>
    </div>
  );
};
