import { Link } from "react-router-dom";
import Tabs from "./Tabs";
import Brain from "../assets/Brain.svg";


const Nav = () => {
  return (
    <div className="border-general w-full h-16 fixed top-0 z-40 flex items-center justify-between bg-slate-950 opacity-90  backdrop-blur-2xl transition-colors duration-500">
      <div className="flex items-center">
      <Link to="/">

        <div className="w-32 ml-24 max-[1000px]:ml-12 h-16 flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer">
            <img
              src={Brain}
              className="w-full h-full object-cover"
              alt="Brain Logo"
            />
          </div>
          <span className="text-xl text-white ml-2 cursor-pointer">
            Tutorcamp
          </span>
          
        </div>
        </Link>
        
      </div>
      
      <Tabs />
      
      <div className="w-96  h-16 flex_center space-x-8  ">
        <Link to="/login">
          {" "}
          <button className="text-white hidden md:inline">Login</button>
        </Link>
        <Link to="/signup">
          {" "}
          <button className="text-white hidden md:inline">Signup</button>
        </Link>
        <div className="md:hidden">{/* Responsive menu button */}</div>
      </div>
    </div>
  );
};

export default Nav;
