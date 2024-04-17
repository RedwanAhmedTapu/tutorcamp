import { useEffect, useState } from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = process.env.SERVER_URL;

const useSocketConnection = () => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);

    newSocket.on("connect", () => {
      console.log("Socket connected");
      setIsConnected(true);
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    const retryInterval = setInterval(() => {
      if (!isConnected) {
        console.log("Attempting to reconnect...");
        setSocket(io(SOCKET_SERVER_URL));
      }
    }, 5000); // Retry every 5 seconds

    return () => clearInterval(retryInterval);
  }, [isConnected]);

  return socket;
};

export default useSocketConnection;
