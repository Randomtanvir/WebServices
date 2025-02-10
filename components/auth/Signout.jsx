"use client";
import { signOut } from "next-auth/react";

const Signout = () => {
  return (
    <button
      className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      Logout
    </button>
  );
};

export default Signout;
