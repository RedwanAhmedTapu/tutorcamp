import React from "react";
import Avatar from "../assets/avatar.jpg";
import Avata2 from "../assets/Avatar2.jpg"

const extractNameFromEmail = (email) => {
  const localPart = email.split("@")[0];
  const name = localPart.replace(/[^a-zA-Z]/g, "");
  return name || "Unknown";
};

const ChatItemAvatar = ({ userAvatar, postedOn }) => {
  // console.log(postedOn);
  return (
    <div className="flex flex-col items-center">
      <img
        src={userAvatar}
        alt="avatar"
        className="w-10 h-10 rounded-full mb-1"
      />
      {/* <i className="text-xs  text-gray-500">{postedOn}</i> */}
    </div>
  );
};

const ChatItemText = ({ userName, text, postedOn,seen }) => {
  return (
    <div className="ml-3 bg-gray-100 p-3 rounded-lg shadow-md">
      <div className="font-semibold text-sm text-gray-700">{userName}</div>
      <div className="text-sm text-gray-700">{text}</div>
      <div className="text-sm text-indigo-700">{postedOn}</div>
      <div className="text-sm text-gray-700">{seen?"seen":""}</div>
    </div>
  );
};

const ChatItem = ({ message, index }) => {
  // console.log(message);
  const userName = extractNameFromEmail(message.userEmail);
  // console.log(userName);
  return (
    <li className="chat-item">
      {index % 2 !== 0 && (
        <>
          <ChatItemText
            userName={userName}
            text={message.text}
            postedOn={message.postedOn}
            seen={message.seen}
          />

          <ChatItemAvatar
            userAvatar={
              message.userImage
                ? `${process.env.SERVER_URL}/${message.userImage}`
                : Avatar
            }
            postedOn={message.postedOn}
          />
        </>
      )}
      {index % 2 === 0 && (
        <>
          <ChatItemAvatar
            userAvatar={
              message.userImage
                ? `${process.env.SERVER_URL}/${message.userImage}`
                : Avata2
            }
            postedOn={message.postedOn}
          />
          <ChatItemText
            userName={userName}
            text={message.text}
            postedOn={message.postedOn}
            seen={message.seen}
          />
        </>
      )}
    </li>
  );
};

export default ChatItem;
