"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { MoveUpRight } from "lucide-react";
import { f3 } from "../fonts";

export default function Page() {
  const pathname = usePathname();
  return (
    <div className="absolute  flex justify-evenly items-center w-full top-[30px] z-[1000] ">
      <Link href={"/"}>
        <div>
          <Image src={Logo} alt="logo" className="lg:w-[150px]"></Image>
        </div>
      </Link>
      <div
        className={` bg-gradient-to-r from-[#171717] to-[#0e0e0e]  w-fit h-fit px-[20px] py-[10px] border border-gray-300/50 flex gap-[70px] rounded-[30px] text-white text-2xl ${f3.className} italic`}
      >
        <Link href={"/"}>
          <div>Home</div>
        </Link>
        <Link href={"/work"}>
          <div>Work</div>
        </Link>
        <Link href={"/contact"}>
          <div>Contact</div>
        </Link>
      </div>
      <div
        className={` bg-gradient-to-r from-[#171717] to-[#0f0f0f] w-fit h-fit px-[20px] py-[10px] border border-gray-300/50 rounded-[30px] text-white text-2xl flex items-baseline justify-center gap-[10px] ${f3.className}`}
      >
        start a project
        <MoveUpRight size={17} />
      </div>
    </div>
  );
}
