import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const { subID } = useParams();
  const [openChapter, setOpenChapter] = useState(null);

  const menuItems = [
    {
      title: "Physics-1st",
      chapters: [
        {
          name: "Chapter 1",
          topics: [
            { topicName: "Topic 1.1", url: "#topic1_1" },
            { topicName: "Topic 1.2", url: "#topic1_2" },
          ],
        },
        {
          name: "Chapter 2",
          topics: [
            { topicName: "Topic 2.1", url: "#topic2_1" },
            { topicName: "Topic 2.2", url: "#topic2_2" },
          ],
        },
      ],
    },
    // Add more menu items as needed
  ];

  const toggleChapter = (chapter) => {
    setOpenChapter(openChapter === chapter ? null : chapter);
  };

  return (
    <div className="flex_col w-[17%] h-screen fixed top-16 bg-slate-950 opacity-90 overflow-scroll">
      <div id="leftmenuinner">
        <div id="leftmenuinnerinner text-white">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="text-white p-2">{item.title}</div>
              {item.chapters.map((chapterItem, index) => (
                <div key={index} className="pl-4">
                  <div className="relative">
                    <div className=" w-5 h-5 border-slate-500 border-2 rounded-full flex justify-center items-center absolute before:w-[3px] before:h-[1.3rem] before:absolute before:top-[1.1rem] before:bg-slate-700">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L7 16.17z"/>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`flex justify-between items-center cursor-pointer text-white hover:bg-slate-600 p-2`}
                    onClick={() => toggleChapter(chapterItem.name)}
                  >
                    <div>{chapterItem.name}</div>
                    <div className="transform rotate-45">
                      {openChapter === chapterItem.name ? (
                        <svg
                          className="w-6 h-6 text-white -rotate-45"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L7 16.17z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-white -rotate-45"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L7 16.17z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    className={`pl-8 transition-all overflow-hidden ${
                      openChapter === chapterItem.name ? "block" : "hidden"
                    }`}
                  >
                    {chapterItem.topics.map((topic, index) => (
                      <div key={index} className="pl-8">
                        <Link
                          to={topic.url}
                          className="text-white hover:bg-slate-600 p-2 block"
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
  );
};

export default Sidebar;
