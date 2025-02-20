"use client";

import { motion } from "framer-motion";
export default function BookingMessagePopup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-6 w-80 text-center"
      >
        <h2 className="text-lg font-semibold">Booking Confirmed 🎉</h2>
        <p className="text-gray-600 mt-2">
          Your service has been successfully booked. We will contact you soon!
        </p>
        <button
          onClick={onClose}
          className="mt-4 cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Okay
        </button>
      </motion.div>
    </div>
  );
}
