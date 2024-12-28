import React from "react";
import { Spotlight } from "../../ui/Spotlight";
import Link from "next/link";
import { HoverBorderGradient } from "../../ui/HoverBorderGradient";
import { Phone, CalendarCheck, MessageCircleMore, House } from "lucide-react";


export default function SpotlightPreview() {
    return (
        (<div
            className=" pt-[140px] h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className=" -top-[50px] left-0 md:left-60 md:-top-20" fill="white" />
            <div>

                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-[90px] md:pt-0">
                    <h1
                        className="flex flex-col leading-[11vw] md:leading-[100px] unique-text text-[8vw] md:text-[80px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        <span>We bring precision back</span>
                        <span> to User Experience. </span>
                    </h1>
                    <p
                        className=" w-[85%] m-auto text-[14px] mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                       Where every interaction feels effortless and every design is crafted to perfection. At glint, we focus on the details that matter, delivering a seamless experience that’s as intuitive as it is beautiful.
                    </p>
                </div>
                <div>
                    <div className=' w-[85%] m-auto flex flex-wrap items-center  justify-center text-white mt-[40px] md:mt-[50px] gap-[20px]'>
                        <Link href="https://cal.com/glint" target="_blank">
                        <HoverBorderGradient className="shadow-2xl">
                            <span className="flex items-center gap-[10px] whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                <CalendarCheck size={19} /> Book a strategy call
                            </span>
                        </HoverBorderGradient>
                        </Link>
                        <a href="/">
                            <HoverBorderGradient className="shadow-2xl">
                                <span className="flex items-center gap-[10px] whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    <House size={19} /> Back to home
                                </span>
                            </HoverBorderGradient>
                        </a>
                    </div>
                </div>
            </div>
        </div>)
    );
}
