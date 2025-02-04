import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { LiaDotCircleSolid } from "react-icons/lia";
import * as motion from "motion/react-client";
import { whyUspoints } from "@/utils/constants";
import Link from "next/link";

const WhyUs = () => {
  return (
    <motion.div
      className="flex flex-col space-y-10 relative"
      id="whyus"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {/* Text Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <motion.div
          className="md:basis-5/12"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-2xl lg:text-3xl xl:text-4xl max-w-52 font-bold">
            Why Choose Fareed Sheik LLP?
          </h1>
        </motion.div>

        <motion.div
          className="md:basis-7/12 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-para_color text-lg">
            As Chartered Professional Accountants, we deliver tailored financial
            solutions that empower businesses to thrive. Our boutique firm
            combines technical excellence with strategic insight for tax, audit,
            and accounting services that drive real results.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="#reviews">
              <Button className="group flex gap-3 bg-gradient-to-r from-star_color_1 via-star_color_2 to-[#40BAFF] p-2 transition-all hover:scale-105">
                <span>Explore Customer Experiences</span>
                <motion.span
                  className="transition-transform group-hover:translate-x-1"
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <IconArrowNarrowRight size={24} stroke={3} />
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Grid Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          className="md:basis-2/3 relative h-[300px] md:h-[350px]"
          initial={{ scale: 0.9, x: -50 }}
          whileInView={{ scale: 1, x: 0 }}
        >
          <Image
            src="/r4.jpeg"
            alt="Our team analyzing financial data"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          className="md:basis-1/3 relative h-[300px] md:h-[350px]"
          initial={{ scale: 0.9, x: 50 }}
          whileInView={{ scale: 1, x: 0 }}
        >
          <Image
            src="/r1.jpeg"
            alt="Client consultation meeting"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* USP Points Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {whyUspoints.map((usp) => (
          <motion.div
            key={usp.id}
            className="flex items-center gap-3 p-2 bg-white shadow-md rounded-xl"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>
              <LiaDotCircleSolid size={50} stroke="#000" />
            </div>
            <h3 className="text-lg">{usp.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WhyUs;
