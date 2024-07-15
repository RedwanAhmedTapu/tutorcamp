import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion';
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
import Footer from "./Footer";
import CreateRoom from "./CreateRoom";
import LLMApp from "./Qst";
import ImageUpload from "./ImageUpload";

const Home = () => {
  const controls = useAnimation();
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);
  const [solution, setSolution] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.1 } }
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.1 } }
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.1 } }
  };

  const imgVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.1 } }
  };

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        } else {
          setInView(false);
          controls.start('hidden');
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
        className="flex items-center justify-between relative top-20 md:top-0 gap-8 w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-4 lg:px-10 lg:py-16 xl:px-12 xl:py-20 2xl:px-16 2xl:py-24 flex-col md:flex-row"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={setRef}
      >
        <motion.div className="flex flex-col items-start" variants={containerVariants}>
          <motion.h1
            className="text-slate-900 font-[700] text-[2.5rem] md:text-[5rem] leading-[3rem] md:leading-[6.5rem] flex flex-col"
            variants={itemLeftVariants}
          >
            Welcome To{" "}
            <span className="text-sky-500 flex text-start">TutorCamp<p className="text-black">!</p></span>
          </motion.h1>
          <motion.p
            className="text-[1.6rem] md:text-[2rem] font-[500] flex text-start text-slate-900 mt-3 w-full md:w-[60%]"
            variants={itemRightVariants}
          >
            Your trusted platform for easy learning. Learn right & Grow!
          </motion.p>

          <motion.div className="flex items-center gap-5 mt-8" variants={itemLeftVariants}>
            <Link
              to="/teacher/search-teacher"
              className="py-2 px-6 bg-sky-500 rounded-md text-[#fff]"
            >
              Search Teacher
            </Link>
            <Link
              to="/teacher/intro-videos"
              className="py-2 px-6 border border-sky-500 rounded-md text-sky-500"
            >
              See Intro Video
            </Link>
          </motion.div>
        </motion.div>

        <motion.img
          src={HeroSection}
          alt="hero image"
          className="w-full md:w-[40%]"
          variants={imgVariants}
        />
      </motion.header>
      {/* <ChatApp/> */}

      <CourseOutlet />
      <Instructor />
      <Support />
      <JoinCommunity />
      <CardSpotlight />
      <CreateRoom />
      { <div className="App">
      <h1>Math Solver</h1>
      <ImageUpload setSolution={setSolution} />
      { <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-8">Math Solver</h1>
      <ImageUpload setSolution={setSolution} />
      {solution && (
        <div className="mt-8 p-4 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Solution:</h2>
          <p className="text-lg">{solution}</p>
        </div>
      )}
    </div>}
    </div>}
      <Footer />
    </>
  );
};

export default Home;
