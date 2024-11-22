import React from "react";
import Image from "next/image";
import { WorkSans } from "../fonts";

import Logo from "../../../public/work/logo.png";

export default function Footer() {
  return (
    <div className=" flex flex-col bg-black w-full h-[300px] py-[20px] px-[40px] text-white">
      <div className="w-[95%] mx-auto h-[0.5px] bg-[#D9D9D95f]"></div>
      <div className="w-[95%] mx-auto gap-[40px] flex flex-col md:flex-row justify-between items-center h-full">
        <div className="flex flex-col gap-[10px] items-center md:items-start">
          <div className="flex gap-[7px] items-center mb-[25px] ">
            <Image className="w-[50px]" src={Logo} alt=""></Image>
            <span className={`text-[27px] ${WorkSans.className}`} >glint</span>
          </div>
          <div className=" text-[17px] sm:text-[20px] text-center">@2024 glint4u All Rights Reserved</div>
          <div className="font-thin sm:text-[17px] text-[15px] ">we make tech feel better</div>
        </div>
        <div className="flex gap-[50px] pb-[30px]">
          <div>
            <span className="font-thin text-[13px]">MAIN</span>
            <ul className="flex flex-col gap-[40px] text-[17px] sm:text-[20px]"> 
              <li>About Us</li>
              <li>Work</li>
            </ul>
          </div>
          <div>
            <span className="font-thin text-[13px]">CONTACT</span>
            <ul className="flex flex-col gap-[40px] text-[17px] sm:text-[20px]"> 
              <li>Linkedin <i class="fa-solid fa-square-arrow-up-right"></i></li>
              <li>Instagram <i class="fa-solid fa-square-arrow-up-right"></i></li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  );
}
