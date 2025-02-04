"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(true);

  // Show/hide button based on scroll position
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 10);

    console.log("toggleVisibility", isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-[500] 
      md:bottom-8 md:right-8 transition-opacity duration-300
      ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <Link href="#home" scroll={true} legacyBehavior>
        <button
          className={`p-2 bg-star_color_1/90 text-white rounded-full shadow-lg
            transition-all duration-300
            hover:bg-star_color_2 active:scale-95
            md:p-3
            ${isHovered ? "scale-110 shadow-xl" : "scale-100"}
            @media (pointer: coarse) {
              &:hover { transform: none; }
            }`}
          aria-label="Scroll to top"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <FaArrowCircleUp
            size={25}
            className="text-3xl md:text-4xl"
            aria-hidden="true"
          />
        </button>
      </Link>
    </div>
  );
};

export default GoToTop;
