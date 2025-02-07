import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const DashboardLoginPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="fixed inset-0 bg-gradient-to-r from-purple-700 to-indigo-700  z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50">
          <button
            id="closeModalBtn"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <i className="ph-x text-2xl"></i>
          </button>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Log in to Dashboaed
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Welcome back! Let&apos;s get you signed in.
            </p>
          </div>

          <div className="space-y-4 mb-4">
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <LoginForm role="admin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLoginPage;
