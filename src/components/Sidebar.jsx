import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Link,
  
} from "react-scroll";
import { AiFillCaretRight } from "react-icons/ai";
import CodeEditor from "./CodeEditor";
import HtmlCssCodeEditor from "./HtmlCssCodeEditor";
import { menuItems } from "../data/chapterList";

const Sidebar = () => {
  const { subID } = useParams();
  const [openChapter, setOpenChapter] = useState(null);
  console.log(menuItems);

  const selectedMenuItems = menuItems.filter((menu) => menu.title === subID);
  console.log(selectedMenuItems);

  const toggleChapter = (chapter) => {
    setOpenChapter(openChapter === chapter ? null : chapter);
  };

  return (
    <div className="flex ">
      <div className="w-[20vw] h-full fixed top-16 left-0 bg-slate-950 opacity-90 overflow-y-auto">
        <div className="text-white p-2">
          {selectedMenuItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="text-2xl font-semibold text-center mb-2">
                {item.title}
              </div>
              {item.chapters.map((chapterItem, index) => (
                <div key={index} className="mb-2 relative">
                  <div
                    className="flex   items-center mb-2 text-xl cursor-pointer  "
                    onClick={() => toggleChapter(chapterItem.name)}
                  >
                    <div
                      className={`${
                        chapterItem.name !== openChapter
                          ? "w-5 h-5 border-slate-500 border-2 rounded-full flex_center relative before:w-[3px] before:h-[1.1rem] before:absolute before:top-[1.1rem] before:bg-slate-700"
                          : "w-5 h-5 border-slate-500 border-2 rounded-full flex_center relative before:w-[3px] before:h-[2.2rem] before:absolute before:top-[0.8rem] before:left-4 before:bg-slate-700 before:transform before:-rotate-45"
                      } z-10 `}
                    >
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L7 16.17z"
                        />
                      </svg>
                    </div>
                    <div
                      className={` w-[90%] flex items-center  relative   ${
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
                      className={` text-[1rem] xl:text-xl   absolute right-0 lg:right-4  transform ${
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
                              ? "before:transform before:rotate-45 before:h-[2.1rem]  before:right-5 before:top-[0.77rem]"
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
                          to={topic.id}
                          className="block text-white text-[0.7rem] hover:bg-slate-600 px-4 py-2 rounded"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
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
      <div className="ml-[20vw] w-[80vw] h-full fixed  top-16 bg-slate-950 overflow-scroll">
        {/* <HtmlCssCodeEditor /> */}
      </div>
    </div>
  );
};

export default Sidebar;
