import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentFail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto navigate to the home page after 5 seconds
    setTimeout(() => {
      navigate("/"); 
    }, 2000);
  }, [navigate]);

  // Failure animation for the icon
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: [0, 10, -10, 0], // Small rotation for effect
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 1 },
    },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100">
      {/* Animated Failure Icon */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        className="rounded-full bg-red-100 p-6 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-red-600 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.div>

      {/* Message Section */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center z-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! Payment Failed</h1>
          <p className="text-gray-700 mb-6">
            Something went wrong with your payment. Please try again or contact support if the issue persists.
          </p>
          <p className="text-sm text-gray-500">You will be redirected to the home page shortly...</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
