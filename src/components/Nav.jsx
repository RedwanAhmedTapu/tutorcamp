import Brain from "../assets/Brain.svg";
import { Link } from "react-router-dom";

const Nav = () => {


  // const navigate=useNavigate();
  return (
    <>
      <div className="border-general w-full h-16 fixed top-0 z-40  flex items-center justify-between bg-[rgba(11, 17, 32, 0.9)] backdrop-blur-2xl transition-colors duration-500">
        <div className="flex items-center">
          <div className=" w-32  ml-24 h-16 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer">
              <img src={Brain} className="w-full h-full object-cover" alt="Brain Logo" />
            </div>
            <span className="text-xl text-white ml-2 cursor-pointer">Tutorcamp</span>
          </div>
        </div>
        <div className="w-[50%] h-16 flex_center space-x-44 pr-24">
        <Link to="/"><div className="pl-4 text-white hidden md:block">Home</div></Link>

        <Link to="/login"> <button className="text-white hidden md:inline">Login</button></Link> 
        <Link to="/signup"> <button className="text-white hidden md:inline">Signup</button></Link> 
          {/* Add a responsive menu button for small screens */}
          <div className="md:hidden">
            {/* Add your responsive menu button here */}
            {/* Example: <button className="text-white">Menu</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
