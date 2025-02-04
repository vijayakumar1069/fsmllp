import * as motion from "motion/react-client";
import React from "react";
import Hero_Top from "./Hero_Top";
import Hero_bottom from "./Hero_bottom";
import CustomColumnGrid from "./CustomColumnGrid ";

const HeroSection = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto flex flex-col space-y-10"
      id="hero"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          animation: "spring",
          spring: { mass: 0.5, stiffness: 100 },
        }}
      >
        <Hero_Top />
      </motion.div>

      <motion.div
        className="mt-5"
        initial="hidden"
        whileInView="visible"
        transition={{
          animation: "stagger",
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
      >
        <CustomColumnGrid />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          animation: "spring",
          spring: {
            mass: 0.8,
            stiffness: 60,
            damping: 12,
          },
        }}
      >
        <Hero_bottom />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
