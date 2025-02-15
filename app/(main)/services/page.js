import ServicesSection from "@/components/services/ServicesSection";
import { BgBlueDot, BubbleBg } from "@/svg/AllSvgs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-indigo-800 to-purple-800 relative ">
        <div className="text-white md:text-6xl h-[80vh] text-2xl flex justify-between items-center font-semibold container mx-auto px-6 lg:px-20 pt-20 ">
          <div className="">
            <h1 className="mt-36">Our Services</h1>
            <span className="w-40 h-[3px] bg-gradient-to-r from-white to-purple-800 inline-block animate-pulse"></span>
            <p className="text-base mt-5">
              We provide scalable, secure, and high-performance solutions to
              elevate your online presence.
            </p>
            <Link
              href="#services"
              className="text-base cursor-pointer hover:bg-white/50 hover:text-white transition-all px-6 py-3 bg-white text-black rounded-md  "
            >
              Book Now
            </Link>
          </div>
          <div className="">
            <div className=" opacity-0 animate-fadeScale">
              <Image
                src="/business.svg"
                alt="business"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pl-10 mt-10 animate-pulse">
            <div className="w-3 mb-2 h-3 bg-indigo-500"></div>
            <div className="w-3 mb-2 h-3 bg-indigo-400"></div>
            <div className="w-3 mb-2 h-3 bg-indigo-600"></div>
            <div className="w-3 mb-2 h-3 bg-indigo-700"></div>
          </div> */}

      <ServicesSection />
    </>
  );
};

export default ServicesPage;
