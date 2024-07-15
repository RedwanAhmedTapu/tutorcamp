import React from "react";
import Avatar from "../assets/avatar.jpg";
import Avatar2 from "../assets/Avatar2.jpg";

const extractNameFromEmail = (email) => {
  const localPart = email.split("@")[0];
  const name = localPart.replace(/[^a-zA-Z]/g, "");
  return name || "Unknown";
};

const ChatItemAvatar = ({ userAvatar }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={userAvatar}
        alt="avatar"
        className="w-10 h-10 rounded-full mb-1"
      />
    </div>
  );
};

const ChatItemText = ({ userName, text, postedOn, seen }) => {
  return (
    <div className="ml-3 mt-2 bg-indigo-500 p-4 rounded-lg shadow-lg">
      <div className="font-semibold text-xs text-cyan-200">You</div>
      <div className="mt-1 text-sm text-white">{text}</div>
      <div className="mt-2 text-xs text-slate-300">{postedOn}</div>
      <div className="mt-1 text-xs text-green-400">{seen ? "Seen" : ""}</div>
    </div>
  );
};

const ChatItemTextReceiver = ({ userName, text, postedOn, seen }) => {
  return (
    <div className="ml-3 mt-2 bg-orange-200 p-4 rounded-lg shadow-lg">
      <div className="font-semibold text-xs text-slate-600">{userName}</div>
      <div className="mt-1 text-sm text-white">{text}</div>
      <div className="mt-2 text-xs text-teal-600">{postedOn}</div>
      <div className="mt-1 text-xs text-slate-500">{seen ? "Seen" : ""}</div>
    </div>
  );
};

const ChatItem = ({ message }) => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const loggedUserEmail = loggedUser ? loggedUser.email : null;

  const isSender = message.userEmail === loggedUserEmail;

  console.log("Logged User Email:", loggedUserEmail);
  console.log("Message:", message);
  console.log("Is Sender:", isSender);

  const userName = extractNameFromEmail(isSender ? message.userEmail : message.userEmail);

  return (
    <li className={` flex gap-y-12 ${isSender ? "justify-end" : "justify-start"}`}>
      {isSender ? (
        <>
            <ChatItemText
              userName={userName}
              text={message.text}
              postedOn={message.postedOn}
              seen={message.seen}
            />
          {/* <ChatItemAvatar
            userAvatar={
              message.userImage
                ? `${process.env.REACT_APP_SERVER_URL}/${message.userImage}`
                : Avatar
            }
          /> */}
        </>
      ) : (
        <>
          {/* <ChatItemAvatar
            userAvatar={
              message.userImage
                ? `${process.env.REACT_APP_SERVER_URL}/${message.userImage}`
                : Avatar2
            }
          /> */}
            <ChatItemTextReceiver
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
