import React from "react";

const QuickLinks = () => {
  return (
    <div className="mb-6 md:mb-0">
      <h4 className="text-white font-semibold">Quick Links</h4>
      <ul className="mt-2 space-y-2">
        <li>
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
