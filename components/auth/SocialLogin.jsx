"use client";

import { GoogleIconSvg } from "@/svg/AllSvgs";
import { signIn } from "next-auth/react"; // for cleint side using

const SocialLogin = () => {
  const handelGoogelLogin = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <button
      onClick={handelGoogelLogin}
      className="w-full flex items-center justify-center cursor-pointer border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition"
    >
      <GoogleIconSvg className="mr-3" />
      Continue with Google
    </button>
  );
};

export default SocialLogin;
