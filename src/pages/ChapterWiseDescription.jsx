import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { AiFillCaretRight } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { menuItems } from "../data/chapterList";
import Ict from "./subject/Ict";
import Javascript from "./subject/Javascript";

import Github from "./subject/Github";
import HtmlCssCodeEditor from "../components/HtmlCssCodeEditor";

const ChapterwiseDescription = () => {
  const { subID } = useParams();
  const [openChapter, setOpenChapter] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const location = useLocation();

  const selectedMenuItems = menuItems.filter((menu) => menu.title === subID);

  const toggleChapter = (chapter) => {
    setOpenChapter(openChapter === chapter ? null : chapter);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let ContentComponent;

  switch (location.pathname) {
    case "/sub/ICT":
      ContentComponent = Ict;
      break;
    case "/sub/javascript":
      ContentComponent = Javascript;
      break;
    default:
      ContentComponent = Github;
      break;
  }


  return (
    <>
      <div className="w-[100%] flex justify-end items-center fixed text-white   blur-0 top-16 min-[999px]:hidden h-12  z-20">
        <CiMenuFries className="w-12 h-12 text-white" onClick={toggleSidebar} />
      </div>
      <div className="w-full flex   mdUp:hidden ">
        <div
          className={`w-[20%] max-[700px]:w-[50%] max-[450px]:w-[70%] max-[998px]:w-[30%]  h-full fixed   max-[999px]:top-[4.1rem] top-16 left-0 bg-slate-950 opacity-90 overflow-y-auto z-10 ${
            isSidebarOpen ? "  " : "hidden"
          }`}
        >
          <div className="text-white p-2">
            {selectedMenuItems.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="text-2xl font-semibold text-center mb-2">
                  {item.title}
                </div>
                {item.chapters.map((chapterItem, index) => (
                  <div key={index} className="mb-2 relative">
                    <div
                      className="flex items-center mb-2 text-xl cursor-pointer"
                      onClick={() => toggleChapter(chapterItem.name)}
                    >
                      <div
                        className={`${
                          chapterItem.name !== openChapter
                            ? "w-5 h-5 border-slate-500 border-2 rounded-full flex_center relative before:w-[3px] before:h-[1.1rem] before:absolute before:top-[1.1rem] before:bg-slate-700"
                            : "w-5 h-5 border-slate-500 border-2 rounded-full flex_center relative before:w-[3px] before:h-[2.2rem] before:absolute before:top-[0.8rem] before:left-4 before:bg-slate-700 before:transform before:-rotate-45"
                        } z-10`}
                      >
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L7 16.17z"
                          />
                        </svg>
                      </div>
                      <div
                        className={`w-[90%] flex items-center relative ${
                          openChapter === chapterItem.name
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        <div className="text-[1.2rem] xl:text-2xl">
                          {chapterItem.name}
                        </div>
                      </div>
                      <div
                        className={`text-[1rem] xl:text-xl absolute right-0 lg:right-4 transform ${
                          openChapter === chapterItem.name ? "rotate-90" : ""
                        }`}
                      >
                        <AiFillCaretRight />
                      </div>
                    </div>
                    <div
                      className={`pl-7 ${
                        openChapter === chapterItem.name ? "block" : "hidden"
                      }`}
                    >
                      {chapterItem.topics.map((topic, index) => (
                        <div className="flex items-center" key={index}>
                          <div
                            className={`${
                              index === chapterItem.topics.length - 1 &&
                              openChapter === chapterItem.name
                                ? "before:transform before:rotate-45 before:h-[2.1rem] before:right-5 before:top-[0.77rem]"
                                : ""
                            } w-5 h-5 border-slate-500 border-2 rounded-full flex_center relative before:w-[3px] before:h-[1.3rem] before:absolute before:top-[1.1rem] before:bg-slate-700`}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L7 16.17z"
                              />
                            </svg>
                          </div>
                          <Link
                            key={index}
                            to={topic.id}
                            className="block text-white text-[0.7rem] hover:bg-slate-600 px-4 py-2 rounded"
                            spy={true}
                            smooth={true}
                            duration={500}
                            containerId="content-container"
                          >
                            {topic.topicName}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex  max-[1000px]:hidden  ">
        <div
          className={`w-[20%] max-[700px]:w-[50%] max-[450px]:w-[70%] max-[998px]:w-[30%]  h-full fixed   max-[999px]:top-[4.1rem] top-16 left-0 bg-slate-950 opacity-90 overflow-y-auto z-10 `}
        >
          <div className="text-white p-2">
            {selectedMenuItems.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="text-2xl font-semibold text-center mb-2">
                  {item.title}
                </div>
                {item.chapters.map((chapterItem, index) => (
                  <div key={index} className="mb-2 relative">
                    <div
                      className="flex items-center mb-2 text-xl cursor-pointer"
                      onClick={() => toggleChapter(chapterItem.name)}
                    >
                      <div
                        className={`${
                          chapterItem.name !== openChapter
                            ? "w-5 h-5 border-slate-500 border-2 rounded-full flex_center relative before:w-[3px] before:h-[1.1rem] before:absolute before:top-[1.1rem] before:bg-slate-700"
                            : "w-5 h-5 border-slate-500 border-2 rounded-full flex_center relative before:w-[3px] before:h-[2.2rem] before:absolute before:top-[0.8rem] before:left-4 before:bg-slate-700 before:transform before:-rotate-45"
                        } z-10`}
                      >
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L7 16.17z"
                          />
                        </svg>
                      </div>
                      <div
                        className={`w-[90%] flex items-center relative ${
                          openChapter === chapterItem.name
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        <div className="text-[1.2rem] xl:text-2xl">
                          {chapterItem.name}
                        </div>
                      </div>
                      <div
                        className={`text-[1rem] xl:text-xl absolute right-0 lg:right-4 transform ${
                          openChapter === chapterItem.name ? "rotate-90" : ""
                        }`}
                      >
                        <AiFillCaretRight />
                      </div>
                    </div>
                    <div
                      className={`pl-7 ${
                        openChapter === chapterItem.name ? "block" : "hidden"
                      }`}
                    >
                      {chapterItem.topics.map((topic, index) => (
                        <div className="flex items-center" key={index}>
                          <div
                            className={`${
                              index === chapterItem.topics.length - 1 &&
                              openChapter === chapterItem.name
                                ? "before:transform before:rotate-45 before:h-[2.1rem] before:right-5 before:top-[0.77rem]"
                                : ""
                            } w-5 h-5 border-slate-500 border-2 rounded-full flex_center relative before:w-[3px] before:h-[1.3rem] before:absolute before:top-[1.1rem] before:bg-slate-700`}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L7 16.17z"
                              />
                            </svg>
                          </div>
                          <Link
                            key={index}
                            to={topic.id}
                            className="block text-white text-[0.7rem] hover:bg-slate-600 px-4 py-2 rounded"
                            spy={true}
                            smooth={true}
                            duration={500}
                            containerId="content-container"
                          >
                            {topic.topicName}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={` fixed top-16 max-[999px]:w-[100%] w-[80%] h-full right-0 bg-slate-950 overflow-scroll ${
          isSidebarOpen ? "" : "w-full  h-full ml-0  "
        }`}
        id="content-container"
      >
       <ContentComponent />
      </div>
    </>
  );
};

export default ChapterwiseDescription;
