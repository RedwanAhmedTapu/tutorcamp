// CreateRoom.js

import {  useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const navigate = useNavigate();

  const generateRandomString = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 9; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const formatString = (inputString) => {
    const sanitizedString = inputString.replace(/[-\s]/g, "");
    let result = "";
    for (let i = 0; i < sanitizedString.length; i++) {
      if (i > 0 && i % 3 === 0) {
        result += "-";
      }
      result += sanitizedString[i];
    }
    result = result.slice(0, 12);
    return result;
  };

  const createRoom = useCallback(() => {
    const inputString = generateRandomString();
    const formattedString = formatString(inputString);
    // setRoom(formattedString);
    return formattedString; // Return the formatted room string
  }, []);

  

 

  const handleJoinRoom = useCallback(async () => {
    const room = createRoom(); // Generate a new room
   
    await navigate(`/meetingroom/${room}`);
  }, [createRoom, navigate]);

  return (
    <div className="w-full h-screen flex_col_center bg-slate-300 ">
      <h1>video conferrence</h1>
      <button onClick={handleJoinRoom}>Create Room</button>
    </div>
  );
};

export default CreateRoom;
