import React from "react";
import { Element } from "react-scroll";
// import { FaJs } from 'react-icons/fa6';
import { FaJs } from "react-icons/fa";
import Developer_console from "./chapter_1/Developer_console";
import Loop from "./chapter_1/Loop";
import Array from "./chapter_1/Array";

const JavaScriptHomePage = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col  gap-y-8 p-8 bg-gray-900 overflow-x-hidden">
        <div className="w-20 h-20 text-orange-600 self-center">
          <FaJs className="w-full h-full" />
        </div>
        <p className="text-yellow-50 text-2xl self-center">চতুর্থ অধ্যায়</p>
        <p className="text-orange-500 text-3xl text-center">JavaScript</p>
        <Element name="developer_console">
          <Developer_console />
        </Element>
        <Element name="variable">
          <Developer_console />
        </Element>
        <Element name="comment">
          <Developer_console />
        </Element>
        <Element name="operator">
          <Developer_console />
        </Element>
        <Element name="conditional_statement">
          <Developer_console />
        </Element>
        <Element name="loop">
          <Loop />
        </Element>
        <Element name="array">
          <Array />
        </Element>
        <Element name="object">
          <Developer_console />
        </Element>
        <Element name="function">
          <Developer_console />
        </Element>
        <Element name="expression">
          <Developer_console />
        </Element>
        <Element name="dry_principal">
          <Developer_console />
        </Element>
        <Element name="Ecmascript">
          <Developer_console />
        </Element>
        <Element name="behind_the_seen">
          <Developer_console />
        </Element>
        <Element name="hoistiing">
          <Developer_console />
        </Element>
        <Element name="scope">
          <Developer_console />
        </Element>
        <Element name="closure">
          <Developer_console />
        </Element>
        <Element name="IIFE">
          <Developer_console />
        </Element>
      </div>
    </>
  );
};

export default JavaScriptHomePage;
