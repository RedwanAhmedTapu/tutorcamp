import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Topic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      Hello world
    </motion.div>
  );
};
const Subjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      Hello world
    </motion.div>
  );
};

const NAVS = [
  { title: "home", Component: Topic },
  { title: "about", Component: Subjects },
  { title: "services", Component: Topic },
].map((n, idx) => ({ ...n, id: idx + 1 }));

const Tabs = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (val) => {
    setSelected(val);
  };

  const Nub = ({ selected }) => {
    const [nubPosition, setNubPosition] = useState(0);

    const [dir, setDir] = useState(null);

    useEffect(() => {
      const moveNub = () => {
        if (selected !== null) {
          const hoverTab = document.getElementById(`shift-tab-${selected}`);
          const overlayContent = document.getElementById("overlay-content");
          if (hoverTab && overlayContent) {
            const tabRect = hoverTab.getBoundingClientRect();
            console.log(tabRect);
            const contentRect = overlayContent.getBoundingClientRect();
            console.log(contentRect);
            const tabCenter =
              tabRect.left + tabRect.width / 2 - contentRect.left;
            setNubPosition(tabCenter);
            console.log(tabCenter)
            // setDir(selected > selected - 1 ? "l" : "r");
          }
        }
      };

      moveNub();
      console.log(nubPosition);
    }, [selected]);

    return (
      <>
        {selected !== null && (
          <span
            style={{
              clipPath: "polygon(0 0,100% 0,50% 50%,0% 100%)",
              left:`${nubPosition+2}px`,
            
            }}
            key={`nub-${selected}`} // Ensure unique key to trigger AnimatePresence
            className={`absolute top-[3.53rem]   h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900 transition-all duration-[0.95s]`}
          ></span>
        )}
      </>
    );
  };

  const Content = () => {
    return (
      <div
        id="overlay-content"
        className="absolute  top-[calc(100%+24px)] -left-3 w-96 h-80 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
      >
        {selected !== null && <Topic />}
      </div>
    );
  };

  const Tab = ({ children, tab }) => {
    return (
      <button
        id={`shift-tab-${tab}`}
        className={`group flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors  ${
          selected === tab ? " text-neutral-100" : "text-neutral-400"
        }`}
        onMouseEnter={() => handleSelected(tab)}
        onClick={() => handleSelected(tab)}
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
    <div
      onMouseLeave={() => {
        handleSelected(null);
      }}
      className="relative w-96  flex h-fit gap-2"
    >
      {NAVS.map((nav) => {
        return (
          <>
            <div className="w-24 relative    flex_center">
              <Tab key={nav.id} tab={nav.id}>
                {nav.title}
              </Tab>
            </div>
          </>
        );
      })}
      {selected && <Content />}
      <Nub selected={selected} />
    </div>
  );
};

export default Tabs;
