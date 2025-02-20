import React from "react";

const CommonNavBgClour = ({ message }) => {
  return (
    <div className="relative h-[30vh] bg-gradient-to-r from-indigo-800 to-purple-800 overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.2"
          d="M0,128L30,133.3C60,139,120,149,180,170.7C240,192,300,224,360,213.3C420,203,480,149,540,138.7C600,128,660,160,720,176C780,192,840,192,900,192C960,192,1020,192,1080,176C1140,160,1200,128,1260,138.7C1320,149,1380,203,1410,229.3C1440,256,1440,320,1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      {/* Floating SVG elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 opacity-30 rounded-full animate-pulse">
        <svg
          className="w-full h-full object-contain"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 opacity-40 rounded-full animate-pulse">
        <svg
          className="w-full h-full object-contain"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <rect
            width="100"
            height="100"
            rx="20"
            fill="transparent"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Text with Shadow and Gradient */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-4xl sm:text-6xl bg-transparent bg-opacity-50 backdrop-blur-md shadow-lg">
        <h1 className="text-center text-shadow-lg animate-fadeIn">
          {message || "Welcome to Our WebService"}
        </h1>
      </div>
    </div>
  );
};

export default CommonNavBgClour;
