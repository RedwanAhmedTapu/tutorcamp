import  { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  // Create socket memoized, so it only initializes once
  const socket = useMemo(() => io('https://tutorcampbackend.onrender.com' || 'http://localhost:5000'), []);
  if (!socket.connected) {
    socket.connect();
  }

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

