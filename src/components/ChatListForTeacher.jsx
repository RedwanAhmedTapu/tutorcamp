import React, { useState, useEffect } from "react";
import ChatItem from "./ChatItem";
import ChatForm from "./ChatForm";
import { useSocket } from "../context/SocketProvider";
import axiosInstance from "../helper/api/axiosInstance";
import { useNavigate } from "react-router-dom";

const ChatListForTeacher = (sender) => {
  const socket = useSocket();
  const [chatMessages, setChatMessages] = useState([]);
  const [socketId, setSocketId] = useState("");

  const userEmail = localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser")).email
    : null;
  const userImage = localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser")).image
    : null;

  const navigate = useNavigate();

  console.log(sender,"rec")
  useEffect(() => {
    if (userEmail === "null") {
        navigate("/login")
    }
    const fetchMessages = async () => {
      const response = await axiosInstance.get("/api/messages", {
        params: { userEmail, recipientEmail:sender.userEmail },
      });
      setChatMessages(response.data);
    };
    fetchMessages();

    socket.on("newMessage", (data) => {
      const {newMessage:message,recipientSocketId}=data;
      setSocketId(recipientSocketId);

      console.log(data,"dadd")

      setChatMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [userEmail, sender.userEmail, socket]);

  const handleNewMessagePosted = (message) => {
    if (userEmail === "null") {
        navigate("/login")
    }
    const newMessage = {
      userEmail,
      recipientEmail:sender.userEmail,
      text: message, postedOn: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      userImage
    };
    socket.emit("register",(userEmail));

    socket.emit("newMessage", newMessage);
  };

  return (
    <div className="bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="flex flex-col  justify-start px-4 py-3 border-b border-gray-200">
        <h4 className="text-lg font-semibold">{sender.title}</h4>
        <h4 className="text-lg font-semibold">{socketId?<div className="bg-green-400 w-2 h-2 rounded-full text-start"></div>:<p className="text-xl text-red-500 font-[400]">inactive</p>}</h4>

      </div>
     
      <div className="px-4 py-2 h-80 chatdivScroller overflow-y-auto">
        <ul className="conversation-list">
          {chatMessages.map((message) => (
            <ChatItem key={message._id} message={message} />
          ))}
        </ul>
      </div>
      <div className="px-4 py-2">
        <ChatForm onNewMessagesPosted={handleNewMessagePosted} />
      </div>
    </div>
  );
};

export default ChatListForTeacher;