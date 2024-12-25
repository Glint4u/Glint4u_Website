"use client";

import Image from "next/image";
import { Tabs } from "../../ui/tabs";


export function TabsDemo() {
    const tabs = [
        {
            title: "Planning",
            value: "Planning",
            content: (
                <div
                    className="w-full h-full rounded-2xl mt-[90px] md:mt-[120px]">
                    {/* <p>Product Tab</p> */}
                    <Image width={1000} height={1000} className="w-full md:w-[85%] m-auto " src={"/home/ProjectFlow/Step1.png"} />
                    {/* <DummyContent image={"/home/ProjectFlow/Step1.png"} /> */}
                </div>
            ),
        },
        {
            title: "UI/UX Design",
            value: "UI/UX Design",
            content: (
                <div
                className="w-full h-full mt-[90px] md:mt-[120px]">
                <Image width={1000} height={1000} className="w-full md:w-[85%] m-auto " src={"/home/ProjectFlow/Step1.png"} />
                    {/* <p>Services tab</p> */}
                    {/* <DummyContent image={"/globe.svg"} /> */}
                </div>
            ),
        },
        {
            title: "Development",
            value: "Development",
            content: (
                <div
                className="w-full h-full mt-[90px] md:mt-[120px]">
                <Image width={1000} height={1000} className="w-full md:w-[85%] m-auto " src={"/home/ProjectFlow/Step1.png"} />
                    {/* <p>Playground tab</p> */}
                    {/* <DummyContent image={"/globe.svg"} /> */}
                </div>
            ),
        },
        {
            title: "Testing",
            value: "Testing",
            content: (
                <div
                className="w-full  h-full mt-[90px] md:mt-[120px]">
                <Image width={1000} height={1000} className="w-full md:w-[85%] m-auto " src={"/home/ProjectFlow/Step1.png"} />
                    {/* <p>Content tab</p> */}
                    {/* <DummyContent image={"/globe.svg"} /> */}
                </div>
            ),
        },
        {
            title: "Launch & Maintenance",
            value: "Launch & Maintenance",
            content: (
                <div
                className="w-full h-full mt-[90px] md:mt-[120px] ">
                <Image width={1000} height={1000} className="w-full md:w-[85%] m-auto " src={"/home/ProjectFlow/Step1.png"} />
                    {/* <p>Random tab</p> */}
                    {/* <DummyContent image={"/globe.svg"} /> */}
                </div>
            ),
        },
    ];

    return (
        <>
            <div className=" w-[85%] m-auto pt-[100px]">

                <div className="unique-text text-[30px] mb-[15px] md:text-[55px] font-semibold leading-[35px] md:leading-[60px]">
                    Seamless Project Workflow
                </div>
                <p
                    className="text-[#a5a5a581] md:text-[20px] text-[15px] w-[95%] md:w-[55%]">
                    Effortless, efficient, and designed for results—our workflow drives success at every step                </p>
            </div>
            <div
                className=" min-h-[500px] md:min-h-screen md:h-fit relative b flex flex-col mx-auto w-[85%]  items-start justify-start my-[80px]">
                <Tabs tabs={tabs} />
            </div>
        </>
    );
}

const DummyContent = ({ image }) => {
    return (
        (<Image
            src={image}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto mt-[50px]" />)
    );
};
