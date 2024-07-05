import React, { useState, useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import ChatForm from "./ChatForm";
import { useSocket } from "../context/SocketProvider";
import axiosInstance from "../helper/api/axiosInstance";
import { useNavigate } from "react-router-dom";
import NotificationSound from "../assets/audio/notification-sound.wav";

const ChatListForTeacher = (receiver) => {
  const socket = useSocket();
  const [chatMessages, setChatMessages] = useState([]);
  const [socketId, setSocketId] = useState("");
  const [users, setUsers] = useState({});
  const [soundEnabled, setSoundEnabled] = useState(true); // State for sound notification
  const chatScrollRef = useRef(null); // Ref for scrolling chat to bottom
  const userEmail = localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser")).email
    : null;
  const userImage = localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser")).image
    : null;

  const navigate = useNavigate();
  const notificationSoundRef = useRef(null); // Ref for audio element

  useEffect(() => {
    if (!userEmail) {
      navigate("/login");
    }

    socket.emit("user-online", userEmail);

    socket.on("update-user-status", (updatedUsers) => {
      setUsers(updatedUsers);
    });

    const fetchMessages = async () => {
      try {
        const response = await axiosInstance.get("/api/messages", {
          params: { userEmail, recipientEmail: receiver.userEmail },
        });
        setChatMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();

    socket.emit("register", userEmail);

    socket.on("newMessage", (data) => {
      const { newMessage: message, recipientSocketId } = data;
      setSocketId(recipientSocketId);
      setChatMessages((prevMessages) => [...prevMessages, message]);

      // Play notification sound
      if (soundEnabled && notificationSoundRef.current) {
        notificationSoundRef.current.play();
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      socket.emit("user-offline", userEmail);
      socket.off("update-user-status");
      socket.off("newMessage");
    };
  }, [userEmail, receiver.userEmail, socket, navigate, soundEnabled]);

  // Function to scroll chat to bottom
  const scrollToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  };

  // Scroll to bottom when chatMessages change
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleNewMessagePosted = (message) => {
    if (!userEmail) {
      navigate("/login");
    }
    const newMessage = {
      userEmail,
      recipientEmail: receiver.userEmail,
      text: message,
      postedOn: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      userImage,
    };
    socket.emit("newMessage", newMessage);
  };

  return (
    <div className="bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="flex flex-col justify-start px-4 py-3 border-b border-gray-200">
        <h4 className="text-lg font-semibold">{receiver.title}</h4>
        <div>
          <div
            key={receiver.userEmail}
            className={`status flex justify-start items-center gap-x-4 ${
              users[receiver.userEmail] ? "online" : "offline"
            }`}
          >
            Active Status:
            <span
              className={`status-indicator w-4 h-4 rounded-full ${
                users[receiver.userEmail] ? "bg-green-600" : "bg-red-600"
              }`}
            ></span>
          </div>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Sound Notifications</label>
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={() => setSoundEnabled((prev) => !prev)}
          />
        </div>
      </div>

      <div
        className="px-4 py-2 h-80 chatdivScroller overflow-y-auto"
        ref={chatScrollRef}
      >
        <ul className="conversation-list">
          {chatMessages.map((message, index) => (
            <ChatItem
              key={message._id}
              message={message}
              index={index}
              onDelete={() => handleDeleteMessage(message._id)}
            />
          ))}
        </ul>
      </div>
      <div className="px-4 py-2">
        <ChatForm onNewMessagesPosted={handleNewMessagePosted} />
      </div>
      <audio ref={notificationSoundRef} src={NotificationSound} />
    </div>
  );
};

export default ChatListForTeacher;
