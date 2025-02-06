import Link from "next/link";
import React from "react";

const MobileMenu = ({ toggle }) => {
  const mobileNav = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "Teams", path: "#teams" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "#about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <div
      id="mobile-menu"
      className={`${toggle ? "" : "hidden"} md:hidden bg-white px-6 pb-4`}
    >
      {mobileNav?.map((item) => (
        <Link
          key={item.name}
          href={item?.path}
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
