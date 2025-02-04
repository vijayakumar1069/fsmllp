import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const COMPANY_IMAGES = [
  { id: 1, src: "/r1.jpeg", alt: "Customer 1" },
  { id: 2, src: "/r2.jpeg", alt: "Customer 2" },
  { id: 3, src: "/r3.jpeg", alt: "Customer 3" },
  { id: 4, src: "/r4.jpeg", alt: "Customer 4" },
  { id: 5, src: "/r5.jpeg", alt: "Customer 5" },
  { id: 6, src: "/r6.jpeg", alt: "Customer 6" },
];

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
      {COMPANY_IMAGES.map((image, index) => {
        if (index % 3 === 0) {
          return (
            <motion.div
              key={image.id}
              className="col-span-1 relative rounded-lg shadow-md"
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
              className="col-span-1 flex flex-col gap-4"
              variants={containerVariants}
            >
              <motion.div
                className="relative aspect-square rounded-lg shadow-md"
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
              {COMPANY_IMAGES[index + 1] && (
                <motion.div
                  className="relative aspect-square rounded-lg shadow-md"
                  variants={itemVariants}
                  transition={{ delay: (index + 1) * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    src={COMPANY_IMAGES[index + 1].src}
                    alt={COMPANY_IMAGES[index + 1].alt}
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
