import {useState,useEffect} from 'react';
import ChatList from "../../../../components/ChatListForStudent";
import { useUserContext } from "../../../../context/UserContext";
import axiosInstance from "../../../../helper/api/axiosInstance";


import { FiRefreshCw } from "react-icons/fi";



const TeacherList = ({userEmail}) => {
    const [chatWith, setChatWith] = useState(null);
  const [initialMessages, setInitialMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState({});


  const { allStudents, allTeachers } = useUserContext().state;
  const loggedStudent = JSON.parse(localStorage.getItem("loggedUser"));



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
  // sorting unreades messages
  const sortedTeachers = allTeachers.sort((a, b) => unreadMessages[b.email] - unreadMessages[a.email]);
 
  return (
    <>
      <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Teachers</h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 bg-white shadow-lg p-4 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Teacher List</h2>
              <ul>
                <div className="flex flex-col space-y-2">
                  {sortedTeachers.map((teacher) => (
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
    
    </>
  )
}

export default TeacherList