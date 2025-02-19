"use client";
import React, { useState } from "react";
import ServiceCard from "./DeshServiceCard";

const DashServiceList = ({ services }) => {
  const [text, setText] = useState("");
  const filterServices = services?.filter((service) =>
    service?.serviceName?.toLowerCase()?.includes(text?.toLowerCase())
  );
  return (
    <div>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search blog..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
      <div className="h-full max-h-[500px] overflow-auto ">
        {filterServices?.length > 0 &&
          filterServices?.map((service, i) => (
            <ServiceCard key={service?._id} {...service} index={i} />
          ))}
      </div>
      {filterServices?.length === 0 && <h1>No services available</h1>}
    </div>
  );
};

export default DashServiceList;
