import React from "react";

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <div className="flex space-x-2">
          <div className="w-4 h-6 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-6 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-6 bg-purple-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;
