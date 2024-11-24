import { Element } from "react-scroll";
import { FaCss3 } from "react-icons/fa";
import { menuItems } from "../../../../data/chapterList";
import MernHostingOnVps from "./vps hosting/MernHostingOnVps";

const components = {
  mern_vps: MernHostingOnVps,
};

const HostingHomePage = () => {
  const renderTopics = (topics) => {
    return topics.map((topic) => {
      const Component = components[topic.id];

      if (!Component) {
        console.error(`Component not found for id: ${topic.id}`);
        return (
          <Element name={topic.id} key={topic.id}>
            <div className="text-red-500">
              Component not found: {topic.topicName}
            </div>
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
        <FaCss3 className="w-full h-full" />
      </div>
      <p className="text-cyan-500 text-5xl text-center">Hosting</p>
      {menuItems
        .filter((item) => item.title === "Hosting")
        .map((item) =>
          item.chapters.map((chapter) => (
            <div key={chapter.name}>{renderTopics(chapter.topics)}</div>
          ))
        )}
    </div>
  );
};

export default HostingHomePage;
