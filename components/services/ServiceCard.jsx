import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ serviceName, serviceDescription, serviceLogo }) => {
  return (
    <Link
      href={`/services/booking/${encodeURIComponent(serviceName)}`}
      className="relative bg-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
    >
      {/* Floating Blob Decoration */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>

      {/* Service Card Content */}
      <div className="relative z-10 text-center">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full inline-block">
          <Image
            src={serviceLogo}
            width={50}
            height={50}
            alt={serviceName}
            className="w-12 h-12 object-contain rounded-full"
          />
        </div>
        <h3 className="text-xl font-semibold mt-4 text-gray-900">
          {serviceName}
        </h3>
        <p className="text-gray-600 mt-2 text-sm">{serviceDescription}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
