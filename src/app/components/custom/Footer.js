import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../../public/logo.svg"

import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className='w-full min-h-[400px] h-fit pt-[50px] footer-bg border-t-[3px] border-[#ffffff1b] '>
            <div className=' w-[85%] min-h-[300px] h-fit m-auto flex flex-col md:flex-row justify-between gap-[30px] '>
                <div className='flex justify-between w-full md:w-[45%]'>
                    <div className='flex flex-col gap-[30px]'>
                        <Image className=' w-[100px] md:w-[150px]' src={Logo} />
                        <div>
                            <ul className='flex text-white gap-[30px]'>
                                <a href="https://www.linkedin.com/company/glint4u" target='_blank' >
                                    <li className='cursor-pointer'><Linkedin size={15} /></li>
                                </a>
                                <a href="https://www.instagram.com/glint4u/" target='_blank' >
                                    <li className='cursor-pointer'><Instagram size={15} /></li>
                                </a>
                                <a href="https://x.com/glint4u" target='_blank' >
                                    <li className='cursor-pointer'><FaXTwitter size={15} /></li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className='flex text-[#ffffff7c] text-[17px]'>
                        <div>
                            <ul className='flex flex-col gap-[20px]'>
                                <Link href="/about">
                                    <li>About</li>
                                </Link>
                                <li>Services</li>
                                <Link href="/portfolio">
                                    <li>Portfolio</li>
                                </Link>
                                <Link href="/pricing">
                                    <li>Pricing</li>
                                </Link>
                                <Link href={"/contact"}>
                                <li>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-[50px] justify-start items-center md:items-start'>
                    <div className=' text-center md:text-start'>
                        <div className='text-white'>Subscribe to our newsletter</div>
                        <div className='text-[#ffffff70]'>Get updates and news in your inbox. No spam.</div>
                    </div>
                    <div className=''>
                        <form action="" className='flex flex-wrap items-center justify-center gap-[20px] pb-[20px] '>
                            <input type="text" className=' text-[#ffffff41] font-normal text-[14px] md:text-[16px] w-[200px] h-[40px] md:w-[250px] md:h-[45px] rounded-[10px] pl-[20px] bg-[#46464641] border-[1px] border-[#ffffff16]' placeholder='glint4u@gmail.com' />
                            <button type="submit" className=' font-medium text-[14px] md:text-[16px] w-[150px] h-[40px] md:w-[150px] md:h-[45px] bg-[#D9D9D9] rounded-[10px]'>Subscribe</button>
                        </form>
                    </div>
                </div>

            </div>

            <div className='text-[#ffffff31] text-[14px] md:text-[17px] w-[85%] h-[100px] m-auto border-t-[2px] border-[#ffffff2a] flex flex-col md:flex-row  justify-center md:justify-between items-center'>
                <div>2024@ All rights reserved by glint </div>
                <div>we make tech feel better.</div>
            </div>


        </div>
    )
}