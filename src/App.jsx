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
import StudentDashBoard from "./pages/dashboard/studentDashBoard/StudentDashBoard";
import AdminDashboard from "./pages/dashboard/adminDashBoard/AdminDashBoard";
import SearchTeacher from "./pages/SearchTeacher";
import IntroVideos from "./pages/IntroVideos";
import ChapterWiseDescription from "./pages/ChapterWiseDescription";
import { SocketProvider } from "./context/SocketProvider";
import { PeerProvider } from "./context/PeerProvider"; // Correct import
import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./helper/PrivateRoute"; // Import PrivateRoute
import ShowNavbar from "./helper/ShowNavbar";
import Footer from "./components/Footer";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFail from "./components/PaymentFail";

const App = () => {
  const base = "/";

  return (
    <Router basename={base}>
      <div className="flex flex-col min-h-screen">
        <ShowNavbar>
          <Nav />
        </ShowNavbar>

        {/* Content area with flex-grow to expand and push the footer down */}
        <div className="flex-grow">
          <SocketProvider>
            <UserProvider>
              <PeerProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/payment-success" element={<PaymentSuccess />} />
                  <Route path="/payment-fail" element={<PaymentFail />} />
                  <Route
                    path="/dashboard/teacher-dashoard"
                    element={<PrivateRoute element={TeacherDashboard} />}
                  />
                  <Route
                    path="/dashboard/student-dashoard"
                    element={<PrivateRoute element={StudentDashBoard} />}
                  />
                  <Route
                    path="/dashboard/admin-dashoard"
                    element={<PrivateRoute element={AdminDashboard} />}
                  />
                  <Route
                    path="/teacher/search-teacher"
                    element={<SearchTeacher />}
                  />
                  <Route path="/teacher/intro-videos" element={<IntroVideos />} />
                  <Route path="/room/:roomId" element={<RoomPage />} />
                  <Route path="/:roomId" element={<VideoMeetingWrapper />} />
                  <Route path="/solution" element={<SolutionComponent />} />
                  <Route
                    path="/sub/:subID"
                    element={<ChapterWiseDescription />}
                  />
                </Routes>
              </PeerProvider>
            </UserProvider>
          </SocketProvider>
        </div>

        {/* Footer always at the bottom */}
        <ShowNavbar>
          <Footer />
        </ShowNavbar>
      </div>
    </Router>
  );
};

export default App;
