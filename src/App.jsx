import { Route, HashRouter as Router, Routes } from "react-router-dom";
import SolutionComponent from "./components/SolutionComponent";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LobbyScreen from "./components/Vide";
import RoomPage from "./components/Room";
import VideoMeetingWrapper from "./pages/VideoMeeting";
// import VideoMeetingWrapper from "./pages/VideoMeeting";

import ChapterWiseDescription from "./pages/ChapterWiseDescription";
import { SocketProvider } from "./context/SocketProvider";
import { PeerProvider } from "./context/PeerProvider"; // Correct import

const App = () => {
  const base = "/";
  
  return (
    <>
      <Router basename={base}>
        <Nav />
        <SocketProvider>
          {/* Use PeerProvider, not peerProvider */}
          <PeerProvider> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/room/:roomId" element={<RoomPage />} />
              <Route path="/:roomId" element={<VideoMeetingWrapper />} />
              <Route path="/solution" element={<SolutionComponent />} />
              <Route path="/sub/:subID" element={<ChapterWiseDescription />} />
            </Routes>
          </PeerProvider>
        </SocketProvider>
      </Router>
    </>
  );
};

export default App;
