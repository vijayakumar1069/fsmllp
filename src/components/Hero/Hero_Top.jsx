"use client";

import { motion, useMotionTemplate } from "framer-motion";

import { MultipleImagesCombination } from "../MultipleImagesCombination";
import AnimatedGradientText from "../AnimatedGradientText";
import HeadingComponent from "../HeadingComponent";

const Hero_Top = () => {
  return (
    <div className="">
      <HeadingComponent
        headingText="Transform Your Financial Future Where Excellence Meets"
        animationText="Expertise in Accounting"
      />
      <div className="flex lg:flex-row flex-col lg:gap-x-5 gap-y-5 ">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-4  lg:w-1/2 w-full text-para_color text-lg md:text-xl"
        >
          Partner with Fareed Sheik LLP, your strategic ally in scaling success.
          As a boutique full-service CPA firm, we deliver precision accounting,
          tax expertise, and assurance solutions tailored to your unique goals.
          From startups to established enterprises, our certified professionals
          empower your growth with clarity, compliance, and visionary
          strategy—because your transformation is our mission.
        </motion.p>
        <div className="lg:w-1/2 w-full flex items-center justify-end">
          <MultipleImagesCombination />
        </div>
      </div>
    </div>
  );
};

export default Hero_Top;
