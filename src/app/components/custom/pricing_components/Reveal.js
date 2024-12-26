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

export function VortexDemoSecond() {
    return (
        (<div
            className="w-full mx-auto rounded-md  h-screen overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
                <div className="w-[85%] m-auto flex items-center flex-col justify-center  ">
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        Limited Time Offer: First Five Clients Free!
                    </h2>
                    <p className="text-white text-sm md:text-2xl max-w-xl mt-[15px] text-center">
                        First five clients enjoy our services free! Grab the chance to kickstart your journey with Glint now!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <Link href="/contact"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                            Contact now
                        </Link>
                    </div>
                </div>
            </Vortex>
        </div>)
    );
}
