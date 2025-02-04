"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as motion from "motion/react-client";
import { reviewsContent } from "@/utils/constants";

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviewsContent.length);
      }, 15000); // Change review every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewsContent.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) =>
      prev === 0 ? reviewsContent.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="relative overflow-hidden mt-6"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            className="relative aspect-square w-full max-w-md mx-auto md:max-w-none"
            initial={{ x: -100, rotate: -3 }}
            whileInView={{ x: 0, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <motion.div
              className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" }}
            >
              <Image
                src="/review_1.jpeg"
                alt="Customer 1"
                fill={true}
                className="object-cover"
                priority
              />
              {/* Animated Gradient Overlay */}
              {/* <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              /> */}
            </motion.div>
          </motion.div>

          {/* Reviews Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Animated Header */}
            <motion.div
              className="mb-8"
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ type: "spring" }}
            >
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                What Our Clients Say
              </motion.h2>
              <motion.div
                className="h-1 w-20 bg-blue-600 rounded"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>

            {/* Reviews Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Review Content */}
              <motion.div
                className="min-h-[200px] flex items-center"
                key={currentReview}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <motion.p
                  className="text-lg text-para_color mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  "{reviewsContent[currentReview].content}"
                </motion.p>
              </motion.div>

              {/* Animated Divider */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
              >
                <div className="h-px flex-1 bg-star_color_1" />
                <motion.span
                  className="text-black font-medium"
                  whileHover={{ scale: 1.1 }}
                >
                  Review {currentReview + 1}/{reviewsContent.length}
                </motion.span>
              </motion.div>

              {/* Navigation Buttons */}
              <motion.div
                className="flex justify-between items-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                <div className="flex gap-4">
                  <motion.button
                    onClick={prevReview}
                    className="p-2 rounded-full bg-star_color_1 shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronLeft className="w-6 h-6 text-white" />
                  </motion.button>
                  <motion.button
                    onClick={nextReview}
                    className="p-2 rounded-full bg-star_color_1 shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronRight className="w-6 h-6 text-white" />
                  </motion.button>
                </div>

                {/* Progress Dots */}
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.05 }}
                >
                  {reviewsContent.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentReview
                          ? "w-6 bg-blue-600"
                          : "bg-gray-300"
                      }`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring" }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Animation Element */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-20 pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default ReviewsSection;
