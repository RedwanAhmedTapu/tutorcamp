import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to home page after click
  };

  // Balloon Animation (From Bottom to Top)

  // Animation for cut paper (appears from different directions)
  const paperVariants = {
    hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      x:
        index % 3 === 0
          ? -100
          : index % 3 === 1
          ? 100
          : Math.random() * 600 - 300, // Horizontal movement based on index
      y:
        index % 3 === 0
          ? -300
          : index % 3 === 1
          ? 300
          : Math.random() * 600 - 300, // Vertical movement (more random for some)
      transition: { delay: index * 0.05, duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      {/* Cut Paper Animation (from Top-Left, Top-Right, and Center) */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        {[...Array(1000)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-gradient-to-r from-pink-300 via-purple-400 to-blue-500 w-10 h-10 rounded-full"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={paperVariants}
            style={{
              left: `${index % 2 === 0 ? "10%" : "80%"}`,
              top: `${index % 2 === 0 ? "60%" : "40%"}`,
            }}
          />
        ))}
      </div>

      <div className="text-center bg-white shadow-lg rounded-lg p-8 max-w-lg w-full z-20 relative">
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-green-100 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-600 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-green-600 mt-4">
          Congratulations!
        </h1>
        <p className="text-gray-700 mt-2">
          Your payment was successful. You can now enjoy unlimited video
          meetings.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 bg-blue-500 text-indigo-600 px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
