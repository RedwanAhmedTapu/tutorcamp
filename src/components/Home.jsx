import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import SectionImage from "../assets/homesectionImage.svg";
import homesectionVideo from "../assets/homesectionVideo.mp4.mp4";
import HeroSection from "../assets/here-section.png";
import TorchLightEffect from "./TorchLightEffect";
import Loading from "./Loading";
import CardSpotlight from "./CardSpotlight";
import MonitorScreen from "./CurvedMonitor";
import Instructor from "./Instructor";
import CourseOutlet from "./CourseOutlet";
import Support from "./Support";
import JoinCommunity from "./JoinCommunity";
import ChatApp from "./ChatListForStudent";
import CreateRoom from "./CreateRoom";
import LLMApp from "./Qst";
import ImageUpload from "./ImageUpload";
import BrandSlider from "./Slider";
import SliderBelowCard from "./SliderBelowCard";

const Home = () => {
  const controls = useAnimation();
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [solution, setSolution] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.1 } },
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.1 } },
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.1 } },
  };

  const imgVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.1 } },
  };

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start("visible");
        } else {
          setInView(false);
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, controls]);

  return (
    <>
      <motion.header
        className="flex items-center justify-between relative top-12 md:top-4 lg:top-0 gap-8 w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-4 lg:px-10 lg:py-16 xl:px-12 xl:py-20 2xl:px-16 2xl:py-24 flex-col md:flex-row dark:bg-[#130e2e]"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={setRef}
      >
        <motion.div className="flex items-center">
          <motion.div className="container text-center flex flex-col">
            <motion.div className=" row-auto justify-center">
              <motion.div className="col-span-12 text-left  pt-4">
                <motion.h1
                  className=" font-[700] text-[2.5rem] lg:text-[4rem] leading-[4rem] md:leading-[6.5rem] flex flex-col text-sky-500  mt-2 "
                  variants={itemLeftVariants}
                >
                  <span className="max-[500px]:text-4xl text-sky-500">
                    Back To School
                  </span>
                  <span className="text-4xl text-slate-700 dark:text-white">
                    Learn What you enjoy !
                  </span>
                </motion.h1>
              </motion.div>
              <motion.div className="col-span-12 text-left ">
                <motion.p
                  className="text-xl text-slate-700 dark:text-white line-highlight line-clamp-8 leading-8 pt-4 pb-4"
                  variants={itemRightVariants}
                >
                  Your trusted platform for easy learning. Learn right & Grow!
                  creating and maintaining high performing tasks individuals and
                  organizations.
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div className="row-auto pb-4" variants={itemLeftVariants}>
              <motion.div
                className="flex items-center gap-5 mt-8"
                variants={itemLeftVariants}
              >
                <Link
                  to="/teacher/search-teacher"
                  className="text-[1rem] max-[500px]:w-1/2  py-2 px-2 md:px-6 bg-sky-500 rounded-md text-[#fff]"
                >
                  Search Teacher
                </Link>
                <Link
                  to="/teacher/intro-videos"
                  className="text-[1rem] max-[500px]:w-1/2 py-2 px-2 md:px-6 border dark:text-white border-sky-500 rounded-md text-sky-500"
                >
                  See Intro Videos
                </Link>
              </motion.div>
            </motion.div>
            <motion.div className="row pt-3 d-none d-md-flex justify-content-center">
              <motion.div className="col-12 text-left pb-5 ">
                <motion.div className="flex flex-row w-64 xs:w-96  items-center rounded-md  bg-slate-300 py-1 px-2 ">
                  <span className=" font-[500] rounded-sm  leading-3 badge-htb-soft mr-2 ">
                    <span className=" bg-emerald-600 rounded p-1  text-white">
                      New
                    </span>
                  </span>
                  <Link
                    className=" vis-arrow decoration-white  text-slate-900 flex items-center  p-1"
                    onMouseEnter={() => {
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                    }}
                    to="/"
                    target="blank"
                  >
                    Start a 7-days business trial FOR FREE
                    <svg
                      className="arrow-icon font-[500]  ml-1"
                      width="16"
                      height="16"
                      viewBox="-3 -3 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" z-30 "
                        fill="#0dd27d"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        className={` transition-all duration-500 ease-in-out  transform    ${
                          isHovered ? "translate-x-0":"translate-x-10 "
                        } `}
                        stroke="#0be5ab"
                        d="M1.75 8H11"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.img
          src={HeroSection}
          alt="hero image"
          className="w-full md:w-[40%]"
          variants={imgVariants}
        />
      </motion.header>
      {/* <BrandSlider/> */}
      {/* <SliderBelowCard/> */}
      {/* <ChatApp/> */}

      <CourseOutlet />
      <Instructor />
      <Support />
      <JoinCommunity />
      <CardSpotlight />
      <CreateRoom />
      {/* {
        <motion.div className="App">
          <h1 className="dark:text-white self-center">Math Solver</h1>
          <ImageUpload setSolution={setSolution} />
          {
            <motion.div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 dark:bg-[#130e2e]">
              {solution && (
                <motion.div className="mt-8 p-4 bg-white rounded-md shadow-md">
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Solution:</h2>
                  <p className="text-lg dark:text-white">{solution}</p>
                </motion.div>
              )}
            </motion.div>
          }
        </motion.div>
      } */}
    </>
  );
};

export default Home;
