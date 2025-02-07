"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

const CommonNavbar = () => {
  const pathname = usePathname();
  const comonNav = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-white shadow-md  w-full z-50">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center py-4">
        <Logo role="user" />

        {/* <!-- Nav Links (Hidden on Mobile) --> */}

        <div className="hidden md:flex space-x-6 opacity-0 animate-slideInLeft">
          {comonNav?.map((item) => (
            <Link
              key={item?.name}
              href={item?.path}
              className={`${
                item?.path === pathname && "text-purple-600"
              } text-gray-700 hover:text-purple-800 transition`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CommonNavbar;
