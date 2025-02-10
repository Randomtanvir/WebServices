"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import Logo from "../common/Logo";
import { usePathname } from "next/navigation";
import Signout from "../auth/Signout";

const Navbar = ({ user }) => {
  const [toggle, SetToggle] = useState(false);
  const pathname = usePathname();
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
        <div className="hidden md:flex items-center space-x-6 opacity-0 animate-slideInLeft">
          {nav?.map((item) => (
            <Link
              key={item.name}
              href={item?.path}
              className={`${
                pathname === item?.path && "text-purple-700"
              } text-gray-700 focus:text-purple-700 hover:text-purple-800 transition`}
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <Signout />
          ) : (
            <Link
              href="/login"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
            >
              Login
            </Link>
          )}
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
