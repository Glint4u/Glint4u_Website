"use client";

import { MainMenusGradientCard } from "../../ui/AnimatedCard";

export function AnimatedCardDemo() {
    return (
        <>
            <div className="w-[85%] m-auto pt-[50px] pb-[100px]">
                <div className='text-[#ffffff3b] text-[23px]'>Domain Expertise</div>
                <div className='w-full h-[1px] bg-[#ffffff21]'></div>
                <div className="w-full mx-auto flex flex-col md:flex-row items-start justify-between mt-[50px] gap-[30px] ">
                    <div className='text-[#ffffffc0] text-[14px] md:text-[17px] mb-[30px] w-full md:w-[65%]'>
                        We specialize in delivering tailored solutions across a diverse range of industries. Our expertise lies in understanding the unique challenges and opportunities within each domain, allowing us to craft innovative, impactful solutions that drive success.
                    </div>

                    <div className="relative grid grid-cols-1 gap-2 md:grid-cols-2 w-full cursor-pointer  ">
                        <MainMenusGradientCard
                            className="p-4"
                            description="Expertise in web and cloud-based applications."
                            title=""
                        >
                            Technology & Software Development
                        </MainMenusGradientCard>
                        <MainMenusGradientCard
                            className="p-4"
                            description="Designing intuitive, user-friendly interfaces that enhance experiences."
                            title=""
                        >
                            UI/UX Design
                        </MainMenusGradientCard>
                        <MainMenusGradientCard
                            description="Building seamless online shopping experiences."
                            title="E-commerce Solutions"
                        />
                        <MainMenusGradientCard
                            description="Ensuring optimal performance and scalability."
                            title="DevOps & IT Solutions"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
