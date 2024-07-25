import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import axiosInstance from "../../../../helper/api/axiosInstance";
import { useUserContext } from "../../../../context/UserContext";
import ChatList from "../../../../components/ChatListForTeacher";
import { FiRefreshCw } from "react-icons/fi";
import { MdVideoCall } from "react-icons/md";
import CreateRoom from "../../../../components/CreateRoom";

const StudentList = ({ userEmail }) => {
  const [chatWith, setChatWith] = useState(null);
  const [initialMessages, setInitialMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState({});
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { allStudents } = useUserContext().state;
  const loggedTeacher = JSON.parse(localStorage.getItem("loggedUser"));

  const fetchUnreadMessages = async () => {
    try {
      const unreadCounts = {};

      for (const student of allStudents) {
        const studentEmail = student.email;
        const response = await axiosInstance.get("/api/messages", {
          params: {
            userEmail: studentEmail,
            recipientEmail: loggedTeacher.email, // for unseen messages checking I am the receiver and student sender
          },
        });

        const messages = response.data;
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

  const sortedStudents = allStudents.sort(
    (a, b) => unreadMessages[b.email] - unreadMessages[a.email]
  );

  const filteredStudents = sortedStudents.filter((student) =>
    getStudentNameFromEmail(student.email)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Students</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 bg-white shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
            <h3 className="text-xl text-indigo-400 font-bold mb-2">
              Connected Students
            </h3>
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-4 border-2 rounded"
            />
            <ul>
              <div className="flex flex-col space-y-2">
                {filteredStudents.map((student) => (
                  <div
                    key={student.email}
                    className="flex justify-between items-center p-2 border border-gray-300 rounded-md"
                  >
                    <button
                      onClick={() => handleChatClick(student.email)}
                      className={`p-2 w-full rounded-md ${
                        student.isActive
                          ? "bg-green-500 text-white"
                          : "bg-green-500 text-white"
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
              <button onClick={handleRefresh} className="ml-4 text-teal-500">
                <FiRefreshCw size={24} />
              </button>
              <MdVideoCall
                size={24}
                className="text-xl text-teal-500 cursor-pointer"
                onClick={handleShowCreateRoom}
              />
            </div>

            {chatWith ? (
              <ChatList
                title={` ${getStudentNameFromEmail(chatWith)}`}
                messages={initialMessages}
                userEmail={chatWith}
              />
            ) : (
              <p className="text-gray-500">Select a student to start chatting</p>
            )}
          </div>
        </div>
      </div>
      {showCreateRoom && (
        <Draggable>
          <div className="absolute -bottom-[100%] self-center md:top-[40%] md:left-[40%] w-64 md:w-96 h-96 flex justify-center items-center bg-black bg-opacity-50">
            <CreateRoom onClick={handleShowCreateRoom} />
          </div>
        </Draggable>
      )}
    </>
  );
};

export default StudentList;
