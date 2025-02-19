import Link from "next/link";
import React from "react";

const SearviceAddButton = () => {
  return (
    <div className="flex items-center rounded-md shadow-lg bg-white">
      <div className="max-w-sm w-full bg-transparent p-10 rounded-lg ">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add New Service
          </h2>
          <p className="text-gray-600 mb-6">
            Click the button below to add a new service to your portfolio.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/dashboard/services/create"
            className=" bg-gradient-to-r from-indigo-800 to-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Add Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearviceAddButton;
