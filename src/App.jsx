import { Route, HashRouter as Router, Routes } from "react-router-dom";
import SolutionComponent from "./components/SolutionComponent";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LobbyScreen from "./components/Vide";
import RoomPage from "./components/Room";
import VideoMeetingWrapper from "./pages/VideoMeeting";
import TeacherDashboard from "./pages/dashboard/teacherDashBoard/TeacherDashBoard";
import SearchTeacher from "./pages/SearchTeacher";
import ChapterWiseDescription from "./pages/ChapterWiseDescription";
import { SocketProvider } from "./context/SocketProvider";
import { PeerProvider } from "./context/PeerProvider"; // Correct import
import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./helper/PrivateRoute"; // Import PrivateRoute

const App = () => {
  const base = "/";
  
  return (
    <>
      <Router basename={base}>
        <Nav />
        <SocketProvider>
          {/* Use PeerProvider, not peerProvider */}
          <UserProvider>
          <PeerProvider> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/teacher-dashoard" element={<PrivateRoute element={TeacherDashboard} />} />
              <Route path="/teacher/search-teacher" element={SearchTeacher} />
              <Route path="/room/:roomId" element={ RoomPage }/>
              <Route path="/:roomId" element={VideoMeetingWrapper} />
              <Route path="/solution" element={<SolutionComponent />} />
              <Route path="/sub/:subID" element={<ChapterWiseDescription />} />
            </Routes>
          </PeerProvider>
          </UserProvider>
        </SocketProvider>
      </Router>
    </>
  );
};

export default App;
