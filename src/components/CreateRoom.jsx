// CreateRoom.js
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import Modal from "react-modal";
import { FiCopy } from "react-icons/fi";
import { usePeer } from "../context/PeerProvider";

const CreateRoom = () => {
  const socket = useSocket();
  const { offerCreated } = usePeer();
  const [email, setEmail] = useState(
    (localStorage.getItem("loggedUser") &&
      JSON.parse(localStorage.getItem("loggedUser")).email) ||
      ""
  );
  const [room, setRoom] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

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
    setRoom(formattedString);
    return formattedString;
  }, []);

  const handleJoinRoom = () => {
    setIsCreatingRoom(false);
    setModalIsOpen(true);
  };

  const handleCreateRoom = () => {
    setIsCreatingRoom(true);
    const roomToCreate = createRoom();
    socket.emit("room-join", { room: roomToCreate, email });
    setModalIsOpen(true);
  };

  const handleRoomSubmit = () => {
    navigate(`/${room}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(room);
    setCopyMessage("Copied!");
    setTimeout(() => {
      setCopyMessage("");
    }, 2000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCopyMessage("");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-8">Video Conference</h1>
      <button
        onClick={handleJoinRoom}
        className="px-8 py-4 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mb-4"
      >
        Join Room
      </button>
      <button
        onClick={handleCreateRoom}
        className="px-8 py-4 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Create Room
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex flex-col items-center justify-center bg-white text-black rounded-lg p-8 shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        contentLabel="Room Modal"
      >
        {isCreatingRoom ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Room Created!</h2>
            <p className="mb-4">Room Code:</p>
            <div className="flex items-center space-x-2 mb-8">
              <input
                type="text"
                value={room}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={copyToClipboard}
                className="text-blue-600 hover:text-blue-800"
              >
                <FiCopy size={24} />
              </button>
            </div>
            {copyMessage && <p className="text-green-600">{copyMessage}</p>}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Join a Room</h2>
            <p className="mb-4">Enter Room Code:</p>
            <input
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </>
        )}
        <button
          onClick={handleRoomSubmit}
          className="px-4 py-2 bg-blue-600 text-black font-bold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Go to Room
        </button>
      </Modal>
    </div>
  );
};

export default CreateRoom;
