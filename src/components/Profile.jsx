import React, { useState } from "react";
import ChatList from "./ChatListForStudent"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";
import {FaRegMessage} from "react-icons/fa6";
import { GoUnverified } from "react-icons/go";
import Verified from "../assets/verified-logo.jpg";

const Profile = ({ allTeachers }) => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const loggedUser = localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser")).email
    : null;

  const navigate = useNavigate();

  const handleChatIconClick = (teacher) => {
    if (selectedTeacher && selectedTeacher.email === teacher.email) {
      setSelectedTeacher(null); // Close the chat if the same teacher is clicked again
    } else {
      setSelectedTeacher(teacher);
    }
  };

  const handleCloseChat = () => {
    setSelectedTeacher(null);
  };

  if (!allTeachers || allTeachers.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-20">No teachers found.</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-2 md:p-12 h-[35rem] relative top-20 space-y-8 overflow-y-scroll">
      
      {allTeachers.map((singleTeacher, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          {selectedTeacher && selectedTeacher.email === singleTeacher.email && (
            <div className="relative">
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <button
                  onClick={handleCloseChat}
                  className="text-gray-500 hover:text-gray-900 text-sm focus:outline-none"
                  aria-label="Close"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ChatList
                title={` ${singleTeacher.fname} ${singleTeacher.lname}`}
                messages={[]} // Initial messages can be passed here
                userEmail={singleTeacher.email}
              />
            </div>
          )}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <img
              src={`${process.env.SERVER_URL}/../${singleTeacher.profileImage}`}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
            />
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {singleTeacher.fname} {singleTeacher.lname}
              </h2>
              <p className="text-lg text-gray-600">{singleTeacher.email}</p>
              <p className="text-gray-600">{singleTeacher.userType}</p>
            </div>
            <div className="flex gap-x-4 items-center">
            <button
              onClick={() => {
                if (!loggedUser) {
                  navigate("/login");
                }
                handleChatIconClick(singleTeacher);
              }}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              aria-label="Message"
            >
             <FaRegMessage size={24}/>
            
            </button>
            {singleTeacher.verified ? (
               <div className="w-12 h-12 rounded-full"> <img src={Verified} className="w-full h-full object-cover" /></div>
              ) : (
              <div className="text-center text-red-500 font-bold">  <GoUnverified size={28}/></div>
              )}
              </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Institution</h3>
            <p className="text-gray-600">{singleTeacher.institution}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Subjects</h3>
            <ul className="list-disc list-inside text-gray-600">
              {singleTeacher.subjects && singleTeacher.subjects.length > 0 ? (
                singleTeacher.subjects.map((subject, subjectIndex) => (
                  <li key={subjectIndex}>{subject}</li>
                ))
              ) : (
                <li>No subjects found</li>
              )}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {singleTeacher.videos && singleTeacher.videos.length > 0 ? (
                singleTeacher.videos.map((video, videoIndex) => (
                  <div
                    key={videoIndex}
                    className="bg-white shadow-lg rounded-lg p-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {video.subject}
                    </h3>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={video.embedLink}
                        title={`Video for ${video.subject}`}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No videos found</p>
              )}
            </div>
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default Profile;
