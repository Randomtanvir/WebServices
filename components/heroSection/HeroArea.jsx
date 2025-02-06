import { CercleSvg, HeroBgSvg } from "@/svg/AllSvgs";
import React from "react";
import LeftContent from "./LeftContent";
import RightImage from "./RightImage";

const HeroArea = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-indigo-800 to-purple-800 text-white flex items-center overflow-hidden">
      {/* <!-- SVG Background Top Wave --> */}
      <div className="absolute top-0 left-0 w-full">
        <CercleSvg className="w-full h-32 lg:h-48" />
      </div>

      {/* <!-- Floating Blobs --> */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-white rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 left-1/4 w-40 h-42 bg-blue-300 rounded-full opacity-20 animate-spin"></div>

      {/* <!-- Content --> */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center relative z-10">
        <LeftContent />
        <RightImage />
      </div>

      {/* <!-- SVG Background Bottom Wave --> */}
      <div className="absolute bottom-0 left-0 w-full">
        <HeroBgSvg className="w-full h-32 lg:h-48" />
      </div>
    </section>
  );
};

export default HeroArea;
