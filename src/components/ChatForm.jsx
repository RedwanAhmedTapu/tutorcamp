import React, { useState } from "react";

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
        className="flex-1 py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
        placeholder="Enter your text"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-full bg-indigo-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
