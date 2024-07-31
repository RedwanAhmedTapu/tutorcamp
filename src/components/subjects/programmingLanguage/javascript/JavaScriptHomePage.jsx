import React from "react";
import { Element } from "react-scroll";
import { FaJs } from "react-icons/fa";
import { menuItems } from "../../../../data/chapterList";
// Import your components here
import EnvironmentSetUp from "./chapter_1/Environment_setUp";
import DeveloperConsole from "./chapter_1/Developer_console";
import VariableTutorial from "./chapter_1/Variable";
import CommentTutorial from "./chapter_1/Comment";
import OperatorsTutorial from "./chapter_1/Operator";
import ConditionalStatementsTutorial from "./chapter_1/ConditionalStatement";
import Loop from "./chapter_1/Loop";
import Array from "./chapter_1/Array";


const components = {
  environment_setup: EnvironmentSetUp,
  developer_console: DeveloperConsole,
  variable: VariableTutorial,
  comment: CommentTutorial,
  operator: OperatorsTutorial,
  conditional_statement: ConditionalStatementsTutorial,
  loop: Loop,
  array: Array,
 
 
};

const JavaScriptHomePage = () => {
  const renderTopics = (topics) => {
    return topics.map((topic) => {
      const Component = components[topic.id.replace("#", "")];
      return (
        <Element name={topic.id} key={topic.id}>
          {Component ? <Component /> : <p>{topic.topicName}</p>}
        </Element>
      );
    });
  };

  return (
    <div className="w-full h-auto flex flex-col gap-y-8 p-8 bg-gray-900 overflow-x-hidden">
      <div className="w-20 h-20 text-yellow-400 self-center">
        <FaJs className="w-full h-full" />
      </div>
      <p className="text-yellow-500 text-3xl text-center">JavaScript</p>
      {menuItems
        .filter((item) => item.title === "javaScript")
        .map((item) =>
          item.chapters.map((chapter) => (
            <div key={chapter.name}>
              {renderTopics(chapter.topics)}
            </div>
          ))
        )}
    </div>
  );
};

export default JavaScriptHomePage;
