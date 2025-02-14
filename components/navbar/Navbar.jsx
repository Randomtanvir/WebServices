"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../common/Logo";
import Signout from "../auth/Signout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

const Navbar = ({ user }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [toggle, SetToggle] = useState(false);
  const handelToggle = () => {
    SetToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 z-50 left-0 w-full transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-700 to-purple-700 shadow-lg"
          : "md:bg-transparent bg-indigo-600"
      }`}
    >
      <div className="w-full container mx-auto lg:px-20 z-50 px-6 py-4 flex justify-between items-center">
        <Logo role="user" />

        <div className="hidden md:flex items-center space-x-6 opacity-0 animate-slideInLeft">
          {nav?.map((item) => (
            <Link
              key={item.name}
              href={item?.path}
              className={`${
                pathname === item?.path && "text-yellow-400"
              } text-white font-semibold hover:text-yellow-600 transition`}
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <Signout />
          ) : (
            <Link
              href="/login"
              className="bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
            >
              Login
            </Link>
          )}
        </div>
        <MobileMenuButton onToggle={handelToggle} />
      </div>
      <MobileMenu user={user} onToggle={handelToggle} toggle={toggle} />
    </motion.nav>
  );
};

export default Navbar;
