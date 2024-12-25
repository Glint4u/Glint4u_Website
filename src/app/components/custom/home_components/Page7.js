"use client";
import React from "react";
import { InfiniteMovingCards } from "../../ui/Testimonial";
import MaulikSoni from "../../../../../public/home/Testimonial/MaulikSoni.png";
import SachinMishra from "../../../../../public/home/Testimonial/SachinMishra.png";

export function InfiniteMovingCardsDemo() {
    return (

        <>
            <div>
                <div className=" w-[85%] m-auto pt-[100px]">

                    <div className="unique-text text-[30px] mb-[15px] md:text-[55px] font-semibold leading-[35px] md:leading-[60px]">
                        See what our clients have to say about us.
                    </div>
                    <p
                        className="text-[#a5a5a581] md:text-[20px] text-[15px] w-[95%] md:w-[55%]">
                        Client stories, straight from the source
                    </p>
                </div>

                <div
                    className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </div>
        </>
    );
}

const testimonials = [
    {
        quote:
            "Glint has been an absolute game-changer for us! Its intuitive interface, robust analytics, and seamless collaboration features have elevated the way we approach projects and team management. ",
        name: "Maulik Soni",
        title: "Director, Shriji Education Services",
        image: MaulikSoni,
    },
    {
        quote:
            "They have truly impressed me with its sleek, modern design and efficient backend system. The intuitive, responsive interface and secure, reliable performance make it a standout choice. I highly recommend it for anyone seeking exceptional design and functionality",
        name: "Sachin Mishra",
        title: "Owner, Burger Bistro",
        image: SachinMishra,
    },
];
