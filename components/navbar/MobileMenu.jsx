"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const MobileMenu = ({ toggle, onToggle, user }) => {
  const router = useRouter();
  const mobileNav = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          id="mobile-menu"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-gradient-to-r from-indigo-700 to-purple-700 px-6 pb-4 absolute top-16 left-0 w-full shadow-lg"
        >
          {mobileNav?.map((item) => (
            <button
              onClick={() => {
                onToggle();
                router.push(item?.path);
              }}
              key={item.name}
              className="block py-2 text-white hover:text-yellow-500 transition duration-200"
            >
              {item?.name}
            </button>
          ))}
          {user ? (
            <button
              onClick={() => console.log("Signout")}
              className="block w-full text-center mt-2 text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="block w-full text-center mt-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
            >
              Login
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
