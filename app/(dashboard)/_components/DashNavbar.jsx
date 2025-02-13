import Logo from "@/components/common/Logo";
import React from "react";
import ProfileLogo from "./ProfileLogo";
import Link from "next/link";
import DashNavLinks from "./DashNavLinks";

const DashNavbar = ({ user }) => {
  return (
    <aside className="w-64 bg-gradient-to-l from-purple-600 to-indigo-500  p-6 flex flex-col">
      <div className="mb-10">
        <Logo role="dashboard" />
      </div>
      <DashNavLinks />
      <ProfileLogo user={user} />
    </aside>
  );
};

export default DashNavbar;
