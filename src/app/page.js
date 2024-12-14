"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import point from "../../public/home/point.png";
import bbpic1 from "../../public/home/bb-pic1.png";
import pic1 from "../../public/home/pic1.png";
import couple from "../../public/home/couple.webp";
import singleStar from "../../public/home/singleStar.png";
import multiStar from "../../public/home/multiStar.png";
import cultureImage1 from "../../public/home/cultureImage1.svg";
import cultureImage2 from "../../public/home/cultureImage2.svg";
import wheel1 from "../../public/home/wheel1.png";
import swabhiman from "../../public/home/swabhiman.svg";
import jaiman from "../../public/home/jaiman.svg";
import vimarsh from "../../public/home/vimarsh.svg";
import jenish from "../../public/home/jenish.svg";
import maulik_soni from "../../public/home/Maulik_soni.png";
import sachin_mishra from "../../public/home/Sachin_mishra.png";
import Instagram from "../../public/home/Instagram.png";
import Linkedin from "../../public/home/Linkedin.png";
import rangoli from "../../public/home/rangoli.svg";
import { f1, f2, f3, italic, light } from "./fonts";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainTextRef = useRef(null);
  const homeImageRef = useRef(null);
  const expertiseText = useRef(null);
  const threeboxes = useRef([]);
  const boxesRef = useRef([]);
  const expertiseImage = useRef(null);
  const cultureRef = useRef(null);
  const wheelContainer = useRef(null);
  const wheel1Ref = useRef(null);
  const wheel2Ref = useRef(null);
  const horref = useRef(null);
  const textimonialRef = useRef(null);
  const textimonialheaderRef = useRef(null);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const teamMembers = [
    {
      id: "001",
      name: "Swabhiman Nanda",
      role: "Co-founder",
      image: swabhiman,
    },
    {
      id: "002",
      name: "Jaiman Soni",
      role: "Co-founder",
      image: jaiman,
    },
    {
      id: "003",
      name: "Vimarsh Tiwari",
      role: "Co-founder",
      image: vimarsh,
    },
    {
      id: "004",
      name: "Jenish Soni",
      role: "Co-founder",
      image: jenish,
    },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      mainTextRef.current,
      {
        opacity: 0,
        y: 100, // Reduced vertical distance
        scale: 0.95, // Add slight initial scale
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "elastic",
      }
    );
    // gsap.fromTo(
    //   homeImageRef.current,
    //   {
    //     scale: 1.6,
    //   },
    //   {
    //     scale: 1,
    //     delay: 0,
    //     duration: 2,
    //     ease: "power2.out",
    //   }
    // );
    gsap.fromTo(
      boxesRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      threeboxes.current.children,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0,
        duration: 2,
        stagger: 0.8,
        scrollTrigger: {
          trigger: threeboxes.current,
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          markers: false,
          scrub: false,
          ease: "ease",
        },
      }
    );
    gsap.fromTo(
      expertiseText.current.children,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: {
          amount: 0.8, // Total amount of time between first and last animation
          from: "start", // Start from the first element
          ease: "power2.out", // Ease the stagger timing
        },
        ease: "power2.out",
        scrollTrigger: {
          trigger: expertiseText.current,
          scroller: window,
          start: "top 80%",
          end: "top 0%",
          markers: false,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      expertiseImage.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        stagger: 1,
        delay: 0,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expertiseImage.current,
          scroller: window,
          start: "top 80%",
          end: "top 0%",
          markers: false,
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      cultureRef.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        stagger: 1,
        delay: 0,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cultureRef.current,
          scroller: window,
          start: "top 80%",
          end: "top 0%",
          markers: false,
          scrub: false,
        },
      }
    );
    gsap.to(wheel1Ref.current, {
      rotation: 360,
      scrollTrigger: {
        trigger: wheelContainer.current,
        start: "top bottom", // Animation starts when the container hits the bottom of the viewport
        end: "bottom top", // Animation ends when the container leaves the top of the viewport
        scrub: true, // Smooth scrub effect
      },
    });

    // GSAP animation for the second wheel (rotating in the opposite direction)
    gsap.to(wheel2Ref.current, {
      rotation: -360,
      scrollTrigger: {
        trigger: wheelContainer.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(horref.current.children, {
      transform: "translateX(-298%)",
      scrollTrigger: {
        trigger: horref.current,
        scroller: window,
        markers: false,
        start: "top 0%",
        end: "top -190%",
        scrub: 3,
        pin: true,
      },
    });

    gsap.fromTo(
      textimonialRef.current.children,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: textimonialRef.current,
          scroller: window,
          start: "top 80%",
          end: "top 0%",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      textimonialheaderRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: textimonialRef.current,
          scroller: window,
          start: "top 90%",
          end: "top 0%",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="bg-black pt-6 sm:pt-8 md:pt-10">
      <section
        ref={mainTextRef}
        className="max  max-lg:min-h-[700px] z-[10000] min-h-screen bg-no-repeat max-lg:bg-contain bg-center flex justify-center items-center px-1 sm:px-3 md:px-8 overflow-hidden"
        // style={{
        //   backgroundImage: `url(${pic1.src})`,
        // }}
      >
        <div
          ref={mainTextRef}
          className="text-white text-center flex items-center flex-col gap-2 sm:gap-6 md:gap-8"
        >
          <h1
            className={`text-[50px] sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] ${f1.className}`}
          >
            we make tech <br /> feel
            <span className={`${f3.className}`}> better.</span>
          </h1>
          <p
            className={`text-[#EBFF00] text-[14px] text-center w-[300px] lg:w-[500px] sm:text-base md:text-lg lg:text-xl ${f1.className}`}
          >
            We&apos;re a web product company focused on design-driven,{" "}
            out-of-the-box solutions that transform digital experiences.
          </p>
        </div>
      </section>
      <section
        className="flex flex-col lg:flex-row justify-between px-4 md:px-[30px] gap-6 lg:gap-4"
        ref={threeboxes}
      >
        {/* Website Box */}
        <div className="relative border border-white/30 bg-gradient-to-b from-black to-white/10 w-full lg:w-[460px] h-[350px] overflow-y-hidden rounded-2xl group hover:bg-gradient-to-b hover:from-blue-400/30 hover:to-white/10 transition-all duration-150">
          <div
            className={`absolute top-3 left-4 text-[#F2FF5C] text-2xl md:text-3xl ${f3.className} z-10`}
          >
            Website
          </div>
          <div className="absolute bottom-[-10px] left-50% transition-all duration-300 group-hover:bottom-0">
            <Image
              src={bbpic1}
              alt="Website photo"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Design Solutions Box */}
        <div className="relative border border-white/30 bg-gradient-to-b from-black to-white/10 w-full lg:w-[460px] h-[350px] overflow-y-hidden rounded-2xl group hover:bg-gradient-to-b hover:from-gray-400/30 hover:to-white/10 transition-all duration-150">
          <div
            className={`absolute top-3 left-4 text-[#F2FF5C] text-2xl md:text-3xl ${f3.className} z-10`}
          >
            Design Solutions
          </div>
          <div className="absolute bottom-[-10px] transition-all duration-300 group-hover:bottom-0">
            <Image
              src={bbpic1}
              alt="Website photo"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Mockups Box */}
        <div className="relative border border-white/30 bg-gradient-to-b from-black to-white/10 w-full lg:w-[460px] h-[350px] overflow-y-hidden rounded-2xl group hover:bg-gradient-to-b hover:from-purple-400/30 hover:to-white/10 transition-all duration-150">
          <div
            className={`absolute top-3 left-4 text-[#F2FF5C] text-2xl md:text-3xl ${f3.className} z-10`}
          >
            Mockups
          </div>
          <div className="absolute bottom-[-10px] transition-all duration-300 group-hover:bottom-0">
            <Image
              src={bbpic1}
              alt="Website photo"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-7 xl:px-10">
        <section>
          <div className="flex items-center md:gap-2 mt-[100px]">
            <Image
              src={point}
              alt="point"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h2
              className={`${italic.className} text-xl sm:text-2xl md:text-3xl text-bg`}
            >
              Our Expertise
            </h2>
          </div>

          <div
            className={` ${f1.className} text-[#eaff00a6] flex justify-between items-center max-lg:gap-[40px] mt-[40px] max-lg:flex-col `}
          >
            <div className="flex flex-col gap-y-6 " ref={expertiseText}>
              <div className=" w-fit h-fit p-4 py-6 px-7 text-[40px] max-lg:text-[25px] max-lg:text-center bg-gradient-radial from-black to-[#F2FF5C]/10  rounded-[45px] text-nowrap">
                Digital Product Design
              </div>
              <div className="flex items-center gap-4">
                <div className=" w-fit h-fit p-4 py-6 px-7 text-[40px] max-lg:text-[25px] max-lg:text-center  bg-gradient-radial from-black to-[#F2FF5C]/10 rounded-[45px]">
                  Web Design
                </div>
                <Image
                  src={multiStar}
                  alt="Muti-Star"
                  className="w-[110px] max-lg:w-[70px]"
                ></Image>
              </div>
              <div className=" w-fit h-fit p-4 py-6 px-7 text-[40px] max-lg:text-[25px] max-lg:text-center  bg-gradient-radial from-black to-[#F2FF5C]/10 rounded-[45px]">
                Web Design
              </div>
              <div className="flex items-center gap-4">
                <div className=" w-fit h-fit p-4 py-6 px-7 text-[40px] max-lg:text-[25px] max-lg:text-center  bg-gradient-radial from-black to-[#F2FF5C]/10 rounded-[45px]">
                  UX Design
                </div>
                <Image
                  src={singleStar}
                  alt="Single-Star"
                  className="w-[110px] max-lg:w-[70px]"
                ></Image>
              </div>
            </div>
            <Image
              src={couple}
              alt="Couple-Photo"
              className="w-[60%] max-lg:w-full"
              ref={expertiseImage}
            ></Image>
          </div>
        </section>

        <div className={`flex justify-end ${f2.className}`}>
          <h2 className="text-[#eaff00a6]/10 text-7xl sm:text-6xl md:text-[200px] lg:text-[170px] xl:text-[170px] my-[60px]">
            glint for you
          </h2>
        </div>

        <section className="w-full lg:px-12 xl:px-16  lg:-mt-16">
          <div className="flex items-center sm:gap-2 md:gap-2">
            <Image
              src={point}
              alt="point"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h2
              className={`text-xl sm:text-2xl md:text-3xl text-bg ${italic.className}`}
            >
              Our Expertise
            </h2>
          </div>
          <div className="flex justify-end mt-8 sm:mt-12" ref={cultureRef}>
            <Image
              src={cultureImage1}
              alt="page"
              className="max-md:hidden w-full h-auto"
            />
            <Image
              src={cultureImage2}
              alt="page"
              className="md:hidden w-full h-auto"
            />
          </div>
        </section>

        {/* <section>
          <div className="flex items-center sm:gap-2 md:gap-2">
            <Image
              src={point}
              alt="point"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h2
              className={`text-xl sm:text-2xl md:text-3xl text-bg ${italic.className}`}
            >
              Think Tank
            </h2>
          </div>
          <div className="mt-[50px] flex gap-9 justify-between max-lg:flex-col">
            <div>
              <p
                className={`${f1.className} text-[#EBFF00] text-justify lg:w-[600px] text-xl lg:text-3xl leading-relaxed `}
              >
                The innovative core of the glint&apos;s driving creativity,
                strategy, and future-forward solutions. It acts as a
                multidisciplinary hub where visionaries, strategists, and
                experts collaborate to ideate, analyze, and develop
                groundbreaking ideas that shape the organization&apos;s
                trajectory.
              </p>
            </div>
            <div ref={wheelContainer} className="flex rotate-12 w-full">
              ``
              <Image
                src={wheel1}
                alt="wheel1"
                ref={wheel1Ref}
                className="max-lg:w-[190px] max-lg:h-[190px]"
              />
              <Image
                src={wheel1}
                alt="wheel2"
                ref={wheel2Ref}
                className="max-lg:w-[120px] max-lg:h-[120px]  w-[300px] h-[300px] -mt-6 -ml-[10px] lg:-ml-6  lg:mt-4"
              />
            </div>
          </div>
        </section> */}
      </div>

      <section
        className="h-svh flex overflow-x-hidden whitespace-nowrap"
        ref={horref}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-[250px] w-screen flex-shrink-0"
          >
            <div className="w-[300px]">
              <h1 className="text-[350px] -rotate-90 inline-block outlined-text">
                {member.id}
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image src={member.image} alt={member.name} />
              <div className="text-[#F2FF5C] text-center">
                <h1 className={`${f1.className} text-[40px]`}>{member.name}</h1>
                <p className={`${light.className} text-[30px]`}>
                  {member.role}
                </p>
              </div>
            </div>

            <div className="text-[#F2FF5C] text-right text-[30px]">
              <h1 className="underline underline-[#F2FF5C]">Linked In</h1>
              <h1 className="underline underline-[#F2FF5C]">Mail</h1>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 lg:mt-[150px] px-4">
        <h1
          className={`
        text-gray-100 text-center 
        text-[32px] md:text-[40px] lg:text-[100px] 
        ${f1.className}
      `}
          ref={textimonialheaderRef}
        >
          Hear our praise
        </h1>

        <div
          ref={textimonialRef}
          className="
        flex flex-col lg:flex-row 
        justify-center items-center 
        gap-8 p-4 
        bg-black 
        w-full
        lg:mt-4
      "
        >
          {/* First Testimonial */}
          <div
            className="
          bg-gradient-to-br from-[#F2FF5C]/20 to-black 
          border border-[#F2FF5C]/40 
          text-white 
          rounded-2xl 
          p-6 lg:p-10 
          flex flex-col gap-4 
          w-full lg:w-1/3
          max-w-[500px]
          

        "
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={maulik_soni}
                alt="Maulik Soni"
                className="w-7 h-7 lg:w-[80px] lg:h-[80px] rounded-full object-cover"
              />
              <div className="flex-grow">
                <h2 className={`text-xl md:text-2xl ${f3.className}`}>
                  Maulik Soni
                </h2>
                <p className={`text-sm ${f1.className} text-gray-300`}>
                  Director @ Shriji Education Services
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className="w-6 h-6 cursor-pointer"
                />
                <Image
                  src={Linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            <p
              className={`
            text-[#F2FF5C] 
            text-base md:text-lg 
            leading-relaxed 
            text-justify 
            ${f1.className}
          `}
            >
              Glint Has Been An Absolute Game-Changer For Us! Its Intuitive
              Interface, Robust Analytics, And Seamless Collaboration Features
              Have Elevated The Way We Approach Projects And Team Management.
            </p>
          </div>

          {/* Second Testimonial */}
          <div
            className="
          bg-gradient-to-br from-[#F2FF5C]/20 to-black 
          border border-[#F2FF5C]/40 
          text-white 
          rounded-2xl 
          p-6 lg:p-10 
          flex flex-col gap-4 
          w-full lg:w-1/3
          max-w-[500px]
        "
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={sachin_mishra}
                alt="Sachin Mishra"
                className="w-[80px] h-[80px] rounded-full object-cover"
              />
              <div className="flex-grow">
                <h2 className={`text-xl md:text-2xl ${f3.className}`}>
                  Sachin Mishra
                </h2>
                <p className={`text-sm ${f1.className} text-gray-300`}>
                  Owner @ Burgerbistro
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className="w-6 h-6 cursor-pointer"
                />
                <Image
                  src={Linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            <p
              className={`
            text-[#F2FF5C] 
            text-base md:text-lg 
            leading-relaxed 
            text-justify 
            ${f1.className}
          `}
            >
              Glint Has Been An Absolute Game-Changer For Us! Its Intuitive
              Interface, Robust Analytics, And Seamless Collaboration Features
              Have Elevated The Way We Approach Projects And Team Management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
