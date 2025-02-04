import Link from "next/link";
import React from "react";

const MobileMenu = ({ toggle }) => {
  return (
    <div
      id="mobile-menu"
      className={`${toggle ? "" : "hidden"} md:hidden bg-white px-6 pb-4`}
    >
      <Link href="#" className="block py-2 text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link href="#" className="block py-2 text-gray-700 hover:text-blue-600">
        Services
      </Link>
      <Link href="#" className="block py-2 text-gray-700 hover:text-blue-600">
        About
      </Link>
      <Link href="#" className="block py-2 text-gray-700 hover:text-blue-600">
        Contact
      </Link>
    </div>
  );
};

export default MobileMenu;
