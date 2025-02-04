import * as motion from "motion/react-client";
import React from "react";
import ReviewsSection from "./ReviewsSection";
import HeadingComponent from "../HeadingComponent";

const Reviews = () => {
  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center flex-col py-6"
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          className="text-xl lg:text-3xl xl:text-5xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Financial Confidence Through Proven Success
          <motion.span
            className="block mt-2 text-star_color_2"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Trusted By Our Clients
          </motion.span>
        </motion.h1>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.5 }}
      >
        <ReviewsSection />
      </motion.div>
    </motion.section>
  );
};

export default Reviews;
