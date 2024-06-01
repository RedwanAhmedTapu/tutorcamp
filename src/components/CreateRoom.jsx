// CreateRoom.js
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

const CreateRoom = () => {
  const socket = useSocket();
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

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
    return result.slice(0, 12);
  };

  const createRoom = useCallback(() => {
    const inputString = generateRandomString();
    const formattedString = formatString(inputString);
    setRoom(formattedString); // Set the room state with the formatted room string
    return formattedString;
  }, []);

  const handleJoinRoom = useCallback(async () => {
    if (email) {
      const roomToJoin = room || createRoom(); // Use existing room or generate a new one
      socket.emit("room-join", { room: roomToJoin, email });
    }
  }, [createRoom, email, room, socket]);

  const handleroomJoined = (data) => {
    navigate(`/${data}`);
  };

  useEffect(() => {
    socket.on("joined-room", handleroomJoined);
    return () => {
      socket.off("joined-room", handleroomJoined);
    };
  }, [socket]);

  return (
    <div className="w-full h-screen flex_col_center bg-slate-300 ">
      <h1>Video Conference</h1>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        name="room"
        placeholder="Enter your room (or leave blank to create a new one)"
        onChange={(e) => setRoom(e.target.value)}
        value={room}
      />
      <button onClick={handleJoinRoom}>Join/Create Room</button>
    </div>
  );
};

export default CreateRoom;
