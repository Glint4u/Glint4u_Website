"use client";
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "../../ui/lamp";

export default function Page3() {
    return (
        <div className='w-[85%] m-auto py-[50px]'>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" bg-gradient-to-b from-cyan-200 to-cyan-600/50 bg-clip-text text-[80px] md:text-[170px]  text-center font-semibold text-transparent"
                >
                    glint

                </motion.h1>
            </LampContainer>
            <div className=' mt-[40px] font-medium text-[20px] md:text-[30px] text-center text-[#737373] '>
                We are a <span className='text-white'> dynamic service-based technology </span> company
            </div>
        </div>
    )
}
