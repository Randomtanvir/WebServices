import Link from "next/link";
import React from "react";

const Logo = ({ role }) => {
  return (
    <Link
      href={role === "user" ? "/" : "/dashboard"}
      className={`text-2xl font-bold ${
        role === "user" ? "text-purple-800" : "text-white"
      }  opacity-0 animate-slideInLeft`}
    >
      WebService
    </Link>
  );
};

export default Logo;
