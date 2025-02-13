import RegisterForm from "@/components/auth/RegisterForm";
import UserForm from "@/components/auth/RegisterForm2";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="fixed inset-0 bg-gradient-to-r to-purple-800 from-indigo-600  z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50">
          <button
            id="closeModalBtn"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <i className="ph-x text-2xl"></i>
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Register to Explore our Service
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Welcome back! Let&apos;s get you Sign up in.
            </p>
          </div>

          <div className="space-y-4 mb-4">
            <SocialLogin />

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* <RegisterForm /> */}
            <UserForm />
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>
              Alrady have an account?
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
