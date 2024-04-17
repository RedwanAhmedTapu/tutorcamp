import { Route, HashRouter as Router, Routes } from "react-router-dom";
// import "./index.css";
// import { useState } from "react";

// import Nav from "./components/Nav";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import User from "./components/UserDashBoard";
import SolutionComponent from "./components/SolutionComponent";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LobbyScreen from "./components/Vide";
import RoomPage from "./components/Room";
import VideoMeeting from "./components/VideoMeeting";
// const basename = "/";

const App = () => {
  const base="/";
  // const [token, setToken] = useState(false);

  return (
    <>
      <Router basename={base}>
        <Nav />
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/meetingroom/:roomId" element={<VideoMeeting />} />
         <Route path="/solution" element={<SolutionComponent/>}></Route>
        
        </Routes>
      </Router>
    </>
  );
};

export default App;
