"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

const Navbar = ({ role }) => {
  const [toggle, SetToggle] = useState(false);
  const handelToggle = () => {
    SetToggle(!toggle);
  };
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center py-4">
        {/* <!-- Logo --> */}
        <Link
          href="/"
          className="text-2xl font-bold text-purple-800 opacity-0 animate-slideInLeft"
        >
          WebService
        </Link>

        {/* <!-- Nav Links (Hidden on Mobile) --> */}
        {role && (
          <div className="hidden md:flex space-x-6 opacity-0 animate-slideInLeft">
            <Link
              href="#home"
              className="text-gray-700 hover:text-purple-800 transition"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-purple-800 transition"
            >
              Services
            </Link>
            <Link
              href="#teams"
              className="text-gray-700 hover:text-purple-800 transition"
            >
              Teams
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-purple-800 transition"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-purple-800 transition"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-purple-800 transition"
            >
              Contact
            </Link>
          </div>
        )}

        {/* <!-- Mobile Menu Button --> */}
        <MobileMenuButton onToggle={handelToggle} />
      </div>

      {/* <!-- Mobile Menu --> */}
      <MobileMenu toggle={toggle} />
    </nav>
  );
};

export default Navbar;
