import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* <!-- Service Card 1 --> */}
      <ServiceCard />

      {/* <!-- Service Card 2 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-slideUp relative overflow-hidden">
        {/* <!-- SVG Background --> */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#e0f9f2"
            fillOpacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,101.3C672,96,768,128,864,138.7C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192V0H0Z"
          ></path>
        </svg>

        {/* <!-- Service Card Content --> */}
        <div className="relative z-10">
          <div className="bg-green-100 p-4 rounded-full inline-block">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12H7.5m9 0a4.5 4.5 0 00-9 0m9 0a4.5 4.5 0 01-9 0"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">SEO Optimization</h3>
          <p className="text-gray-600 mt-2">
            Increase your website's visibility on search engines and attract
            more visitors.
          </p>
        </div>
      </div>

      {/* <!-- Service Card 3 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-slideUp relative overflow-hidden">
        {/* <!-- SVG Background --> */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f3e8ff"
            fillOpacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,101.3C672,96,768,128,864,138.7C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192V0H0Z"
          ></path>
        </svg>

        {/* <!-- Service Card Content --> */}
        <div className="relative z-10">
          <div className="bg-purple-100 p-4 rounded-full inline-block">
            <svg
              className="w-10 h-10 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h11m-11 4h11m-11-8h11M14 14l3.5-3.5M14 10l3.5 3.5"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">UI/UX Design</h3>
          <p className="text-gray-600 mt-2">
            We create intuitive and engaging designs that enhance user
            experience.
          </p>
        </div>
      </div>

      {/* <!-- Service Card 4 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-slideUp relative overflow-hidden">
        {/* <!-- SVG Background --> */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff9e5"
            fillOpacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,101.3C672,96,768,128,864,138.7C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192V0H0Z"
          ></path>
        </svg>

        {/* <!-- Service Card Content --> */}
        <div className="relative z-10">
          <div className="bg-yellow-100 p-4 rounded-full inline-block">
            <svg
              className="w-10 h-10 text-yellow-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10V3H9v7H3v4h6v7h6v-7h6v-4h-6z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">App Development</h3>
          <p className="text-gray-600 mt-2">
            We develop high-performance mobile applications for iOS and Android.
          </p>
        </div>
      </div>

      {/* <!-- Service Card 5 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-slideUp">
        <div className="bg-red-100 p-4 rounded-full inline-block">
          <svg
            className="w-10 h-10 text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Digital Marketing</h3>
        <p className="text-gray-600 mt-2">
          Reach your audience with result-driven digital marketing strategies.
        </p>
      </div>

      {/* <!-- Service Card 6 --> */}
      <div className="bg-white z-30 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-slideUp">
        <div className="bg-teal-100 p-4 rounded-full inline-block">
          <svg
            className="w-10 h-10 text-teal-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 10l5 5m0 0l5-5m-5 5V3"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Cloud Solutions</h3>
        <p className="text-gray-600 mt-2">
          Scale your business with secure and reliable cloud computing services.
        </p>
      </div>
    </div>
  );
};

export default ServiceList;
