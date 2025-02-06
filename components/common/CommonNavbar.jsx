import Link from "next/link";
import React from "react";

const CommonNavbar = () => {
  return (
    <nav className="bg-white shadow-md  w-full z-50">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center py-4">
        {/* <!-- Logo --> */}
        <Link
          href="/"
          className="text-2xl font-bold text-purple-800 opacity-0 animate-slideInLeft"
        >
          WebService
        </Link>

        {/* <!-- Nav Links (Hidden on Mobile) --> */}

        <div className="hidden md:flex space-x-6 opacity-0 animate-slideInLeft">
          <Link
            href="/"
            className="text-gray-700 hover:text-purple-800 transition"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="text-gray-700 hover:text-purple-800 transition"
          >
            Projects
          </Link>

          <Link
            href="/blog"
            className="text-gray-700 hover:text-purple-800 transition"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CommonNavbar;
