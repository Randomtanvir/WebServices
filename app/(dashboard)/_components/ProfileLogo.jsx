"use client";

import Link from "next/link";

const ProfileLogo = ({ user }) => {
  return (
    <div className="mt-auto flex justify-center items-center">
      <Link href="/dashboard/profile">
        <img
          src={user?.image || "/users.png"}
          alt="Mr Hasan"
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="text-white font-semibold">{user?.name} </span>
      </Link>
    </div>
  );
};

export default ProfileLogo;
