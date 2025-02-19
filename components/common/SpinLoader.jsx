import React from "react";

const SpinLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center h-screen bg-transparent">
          <div className="relative flex justify-center items-center">
            <div className="w-20 h-20 border-4 border-transparent border-t-indigo-500 border-b-indigo-500 rounded-full animate-spin"></div>
            <div className="absolute w-16 h-16 bg-indigo-500 rounded-full opacity-50 animate-ping"></div>
            <div className="absolute w-10 h-10 bg-indigo-500 rounded-full shadow-lg"></div>
            <div className="absolute top-24 text-indigo-400 font-semibold text-sm tracking-wider animate-pulse">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinLoader;
