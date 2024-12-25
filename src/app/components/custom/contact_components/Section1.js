import React from 'react'

export default function Section1() {
  return (
    <div className='w-[85%] m-auto min-h-[500px] bg-black h-fit pt-[140px] pb-[50px]'>
        <div className='text-center'>
            <div className='unique-text text-[30px] md:text-[50px] font-medium'>Get in Touch with Us</div>
            <div className='text-[#6E6E6E] text-[15px] md:text-[20px] font-normal'>
            We're here to help, anytime you need us.
            </div>
        </div>
        <div>
            <div className=' gap-[20px] flex flex-col justify-center p-[15px] md:p-[25px] sm:min-w-[400px] w-[100%] sm:w-[500px] m-auto border-[1px] border-[#6E6E6E] min-h-[500px] h-fit rounded-[10px] mt-[50px]'>
                <div>
                    <div className='text-[#ffffff] text-[25px] font-semibold'>
                        Welcome to glint
                    </div>
                    <div className='text-[#6E6E6E] text-[15px] font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus porro maxime vel alias ipsum.
                    </div>
                </div>

                <form action="" className='flex flex-col gap-[30px] text-[#9e9e9e] '>
                    <div className='flex flex-col sm:flex-row justify-between w-full gap-[30px] '>
                        <div className='flex flex-col w-full gap-[8px]'>
                            <label htmlFor="">First Name</label>
                            <input placeholder='Tyler' className='text-[16px] border-[#ffffff4c] focus:border-[#ffffff8e] text-[#ffffff89] font-normal w-full bg-[#27272A] border-[1px] outline-none h-[50px] rounded-[8px] px-[10px] ' type="text" />
                        </div>
                        <div className='flex flex-col w-full gap-[8px]'>
                            <label htmlFor="">Last Name</label>
                            <input placeholder='Durden' className='text-[16px] border-[#ffffff4c] focus:border-[#ffffff8e] text-[#ffffff89] font-normal w-full bg-[#27272A] border-[1px] outline-none h-[50px] rounded-[8px] px-[10px] ' type="text" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <label htmlFor="">What Service Are You Interested In?</label>
                        <select className='text-[16px] border-[#ffffff4c] text-[#ffffff89] focus:border-[#ffffff8e] font-normal w-full bg-[#27272A] border-[1px] outline-none h-[50px] rounded-[8px] px-[10px] ' name="" id="">
                            <option value="Select a Service">Select a Service</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Static Website Development">Static Website Development</option>
                            <option value="Dynamic Website Development">Dynamic Website Development</option>
                            <option value="API Development">API Development</option>
                            <option value="DevOps">DevOps</option>
                            <option value="SEO">SEO</option>
                            <option value="IT Consulting">IT Consulting</option>
                            <option value="Web Hosting">Web Hosting</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <label htmlFor="">Your Message</label>
                        <textarea className='text-[16px] border-[#ffffff4c] focus:border-[#ffffff8e] text-[#ffffff89] font-normal w-full bg-[#27272A] border-[1px] outline-none rounded-[8px] p-[10px]  resize-none' placeholder='Your message'  name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" className='text-[16px] border-[#ffffff4c] border-[1px] md:text-[18px] flex justify-center items-center h-[50px] rounded-[8px] w-full mx-auto bg-[#18181A]'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
