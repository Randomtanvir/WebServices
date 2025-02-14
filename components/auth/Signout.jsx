"use client";
import { signOut } from "next-auth/react";

const Signout = ({ mobile }) => {
  return (
    <button
      className={`${
        mobile ? "block w-full text-center mt-2" : ""
      }duration-200 bg-red-500 hover:bg-red-600 transition rounded-lg px-4 py-2 text-white cursor-pointer`}
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      Logout
    </button>
  );
};

export default Signout;
