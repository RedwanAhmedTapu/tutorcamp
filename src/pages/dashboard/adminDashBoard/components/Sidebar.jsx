import React from 'react';
import { FiUsers, FiUserCheck } from "react-icons/fi";


const Sidebar = ({onSelectTab} ) => {
    return (
        <div className="w-full md:w-1/4 bg-white shadow-lg p-6 space-y-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h2>
          <button
            className="block w-full text-left px-4 py-3 hover:bg-gray-200 flex items-center gap-2 rounded-lg transition-all duration-200"
            onClick={() => onSelectTab("students")}
          >
            <FiUsers className="text-2xl" />
            <span className="text-lg">All Students</span>
          </button>
          <button
            className="block w-full text-left px-4 py-3 hover:bg-gray-200 flex items-center gap-2 rounded-lg transition-all duration-200"
            onClick={() => onSelectTab("teachers")}
          >
            <FiUserCheck className="text-2xl" />
            <span className="text-lg">All Teachers</span>
          </button>
        </div>
      );
}

export default Sidebar;