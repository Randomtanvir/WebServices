import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* <!-- Team Member 1 --> */}
      <TeamMemberCard />

      {/* <!-- Team Member 2 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-fadeIn">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Team Member 2"
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
        <p className="text-gray-600 mt-2">Product Manager</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-700 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
            </svg>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-700 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8c0-1.1-.9-2-2-2s-2 .9-2 2 2 .9 2 2 1.1-.9 2-2zm0 4c0 1.1-.9 2-2 2s-2-.9-2-2 2-.9 2-2 1.1.9 2 2zm0 4c0 1.1-.9 2-2 2s-2-.9-2-2 2-.9 2-2 1.1.9 2 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* <!-- Team Member 3 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-fadeIn">
        <img
          src="https://randomuser.me/api/portraits/men/12.jpg"
          alt="Team Member 3"
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold mt-4">Michael Brown</h3>
        <p className="text-gray-600 mt-2">Lead Developer</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-700 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
            </svg>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-700 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8c0-1.1-.9-2-2-2s-2 .9-2 2 2 .9 2 2 1.1-.9 2-2zm0 4c0 1.1-.9 2-2 2s-2-.9-2-2 2-.9 2-2 1.1.9 2 2zm0 4c0 1.1-.9 2-2 2s-2-.9-2-2 2-.9 2-2 1.1.9 2 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* <!-- Team Member 4 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 opacity-0 animate-fadeIn">
        <img
          src="https://randomuser.me/api/portraits/women/50.jpg"
          alt="Team Member 4"
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold mt-4">Emily Clark</h3>
        <p className="text-gray-600 mt-2">Marketing Specialist</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-700 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
            </svg>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-700 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8c0-1.1-.9-2-2-2s-2 .9-2 2 2 .9 2 2 1.1-.9 2-2zm0 4c0 1.1-.9 2-2 2s-2-.9-2-2 2-.9 2-2 1.1.9 2 2zm0 4c0 1.1-.9 2-2 2s-2-.9-2-2 2-.9 2-2 1.1.9 2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberList;
