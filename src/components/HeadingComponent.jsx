"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedGradientText from "./AnimatedGradientText";

const HeadingComponent = ({
  headingText,
  animationText,
  headTextClasses,
  starClasses,
}) => {
  const headingStyle = headTextClasses
    ? headTextClasses
    : "text-2xl max-w-3xl font-bold md:text-3xl   lg:leading-normal lg:text-4xl";

  const starclass = starClasses
    ? starClasses
    : "text-2xl max-w-3xl font-bold md:text-3xl lg:ml-2 lg:mr-2 lg:mt-2  lg:text-4xl";
  return (
    <div>
      <h1 className={`${headingStyle}`}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block "
        >
          {headingText}
          <AnimatedGradientText
            text={animationText}
            className="align-middle"
            starClassName={starclass}
            textClassName={headTextClasses}
          />
        </motion.span>
      </h1>
    </div>
  );
};

export default HeadingComponent;
