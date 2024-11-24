import React from "react";
import { Element } from "react-scroll";
import { FaCss3 } from "react-icons/fa";
import { menuItems } from "../../../../data/chapterList";

import IntroductionCss from "./chapter_1/IntroductionCss";
import SelectorsAndSpecificity from "./chapter_1/SelectorsAndSpecificity";
import ColorAndBackground from "./chapter_1/ColorAndBackground";
import BoxModel from "./chapter_1/BoxModel";
import Typography from "./chapter_1/Typography";
import FlexBox from "./chapter_1/FlexBox";
import GridBox from "./chapter_1/GridBox";
import PositionBox from "./chapter_1/PositionBox";
import ZIndexAndStackingContext from "./chapter_1/ZIndexAndStackingContext";
import CSSVariables from "./chapter_1/CSSVariables";
import CSSAnimations from "./chapter_1/CSSAnimations";
import CSSTransitions from "./chapter_1/CSSTransition";

const components = {
    intro_css:IntroductionCss,
    selectors_specificity:SelectorsAndSpecificity,
    colors_backgrounds:ColorAndBackground,
    box_model:BoxModel,
    typography:Typography,
    flex_box:FlexBox,
    grid_layout:GridBox,
    positioning:PositionBox,
    z_index_stacking:ZIndexAndStackingContext,
    // display_visibility:
    variables:CSSVariables,
    css_animations:CSSAnimations,
    css_transitions:CSSTransitions

 
};

const CssHomePage = () => {
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
        <FaCss3 className="w-full h-full" />
      </div>
      <p className="text-cyan-500 text-5xl text-center">CSS</p>
      {menuItems
        .filter((item) => item.title === "CSS3")
        .map((item) =>
          item.chapters.map((chapter) => (
            <div key={chapter.name}>{renderTopics(chapter.topics)}</div>
          ))
        )}
    </div>
  );
};

export default CssHomePage;
