import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import axiosInstance from "../../../helper/api/axiosInstance";
import { useUserContext } from "../../../context/UserContext";
import TotalTeacherStudent from "./component/TotalTeacherStudent";
import CreateRoom from "../../../components/CreateRoom";
import Profile from "./component/Profile";
import ChatList from "../../../components/ChatListForTeacher";
import { useSocket } from "../../../context/SocketProvider";
import { FiRefreshCw } from "react-icons/fi";
import { MdVideoCall } from "react-icons/md";


const TeacherDashboard = ({ userEmail }) => {
  const [subjects] = useState([
    "highermath",
    "biology",
    "physics",
    "chemistry",
    "ict",
    "bangla",
    "english",
  ]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [videos, setVideos] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [university, setUniversity] = useState("");
  const [uploadError, setUploadError] = useState(null);
  const [profile, setProfile] = useState(false);
  const [chatWith, setChatWith] = useState(null);
  const [initialMessages, setInitialMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState({});
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const { allTeachers, allStudents } = useUserContext().state;
  const loggedTeacher = JSON.parse(localStorage.getItem("loggedUser"));
  const [singleTeacher, setSingleTeacher] = useState(null);
  const socket = useSocket();

  useEffect(() => {
    const fetchVideos = async () => {
      if (allTeachers.length > 0) {
        const teacher = allTeachers.find(
          (teacher) => teacher.email === loggedTeacher.email
        );
        setSingleTeacher(teacher);
        if (teacher) {
          setSelectedSubject(teacher.subjects);
          setProfilePic(teacher.profileImage);
          setIdImage(teacher.idImage);
          setUniversity(teacher.institution);
          JSON.stringify({ ...loggedTeacher, image: teacher.profileImage });
        }
      }
      try {
        const response = await axiosInstance.get(
          `/teacher/${loggedTeacher.email}/videos`
        );
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, [loggedTeacher.email, allTeachers]);

  const fetchUnreadMessages = async () => {
    try {
      const unreadCounts = {};

      for (const student of allStudents) {
        const studentEmail = student.email;
        const response = await axiosInstance.get("/api/messages", {
          params: {
            userEmail: studentEmail,
            recipientEmail: loggedTeacher.email, //for unseen messages checking I am the reciever and student sender
          },
        });
        console.log(response, "res");

        const messages = response.data;
        console.log(messages, "mfd");
        unreadCounts[studentEmail] = messages.filter(
          (msg) =>
            msg.seen === false && msg.recipientEmail === loggedTeacher.email
        ).length;
      }

      setUnreadMessages(unreadCounts);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUnreadMessages();
  }, [loggedTeacher.email, allStudents]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("idImage", idImage);
    formData.append("university", university);

    try {
      const response = await axiosInstance.post(
        `/teacher/info/update/${loggedTeacher.email}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Fetch the updated teacher information
      const updatedTeacherResponse = await axiosInstance.get(
        `/teacher/${loggedTeacher.email}`
      );
      const updatedTeacher = updatedTeacherResponse.data;

      // Update the singleTeacher state
      setSingleTeacher(updatedTeacher);

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

  const handleAddVideo = async (e) => {
    e.preventDefault();
    try {
      const embedLink = getEmbedLink(videoLink);
      if (!embedLink) {
        alert("Invalid YouTube URL. Please enter a valid link.");
        return;
      }

      const response = await axiosInstance.post(
        `/teacher/${loggedTeacher.email}/videos`,
        {
          subject: selectedSubject,
          embedLink,
        }
      );
      setVideos(response.data);
      setVideoLink("");
      setSelectedSubject("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteVideo = async (subject) => {
    try {
      const response = await axiosInstance.delete(
        `/teacher/${loggedTeacher.email}/videos`,
        {
          data: { subject },
        }
      );
      setVideos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getEmbedLink = (link) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = link.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const profileToggling = () => {
    setProfile(!profile);
  };

  const handleChatClick = async (studentEmail) => {
    setChatWith(studentEmail);

    try {
      const response = await axiosInstance.get(
        `/chat/${loggedTeacher.email}/${studentEmail}`
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
  const handleShowCreateRoom = () => {
    setShowCreateRoom(!showCreateRoom);
  };


  const getStudentNameFromEmail = (email) => {
    const localPart = email.split("@")[0];
    const name = localPart.replace(/[^a-zA-Z]/g, "");
    return name || "Unknown";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Teacher Profile</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-dashed border-gray-300 group">
            {profilePic || (singleTeacher && singleTeacher.profileImage) ? (
              <div className="relative w-full h-full">
                <img
                  src={
                    singleTeacher && singleTeacher.profileImage
                      ? `${process.env.SERVER_URL}/${singleTeacher.profileImage}`
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
            {idImage || (singleTeacher && singleTeacher.idImage) ? (
              <img
                src={
                  singleTeacher && singleTeacher.idImage
                    ? `${process.env.SERVER_URL}/${singleTeacher.idImage}`
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
            className="w-full bg-gray-500 text-white p-2 rounded-md"
          >
            Update Info
          </button>
        </form>
      </div>
      <div className="flex-1 p-4">
        <div className="mb-4 flex flex-col md:flex-row justify-start items-center gap-x-4">
          <h1 className="text-3xl text-gray-500 font-bold">Dashboard</h1>
          <div className="flex  items-center">
            <Link to="/">
              <h1 className="text-[1rem] md:text-xl text-gray-500 font-[500] hover:text-indigo-400">
                /home
              </h1>
            </Link>
            <h1 className="text-[1rem] md:text-xl text-indigo-500 font-[500]">
              /student/student-dashboard
            </h1>
          </div>
        </div>
        <TotalTeacherStudent />

        <p
          className="text-slate-600 p-4 mb-2 text-xl font-[700]  hover:text-slate-800   w-fit cursor-pointer"
          onClick={profileToggling}
        >
          {profile ? "Close Profile" : "See public view"}
        </p>
        {profile && (
          <div className="bg-white shadow-lg rounded-lg p-4 mb-4-auto py-4">
            <Profile singleTeacher={singleTeacher} />
          </div>
        )}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Add Demo Video Link</h2>
          <form onSubmit={handleAddVideo} className="space-y-4">
            <div>
              <label className="block text-gray-700">Select Subject:</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="mt-1 block w-full p-2 border gap-y-2  border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((subject, index) => (
                  <option
                    key={index}
                    value={subject}
                    className="w-96 h-24 text-white text-2xl bg-gray-600 hover:bg-gray-500 shadow-lg"
                  >
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">YouTube Link:</label>
              <input
                type="text"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-64  bg-slate-500 text-white p-2 rounded-md"
            >
              Add Video
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold">
                Demo Video for {video.subject}
              </h3>
              <iframe
                width="100%"
                height="200"
                src={video.embedLink}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Demo Video for ${video.subject}`}
              ></iframe>
              <button
                onClick={() => handleDeleteVideo(video.subject)}
                className="bg-red-500 text-white mt-2 p-2 rounded-md w-full"
              >
                Delete Video
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Students</h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 bg-white shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
              <h3 className="text-xl font-bold mb-2">Connected Students</h3>
              <ul>
                <div className="flex flex-col space-y-2">
                  {allStudents.map((student) => (
                    <div
                      key={student.email}
                      className="flex justify-between items-center p-2 border border-gray-300 rounded-md"
                    >
                      <button
                        onClick={() => handleChatClick(student.email)}
                        className={`p-2 w-full rounded-md ${
                          student.isActive
                            ? "bg-green-500 text-white"
                            : "bg-gray-500 text-white"
                        }`}
                      >
                        {getStudentNameFromEmail(student.email)}
                      </button>
                      {unreadMessages[student.email] > 0 && (
                        <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                          {unreadMessages[student.email]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ul>
            </div>
            <div className="flex-1 p-4">
              <div className="flex items-center gap-x-4">
              <button onClick={handleRefresh} className="ml-4 text-slate-500">
                <FiRefreshCw size={24} />
              </button>
              <MdVideoCall
              size={24}
              className="text-xl cursor-pointer"
              onClick={handleShowCreateRoom}
            />
            </div>
              
              {chatWith ? (
                <ChatList
                  title={`Chat with ${getStudentNameFromEmail(chatWith)}`}
                  messages={initialMessages} // Initial messages can be passed here
                  userEmail={chatWith}
                />
              ) : (
                <p className="text-gray-500">
                  Select a student to start chatting
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showCreateRoom && (
        <Draggable>
          <div className="absolute -bottom-[100%] self-center  md:top-[40%] md:left-[40%] w-64  md:w-96 h-96 flex justify-center items-center bg-black bg-opacity-50 ">
           
              <CreateRoom onClick={handleShowCreateRoom} />
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default TeacherDashboard;
