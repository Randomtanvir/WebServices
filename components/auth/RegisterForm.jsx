"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/login");
        setMessage(response.message || "User created successfully!");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white md:p-6 rounded-lg ">
      <h2 className="text-xl font-semibold mb-4">Create User</h2>
      {message && <p className="text-green-600 mb-2">{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            {...register("username", {
              required: "Username is required",
              validate: (value) =>
                value.trim().length > 0 || "Username cannot be only spaces",
            })}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                value.trim().length > 0 || "Email cannot be only spaces",
              pattern: {
                value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                message: "Invalid email",
              },
            })}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum length is 6" },
            })}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        {/* <div>
          <label className="block text-sm font-medium">Role</label>
          <select
            {...register("role")}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="user">User</option>
          </select>
        </div> */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white rounded mt-2 py-3 hover:bg-purple-800 cursor-pointer transition flex justify-center items-center"
        >
          {loading ? (
            <>
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            </>
          ) : (
            "Create"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
