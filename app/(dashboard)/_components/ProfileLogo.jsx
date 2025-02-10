"use client";
import useDasAuth from "@/hooks/useDasAuth";
import Link from "next/link";

const ProfileLogo = () => {
  const { dasAuth } = useDasAuth();

  return (
    <div className="mt-auto flex items-center">
      <Link href="/dashboard/profile">
        <img
          src="/users.png"
          alt="Mr Hasan"
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="text-white font-semibold">{dasAuth?.name} </span>
      </Link>
    </div>
  );
};

export default ProfileLogo;
