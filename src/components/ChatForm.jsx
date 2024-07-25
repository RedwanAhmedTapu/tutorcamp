import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ChatForm = ({ onNewMessagesPosted }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onNewMessagesPosted(newMessage);
      setNewMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 mt-4">
      <input
        type="text"
        name="newMessage"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1 py-2 px-1 md:px-4 w-16 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
        placeholder="Enter your text"
      />
      <button
        type="submit"
        className="px-6 py-2 text-lg  text-indigo-600  hover:text-indigo-500 "
      >
        <FiSend/>
      </button>
    </form>
  );
};

export default ChatForm;
