"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../../public/logo.svg"
import { toast } from 'react-hot-toast';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() 
{
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email) {
            toast.error("Please enter a valid email.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Subscription successful! Thank you.");
                setEmail('');
            } else {
                toast.error(result.error || "Something went wrong, please try again.");
            }
        } catch (error) {
            toast.error("An error occurred, please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='w-full min-h-[400px] h-fit pt-[50px] footer-bg border-t-[3px] border-[#ffffff1b] '>
            <div className=' w-[85%] p-2 min-h-[300px] h-fit m-auto flex flex-col md:flex-row justify-between gap-[50px] '>
                <div className='flex justify-between w-full md:w-[45%]'>
                    <div className='flex flex-col gap-[30px] items-center'>
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
                            <ul className='flex flex-col gap-[20px] text-center '>
                                <Link href="/about">
                                    <li>About</li>
                                </Link>
                                {/* <Link href={"/service"}>
                                <li>Services</li>
                                </Link> */}
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
                <div className=' flex flex-col gap-[30px] justify-start items-center md:items-start'>
                    <div className=' text-center md:text-start'>
                        <div className='text-white'>Subscribe to our newsletter</div>
                        <div className='text-[#ffffff70]'>Get updates and news in your inbox. No spam.</div>
                    </div>
                    <div className=''>
                        <form onSubmit={handleSubscribe} className='flex flex-wrap items-center justify-center gap-[20px] pb-[20px] '>
                            <input
                                type="email"
                                className=' font-normal text-[14px] md:text-[16px] w-[200px] h-[40px] md:w-[250px] md:h-[45px] rounded-[10px] pl-[20px] bg-[#46464641] border-[1px] border-[#ffffff16]'
                                placeholder='glint4u@gmail.com'
                                value={email}
                                disabled={loading}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className='font-medium text-[14px] md:text-[16px] w-[150px] h-[40px] md:w-[150px] md:h-[45px] bg-[#D9D9D9] rounded-[10px] text-black'
                                disabled={loading}
                            >
                                {loading ? "Subscribing..." : "Subscribe"}
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            <div className='text-[#ffffff6b] text-[14px] md:text-[17px] w-[85%] h-[100px] m-auto border-t-[2px] border-[#ffffff2a] flex flex-col md:flex-row  justify-center md:justify-between items-center'>
                <div>© glint 2024. All rights reserved.</div>
                <div>we make tech feel better.</div>
            </div>


        </div>
    )
}
