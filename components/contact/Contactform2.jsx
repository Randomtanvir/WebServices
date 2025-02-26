"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (response.success) {
        toast.success(response.message);
      }
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="text-sm">
          Full name
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Full name is required" })}
          className="w-full border p-3 rounded dark:bg-gray-100"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          className="w-full border p-3 rounded dark:bg-gray-100"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone", {
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Enter a valid Phone number (10-15 digits)",
            },
          })}
          className="w-full border p-3 rounded dark:bg-gray-100"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          rows="3"
          {...register("message", { required: "Message is required" })}
          className="w-full border p-3 rounded dark:bg-gray-100"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full p-3 cursor-pointer text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
      >
        Send Message
      </button>
    </form>
  );
}
