import * as motion from "motion/react-client";
import React from "react";
import { ContactForm } from "./ContactForm";
import HeadingComponent from "../HeadingComponent";

const ContactUs = () => {
  return (
    <motion.section
      id="contact"
      className="relative  overflow-hidden py-10"
      initial={{ opacity: 0, perspective: 1000 }}
      whileInView={{
        opacity: 1,
        transition: {
          animation: "parallax",
          duration: 1.8,
          stagger: 0.1,
        },
      }}
      while-hover="hover"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0 "
        animate={{
          background: [
            "linear-gradient(45deg, #f3f4f6 0%, #e5e7eb 100%)",
            "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          timing: "linear",
        }}
      />

      <motion.div className="relative z-10 ">
        <motion.div
          className="flex justify-center  items-center"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              animation: "spring",
              spring: {
                mass: 0.8,
                stiffness: 120,
                damping: 12,
              },
              delay: 0.3,
            },
          }}
        >
          <HeadingComponent headingText="Connect With Our Tax Strategy Specialists" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mt-4 p-8 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl"
          initial={{
            y: 80,
            rotateX: -15,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            rotateX: 0,
            opacity: 1,
            transition: {
              animation: "spring",
              spring: {
                stiffness: 150,
                mass: 0.7,
              },
              delay: 0.6,
            },
          }}
          while-active="active"
          while-hover={{
            y: -5,
            transition: {
              animation: "spring",
              spring: { stiffness: 200 },
            },
          }}
        >
          <ContactForm />
        </motion.div>

        {/* Decorative animated elements */}
        <motion.div
          className="absolute -top-32 -left-32 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        {/* <motion.div
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        /> */}
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
