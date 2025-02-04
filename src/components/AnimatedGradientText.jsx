"use client";
import { motion } from "framer-motion";
import React from "react";
import { IconSparkles } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { PiStarFourFill } from "react-icons/pi";
const AnimatedGradientText = ({
  text,
  className,
  starClassName,
  textClassName,
  ...props
}) => {
  return (
    <motion.span
      className={cn("relative inline-flex  items-center gap-1", className)}
      whileHover={{ scale: 1.02 }}
      {...props}
    >
      <motion.span
        className={cn(
          "bg-gradient-to-r flex flex-wrap text-wrap from-star_color_2 to-star_color_1 bg-clip-text text-transparent",
          textClassName
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className=""
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <PiStarFourFill
            className={cn("mt-1 ", starClassName)}
            style={{
              stroke: "url(#gradient)",
              fill: "url(#gradient)",
            }}
          />
        </motion.span>
        <span className="flex flex-wrap">{text}</span>
      </motion.span>

      <svg aria-hidden="true" className="absolute h-0 w-0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#53A0ED" />
            <stop offset="50%" stopColor="#53A0ED" />
            <stop offset="100%" stopColor="#53A0ED" />
          </linearGradient>
        </defs>
      </svg>
    </motion.span>
  );
};

export default AnimatedGradientText;
