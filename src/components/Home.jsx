// Home.js

import { useRef } from "react";
import SectionImage from "../assets/homesectionImage.svg";
import homesectionVideo from "../assets/homesectionVideo.mp4.mp4";
import TorchLightEffect from "./TorchLightEffect";
import Loading from "./Loading";
import CardSpotlight from "./CardSpotlight";
import MonitorScreen from "./CurvedMonitor";

import CreateRoom from "./CreateRoom";
import LLMApp from "./Qst";
import { Link } from "react-router-dom";
const Home = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (container) {
      const { clientX, clientY } = event;
      const { left, top, width, height } = container.getBoundingClientRect();

      for (let i = 0; i < 5; i++) {
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;

        const distance = Math.sqrt((x - 0.5) ** 2 + (y - 0.5) ** 2);

        if (distance <= 0.6) {
          const sparkle = document.createElement("div");
          sparkle.className = "sparkle";
          sparkle.style.left = `${x * 100}%`;
          sparkle.style.top = `${y * 100}%`;

          // Randomize sparkle size and opacity
          const size = Math.random() * 20 + 5; // Adjust size range as needed
          const opacity = Math.random() * 0.5 + 0.5; // Adjust opacity range as needed

          sparkle.style.width = `${size}px`;
          sparkle.style.height = `${size}px`;
          sparkle.style.opacity = opacity;

          container.appendChild(sparkle);

          setTimeout(() => {
            container.removeChild(sparkle);
          }, 300);
        }
      }
    }
  };
  return (
    <>
      <div
        className="pattern-dots w-full  h-screen relative max-[1000px]:pt-12 max-[1000px]:h-[50rem]  bg-slate-950 opacity-1"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <div className="flex flex_center max-[1000px]:flex-col   w-full h-full max-[1000px]:p-1 md:px-24">
          <div className="flex min-[1000px]:w-[40%] h-full max-[1000px]:w-screen    max-[1000px]:h-[50%] flex-col justify-center p-2">
            <div className="flex flex-col space-y-2 text-center lg:text-left">
              <div className="">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                ></span>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                ></span>
              </div>
              <h2 className="text-link text-white font-semibold text-3xl">
                Welcome To
              </h2>
              <h1 className="hero-title text-3xl  md:text-4xl xl:text-5xl text-white">
                Our{" "}
                <span className="primary-highlighter font-light m-2 text-sky-500 text-4xl md:text-5xl xl:text-6xl">
                  TutorCamp{" "}
                </span>
              
              </h1>
              <h2 className="subtitle text-2xl text-white">
                Your trusted platform
              </h2>
            </div>
            <p className="text-xl text-white text-medium mt-10 text-center lg:text-left">
              It{`'`}s a platform where you can learn easily anything
            </p>
            <div className="mx-auto  mt-10 flex gap-8 lg:mx-0">
              <div className="flex flex-col space-y-3">
                <button
                  className="mantine-Button-filled bg-slate-900 dark:bg-secondary2 hover:bg-slate-700 dark:hover:bg-secondary1 text-white mantine-Button-root mantine-1ogymfb"
                  type="button"
                  href="/enroll"
                >
                  <div className="mantine-3xbgk5 mantine-Button-inner">
                    {/* <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                    </span> */}

                    <div className=" animate-border w-[10rem] h-[4.5rem] relative p-[4px] overflow-hidden rounded-sm text-white">
                      {/* <span>1000TK</span>
                        <span className="flex items-center text-secondary1 dark:text-secondary1">
                          |
                        </span> */}
                      <span className=" block bg-black px-[13px] py-[20px] relative z-10" >
                       <Link to="/teacher/search-teacher">Search Teacher</Link> 
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div className=" lg:block">
                <button
                  className="mantine-Button-default bg-0 text-1 hover:bg-1 border-general mantine-Button-root mantine-1ln6wxl"
                  type="button"
                  href="/courses/think-in-a-redux-way/introduction"
                >
                  {/* <div className="mantine-3xbgk5 mantine-Button-inner text-white">
                    <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect
                          x="1"
                          y="5"
                          width="15"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                    </span>
                    <span className="mantine-qo1k2 mantine-Button-label text-white">
                      See Intro Video
                    </span>
                  </div> */}
                </button>
              </div>
            </div>
            <div className="mt-3 flex w-full justify-center lg:justify-start">
              <div className="text-2 flex space-x-1 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="mr-0 flex-shrink-0 lg:mr-1"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  <path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                </svg>
                <span className="text-center text-xs md:text-sm lg:text-left text-white">
                  you can find your desired teacher and learn easily here
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[60%] h-full max-[1000px]:w-screen   max-[1000px]:h-[50%] flex_col_center  ">
            <img src={SectionImage} className=" relative w-full h-full" />
            <div className="absolute w-44 h-44 lg:w-52 lg:h-52 xl:w-72 xl:h-72   rounded-full overflow-hidden">
              {/* Add the video element */}
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src={homesectionVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-44 -left-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-[2.4rem] filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div> */}
      <div className="absolute left-[12%] top-64  -rotate-12 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-60 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-24 xl:w-[10rem]"></div>
      <div className="absolute left-80 top-64  -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-60 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-24 xl:w-[15rem]"></div>
      <div className="absolute right-32 top-64  -rotate-45  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-60 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[17.6rem] rounded-full"></div>
      <TorchLightEffect/>
      {/* <Loading/> */}
      <CardSpotlight />
      {/* <MonitorScreen /> */}
      {/* <LLMApp/> */}
      <CreateRoom/>
    </>
  );
};

export default Home;
