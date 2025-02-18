import { WebDevLogoSvg } from "@/svg/AllSvgs";
import Link from "next/link";
import React from "react";

const ServiceCard = () => {
  return (
    <Link
      href="/services/booking"
      className="bg-white z-30 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-slideUp relative overflow-hidden"
    >
      <div className="absolute top-5 left-5 w-20 h-10 bg-blue-300 rounded-b-full opacity-20 animate-pulse"></div>
      {/* <!-- Service Card Content --> */}
      <div className="relative z-10">
        <div className="bg-blue-100 p-4 rounded-full inline-block">
          <WebDevLogoSvg className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mt-4">Web Development</h3>
        <p className="text-gray-600 mt-2">
          We build modern, fast, and responsive websites tailored to your
          business needs.
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
