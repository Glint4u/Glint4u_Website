// "use client";
// import React from "react";
// import { WavyBackground } from "../../ui/WavyBackground";

// export function WavyBackgroundDemo() {
//     return (
//         (<WavyBackground className="mx-auto min-h-screen flex flex-col justify-center items-center w-[85%]">
//             <p
//                 className=" text-[7vw] leading-[8vw] md:leading-[80px] md:text-[70px] text-white font-bold inter-var text-center">
//                 We are free for a limited time!
//             </p>
//             <p
//                 className=" text-[5.5vw] leading-[6.5vw] md:leading-[60px] md:text-[50px] mt-4 text-white font-normal inter-var text-center">
//                 Be the first to grab this opportunity!
//             </p>
//         </WavyBackground>)
//     );
// }

import React from "react";
import { Vortex } from "../../ui/Vortex";
import Link from "next/link";
import { HoverBorderGradient } from "../../ui/HoverBorderGradient";
import { Phone, CalendarCheck, MessageCircleMore ,Info } from "lucide-react";



export function VortexDemoSecond() {
    return (
        (<div
            className="w-full mx-auto rounded-md  h-screen overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={250}
                baseHue={60}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
                <div className="w-[85%] m-auto flex items-center flex-col justify-center  ">
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    For a limited time, the first few clients will receive our services for free!
                    </h2>
                    <p className="text-white text-sm md:text-2xl mt-[15px] text-center">
                        Grab the chance to kickstart your journey with glint now!
                    </p>
                    <p className="flex gap-1 justify-center items-center mt-7 text-gray-400">
                    <Info size={20} />Terms and conditions applied.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <HoverBorderGradient className="shadow-2xl">
                            <Link href="https://cal.com/glint" target="_blank">
                                <span className="flex items-center gap-[10px] whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    <CalendarCheck size={19} /> Book a strategy call
                                </span>
                            </Link>
                        </HoverBorderGradient>
                    </div>
                </div>
            </Vortex>
        </div>)
    );
}
