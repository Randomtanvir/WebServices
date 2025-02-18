"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const ServiceAddUpdateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [logoPreview, setLogoPreview] = useState(null);

  const onSubmit = async (data) => {
    try {
      // Prepare FormData to include the file
      const formData = new FormData();

      // Append the form data (serviceName, serviceDescription, and the file)
      formData.append("serviceName", data.serviceName);
      formData.append("serviceDescription", data.serviceDescription);
      formData.append("serviceLogo", data.serviceLogo[0]); // Access the file from the file input

      // Send the data with FormData
      const res = await fetch("/api/create-service", {
        method: "POST",
        body: formData,
      });

      const responseData = await res.json();
      toast.success(responseData.message);
      reset();
      setLogoPreview(null);
    } catch (error) {
      console.error("Error submitting service:", error);
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file)); // Create a local URL for the file
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                S
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Create a Service</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Add details about the service you want to offer.
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                {/* Service Name */}
                <div className="flex flex-col">
                  <label className="leading-loose">Service Name</label>
                  <input
                    {...register("serviceName", {
                      required: "Service name is required",
                    })}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Service name"
                  />
                  {errors.serviceName && (
                    <p className="text-red-500 text-xs">
                      {errors.serviceName.message}
                    </p>
                  )}
                </div>

                {/* Service Description */}
                <div className="flex flex-col">
                  <label className="leading-loose">Service Description</label>
                  <textarea
                    {...register("serviceDescription", {
                      required: "Service description is required",
                    })}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Describe the service"
                  />
                  {errors.serviceDescription && (
                    <p className="text-red-500 text-xs">
                      {errors.serviceDescription.message}
                    </p>
                  )}
                </div>

                {/* Service Logo */}
                <div className="flex flex-col">
                  <label className="leading-loose">Service Logo</label>
                  <input
                    type="file"
                    {...register("serviceLogo", {
                      required: "Service logo is required",
                    })}
                    onChange={handleLogoChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                  {errors.serviceLogo && (
                    <p className="text-red-500 text-xs">
                      {errors.serviceLogo.message}
                    </p>
                  )}
                  {logoPreview && (
                    <div className="mt-4">
                      <img
                        src={logoPreview}
                        alt="Logo Preview"
                        className="w-32 h-32 object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="pt-4 flex items-center space-x-4">
                  <Link
                    href="/dashboard/services"
                    className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-800 to-purple-800 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create Service
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAddUpdateForm;
