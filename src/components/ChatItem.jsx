import React from "react";

const extractNameFromEmail = (email) => {
  const localPart = email.split('@')[0];
  const name = localPart.replace(/[^a-zA-Z]/g, '');
  return name || 'Unknown';
};

const ChatItemAvatar = ({ userAvatar, postedOn }) => {
    console.log(postedOn)
  return (
    <div className="flex flex-col items-center">
      <img src={userAvatar} alt="avatar" className="w-10 h-10 rounded-full mb-1" />
      <i className="text-xs  text-gray-500">{postedOn}</i>
    </div>
  );
};

const ChatItemText = ({ userName, text }) => {
  return (
    <div className="ml-3 bg-gray-100 p-3 rounded-lg shadow-md">
      <div className="font-semibold text-sm text-gray-700">{userName}</div>
      <div className="text-sm text-gray-700">{text}</div>
    </div>
  );
};

const ChatItem = ({ message }) => {
  const userName = extractNameFromEmail(message.userEmail);
  console.log(userName)
  return (
    <li className={`flex ${message.userEmail === "Dominic" ? "justify-start" : "justify-end"} mb-4`}>
       
        <ChatItemAvatar userAvatar={`${process.env.SERVER_URL}/${message.userImage}`} postedOn={message.postedOn} />
      
      <ChatItemText userName={userName} text={message.text} />
    </li>
  );
};

export default ChatItem;
