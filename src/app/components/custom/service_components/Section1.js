"use client";
import React from "react";
import { Boxes } from "../../ui/BackgroundBoxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
    return (
        (<div
            className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
            <div
                className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="">
                <div className=' hero-title-text tracking-wide mt-[40px] md:mt-[50px] leading-[8vw] text-[8vw] md:leading-[7.5vw] md:text-[8vw] lg:leading-[100px] lg:text-[80px] font-semibold text-center relative flex flex-col'>
                    <span>Delivering Precision Solutions</span>
                    <span>
                    Tailored to Your Needs
                    </span>
                </div>
                <h1 className={cn("md:text-4xl text-xl  relative z-20")}>
                </h1>
            </div>

        </div>)
    );
}
