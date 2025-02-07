"use client";

import { login } from "@/app/actions/action";
import useDasAuth from "@/hooks/useDasAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = ({ role }) => {
  const [error, setError] = useState("");
  const { setDasAuth } = useDasAuth();
  const router = useRouter();
  const handelSubmit = async (event) => {
    event.preventDefault();

    if (role === "admin") {
      try {
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        const res = await fetch("/api/auth/adminlogin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }
        if (res.ok) {
          setDasAuth(data.admin);
          router.push("/dashboard");
        }
      } catch (error) {
        setError(error.message);
      }
    } else {
      try {
        const formData = new FormData(event.currentTarget);
        const response = await login(formData);
        if (response.error) {
          setError(response.message);
        } else {
          router.push("/");
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };
  return (
    <form className="space-y-4" onSubmit={handelSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <div className="text-left text-sm text-red-600">{error}</div>}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white rounded-full py-3 hover:bg-purple-800 cursor-pointer transition"
      >
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
