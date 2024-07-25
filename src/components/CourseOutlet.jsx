import React from "react";
import CourseImage from "../assets/courseImage.png"
import { Link } from "react-router-dom";

const CourseOutlet = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 flex items-center gap-8 justify-between my-6 md:my-16 flex-col md:flex-row dark:bg-[#130e2e]">
      <img
        src={CourseImage}
        alt="image"
        className="w-full md:w-[500px]"
      />
      <div className="w-full md:w-[40%]">
        <h3 className="text-[20px] md:text-[30px] font-[700] text-textColor dark:text-lime-500">
        Learn Anywhere, Anytime

        </h3>
        <p className="text-[14px] md:text-[18px]  text-textColor font-[500] mt-3  dark:text-lime-50">
        With our top-notch instructors, you can master any subject effortlessly from the comfort of your home!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 dark:text-yellow-50">
          <p className="flex items-center gap-3">
            <img src="https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?t=st=1719860997~exp=1719864597~hmac=805fee7e1aa0ea91c8b8633a7c42a1f1bdca85e0a69129ae1b333941fada553e&w=740" alt="icon" className="w-[20px]" />
            Online Resources
          </p>
          <p className="flex items-center gap-3">
            <img src="https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?t=st=1719860997~exp=1719864597~hmac=805fee7e1aa0ea91c8b8633a7c42a1f1bdca85e0a69129ae1b333941fada553e&w=740" alt="icon" className="w-[20px]" />
            Weekly Sessions
          </p>
          <p className="flex items-center gap-3">
            <img src="https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?t=st=1719860997~exp=1719864597~hmac=805fee7e1aa0ea91c8b8633a7c42a1f1bdca85e0a69129ae1b333941fada553e&w=740" alt="icon" className="w-[20px]" />
            Live Classes
          </p>
          <p className="flex items-center gap-3">
            <img src="https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?t=st=1719860997~exp=1719864597~hmac=805fee7e1aa0ea91c8b8633a7c42a1f1bdca85e0a69129ae1b333941fada553e&w=740" alt="icon" className="w-[20px]" />
            Quiz & Practices
          </p>
        </div>

        <Link to="/signup"><button className="py-2 px-6 bg-cyan-800 dark:bg-cyan-500 rounded-md text-[#434b34] dark:text-white">
          Register Now
        </button>
        </Link>
      </div>
    </section>
  );
};

export default CourseOutlet;