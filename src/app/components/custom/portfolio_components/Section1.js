"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Cover } from "../../ui/cover";

import { HeroHighlight, Highlight } from "../../ui/hero-highlight";
import { motion } from "framer-motion";
import ShimmerButton from "../../ui/shimmer-button";
import Link from "next/link";
import { Phone, CalendarCheck, MessageCircleMore } from "lucide-react";
import { HoverBorderGradient } from "../../ui/HoverBorderGradient";
import Particles from "../../ui/Particles";

export default function HeroSection() {
  const [color, setColor] = useState("#ffffff");

  return (
    <>
      <div className="min-h-screen h-fit relative">
      <Particles
              className="absolute inset-0 z-0"
              quantity={150}
              ease={100}
              color={color}
              refresh
            />
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto pb-[30px] "
        >
          <div className="pt-[140px] md:pt-[160px] ">
            <div className="unique-text tracking-wide mt-[40px] md:mt-[50px] leading-[10.5 vw] text-[9vw] md:leading-[9.5vw] md:text-[8vw] lg:leading-[100px] lg:text-[80px] font-semibold text-center relative flex flex-col">
              <span className="font-bold">Our work focuses on </span>
              <span className="font-bold">
                meaningful design.
                {/* <Cover> <span className='better'> better </span></Cover> */}
              </span>
            </div>
            <div className="m-auto mt-[40px] md:mt-[50px] font-normal flex w-[90%] text-[#e7e7e7cf] tracking-wide text-[15px] md:text-[20px] text-center justify-center ">
            We prioritize purpose-driven solutions that deliver lasting impact. Our designs align with your core objectives, ensuring sustainable growth.
            </div>
            <div className="flex flex-wrap items-center justify-center text-white mt-[40px] md:mt-[50px] gap-[20px]">
              <HoverBorderGradient className="shadow-2xl">
                <Link href="/">
                  <span className="flex items-center gap-[10px] whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    <CalendarCheck size={19} /> Back to Home
                  </span>
                </Link>
              </HoverBorderGradient>
            </div>

          </div>
        </motion.h1>
      </div>
    </>
  );
}
