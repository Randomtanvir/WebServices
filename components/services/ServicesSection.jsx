import { BgBlueDot, BgBlueDotSvg } from "@/svg/AllSvgs";
import React from "react";
import ServiceList from "./ServiceList";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="pt-20 pb-20 md:pb-0 md:h-screen bg-zinc-200 relative"
    >
      <BgBlueDotSvg className="absolute  top-5 left-6" />
      <div className="container mt-20 mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 opacity-0 animate-slideUp">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 opacity-0 animate-slideUp">
          We offer top-notch services to elevate your business in the digital
          space.
        </p>

        {/* <!-- Services Grid --> */}
        <ServiceList />
      </div>
      <BgBlueDot className="absolute z-10 bottom-10 right-5" />
    </section>
  );
};

export default ServicesSection;
