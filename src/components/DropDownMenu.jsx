
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";


const DropdownMenu = ({ title, subjects, onSelect }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="relative  overflow-y-scroll">
        <button onClick={toggleMenu} className="text-white">
          {title} <FiChevronDown />
        </button>
        {isMenuOpen && (
          <div className="relative w-full top-0 left-0 right-0 rounded-md bg-gray-800 dark:text-white divide-y-2 gap-y-2 flex  flex-col ">
            {subjects.map((subject, index) => (
              <Link key={index} to={`/sub/${subject}`} onClick={onSelect}>
                <div className="relative w-full text-white">{subject}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default DropdownMenu;