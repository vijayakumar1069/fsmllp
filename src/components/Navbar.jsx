"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { navbarValues } from "@/utils/constants";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const NavLink = ({ href, children }) => (
  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className=" text-xl font-medium"
      scroll={true}
      duration={10}
    >
      {children}
    </Link>
  </motion.li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 md:py-3 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Company Logo"
              width={100}
              height={100}
              className="h-16 w-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navbarValues.map((item) => (
              <NavLink key={item.id} href={item.path}>
                {item.title}
              </NavLink>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 1.5 }}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-nav_bg overflow-hidden"
              aria-label="Mobile Primary"
            >
              <ul className="px-4 py-6 space-y-6">
                {navbarValues.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    className="border-b last:border-b-0"
                  >
                    <Link
                      href={item.path}
                      className="block py-2  text-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
