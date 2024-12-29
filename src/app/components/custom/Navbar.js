"use client";
import React, { useState } from 'react';
import Logo from "../../../../public/logo.svg"
import Image from 'next/image'
import Link from 'next/link';
import { InterVariable } from '@/app/fonts'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className='fixed w-full top-[40px] z-[10000]'>
      <div className={` ${navOpen ? "pb-[30px] h-[330px]" : "h-[70px]"} md:h-[70px] backdrop-blur-[20px] transition-half-second nav-bg w-[85%] m-auto border-[#ffffff1c] border-[1.3px] px-[3%] rounded-[20px] overflow-hidden `}>

        <div className='flex justify-between items-center w-full h-[70px]'>
          <div>
            <Link href="/"  onClick={() => { setNavOpen(false) }}>
              <Image className='w-[110px]' alt='Logo' src={Logo} />
            </Link>
          </div>

          <div className=' '>
            <ul className='hidden md:flex items-center gap-[3.5vw] '>
              <Link href="/about">
                <li className={`nav-text `}>About</li>
              </Link>
              {/* <Link href={"/service"} >
              <li className={`nav-text `}>Services</li>
              </Link> */}
              <Link href="/portfolio">
                <li className='nav-text'>Portfolio</li>
              </Link>
              <Link href="/pricing">
                <li className={`nav-text `}>Pricing</li>
              </Link>
              <Link href={"/contact"} >
              <li className={` cursor-pointer w-[90px] h-[35px] bg-white rounded-[10px] flex justify-center items-center text-black ${InterVariable.className} `}>Contact</li>
              </Link>
            </ul>

            <div className={`flex md:hidden z-[1000] cursor-pointer transition-half-second gap-[6px] flex-col bg-[#EBFF00] w-[45px] h-[45px] rounded-[10px] items-center justify-center`} onClick={() => { setNavOpen(!navOpen) }} >
              <span className={`flex w-[22px] h-[2px] bg-black trans ${navOpen ? " origin-top-left translate-x-[4px] rotate-[45deg] " : ""}  `}></span>
              <span className={` ${navOpen ? "opacity-0" : "opacity-100"} trans flex w-[22px] h-[2px] bg-black`}></span>
              <span className={`flex w-[22px] h-[2px] bg-black trans ${navOpen ? " origin-bottom-left translate-x-[4px] -rotate-[45deg] " : ""} `}></span>
            </div>
          </div>
        </div>

        <div className=' flex flex-col md:hidden w-full text-white pt-[30px] '>
          <ul className='flex flex-col items-center gap-[15px]'>
            <Link href="/about" onClick={() => { setNavOpen(false) }}>
              <li className='nav-text'>About</li>
            </Link>
            {/* <Link href={"/service"} onClick={() => { setNavOpen(false) }}>
            <li className='nav-text'>Services</li>
            </Link> */}
            <Link href="/portfolio"  onClick={() => { setNavOpen(false) }}>
              <li className='nav-text'>Portfolio</li>
            </Link>
            <Link href="/pricing"  onClick={() => { setNavOpen(false) }}>
              <li className='nav-text'>Pricing</li>
            </Link>
            <Link href="contact"  onClick={() => { setNavOpen(false) }}>
            <li className={` cursor-pointer text-black w-[90px] h-[35px] bg-white rounded-[10px] flex justify-center items-center ${InterVariable.className} `}>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>

  )
}