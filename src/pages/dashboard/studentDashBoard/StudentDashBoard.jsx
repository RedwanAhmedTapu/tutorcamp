import { useState, useEffect } from "react";
import axiosInstance from "../../../helper/api/axiosInstance";
import { useUserContext } from "../../../context/UserContext";
import Profile from "./components/Profile";
import ChatList from "../../../components/ChatListForStudent";
import { useSocket } from "../../../context/SocketProvider";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";

const StudentDashboard = ({ userEmail }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [university, setUniversity] = useState("");
  const [uploadError, setUploadError] = useState(null);
  const [profile, setProfile] = useState(false);
  const [chatWith, setChatWith] = useState(null);
  const [initialMessages, setInitialMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState({});

  const { allStudents, allTeachers } = useUserContext().state;
  const loggedStudent = JSON.parse(localStorage.getItem("loggedUser"));
  const [singleStudent, setSingleStudent] = useState(null);
  const socket = useSocket();

  useEffect(() => {
    const fetchStudent = async () => {
      if (allStudents.length > 0) {
        const student = allStudents.find(
          (student) => student.email === loggedStudent.email
        );
        setSingleStudent(student);
        if (student) {
          setProfilePic(student.profileImage);
          setIdImage(student.idImage);
          setUniversity(student.institution);
        }
      }
    };

    fetchStudent();
  }, [loggedStudent.email, allStudents]);

  const fetchUnreadMessages = async () => {
    try {
      const unreadCounts = {};

      for (const teacher of allTeachers) {
        const teacherEmail = teacher.email;
        const response = await axiosInstance.get("/api/messages", {
          params: {
            userEmail: teacherEmail,
            recipientEmail: loggedStudent.email,
          },
        });
        const messages = response.data;
        unreadCounts[teacherEmail] = messages.filter(
          (msg) =>
            msg.seen === false && msg.recipientEmail === loggedStudent.email
        ).length;
      }

      setUnreadMessages(unreadCounts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUnreadMessages();
  }, [loggedStudent.email, allTeachers]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("idImage", idImage);
    formData.append("university", university);

    try {
      const response = await axiosInstance.post(
        `/student/info/update/${loggedStudent.email}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedStudentResponse = await axiosInstance.get(
        `/student/${loggedStudent.email}`
      );
      const updatedStudent = updatedStudentResponse.data;
      setSingleStudent(updatedStudent);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size exceeds 5MB. Please choose a smaller file.");
      return;
    }
    setProfilePic(file);
    setUploadError(null);
  };

  const handleIdImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size exceeds 5MB. Please choose a smaller file.");
      return;
    }
    setIdImage(file);
    setUploadError(null);
  };

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  const profileToggling = () => {
    setProfile(!profile);
  };

  const handleChatClick = async (teacherEmail) => {
    setChatWith(teacherEmail);
    setUnreadMessages((prev) => ({
      ...prev,
      [teacherEmail]: 0,
    }));

    try {
      const response = await axiosInstance.get(
        `/chat/${loggedStudent.email}/${teacherEmail}`
      );
      setInitialMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Refresh handler
  const handleRefresh = () => {
    fetchUnreadMessages();
  };

  const getTeacherNameFromEmail = (email) => {
    const localPart = email.split("@")[0];
    const name = localPart.replace(/[^a-zA-Z]/g, "");
    return name || "Unknown";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-100">
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-dashed border-gray-300 group">
            {profilePic || (singleStudent && singleStudent.profileImage) ? (
              <div className="relative w-full h-full">
                <img
                  src={
                    singleStudent && singleStudent.profileImage
                      ? `${process.env.SERVER_URL}/${singleStudent.profileImage}`
                      : URL.createObjectURL(profilePic)
                  }
                  alt="Profile Preview"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm">Change Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-full">
                <span className="text-gray-400 text-2xl">+</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            )}
          </div>
          {uploadError && <p className="text-red-500">{uploadError}</p>}
          <div>
            <label className="block text-gray-700">ID Image:</label>
            {idImage || (singleStudent && singleStudent.idImage) ? (
              <img
                src={
                  singleStudent && singleStudent.idImage
                    ? `${process.env.SERVER_URL}/${singleStudent.idImage}`
                    : URL.createObjectURL(idImage)
                }
                alt="ID Image"
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={handleIdImageChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            )}
          </div>
          <div>
            <label className="block text-gray-700">Institution Name:</label>
            <input
              type="text"
              value={university}
              onChange={handleUniversityChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 w-full text-white p-2 rounded-md"
          >
            Update Info
          </button>
        </form>
      </div>
      <div className="flex-1 p-4">
        <div className="mb-4 flex flex-col md:flex-row justify-start items-center gap-x-4">
          <h1 className="text-3xl text-gray-500 font-bold">Dashboard</h1>
          <div className="flex  items-center">
            <Link to="/"><h1 className="text-[1rem] md:text-xl text-gray-500 font-[500] hover:text-indigo-400">/home</h1></Link>
            <h1 className="text-[1rem] md:text-xl text-indigo-500 font-[500]">/student/student-dashboard</h1>
          </div>
        </div>
        <p
          className="text-slate-600 p-4 mb-2 text-xl font-[700] hover:text-slate-800 w-fit cursor-pointer"
          onClick={profileToggling}
        >
          {profile ? "Close Profile" : "See public view"}
        </p>
        {profile && (
          <div className="bg-white shadow-lg rounded-lg p-4 mb-4-auto py-4">
            <Profile singleStudent={singleStudent} />
          </div>
        )}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Teachers</h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 bg-white shadow-lg p-4 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Teacher List</h2>
              <ul>
                <div className="flex flex-col space-y-2">
                  {allTeachers.map((teacher) => (
                    <div
                      key={teacher.email}
                      className="flex justify-between items-center p-2 border border-gray-300 rounded-md"
                    >
                      <button
                        onClick={() => handleChatClick(teacher.email)}
                        className={`p-2 w-full rounded-md ${
                          teacher.isActive
                            ? "bg-green-500 text-white"
                            : "bg-gray-500 text-white"
                        }`}
                      >
                        {getTeacherNameFromEmail(teacher.email)}
                      </button>
                      {unreadMessages[teacher.email] > 0 && (
                        <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                          {unreadMessages[teacher.email]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ul>
            </div>
            <div className="w-full md:w-3/4 bg-white shadow-lg p-4">
              <button onClick={handleRefresh} className="ml-4 text-slate-500">
                <FiRefreshCw size={24} />
              </button>
              {chatWith ? (
                <ChatList
                  title={`Chat with ${getTeacherNameFromEmail(chatWith)}`}
                  messages={initialMessages} // Initial messages can be passed here
                  userEmail={chatWith}
                />
              ) : (
                <p className="text-gray-500">
                  Select a teacher to start chatting
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
