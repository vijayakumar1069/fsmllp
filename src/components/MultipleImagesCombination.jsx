"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Button } from "./ui/button";
import Avatar_Creation from "./Avatar_Creation";
import { motion } from "framer-motion";
import Link from "next/link";
import { COMPANY_IMAGES } from "@/utils/constants";

export const MultipleImagesCombination = ({ className }) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="flex flex-col items-center lg:justify-end gap-4 md:flex-row md:gap-6 lg:gap-8">
        <AvatarStack />
        <TrustText />
      </div>
    </section>
  );
};

const AvatarStack = () => (
  <motion.div
    className="relative flex items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {COMPANY_IMAGES.map((item, index) => (
      <Avatar_Creation key={item.id} item={item} index={index} />
    ))}
  </motion.div>
);

const TrustText = () => (
  <div className="space-y-4 text-center flex flex-col justify-center items-center md:items-start md:text-left">
    <p className="text-base font-bold max-w-72 text-para_color md:text-lg">
      Over 15k+ Customers & Companies Trust Us.
    </p>
    <ExploreButton />
  </div>
);

const ExploreButton = () => {
  return (
    <Link href="#services">
      <Button className="group flex gap-3 justify-center items-center bg-gradient-to-r from-star_color_1 via-star_color_2 to-[#40BAFF] p-2 lg:p-3   transition-all hover:scale-105">
        <span>Explore more Services</span>
        <IconArrowNarrowRight
          size={24}
          stroke={3}
          className="-rotate-45 transition-transform group-hover:translate-x-1"
        />
      </Button>
    </Link>
  );
};
