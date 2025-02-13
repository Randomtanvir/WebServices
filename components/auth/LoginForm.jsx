"use client";

import { useForm } from "react-hook-form";
import { login } from "@/app/actions/action";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await login(data);
      if (response.success) {
        const session = await getSession(); // Fetch session data
        console.log("session :", session);

        if (session?.user?.role === "admin") {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      }

      if (response.error) {
        setError(response.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
      {error && <div className="text-left text-sm text-red-600">{error}</div>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 text-white rounded my-2 py-3 hover:bg-purple-800 cursor-pointer transition flex justify-center items-center"
      >
        {loading ? (
          <>
            {/* Log-in... */}
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
          </>
        ) : (
          "Continue"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
