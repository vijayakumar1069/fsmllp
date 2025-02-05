import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { Hero_Section_Images } from "@/utils/constants";

const CustomColumnGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="grid grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {Hero_Section_Images.map((image, index) => {
        if (index % 3 === 0) {
          return (
            <motion.div
              key={image.id}
              className="col-span-1 relative rounded-lg shadow-md max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px]"
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 710vw, 33vw"
              />
            </motion.div>
          );
        }

        if (index % 3 === 1) {
          return (
            <motion.div
              key={image.id}
              className="col-span-1 flex flex-col space-y-4"
              variants={containerVariants}
            >
              <motion.div
                className="relative aspect-square rounded-lg shadow-md max-h-[90px] sm:max-h-[115px] md:max-h-[140px] lg:max-h-[165px]"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
              {Hero_Section_Images[index + 1] && (
                <motion.div
                  className="relative aspect-square max-h-[90px] sm:max-h-[115px] md:max-h-[140px] lg:max-h-[165px] rounded-lg shadow-md"
                  variants={itemVariants}
                  transition={{ delay: (index + 1) * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    src={Hero_Section_Images[index + 1].src}
                    alt={Hero_Section_Images[index + 1].alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              )}
            </motion.div>
          );
        }

        return null;
      })}
    </motion.div>
  );
};

export default CustomColumnGrid;
