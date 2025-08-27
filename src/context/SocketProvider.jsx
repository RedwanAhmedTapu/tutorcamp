import  { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";
import PropTypes from "prop-types";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
export const SocketProvider = (props) => {
  const SERVER_URL="https://tutorcampbackend.onrender.com"
// const SERVER_URL="http://localhost:5000"
  // Create socket memoized, so it only initializes once
  const socket = useMemo(() => io(`${SERVER_URL}`), []);
  if (!socket.connected) {
    socket.connect();
  }

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


