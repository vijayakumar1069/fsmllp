import React from "react";
import LeftSideImage from "./LeftSideImage";
import RightSideImage from "./RightSideImage";
import ServiceKeywordBox from "./ServiceKeywordBox";
import * as motion from "motion/react-client";
import { contnet } from "@/utils/constants";

const ServiceCard = () => {
  return (
    <motion.div
      className="flex flex-col space-y-16"
      initial={{ perspective: 1000 }}
    >
      {contnet.map((item, index) => (
        <motion.div
          className="relative transform-style-preserve-3d"
          key={`${index}+${item.title}`}
          initial={{
            opacity: 0,
            rotateY: index % 2 === 0 ? -30 : 30,
            filter: "blur(8px)",
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            rotateY: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
              animation: "spring",
              spring: {
                stiffness: index % 2 === 0 ? 150 : 180,
                damping: 15,
                mass: 0.7,
              },
              delay: index * 0.15,
            },
          }}
          while-hover={{
            scale: 1.05,
            zIndex: 10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: {
              animation: "spring",
              spring: { stiffness: 300 },
            },
          }}
          transition-transform="preserve"
        >
          {index % 2 === 0 ? (
            <LeftSideImage item={item} />
          ) : (
            <RightSideImage item={item} />
          )}

          {/* 3D Edge Effect */}
          {/* <div className="absolute inset-0 border-2 border-blue-500/20 rounded-xl pointer-events-none" /> */}
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateX: 15 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          rotateX: 0,
          transition: {
            animation: "spring",
            spring: { stiffness: 120 },
            delay: 0.4,
          },
        }}
        animate={{
          y: [-3, 3],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        <ServiceKeywordBox />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
