import React from "react";
import classNames from "classnames";

export default function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}) {
    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 size-full"
                >
                    <circle
                        className="stroke-black/10 stroke-1 dark:stroke-white/10"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                    />
                </svg>
            )}

            <div
                style={{
                    animationDuration: `${duration}s`,
                    animationDelay: `${-delay}s`,
                    "--radius": `${radius}px`,
                }}
                className={`absolute flex items-center justify-center rounded-full border bg-black/10 dark:bg-white/10 ${reverse ? "animation-reverse" : ""
                    }`}
            >
                {children}
            </div>

        </>
    );
}
