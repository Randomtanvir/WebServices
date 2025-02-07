"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      response.status === 201 && router.push("/login");
      response.status === 409 && setError("User already exists");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handelSubmit}>
      <input
        name="fullName"
        type="text"
        placeholder="Full Name"
        className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <div className="text-left text-red-600 text-sm">{error}</div>}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white rounded-full py-3 hover:bg-purple-900 transition"
      >
        Continue
      </button>
    </form>
  );
};

export default RegisterForm;
