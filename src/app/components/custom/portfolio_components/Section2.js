"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3DCard";
import Link from "next/link";

import ShirjiEducationImage from "../../../../../public/projects/ShrijiEducationProject.png"
import BurgerBistroImage from "../../../../../public/projects/BurgerBistroProject.png"
import AWSCCImage from "../../../../../public/projects/AWSCCProject.png"



export function ThreeDCardDemo() {
    const projects = [
        {
            image: ShirjiEducationImage,
            title: "Shirji Education",
            description: " Empowering learning with technology! We designed a user-friendly website for Shriji Education to showcase their services, programs, and achievements, enhancing their online presence..",
            url: "https://shriji-education-ten.vercel.app/"
        },
        {
            image: BurgerBistroImage,
            title: "Burger Bistro",
            description: "We created a feature-rich web app for Burger Bistro, enabling customers to easily book their meals, order food, and track orders live for a seamless experience",
            url: "https://burgerbistro.vercel.app/"
        },
        {
            image: AWSCCImage,
            title: "AWS Cloud CLUB SOU",
            description: " We built a dynamic website for our college's AWS Community, enabling them to share updates on upcoming events, courses, and resources, fostering collaboration and growth.",
            url: "https://awscc.vercel.app/"
        },
    ]
    return (
        <div className="w-[85%] m-auto flex flex-wrap justify-center items-start gap-[40px] py-[50px]">
            {

                projects.map((item, index) => (

                    <CardContainer className="inter-var  ">
                        <CardBody
                            className="bg-gray-50 relative group/card cursor-pointer  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white">
                                {item.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300">
                                {item.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={item.image}
                                    height="1000"
                                    width="1000"
                                    loading="lazy"
                                    className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={item.title} />
                            </CardItem>
                            <div className="flex justify-end items-center mt-20">
                                <Link href={item.url} target="_blank">
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                                        Visit
                                    </CardItem>
                                </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))
            }
        </div>
    );
}
