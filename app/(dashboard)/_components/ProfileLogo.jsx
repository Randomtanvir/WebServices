import Link from "next/link";
import React from "react";

const ProfileLogo = () => {
  return (
    <div className="mt-auto flex items-center">
      <Link href="/dashboard/profile">
        <img
          src="../assets/avater.webp"
          alt="Mr Hasan"
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="text-white font-semibold">Tanvir </span>
      </Link>
    </div>
  );
};

export default ProfileLogo;
