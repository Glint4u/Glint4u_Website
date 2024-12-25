"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


// UIUX Service Images 
import FigmaImage from "../../../../../public/home/Extra/Figma.svg"
import AdobeXDImage from "../../../../../public/home/Extra/AdobeXD.svg"
import SketchImage from "../../../../../public/home/Extra/Sketch.svg"
import InVisionImage from "../../../../../public/home/Extra/InVision.svg"
import FramerImage from "../../../../../public/home/Extra/Framer.svg"

// Static Web Development Service Images 
import HTMLImage from "../../../../../public/home/Extra/HTML.svg"
import CSSImage from "../../../../../public/home/Extra/CSS.svg"
import Javascript from "../../../../../public/home/Extra/Javascript.svg"
import TailwindCSSImage from "../../../../../public/home/Extra/TailwindCSS.svg"
import BootstrapImage from "../../../../../public/home/Extra/Bootstrap.svg"

// API Development Service Images
import PythonImage from "../../../../../public/home/Extra/Python.svg"
import NodeJSImage from "../../../../../public/home/Extra/NodeJS.svg"
import SwaggerImage from "../../../../../public/home/Extra/Swagger.svg"
import PostmanImage from "../../../../../public/home/Extra/Postman.svg"
import DjangoImage from "../../../../../public/home/Extra/Django.svg"


// Dynamic Web Development Service Images
import ReactImage from "../../../../../public/home/Extra/ReactJS.svg"
import NextImage from "../../../../../public/home/Extra/NextJS.svg"


// Devops Service Image 
import DockerImage from "../../../../../public/home/Extra/Docker.svg"
import KubernetesImage from "../../../../../public/home/Extra/Kubernetes.svg"
import JenkinsImage from "../../../../../public/home/Extra/Jenkins.svg"
import AWSImage from "../../../../../public/home/Extra/AWS.svg"
import GithubImage from "../../../../../public/home/Extra/Github.svg"


// SEO Service Image 
import AhrefImage from "../../../../../public/home/Extra/Ahrefs.svg"
import GoogleAnalytics from "../../../../../public/home/Extra/GoogleAnalytics.svg"
import SemrushImage from "../../../../../public/home/Extra/Semrush.svg"
import ScreamingFrog from "../../../../../public/home/Extra/ScreamingFrog.svg"
import YoastImage from "../../../../../public/home/Extra/Yoast.svg"


// Web Hosting Service Image
import AmazonEC2Image from "../../../../../public/home/Extra/AmazonEC2.svg"
import AmazonS3Image from "../../../../../public/home/Extra/AmazonS3.svg"
import GoogleCloudImage from "../../../../../public/home/Extra/GoogleCloud.svg"
import CloudflareImage from "../../../../../public/home/Extra/Cloudflare.svg"
import AzureImage from "../../../../../public/home/Extra/Azure.svg"

// It Consulting Service Image  
import Jira from "../../../../../public/home/Extra/Jira.svg"
import Slack from "../../../../../public/home/Extra/Slack.svg"


export default function CardDemo() {
    const services = [
        {
            serviceName: "UI/UX Design",
            serviceDescription: "Crafting user-centric designs for seamless digital experiences.",
            serviceImage: {
                image1: InVisionImage,
                image2: AdobeXDImage,
                image3: FigmaImage,
                image4: SketchImage,
                image5: FramerImage
            },
        },
        {
            serviceName: "Static Website Development",
            serviceDescription: "Creating fast, secure, and efficient static websites.",
            serviceImage: {
                image1: CSSImage,
                image2: HTMLImage,
                image3: Javascript,
                image4: TailwindCSSImage,
                image5: BootstrapImage
            },
        },
        {
            serviceName: "API Development",
            serviceDescription: "Building robust APIs for seamless system integrations.",
            serviceImage: {
                image1: SwaggerImage,
                image2: PythonImage,
                image3: NodeJSImage,
                image4: PostmanImage,
                image5: DjangoImage
            },
        },
        {
            serviceName: "Dynamic Website Development",
            serviceDescription: "Developing responsive, interactive websites tailored to your goals.",
            serviceImage: {
                image1: DjangoImage,
                image2: NextImage,
                image3: ReactImage,
                image4: NodeJSImage,
                image5: PythonImage
            },
        },
        {
            serviceName: "DevOps",
            serviceDescription: "Simplifying deployment and operations for efficient delivery.",
            serviceImage: {
                image1: JenkinsImage,
                image2: GithubImage,
                image3: DockerImage,
                image4: AWSImage,
                image5: KubernetesImage
            },
        },
        {
            serviceName: "SEO",
            serviceDescription: "Enhancing visibility and driving traffic to your website.",
            serviceImage: {
                image1: AhrefImage,
                image2: SemrushImage,
                image3: GoogleAnalytics,
                image4: ScreamingFrog,
                image5: YoastImage
            },
        },
        {
            serviceName: "IT Consulting",
            serviceDescription: "Delivering strategic IT advice to optimize your operations.",
            serviceImage: {
                image1: GoogleCloudImage,
                image2: Slack,
                image3: Jira,
                image4: AzureImage,
                image5: AWSImage
            },
        },
        {
            serviceName: "Web Hosting",
            serviceDescription: "Providing secure, scalable hosting for seamless online performance.",
            serviceImage: {
                image1: CloudflareImage,
                image2: AmazonS3Image,
                image3: GoogleCloudImage,
                image4: AmazonEC2Image,
                image5: AzureImage
            },
        }

    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <>
            <div className="w-[85%] m-auto pt-[100px]">
                <div className="unique-text text-[30px] mb-[15px] md:text-[55px] font-semibold leading-[35px] md:leading-[60px]">
                    Services we offer
                </div>
                <p className="text-[#a5a5a581] md:text-[20px] text-[15px] w-[95%] md:w-[55%]">
                    Where innovation meets simplicity
                </p>
            </div>
            <div className=" m-auto py-[50px] w-[85%] flex items-center gap-[30px] justify-center ">
                <Carousel className="w-full">
                    <CarouselContent>
                        {services.map((item, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardSkeletonContainer>
                                        <Technologies images={item.serviceImage} />
                                    </CardSkeletonContainer>
                                    <CardTitle> {item.serviceName} </CardTitle>
                                    <CardDescription>
                                        {item.serviceDescription}
                                    </CardDescription>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
}

const Technologies = ({ technologies, images }) => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence = [
        [
            ".circle-1",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-2",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-3",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-4",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-5",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
    ];

    useEffect(() => {
        animate(sequence, {
            // @ts-ignore
            repeat: Infinity,
            repeatDelay: 1,
        });
    }, []);
    return (
        (<div
            className="p-8 overflow-hidden h-full relative flex items-center justify-center">
            <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
                <Container className="h-8 w-8 circle-1">
                    <Image alt={images.image1} src={images.image1} className="w-[60%]" />
                </Container>
                <Container className="h-12 w-12 circle-2">
                    <Image alt={images.image2} src={images.image2} className="w-[60%]" />
                </Container>
                <Container className="circle-3">
                    <Image alt={images.image3} src={images.image3} className="w-[60%]" />
                </Container>
                <Container className="h-12 w-12 circle-4">
                    <Image alt={images.image4} src={images.image4} className="w-[60%]" />
                </Container>
                <Container className="h-8 w-8 circle-5">
                    <Image alt={images.image5} src={images.image5} className="w-[60%]" />
                </Container>
            </div>
            <div
                className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
                <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                    <Sparkles />
                </div>
            </div>
        </div>)
    );
};

const Sparkles = () => {
    const randomMove = () => Math.random() * 2 - 1;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        (<div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 2 + 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block bg-black dark:bg-white"></motion.span>
            ))}
        </div>)
    );
};

export const Card = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "max-w-sm w-full mx-auto p-4 md:p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
                className
            )}>
            {children}
        </div>)
    );
};

export const CardTitle = ({
    children,
    className
}) => {
    return (
        (<h3
            className={cn("text-lg font-semibold text-gray-800 dark:text-white py-2", className)}>
            {children}
        </h3>)
    );
};

export const CardDescription = ({
    children,
    className
}) => {
    return (
        (<p
            className={cn(
                "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
                className
            )}>
            {children}
        </p>)
    );
};

export const CardSkeletonContainer = ({
    className,
    children,
    showGradient = true
}) => {
    return (
        (<div
            className={cn("h-[15rem] md:h-[20rem] rounded-xl z-40", className, showGradient &&
                "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]")}>
            {children}
        </div>)
    );
};

const Container = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
                className
            )}>
            {children}
        </div>)
    );
};
