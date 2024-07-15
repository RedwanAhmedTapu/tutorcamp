import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaLanguage,
  FaShoppingCart,
  FaBell,
  FaUserCircle,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

const Navbar = ({ isExpanded, setIsExpanded,isMobileIndex, setIsMobileIndex }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav className=" text-teal-800 bg-white   flex justify-between items-center px-20 py-4 ">
      {/* Left Side (Menu, Fullscreen, and Search) */}
      <div className="flex items-center space-x-4">
        {/* Menu Button for Mobile */}
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsMobileIndex(!isMobileIndex)}
        >
          <FaBars />
        </button>

        {/* Fullscreen Toggle Button */}
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>

        {/* Search Input */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="lg:w-96 py-2 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-200"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <FaSearch />
          </span>
        </div>
      </div>

      {/* Right Side (Language Selector, Cart, Notifications, Profile) */}
      <div className={`flex items-center space-x-8 mr-12 ${isExpanded && "mr-48"}`}>
        {/* Language Selector */}
        <div className="relative hidden md:block">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleLanguageMenu}
          >
            <FaLanguage />
          </button>
          {/* Dropdown for Language Selector */}
          {isLanguageOpen && (
            <div className="absolute top-full right-0 bg-white text-black rounded-lg p-2 mt-2 w-40 shadow-lg">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
                  English
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
                  Spanish
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
                  French
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <button className="text-2xl focus:outline-none">
          <FaShoppingCart />
        </button>

        {/* Notifications */}
        <button className="text-2xl focus:outline-none relative">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center text-white">
            3
          </span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleProfileMenu}
          >
            <FaUserCircle />
          </button>
          {isProfileOpen && (
            <div className="absolute top-full right-0 bg-white text-black rounded-lg p-2 mt-2 w-40 shadow-lg">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
                  Profile
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
                  Settings
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
