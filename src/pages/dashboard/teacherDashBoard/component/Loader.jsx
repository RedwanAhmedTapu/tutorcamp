import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        <div className="w-32 h-32 border-8 border-gray-200 border-t-8 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="w-24 h-24 border-8 border-gray-200 border-t-8 border-t-green-500 rounded-full animate-spin absolute top-4 left-4"></div>
        <div className="w-16 h-16 border-8 border-gray-200 border-b-8 border-b-red-500 rounded-full animate-spin absolute top-8 left-8"></div>
        <div className="w-8 h-8 border-8 border-gray-200 border-b-8 border-b-yellow-500 rounded-full animate-spin absolute top-12 left-12"></div>
      </div>
    </div>
  );
};

export default Loader;
