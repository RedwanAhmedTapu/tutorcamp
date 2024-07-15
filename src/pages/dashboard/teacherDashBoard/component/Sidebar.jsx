import React, { useState } from "react";
// import Logo from "../assets/RealEstatLogo.png";
import {
  Home as HomeIcon,
  Apps as AppsIcon,
  Pages as PagesIcon,
  TableChart as TableChartIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  MoreVert as MoreVertIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
// import { SiFormspree } from "react-icons/si";
import {
  Notifications as NotificationsIcon,
  CalendarToday as CalendarIcon,
  Assignment as TasksIcon,
  Description as DocumentsIcon,
  PhotoLibrary as PhotosIcon,
  MusicNote as MusicIcon,
} from "@mui/icons-material";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menuItems = [
  { name: "Home", icon: <HomeIcon className="text-teal-800" />, id: "home" },
  {
    name: "Apps",
    icon: <AppsIcon className="text-teal-800" />,
    subMenu: ["Contacts", "Ecommerce", "Chats", "Users"],
    id: "apps",
  },
  { name: "Pages", icon: <PagesIcon className="text-teal-800" />, id: "pages" },
  {
    name: "Forms",
    icon: <AppsIcon className="text-teal-800" />,
    id: "forms",
  },
  {
    name: "Tables",
    icon: <TableChartIcon className="text-teal-800" />,
    id: "tables",
  },
  { name: "UI", icon: <BarChartIcon className="text-teal-800" />, id: "ui" },
  {
    name: "Charts",
    icon: <LockIcon className="text-teal-800" />,
    id: "charts",
  },
  {
    name: "Auth",
    icon: <MoreVertIcon className="text-teal-800" />,
    id: "auth",
  },
  {
    name: "Settings",
    icon: <SettingsApplicationsIcon className="text-teal-800" />,
    id: "settings",
  },
  {
    name: "Profile",
    icon: <AccountCircleIcon className="text-teal-800" />,
    id: "profile",
  },
  {
    name: "Messages",
    icon: <AppsIcon className="text-teal-800" />,
    id: "messages",
  },
  {
    name: "Notifications",
    icon: <NotificationsIcon className="text-teal-800" />,
    id: "notifications",
  },
  {
    name: "Calendar",
    icon: <CalendarIcon className="text-teal-800" />,
    id: "calendar",
  },
  { name: "Tasks", icon: <TasksIcon className="text-teal-800" />, id: "tasks" },
  {
    name: "Documents",
    icon: <DocumentsIcon className="text-teal-800" />,
    id: "documents",
  },
  {
    name: "Photos",
    icon: <PhotosIcon className="text-teal-800" />,
    id: "photos",
  },
  {
    name: "Videos",
    icon: <AppsIcon className="text-teal-800" />,
    id: "videos",
  },
  { name: "Music", icon: <MusicIcon className="text-teal-800" />, id: "music" },
];

const Sidebar = ({ isExpanded, setIsExpanded,isMobileIndex, setIsMobileIndex }) => {
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setExpandedMenuIndex(expandedMenuIndex === index ? null : index);
  };

  const isSelected = (id) => {
    return expandedMenuIndex === id;
  };

  return (
    <>
    {isMobileIndex&&
    <div
      className={`flex flex-col h-screen transition-width duration-300 z-50  ${
        isExpanded
          ? "w-64 bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 shadow-lg"
          : "w-20 bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 shadow-lg"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center justify-between p-4 border-b border-white border-opacity-10">
        <div className="text-3xl text-indigo-700">
         {/* <img src={} className="w-12 h-12 rounded-full object-cover"/> */}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="focus:outline-none text-indigo-700 neumorphism-button"
        >
         
        </button>
      </div>
      <nav
        className={`mt-4 flex-1 ${
          isExpanded && "overflow-y-scroll scrollbar-thin"
        }`}
      >
        {menuItems.map((item, index) => (
          <div key={index} className="group flex flex-col p-2 ">
            <div
              className={`flex items-center p-2 hover:bg-indigo-100 transition-all duration-300 cursor-pointer transform hover:translate-x-1 hover:translate-y-1 neumorphism ${
                !isExpanded && "justify-center"
              } ${isSelected(item.id) ? "bg-indigo-200" : ""}`}
              onClick={() => toggleSubMenu(index)}
            >
              <div className="flex justify-around gap-x-4 items-center">
                <div className="text-xl">{item.icon}</div>
                <span className={`ml-4 ${!isExpanded && "hidden"}`}>
                  {item.name}
                </span>
              </div>
              {isExpanded && item.subMenu && (
                <ExpandMoreIcon
                  className={`text-indigo-700 ml-8 transform transition-transform ${
                    isSelected(item.id) ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
            {isExpanded && expandedMenuIndex === index && item.subMenu && (
              <div className="ml-8 transition-height duration-500">
                {item.subMenu.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center p-2 hover:bg-indigo-100 transition-all duration-300 cursor-pointer transform hover:translate-x-1 hover:translate-y-1 neumorphism"
                  >
                    <span>{subItem}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
}
    </>
  );
};

export default Sidebar;
