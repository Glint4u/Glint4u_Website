"use client";
import React from "react";
import { WavyBackground } from "../../ui/WavyBackground";

export function WavyBackgroundDemo() {
    return (
        (<WavyBackground className="mx-auto min-h-screen flex flex-col justify-center items-center w-[85%]">
            <p
                className=" text-[7vw] leading-[8vw] md:leading-[80px] md:text-[70px] text-white font-bold inter-var text-center">
                Curious about our projects? 
            </p>
            <p
                className=" text-[5.5vw] leading-[6.5vw] md:leading-[60px] md:text-[50px] mt-4 text-white font-normal inter-var text-center">
                Stay tuned for the reveal!
            </p>
        </WavyBackground>)
    );
}
