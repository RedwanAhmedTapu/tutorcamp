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
import Object from "./chapter_1/Object";
import FunctionTutorial from "./chapter_1/Function";
import StatementExpressionTutorial from "./chapter_1/Statement&Expression";
import DRYPrincipleTutorial from "./chapter_1/Dryprincipal";
import ECMAScriptTutorial from "./chapter_1/ECMAScript";
import HoistingTutorial from "./chapter_1/Hoisting";
import BehindTheScenesTutorial from "./chapter_1/BehindTheSeen";
import ScopeTutorial from "./chapter_1/Scope";
import ClosureTutorial from "./chapter_1/Closure";
import IIFETutorial from "./chapter_1/IIFE";
import ThisKeywordTutorial from "./chapter_2/This";
import CallMethodTutorial from "./chapter_2/Call";
import ApplyMethodTutorial from "./chapter_2/Apply";
import BindMethodTutorial from "./chapter_2/Bind";
import ConstructorTutorial from "./chapter_2/Constructor";
import NewKeywordTutorial from "./chapter_2/New";
import InheritanceTutorial from "./chapter_2/Inheritance";
import StrictModeTutorial from "./chapter_2/Strict";
import TemplateLiteralsTutorial from "./chapter_3/template_Literal";
import StringOperations from "./chapter_3/String";
import ArrowFunctionTutorial from "./chapter_3/Arrow";
import DestructuringTutorial from "./chapter_3/Destructure";
import MapTutorial from "./chapter_3/Map";
import SetTutorial from "./chapter_3/Set";
import DefaultParameterTutorial from "./chapter_3/Default_parameter";
import SpreadOperatorTutorial from "./chapter_3/Spread_operator";
import RestParameterTutorial from "./chapter_3/RestParameter";
import ClassTutorial from "./chapter_3/Class";
import ClassInheritanceTutorial from "./chapter_3/Class_Inheritance";
import ES6EnvironmentTutorial from "./chapter_3/ES6";
import MapFunctionTutorial from "./chapter_4/Map";
import FilterFunctionTutorial from "./chapter_4/Filter";
import ReduceFunctionTutorial from "./chapter_4/Reduce";
import ObjectLoopTutorial from "./chapter_4/Object_loop";
import DotNotationTutorial from "./chapter_4/Dot_notation";
import BracketNotationTutorial from "./chapter_4/Bracket_Notation";
import HigherOrderTutorial from "./chapter_4/Hoc_Hof";
import LogicalOperatorsTutorial from "./chapter_4/Logical_operator";
import TernaryOperatorTutorial from "./chapter_4/Ternary_operator";
import ErrorHandlingTutorial from "./chapter_4/Error_handling";
import CallbackExample from "./chapter_4/Callback";
import AsyncTutorial from "./chapter_4/Asynchronus";
import AsyncAwaitTutorial from "./chapter_4/AsyncAwait";
import PromiseTutorial from "./chapter_4/Promise";
import RegexTutorial from "./chapter_4/Regex";
// Add additional imports if necessary

const components = {
  environment_setup: EnvironmentSetUp,
  developer_console: DeveloperConsole,
  variable: VariableTutorial,
  comment: CommentTutorial,
  operator: OperatorsTutorial,
  conditional_statement: ConditionalStatementsTutorial,
  loop: Loop,
  array: Array,
  object: Object,
  function: FunctionTutorial,
  expression: StatementExpressionTutorial,
  dry_principal: DRYPrincipleTutorial,
  Ecmascript: ECMAScriptTutorial,
  hoisting: HoistingTutorial,
  behind_the_seen: BehindTheScenesTutorial,
  scope: ScopeTutorial,
  closure: ClosureTutorial,
  IIFE: IIFETutorial,
  this: ThisKeywordTutorial,
  call: CallMethodTutorial,
  apply: ApplyMethodTutorial,
  bind: BindMethodTutorial,
  constructorr: ConstructorTutorial,
  neww: NewKeywordTutorial,
  inheritances: InheritanceTutorial,
  stricts: StrictModeTutorial,
  template_literal: TemplateLiteralsTutorial,
  strings: StringOperations,
  arrows: ArrowFunctionTutorial,
  destructuring: DestructuringTutorial,
  hoc: HigherOrderTutorial,
  map_: MapTutorial,
  set_: SetTutorial,
  spread_operator: SpreadOperatorTutorial,
  rest_: RestParameterTutorial,
  default_: DefaultParameterTutorial,
  class_: ClassTutorial,
  class_inheritance: ClassInheritanceTutorial,
  Es6_: ES6EnvironmentTutorial,
  mapfunction: MapFunctionTutorial,
  filterfunction: FilterFunctionTutorial,
  reducefunction: ReduceFunctionTutorial,
  object_loop: ObjectLoopTutorial,
  dot_notation: DotNotationTutorial,
  bracket_notation: BracketNotationTutorial,
  logical_operator: LogicalOperatorsTutorial,
  ternary_operator: TernaryOperatorTutorial,
  regex: RegexTutorial,
  error_handling: ErrorHandlingTutorial,
  asynchronus: AsyncTutorial,
  callback: CallbackExample,
  promises: PromiseTutorial,
  awaits: AsyncAwaitTutorial,
  // Add other mappings here
};

const JavaScriptHomePage = () => {
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
      <div className="w-20 h-20 text-yellow-400 self-center">
        <FaJs className="w-full h-full" />
      </div>
      <p className="text-yellow-500 text-3xl text-center">JavaScript</p>
      {menuItems
        .filter((item) => item.title === "javascript")
        .map((item) =>
          item.chapters.map((chapter) => (
            <div key={chapter.name}>{renderTopics(chapter.topics)}</div>
          ))
        )}
    </div>
  );
};

export default JavaScriptHomePage;
