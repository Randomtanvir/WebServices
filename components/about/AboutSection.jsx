import { AboutBgSvg } from "@/svg/AllSvgs";
import React from "react";
import AboutLeftContent from "./AboutLeftContent";
import AboutRightContent from "./AboutRightContent";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 h-[70vh] bg-white relative">
      <AboutBgSvg className="absolute top-0 left-0 w-full h-full" />
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center relative z-10">
        <AboutLeftContent />
        <AboutRightContent />
      </div>
    </section>
  );
};

export default AboutSection;
