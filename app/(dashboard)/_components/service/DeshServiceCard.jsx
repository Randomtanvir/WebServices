"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdOutlineEditLocation } from "react-icons/md";
import { toast } from "react-toastify";

const DeshServiceCard = ({ serviceName, serviceLogo, index, _id }) => {
  const router = useRouter();
  const handelDelete = async () => {
    if (confirm("Are you Sure?")) {
      const res = await fetch(`/api/service/remove/${_id}`, {
        method: "DELETE",
      });
      const response = await res.json();
      if (response.success) {
        router.refresh();
        toast.success(response.message);
      } else {
        console.error("Failed to delete blog.");
      }
    }
  };
  return (
    <div className="flex items-center gap-10 justify-between border-b border-purple-200 py-2">
      <p className="w-6 text-center font-semibold">{index + 1}</p>
      <Image
        width={40}
        height={40}
        src={serviceLogo}
        alt={serviceName}
        className="w-10 h-10 rounded"
      />
      <p className="flex-1 ml-2 text-base">{serviceName}</p>
      <button
        onClick={() => router.push(`/dashboard/services/edit/${_id}`)}
        className="px-4 py-2 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center gap-2"
      >
        <MdOutlineEditLocation />
        Edit
      </button>
      <button
        onClick={handelDelete}
        className="px-4 py-2 cursor-pointer bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center gap-2"
      >
        <FaTrash />
        Delete
      </button>
    </div>
  );
};

export default DeshServiceCard;
