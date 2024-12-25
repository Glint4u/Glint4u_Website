import React from 'react'
import Image from 'next/image'
import InteractiveHoverButton from '../../ui/AnimatedButton'
import Team from "../../../../../public/about/Team.png"

export default function Section3() {
    return (
        <div className='w-[85%] m-auto min-h-[400px] h-fit py-[50px]'>
            <div className='text-[#ffffff3b] text-[23px]'>Team</div>
            <div className='w-full h-[1px] bg-[#ffffff21]'></div>
            <div className=' w-full flex flex-col md:flex-row justify-between items-center gap-[30px] py-[50px]'>
                <div className='md:w-[60%]'>
                    <div className='text-[#ffffff] text-[25px] md:text-[30px] leading-[30px] md:leading-[35px] mb-[30px] '>
                        We care deeply about the quality of our work
                    </div>
                    <div className='text-[#ffffffc0] text-[14px] md:text-[17px] mb-[30px]'>
                        Glint has always embraced a flexible, distributed work model. Today, our dynamic team spans across multiple continents, united by a shared commitment to innovation, seamless execution, and a passion for design excellence. We are creators at our core, driven by a relentless pursuit of quality in every project we undertake. From the big picture to the smallest details, we take pride in delivering exceptional digital experiences that make a lasting impact.
                    </div>
                    <div>
                        <InteractiveHoverButton />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:w-[50%]'>
                    <Image className='max-w-[500px] mb-[30px] w-[100%] ' alt="team" src={Team} />
                    <div className='text-[#ffffff88] w-[90%] m-auto text-[14px] md:text-[17px] '>
                        glint Co-founders Jaiman Soni, Swabhiman Nanda, Jenish Soni, Vimarsh Tiwari.
                    </div>
                </div>
            </div>
        </div>
    )
}
