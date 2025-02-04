"use client";
import React, { useState } from "react";

import { Button } from "./ui/button";

import { navbarValues, socialLink } from "@/utils/constants";
import Link from "next/link";
import * as motion from "motion/react-client";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // simulate API call
    setTimeout(() => {
      if (value.trim() === "") {
        setError("Email address is required");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError("Please enter a valid email address");
      } else {
        setSuccess(`Thank you for subscribing to our newsletter`);
      }
      setValue("");
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 5000);
  };
  return (
    <motion.div
      className="max-w-7xl mx-auto py-10 px-5 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="flex justify-evenly lg:flex-row flex-col">
        {/* Left Column */}
        <motion.div
          className="bg-white p-4 basis-1/2"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              className="block text-2xl md:text-3xl lg:text-4xl font-bold"
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Get Expert Accounting Insights
            </motion.span>
            <motion.span
              className="block text-2xl md:text-3xl lg:text-4xl font-bold text-star_color_2"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              Optimize Your Financial Success
            </motion.span>
          </motion.div>

          <motion.div
            className="relative mt-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center  border-[1px] border-star_color_2 rounded-full overflow-hidden">
              <motion.input
                type="email"
                className="flex-1  p-2 text-black border-none focus:outline-none pl-4 pr-28"
                placeholder="Stay compliant with our latest tax updates"
                initial={{ width: "100%" }}
                whileFocus={{ width: "calc(100% - 160px)" }}
                transition={{ type: "spring", stiffness: 300 }}
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <Button
                onClick={handleSubmit}
                className="rounded-l-none rounded-r-full absolute right-0 h-full px-8 hover:bg-star_color_2/90 bg-star_color_2"
              >
                {loading ? "Loading..." : "Get Free Insights"}
              </Button>
            </div>
          </motion.div>
          {success && <p className="text-green-600 mt-4 ">{success}</p>}
          {error && <p className="text-red-600 mt-4 ">{error}</p>}
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="basis-1/2 flex items-center lg:items-end flex-col space-y-4 p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="flex flex-wrap justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {socialLink.map((social) => (
              <motion.a
                key={social.id}
                href={social.link}
                className="p-2 mr-2"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {navbarValues.map((nav) => (
              <motion.div
                key={nav.id}
                whileHover={{ x: 5 }}
                transition={{ type: "spring" }}
              >
                <Link
                  href={nav.path}
                  className="text-sm flex justify-center items-center gap-2 hover:text-star_color_1 cursor-pointer mr-3"
                >
                  <span className="hover:-translate-x-1 transition-transform duration-300 hover:scale-105">
                    {nav.title}
                  </span>
                  <FaLongArrowAltRight className="-rotate-45 font-bold" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-between gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-center">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p>
              Powerd by{" "}
              <motion.a
                href="https://www.gliggo.com"
                target="_blank"
                rel="noopener"
                className="text-green-500 hover:scale-110"
                whileHover={{
                  textShadow: "0 0 8px rgba(34,197,94,0.5)",
                  scale: 10,
                }}
              >
                Gliggo Inc
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
