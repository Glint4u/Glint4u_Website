'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const AnimatedPath = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1000);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial container width
    const updateWidth = () => {
      setContainerWidth(container.clientWidth);
    };

    // Initial width set
    updateWidth();

    // Resize listener to handle responsive changes
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    const pathElement = pathRef.current;
    const container = containerRef.current;

    if (!pathElement || !container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      // Increased y-range for more dramatic movement
      const y = Math.min(Math.max(e.clientY - rect.top, -150), 150);

      gsap.to(pathElement, {
        attr: { d: `M 0 0 Q ${x} ${y} ${containerWidth} 0` },
        duration: 0.2,
        ease: "power3.out"  // More elastic movement during mouse move
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathElement, {
        attr: { d: `M 0 0 Q ${containerWidth / 2} 0 ${containerWidth} 0` },
        duration: 1.5,  // Longer duration for more bouncy effect
        ease: "elastic.out(1, 0.2)"  // More pronounced elastic bounce
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerWidth]);

  return (
    <div
      ref={containerRef}
      className="w-full lg:w-[95%] mx-auto h-[70px] flex justify-center items-end cursor-pointer absolute "
    >
      <svg
        width="100%"
        height="100%"
        className="overflow-visible absolute top-1/2 left-0"
        style={{ transform: 'translateY(-50%)' }}
      >
        <path
          ref={pathRef}
          d={`M 0 0 Q ${600} 0 ${containerWidth} 0`}
          className="fill-transparent"
          stroke="#D9D9D9"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedPath;