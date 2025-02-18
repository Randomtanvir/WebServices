"use client";

import { useForm } from "react-hook-form";

const ServiceBookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Booking Services
              </h6>
              <button
                className="bg-pink-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md"
                type="button"
              >
                Choose
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("fullName", { required: "Name is required" })}
                    placeholder="Enter your full name"
                    className="border px-3 py-3 w-full rounded shadow"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: "Invalid email",
                      },
                    })}
                    placeholder="Enter your email"
                    className="border px-3 py-3 w-full rounded shadow"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    WebLink (Optional)
                  </label>
                  <input
                    type="url"
                    {...register("webLink", {
                      pattern: {
                        value:
                          /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?[\w-.?=%&@]*)$/,
                        message: "Enter a valid website link",
                      },
                    })}
                    placeholder="https://example.com (optional)"
                    className="border px-3 py-3 w-full rounded shadow"
                  />
                  {errors.webLink && (
                    <p className="text-red-500 text-xs">
                      {errors.webLink.message}
                    </p>
                  )}
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    {...register("contact", {
                      required: "Contact Number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Enter a valid contact number (10-15 digits)",
                      },
                    })}
                    placeholder="Enter your contact number"
                    className="border px-3 py-3 w-full rounded shadow"
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-xs">
                      {errors.contact.message}
                    </p>
                  )}
                </div>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="w-full px-4">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Address
                </label>
                <input
                  {...register("address", { required: "Address is required" })}
                  placeholder="Enter your address"
                  className="border px-3 py-3 w-full rounded shadow"
                />
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  City
                </label>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="Enter your city"
                  className="border px-3 py-3 w-full rounded shadow"
                />
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Country
                </label>
                <input
                  {...register("country", { required: "Country is required" })}
                  placeholder="Enter your country"
                  className="border px-3 py-3 w-full rounded shadow"
                />
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Postal Code
                </label>
                <input
                  {...register("postalCode", {
                    required: "Postal Code is required",
                  })}
                  placeholder="Enter your postal code"
                  className="border px-3 py-3 w-full rounded shadow"
                />
              </div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Select Your Service
              </h6>
              <div className="w-full px-4">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Service Type
                </label>
                <select
                  {...register("serviceType")}
                  className="border px-3 py-3 w-full rounded shadow"
                >
                  <option value="">Select a Service</option>
                  <option value="webdev">Web Development</option>
                  <option value="graphicdesign">Graphic Design</option>
                  <option value="seo">SEO</option>
                  <option value="digitalmarketing">Digital Marketing</option>
                </select>
              </div>

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div className="w-full px-4">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                  About Me
                </label>
                <textarea
                  {...register("aboutMe", {
                    required: "Please provide some information about yourself",
                  })}
                  placeholder="Tell us about yourself"
                  className="border px-3 py-3 w-full rounded shadow"
                  rows="4"
                ></textarea>
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBookingForm;
