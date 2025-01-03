import React, { forwardRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const InteractiveHoverButton = forwardRef(
  ({ text = "We're hiring", className = "", ...props }, ref) => {
    return (
      <Link
        href="https://youtube.com/shorts/SXHMnicI6Pg?si=cIlfTQ0JJTWKnJiu"
        target="_blank"
      >
      <button
        ref={ref}
        className={`group relative w-[200px] h-[45px] cursor-pointer overflow-hidden rounded-full border bg-background text-center font-semibold ${className}`}
        {...props}
      >
        {/* Static text */}
          <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0  ">
            {text}
          </span>

        {/* Hovered content */}
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight />
        </div>

        {/* Hover animation */}
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
      </button>
        </Link>
    );
  }
);

export default InteractiveHoverButton;
