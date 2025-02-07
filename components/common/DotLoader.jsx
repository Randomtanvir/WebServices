import React from "react";

const DotLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex space-x-2">
        <div className="w-4 h-6 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-6 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-6 bg-purple-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default DotLoader;
