"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Signout from "../auth/Signout";

const MobileMenu = ({ toggle, onToggle, user }) => {
  const router = useRouter();
  const mobileNav = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Parent animation (stagger children)
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    exit: { opacity: 0, y: -10, transition: { staggerChildren: 0.05 } },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          id="mobile-menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="md:hidden bg-gradient-to-r from-indigo-700 to-purple-700 px-6 pb-4 absolute top-16 left-0 w-full shadow-lg"
        >
          {mobileNav?.map((item, index) => (
            <motion.button
              key={item.name}
              variants={itemVariants}
              custom={index}
              onClick={() => {
                onToggle();
                router.push(item?.path);
              }}
              className="block py-2 text-white hover:text-yellow-500 transition duration-200"
            >
              {item?.name}
            </motion.button>
          ))}
          {user ? (
            <Signout mobile={true} />
          ) : (
            <motion.div variants={itemVariants}>
              <Link
                href="/login"
                className="block w-full text-center mt-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
              >
                Login
              </Link>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
