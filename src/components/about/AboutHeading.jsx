import React from "react";
import HeadingComponent from "../HeadingComponent";

import AboutCard from "./AboutCard";
import * as motion from "motion/react-client";
import { aboutContents } from "@/utils/constants";

const AboutHeading = () => {
  return (
    <motion.div
      className="flex flex-col space-y-10 justify-center items-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          animation: "spring",
          spring: { stiffness: 100, damping: 15 },
        },
      }}
    >
      <motion.div
        className="max-w-xl"
        initial={{ y: 40, opacity: 0, rotateX: -10 }}
        whileInView={{
          y: 0,
          opacity: 1,
          rotateX: 0,
          transition: {
            delay: 0.4,
            animation: "spring",
            spring: { mass: 0.5, stiffness: 120 },
          },
        }}
      >
        <HeadingComponent
          headingText="Building Financial Foundations"
          animationText="Through Trusted Expertise"
          headTextClasses="text-2xl max-w-2xl font-bold md:text-3xl lg:leading-normal lg:text-4xl"
          starClasses="text-2xl max-w-xl font-bold md:text-3xl ml-2 mr-1 lg:leading-normal lg:text-4xl"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        whileInView="visible"
        initial="hidden"
        transition={{
          animation: "stagger",
          staggerChildren: 0.2,
          delayChildren: 0.3,
        }}
      >
        {aboutContents.map((content, index) => (
          <motion.div
            key={content.id}
            className="relative"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.1 * index,
                animation: "spring",
                spring: {
                  stiffness: 150,
                  damping: 12,
                  mass: 0.6,
                },
              },
            }}
          >
            <AboutCard item={content} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutHeading;
