import React, { createContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Brain from "../assets/Brain.svg";

const NavContext = createContext();

const Nav = () => {
  const [routes] = useState([
    { path: "/", name: "Home" },
    { path: "/login", name: "Login" },
    { path: "/signup", name: "Signup" },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavContext.Provider value={{ routes }}>
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </NavContext.Provider>
  );
};

const NavBar = ({ isMenuOpen, toggleMenu }) => {
  const { routes } = React.useContext(NavContext);

  return (
    <div className="border-general w-screen h-16 fixed top-0 z-40 flex items-center justify-between bg-slate-950 opacity-90 backdrop-blur-2xl transition-colors duration-500">
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

      <div className="w-24 mr-6 h-16 flex_col_center">
        <div className="mdUp:hidden">
          {/* Responsive menu button */}
          <button className="text-white" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : "Menu"}
          </button>
        </div>
        <div
          className={`absolute top-16 left-0 px-6 py-6 right-0 w-full text-xl gap-y-4 h-96 bg-gray-900 flex flex-col ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Responsive menu items */}
          {routes.map((route, index) => (
            <Link key={index} to={route.path}>
              <button className="text-white">{route.name}</button>
            </Link>
          ))}
          {/* Responsive menu items */}
          <DropdownMenu
            title="SSC"
            subjects={SSCSubjects}
            onSelect={toggleMenu}
          />
          <DropdownMenu
            title="HSC"
            subjects={HSCSubjects}
            onSelect={toggleMenu}
          />
          <DropdownMenu
            title="Versity"
            subjects={VersitySubjects}
            onSelect={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
};
const SSCSubjects = [
  "Physics",
  "Chemistry",
  "Highermath",
  "Biology",
  "English 1st",
  "English 2nd",
  "ICT",
  "Bangla 1st",
  "Bangla 2nd",
];

const HSCSubjects = [
  "Physics-1st",
  "Physics-2nd",
  "Chemistry-1st",
  "Chemistry-2nd",
  "Highermath-1st",
  "Highermath-2nd",
  "Biology-1st",
  "Biology-2nd",
  "English",
  "ICT",
];

const VersitySubjects = ["Coming Soon..."];

const DropdownMenu = ({ title, subjects, onSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-white">
        {title} <FiChevronDown />
      </button>
      {isMenuOpen && (
        <div className="absolute w-full top-full left-0 right-0 rounded-md bg-gray-800 divide-y-2 flex flex_col_center ">
          {subjects.map((subject, index) => (
            <Link key={index} to={`/sub/${subject}`} onClick={onSelect}>
              <button className="text-white">{subject}</button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const SSC = ({ onSelect }) => {
  const subjects = [
    "Physics",
    "Chemistry",
    "Highermath",
    "Biology",
    "English 1st",
    "English 2nd",
    "ICT",
    "Bangla 1st",
    "Bangla 2nd",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      <div className="full h-full grid grid-cols-2 gap-6 p-2">
        {subjects.map((subject, index) => (
          <Link
            to={`/sub/${subject}`}
            key={index}
            onClick={() => onSelect(null)}
          >
            <div className="navSubtext">{subject}</div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const SubjectList = ({ subjects, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onClick={() => setIsHovered(false)}
    >
      <div className="navSubtext">{subjects.title}</div>
      {isHovered && (
        <div className="absolute bg-slate-950 z-10 shadow-md py-2 px-4 rounded">
          <ul>
            {subjects.list.map((subject, index) => (
              <Link to={`/sub/${subject}`} key={index}>
                <li onClick={() => onSelect(null)}>{subject}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const HSC = ({ onSelect }) => {
  const subjectData = [
    { title: "Physics", list: ["Physics-1st", "Physics-2nd"] },
    { title: "Chemistry", list: ["Chemistry-1st", "Chemistry-2nd"] },
    { title: "Highermath", list: ["Highermath-1st", "Highermath-2nd"] },
    { title: "Biology", list: ["Biology-1st", "Biology-2nd"] },
    { title: "English", list: ["English-1st", "English-2nd"] },
    { title: "ICT", list: ["ICT"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      <div className="full h-full grid grid-cols-2 gap-2 p-2">
        {subjectData.map((subject, index) => (
          <SubjectList key={index} subjects={subject} onSelect={onSelect} />
        ))}
      </div>
    </motion.div>
  );
};

const Versity = ({ onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      coming soon....
    </motion.div>
  );
};

const NAVS = [
  { title: "SSC", Component: SSC },
  { title: "HSC", Component: HSC },
  { title: "Versity", Component: Versity },
].map((n, idx) => ({ ...n, id: idx + 1 }));

const Tabs = ({ isMenuOpen }) => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (val) => {
    setSelected(val);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const container = document.getElementById("tabs-container");
      if (container && !container.contains(event.target)) {
        setSelected(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Nub = ({ selected }) => {
    const [nubPosition, setNubPosition] = useState(0);

    useEffect(() => {
      const moveNub = () => {
        if (selected !== null) {
          const hoverTab = document.getElementById(`shift-tab-${selected}`);
          const overlayContent = document.getElementById("overlay-content");
          if (hoverTab && overlayContent) {
            const tabRect = hoverTab.getBoundingClientRect();
            const contentRect = overlayContent.getBoundingClientRect();
            const tabCenter =
              tabRect.left + tabRect.width / 2 - contentRect.left;
            setNubPosition(tabCenter);
          }
        }
      };

      moveNub();
    }, [selected]);

    return (
      <>
        {selected !== null && (
          <span
            style={{
              clipPath: "polygon(0 0,100% 0,50% 50%,0% 100%)",
              left: `${nubPosition + 2}px`,
            }}
            key={`nub-${selected}`}
            className={`absolute top-[3.53rem] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-slate-600 bg-slate-900 transition-all duration-[0.95s]`}
          ></span>
        )}
      </>
    );
  };

  const Content = ({ selected }) => {
    const SelectedComponent = NAVS[selected - 1].Component;
    return (
      <div
        className="absolute top-[calc(100%+24px)] -left-3 hidden mdUp:block w-96 h-80 rounded-lg border border-slate-600 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-800  backdrop:blur-3xl p-4"
        id="overlay-content"
      >
        <SelectedComponent onSelect={handleSelected} isMenuOpen={isMenuOpen} />
      </div>
    );
  };

  const Tab = ({ children, tab }) => {
    return (
      <button
        id={`shift-tab-${tab}`}
        className={`group flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
          selected === tab ? " text-neutral-100" : "text-neutral-400"
        }`}
        onMouseEnter={() => handleSelected(tab)}
        onClick={() => setSelected(null)}
      >
        <span>{children}</span>
        <FiChevronDown
          className={`transition-transform ${
            selected === tab ? "rotate-180" : ""
          }`}
        />
      </button>
    );
  };

  return (
    <div id="tabs-container" className="relative w-96 flex h-fit gap-2">
      {NAVS.map((nav) => (
        <div
          className="w-24 relative flex_col_center hidden mdUp:block  mdUp:flex_center"
          key={nav.id}
        >
          <Tab tab={nav.id}>{nav.title}</Tab>
        </div>
      ))}
      {selected && <Content selected={selected} />}
      <Nub selected={selected} />
    </div>
  );
};

export default Nav;
