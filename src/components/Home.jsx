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
import Footer from "./Footer";
import CreateRoom from "./CreateRoom";
import LLMApp from "./Qst";

const Home = () => {
  const controls = useAnimation();
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

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
        <motion.div variants={containerVariants}>
          <motion.h1
            className="text-slate-900 font-[700] flex flex-col text-[35px] md:text-[60px] leading-[3rem] md:leading-[4.5rem]"
            variants={itemLeftVariants}
          >
            Welcome To{" "}
            <span className="text-sky-500 flex">TutorCamp<p className="text-black">!</p></span>
          </motion.h1>
          <motion.p
            className="text-[16px] md:text-[20px] font-[500] text-slate-900 mt-3 w-full md:w-[50%]"
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
          className="w-full md:w-[600px]"
          variants={imgVariants}
        />
      </motion.header>

      <div className="absolute left-[12%] top-64 -rotate-12 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-60 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-24 xl:w-[10rem]"></div>
      <div className="absolute left-80 top-64 -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-60 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-24 xl:w-[15rem]"></div>
      <div className="absolute right-32 top-64 -rotate-45 bg-gradient-to-r from-violet-600 to-indigo-800 opacity-60 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[17.6rem] rounded-full"></div>


      <CourseOutlet/>

      <Instructor />
      <Support />
      <JoinCommunity />
      <CardSpotlight />
      <CreateRoom />
      <Footer />
    </>
  );
};

export default Home;
