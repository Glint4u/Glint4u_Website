import React from 'react'
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "../../ui/AnimatedBeamMultipleOutputs";
import AnimatedListDemo from "../../ui/AnimatedListDemo";
import { BentoCard, BentoGrid } from "../../ui/bento";
import Marquee from "../../ui/marquee";

import MockUp1 from "../../../../../public/home/Page2/MockUp1.png"
import MockUp2 from "../../../../../public/home/Page2/MockUp2.png"
import MockUp3 from "../../../../../public/home/Page2/MockUp3.png"
import CircleLogo from "../../../../../public/home/Page2/CircleLogo.png"

const images = [
    {
        image: MockUp1
    },
    {
        image: MockUp2
    },
    {
        image: MockUp3
    },
];

const features = [
    {
        Icon: FileTextIcon,
        name: "Design the Extraordinary",
        description: "Creating innovative solutions that redefine digital excellence.",
        href: "/portfolio",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {images.map((f, idx) => (
                    <Image
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                        src={f.image}
                    />
                ))}
            </Marquee>
        ),
    },
    {
        Icon: BellIcon,
        name: "Client Requests & Inquiries",
        description: "Delivering exceptional services with unmatched creativity and expertise.",
        href: "/services",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: Share2Icon,
        name: "Technologies",
        description: "Powered by 15+ cutting-edge technologies.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Use the calendar to book your appointment.",
        className: "col-span-3 lg:col-span-1",
        href: "https://cal.com/glint",
        cta: "Book now",
        background: (
            <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
];


export default function Page2() {
    return (
        <div className='w-[85%] m-auto py-[50px]'>

            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        </div>
    )
}
