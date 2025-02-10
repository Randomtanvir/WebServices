"use client";

import { useState } from "react";

const ServiceForm = () => {
  const [webName, setWebName] = useState("");
  const [webLink, setWebLink] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      webName,
      webLink,
      description,
      contactNumber,
      email,
      city,
      fullAddress,
    };

    try {
      //   const res = await fetch("/api/services", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });
      //   if (res.ok) {
      //     alert("Service added successfully!");
      //     setWebName("");
      //     setWebLink("");
      //     setDescription("");
      //     setContactNumber("");
      //     setEmail("");
      //     setCity("");
      //     setFullAddress("");
      //   } else {
      //     console.error("Failed to add service");
      //   }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mt-20 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Web Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Web Name
          </label>
          <input
            type="text"
            value={webName}
            onChange={(e) => setWebName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Web Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Web Link
          </label>
          <input
            type="url"
            value={webLink}
            onChange={(e) => setWebLink(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Full Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Address
          </label>
          <textarea
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            rows={2}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          {loading ? "Submitting..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
