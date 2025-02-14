"use client";
import { MobileMenuSvg } from "@/svg/AllSvgs";
import React from "react";

const MobileMenuButton = ({ onToggle }) => {
  return (
    <button
      onClick={onToggle}
      id="menu-btn"
      className="md:hidden focus:outline-none"
    >
      <MobileMenuSvg className="w-6 h-6 text-white" />
    </button>
  );
};

export default MobileMenuButton;
