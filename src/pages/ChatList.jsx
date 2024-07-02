import React, { useState } from "react";

// Chat Item Avatar
const ChatItemAvatar = ({ userAvatar, postedOn }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={userAvatar} alt="avatar" className="w-10 h-10 rounded-full mb-1" />
      <i className="text-xs text-gray-500">{postedOn}</i>
    </div>
  );
};

// Chat Item Text
const ChatItemText = ({ userName, text }) => {
  return (
    <div className="ml-3 bg-gray-100 p-3 rounded-lg shadow-md">
      <div className="font-semibold text-sm text-gray-700">{userName}</div>
      <div className="text-sm text-gray-700">{text}</div>
    </div>
  );
};

// Chat Item
const ChatItem = ({ children, placement }) => {
  return (
    <li className={`flex ${placement === "left" ? "justify-start" : "justify-end"} mb-4`}>
      {children}
    </li>
  );
};

// Chat Form
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
        className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Send
      </button>
    </form>
  );
};

// Chat List
const ChatList = ({ title = "", className = "", messages }) => {
  const [chatMessages, setChatMessages] = useState(messages);

  const handleNewMessagePosted = (message) => {
    const newMessage = {
      id: chatMessages.length + 1,
      userPic: "https://via.placeholder.com/150", // Replace with actual user pic URL
      userName: "Dominic",
      text: message,
      postedOn: `${new Date().getHours()}:${new Date().getMinutes()}`,
    };
    setChatMessages([...chatMessages, newMessage]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <h4 className="text-lg font-semibold">{title}</h4>
        <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="px-4 py-2 h-80 overflow-y-auto">
        <ul className={`conversation-list ${className}`}>
          {chatMessages.map((message, index) => (
            <ChatItem key={index} placement={message.userName === "Dominic" ? "left" : "right"}>
              {message.userPic && (
                <ChatItemAvatar userAvatar={message.userPic} postedOn={message.postedOn} />
              )}
              <ChatItemText userName={message.userName} text={message.text} />
            </ChatItem>
          ))}
        </ul>
      </div>
      <div className="px-4 py-2">
        <ChatForm onNewMessagesPosted={handleNewMessagePosted} />
      </div>
    </div>
  );
};

// Main Chat App Component
const ChatApp = () => {
  const initialMessages = [
    { id: 1, userPic: "https://via.placeholder.com/150", userName: "Alice", text: "Hi there!", postedOn: "10:00" },
    { id: 2, userPic: "https://via.placeholder.com/150", userName: "Bob", text: "Hello!", postedOn: "10:05" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ChatList title="Chat Room" messages={initialMessages} />
    </div>
  );
};

export default ChatApp;
