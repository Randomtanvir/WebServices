import { FooterBgSvg } from "@/svg/AllSvgs";
import React from "react";
import FooterLogo from "./FooterLogo";
import QuickLinks from "./QuickLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-900 mt-20 text-gray-400 py-10 relative"
    >
      {/* <!-- SVG Background --> */}

      <FooterBgSvg className="absolute top-0 left-0 w-full h-full opacity-20" />

      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between relative z-10">
        {/* <!-- Footer Logo & About --> */}
        <FooterLogo />

        {/* <!-- Quick Links --> */}
        <QuickLinks />

        {/* <!-- Social Media Links --> */}
        <SocialMediaLinks />
      </div>
      <p className="text-center text-gray-600 mt-6">
        &copy; 2025 WebService. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;
