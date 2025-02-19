import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative flex justify-center items-center">
        <div className="w-20 h-20 border-4 border-transparent border-t-indigo-500 border-b-indigo-500 rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 bg-indigo-500 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute w-10 h-10 bg-indigo-500 rounded-full shadow-lg"></div>
        <div className="absolute top-24 text-indigo-400 font-semibold text-sm tracking-wider animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
