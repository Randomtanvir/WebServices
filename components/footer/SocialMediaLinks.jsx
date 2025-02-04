import React from "react";

const SocialMediaLinks = () => {
  return (
    <div>
      <h4 className="text-white font-semibold">Follow Us</h4>
      <div className="mt-2 flex space-x-4">
        <a href="#" className="hover:text-blue-400 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 1-18-5.92V12h4V7h3v5h3V7h3v5h3z"></path>
          </svg>
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 12a10.2 10.2 0 0 1-10.2 10.2A10.2 10.2 0 0 1 2.6 12c0-5.5 4.5-10 10.2-10A10.2 10.2 0 0 1 23 12zM12 4.8c-3.9 0-7.2 3.2-7.2 7.2 0 3.9 3.2 7.2 7.2 7.2 3.9 0 7.2-3.2 7.2-7.2 0-3.9-3.3-7.2-7.2-7.2zm0 11.6c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
