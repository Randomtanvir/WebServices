"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import FullScreenLoader from "@/components/common/FullScreenLoader";

const ServiceAddUpdateForm = ({ service }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [logoPreview, setLogoPreview] = useState(service?.serviceLogo || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (service) {
      setValue("serviceName", service?.serviceName || "");
      setValue("serviceDescription", service?.serviceDescription || "");
    }
  }, [service, setValue]);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setLogoPreview(URL.createObjectURL(file));
      setValue("serviceLogo", file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("serviceName", data.serviceName);
    formData.append("serviceDescription", data.serviceDescription);
    if (data.serviceLogo) {
      formData.append("serviceLogo", data.serviceLogo);
    }

    try {
      const res = service
        ? await fetch(`/api/service/update/${service._id}`, {
            method: "PATCH",
            body: formData,
          })
        : await fetch("/api/service/create", {
            method: "POST",
            body: formData,
          });

      const responseData = await res.json();
      if (responseData.success) {
        toast.success(responseData.message);
        router.push("/dashboard/services");
        setLogoPreview(null);
      }
    } catch (error) {
      console.error("Error submitting service:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex justify-center items-center text-yellow-500 text-2xl font-mono">
                S
              </div>
              <div className="block pl-2 font-semibold text-xl text-gray-700">
                <h2 className="leading-relaxed">
                  {service ? "Update Service" : "Create a Service"}
                </h2>
                <p className="text-sm text-gray-500">
                  {service
                    ? "Edit the service details."
                    : "Add details about the service you want to offer."}
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-8 space-y-4 text-gray-700"
              >
                {/* Service Name */}
                <div className="flex flex-col">
                  <label className="leading-loose">Service Name</label>
                  <input
                    {...register("serviceName", {
                      required: "Service name is required",
                    })}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full border-gray-300 rounded-md focus:outline-none"
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
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full border-gray-300 rounded-md focus:outline-none"
                    placeholder="Describe the service"
                  />
                  {errors.serviceDescription && (
                    <p className="text-red-500 text-xs">
                      {errors.serviceDescription.message}
                    </p>
                  )}
                </div>

                {/* Drag and Drop Image Upload */}
                <div className="flex flex-col">
                  <label className="leading-loose">Service Logo</label>
                  <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-gray-300 p-4 text-center rounded-md cursor-pointer hover:border-gray-500 transition"
                  >
                    <input {...getInputProps()} />
                    <p className="text-gray-500">
                      Drag & drop an image here, or click to select a file.
                    </p>
                  </div>

                  {/* Logo Preview */}
                  {logoPreview && (
                    <div className="mt-4 flex justify-center">
                      <img
                        src={logoPreview}
                        alt="Logo Preview"
                        className="w-32 h-32 object-cover rounded-md shadow-md"
                      />
                    </div>
                  )}
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="pt-4 flex items-center space-x-4">
                  <Link
                    href="/dashboard/services"
                    className="flex cursor-pointer justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md hover:bg-gray-200 transition"
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
                    disabled={loading}
                    className="bg-gradient-to-r cursor-pointer from-indigo-800 to-purple-800 flex justify-center items-center w-full text-white px-4 py-3 rounded-md hover:opacity-90 transition"
                  >
                    {loading
                      ? "Saving..."
                      : service
                      ? "Update Service"
                      : "Create Service"}
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
