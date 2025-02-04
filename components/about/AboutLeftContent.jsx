import React from "react";

const AboutLeftContent = () => {
  return (
    <div className="lg:w-1/2 text-center lg:text-left">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-fadeIn">
        About Us
      </h2>
      <p className="text-lg text-gray-600 opacity-0 animate-fadeIn">
        We are a team of dedicated professionals committed to delivering
        high-quality web solutions. With years of experience in web development,
        design, and marketing, we help businesses thrive in the digital world.
      </p>
      <a
        href="#"
        className="mt-6 inline-block px-6 py-3 bg-purple-800 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 transition opacity-0 animate-fadeIn"
      >
        Learn More
      </a>
    </div>
  );
};

export default AboutLeftContent;
