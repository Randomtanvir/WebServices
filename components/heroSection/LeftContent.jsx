import React from "react";

const LeftContent = () => {
  return (
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight opacity-0 animate-slideInLeft">
        Boost Your Business with
        <span className="text-yellow-400">Our Web Services</span>
      </h1>
      <p className="mt-4 text-lg opacity-80  animate-slideInLeft">
        We provide scalable, secure, and high-performance solutions to elevate
        your online presence.
      </p>
      <div className="mt-6">
        <a
          href="#"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 transition duration-300 opacity-0 animate-slideInLeft"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LeftContent;
