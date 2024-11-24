import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import Modal from "react-modal";
import axiosInstance from "../helper/api/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentComponent from "./PaymentComponent";

// Set the app element for react-modal
Modal.setAppElement("#root");

const CreateRoom = () => {
  const socket = useSocket();
  const [email, setEmail] = useState(
    (localStorage.getItem("loggedUser") &&
      JSON.parse(localStorage.getItem("loggedUser")).email) ||
      ""
  );
  const [room, setRoom] = useState("");
  const [showPaymentcard, setShowPaymentcard] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expirationDate, setExpirationDate] = useState(null);
  const [isExpired, setIsExpired] = useState(false);
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

  // Check subscription status on mount
  const subscriptionCheck = async () => {
    if (email) {
      axiosInstance
        .get(`/api/subscription/status/${email}`)
        .then((response) => {
          const { expirationDate: expDate, message } = response.data;
          console.log(response, ",ess");

          if (
            message.trim() === "No subscription found" ||
            new Date(expDate) < new Date()
          ) {
            setExpirationDate(expDate ? new Date(expDate) : null); // Handle null expiration dates
            setIsExpired(true);
            setShowPaymentcard(true);
            toast.warning(
              "Your subscription has expired or no subscription found. Please renew."
            );
          } else {
            setExpirationDate(new Date(expDate));
            setIsExpired(false);
            setShowModal(true);
            setShowPaymentcard(false);
          }

          console.log(response.data, "Subscription Status Response");
        })
        .catch((error) => {
          console.error("Error fetching subscription status:", error);
          toast.error("Unable to check subscription status. Please try again.");
        });
    }
  };

  const createRoom = useCallback(() => {
    if (!email) {
      navigate("/login");
    }
    const inputString = generateRandomString();
    const formattedString = formatString(inputString);
    setRoom(formattedString); // Set the room state with the formatted room string
    return formattedString;
  }, []);

  const handleJoinRoom = useCallback(async () => {
    if (!email) {
      navigate("/login");
    }
    if (email) {
      if (room) {
        socket.emit("room-join", { room, email });
      } else {
        const newRoom = createRoom();
        socket.emit("room-join", { room: newRoom, email });
        setShowModal(true); // Show modal with the new room information
      }
    }
  }, [createRoom, email, room, socket]);

  const handleroomJoined = (data) => {
    setRoom(data);
    navigate(`/${data}`);
  };

  useEffect(() => {
    socket.on("joined-room", handleroomJoined);
    return () => {
      socket.off("joined-room", handleroomJoined);
    };
  }, [socket]);

  const handleCopy = () => {
    navigator.clipboard.writeText(room).then(() => {
      setCopied(true);
    });
  };
  console.log(isExpired);
  const closeModal = () => {
    setShowModal(false);
    setCopied(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-300 dark:bg-[#130e2e] p-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">
        Video Conference
      </h1>
      <div className="mb-4 w-full max-w-md">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full p-2 mb-4 border dark:bg-white border-gray-300 rounded-md"
          disabled
        />
        <button
          onClick={() => {
            createRoom();
            subscriptionCheck();
          }}
          className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-blue-600 mb-4"
        >
          Create Room
        </button>
        <div className="flex items-center justify-center mb-4">
          <span className="mx-2 text-2xl text-slate-600">or</span>
        </div>
        <input
          type="text"
          name="room"
          placeholder="Enter your room"
          onChange={(e) => setRoom(e.target.value)}
          value={isExpired ? "" : room}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleJoinRoom}
          className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Join Room
        </button>
      </div>

      <Modal
        isOpen={showModal && !isExpired}
        onRequestClose={closeModal}
        contentLabel="Room Created"
        className="flex flex-col items-center justify-center bg-white p-4 rounded-md z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-4">Room Created</h2>
        <p className="mb-4">Room ID: {room}</p>
        <p className="mb-4 text-orange-500">
          Share The roomID with your student{" "}
        </p>
        <button
          onClick={handleCopy}
          className="p-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 mb-4"
        >
          {copied ? "Copied!" : "Copy Room ID"}
        </button>
        <button
          onClick={handleJoinRoom}
          className="p-2 bg-blue-500 text-white bg-green-400 rounded-md hover:bg-blue-600"
        >
          Go to Room
        </button>
      </Modal>
      {showPaymentcard && (
        <PaymentComponent
          email={email}
          expirationDate={expirationDate}
          isExpired={isExpired}
        />
      )}
    </div>
  );
};

export default CreateRoom;
