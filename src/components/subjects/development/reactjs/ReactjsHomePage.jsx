import { Element } from "react-scroll";
import { FaReact } from "react-icons/fa";
import { menuItems } from "../../../../data/chapterList";
import JSXTutorial from "./chapter_1/JSXTutorial";



const components = {
    jsx:JSXTutorial
   

 
};

const ReactjsHomePage = () => {
  const renderTopics = (topics) => {
    return topics.map((topic) => {
      const Component = components[topic.id];

      if (!Component) {
        console.error(`Component not found for id: ${topic.id}`);
        return (
          <Element name={topic.id} key={topic.id}>
            <div className="text-red-500">Component not found: {topic.topicName}</div>
          </Element>
        );
      }

      return (
        <Element name={topic.id} key={topic.id}>
          <Component />
        </Element>
      );
    });
  };

  return (
    <div className="w-full h-auto flex flex-col gap-y-8 p-8 bg-gray-900 overflow-x-hidden">
      <div className="w-20 h-20 text-indigo-500 self-center">
        <FaReact className="w-full h-full" />
      </div>
      <p className="text-indigo-50 text-5xl text-center">ReactJS</p>
      {menuItems
        .filter((item) => item.title === "ReactJS")
        .map((item) =>
          item.chapters.map((chapter) => (
            <div key={chapter.name}>{renderTopics(chapter.topics)}</div>
          ))
        )}
    </div>
  );
};

export default ReactjsHomePage;
