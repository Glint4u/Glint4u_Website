"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Replace with your utility or 'clsx' if needed.
import { AnimatedList } from "./AnimatedList"; // Ensure this component is implemented or imported correctly.

// Notification Data
let notifications = [
  {
    name: "Looking for scalable cloud solution.",
    description: "Devops",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "I need a custom API.",
    description: "API Development",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Looking for a full-stack app.",
    description: "Web Development",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Can you design my app's UI",
    description: "UI/UX Design",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Can you help optimize my website's SEO",
    description: "SEO",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 100 }, () => notifications).flat();

// Notification Component
const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-fit min-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // Animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // Light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // Dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-black">
            <span className="text-sm sm:text-lg text-white">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

// AnimatedListDemo Component
export default function AnimatedListDemo({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
