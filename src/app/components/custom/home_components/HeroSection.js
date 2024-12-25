"use client";
import React from 'react'
import Image from 'next/image';
import { Cover } from '../../ui/cover'
import { HeroHighlight, Highlight } from '../../ui/hero-highlight'
import { motion } from "framer-motion";
import ShimmerButton from '../../ui/shimmer-button';
import { Phone, CalendarCheck, MessageCircleMore } from "lucide-react";
import { HoverBorderGradient } from '../../ui/HoverBorderGradient';

import TrustedPeopleOne from "../../../../../public/home/HeroSection/TrustedPeopleOne.png"
import TrustedPeopleTwo from "../../../../../public/home/HeroSection/TrustedPeopleTwo.png"
import TrustedPeopleThree from "../../../../../public/home/HeroSection/TrustedPeopleThree.png"
import TrustedPeopleFour from "../../../../../public/home/HeroSection/TrustedPeopleFour.png"
import TrustedPeopleFive from "../../../../../public/home/HeroSection/TrustedPeopleFive.png"


const PeopleTrusted = () => {
    return (
        <div className='flex md:flex-row flex-col items-center gap-[10px] md:gap-[30px] justify-center'>
            <div className='flex items-center '>
                <div className='border-[3px] border-[#ffffff] h-[40px] md:w-[45px] w-[40px] md:h-[45px] rounded-full overflow-hidden object-center'>
                    <Image className=' w-[40px] md:w-[45px]' src={TrustedPeopleOne} />
                </div>
                <div className='border-[3px] -ml-[12px] border-[#ffffff] h-[40px] md:w-[45px] w-[40px] md:h-[45px] rounded-full overflow-hidden object-center'>
                    <Image className=' w-[40px] md:w-[45px]' src={TrustedPeopleTwo} />
                </div>
                <div className='border-[3px] -ml-[12px] border-[#ffffff] h-[40px] md:w-[45px] w-[40px] md:h-[45px] rounded-full overflow-hidden object-center'>
                    <Image className=' w-[40px] md:w-[45px]' src={TrustedPeopleThree} />
                </div>
                <div className='border-[3px] -ml-[12px] border-[#ffffff] h-[40px] md:w-[45px] w-[40px] md:h-[45px] rounded-full overflow-hidden object-center'>
                    <Image className=' w-[40px] md:w-[45px]' src={TrustedPeopleFour} />
                </div>
                <div className='border-[3px] -ml-[12px] border-[#ffffff] h-[40px] md:w-[45px] w-[40px] md:h-[45px] rounded-full overflow-hidden object-center'>
                    <Image className=' w-[40px] md:w-[45px]' src={TrustedPeopleFive} />
                </div>
                <div className='border-[3px] flex justify-center items-center text-[15px] font-normal bg-black -ml-[12px] border-[#ffffff] h-[40px] md:w-[45px] w-[40px] md:h-[45px] rounded-full overflow-hidden object-center'>
                    +20
                </div>
            </div>
            <span className='text-[#969696] text-[15px] md:text-[18px] font-normal '>
                People have placed their trust in us.
            </span>
        </div>
    )
}

export default function HeroSection() {
    return (
        <>
            <div className=''>

                <HeroHighlight>
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
                        <div className=' pt-[140px] '>
                            <PeopleTrusted />
                            <div className=' hero-title-text tracking-wide mt-[40px] md:mt-[50px] leading-[13vw] text-[13vw] md:leading-[7.5vw] md:text-[8vw] lg:leading-[120px] lg:text-[120px] font-semibold text-center relative flex flex-col'>
                                <span>We make tech</span>
                                <span>
                                    feel better.
                                    {/* <Cover> <span className='better'> better </span></Cover> */}
                                </span>
                            </div>
                            <div className='m-auto mt-[40px] md:mt-[50px] font-normal flex w-[90%] text-[#e7e7e7cf] tracking-wide text-[15px] md:text-[20px] text-center justify-center '>
                                Tech that feels better, every step of the way.  Simpler solutions, smarter tools, seamlessly human.
                            </div>
                            <div className='flex flex-wrap items-center justify-center text-white mt-[40px] md:mt-[50px] gap-[20px]'>
                                <HoverBorderGradient className="shadow-2xl">
                                    <span className="flex items-center gap-[10px] whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                        <CalendarCheck size={19} /> Book a strategy call
                                    </span>
                                </HoverBorderGradient>
                                <HoverBorderGradient className="shadow-2xl">
                                    <span className="flex items-center gap-[10px] whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                        <MessageCircleMore size={19} /> Chat with us
                                    </span>
                                </HoverBorderGradient>
                            </div>
                        </div>

                    </motion.h1>
                </HeroHighlight>

            </div>
        </>
    )
}
