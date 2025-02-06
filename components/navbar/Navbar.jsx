"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import Logo from "../common/Logo";

const Navbar = () => {
  const [toggle, SetToggle] = useState(false);
  const handelToggle = () => {
    SetToggle(!toggle);
  };
  const nav = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "Teams", path: "#teams" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "#about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center py-4">
        <Logo role="user" />

        {/* <!-- Nav Links (Hidden on Mobile) --> */}
        <div className="hidden md:flex space-x-6 opacity-0 animate-slideInLeft">
          {nav?.map((item) => (
            <Link
              key={item.name}
              href={item?.path}
              className="text-gray-700 focus:text-purple-700 hover:text-purple-800 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* <!-- Mobile Menu Button --> */}
        <MobileMenuButton onToggle={handelToggle} />
      </div>

      {/* <!-- Mobile Menu --> */}
      <MobileMenu toggle={toggle} />
    </nav>
  );
};

export default Navbar;
