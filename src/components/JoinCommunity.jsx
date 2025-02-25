import React from "react";
import JoincOmmuninty from "../assets/joincommunity.png"
import { Link } from "react-router-dom";

const JoinCommunity = () => {
  return (
    <section className="w-full my-10 md:my-16 bg-[#F1F7FF] dark:bg-[#130e2e] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 py-8 md:py-24 flex items-center justify-between gap-10 flex-col md:flex-row">
        <img src={JoincOmmuninty} alt="image" className="w-full md:w-[550px]" />

        <div className="w-full md:w-[45%]">
          <h2 className="text-[20px] md:text-[30px] font-[700] text-textColor dark:text-yellow-300">
          Join the Learning Community

          </h2>
          <p className="text-[14px] md:text-[18px] font-[500] text-textColor mt-3 mb-8 dark:text-white">
          Our mission is to deliver top-quality education and opportunities for improvement. Enroll today, form your own study group, and thrive together while building a supportive community.
          </p>
          <Link to="/signup"><button className="py-3 px-6 bg-violet-700 dark:bg-neutral-500 dark:text-white rounded-md text-white">
            Register Now
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;