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

const JavaScriptHomePage = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-y-8 p-8 bg-gray-900 overflow-x-hidden">
      <div className="w-20 h-20 text-yellow-400 self-center">
        <FaJs className="w-full h-full" />
      </div>
      <p className="text-yellow-500 text-3xl text-center">JavaScript</p>

      {/* Manually render each chapter's topics */}
      <div>
        <Element name="environment_setup">
          <EnvironmentSetUp />
        </Element>
        <Element name="developer_console">
          <DeveloperConsole />
        </Element>
        <Element name="variable">
          <VariableTutorial />
        </Element>
        <Element name="comment">
          <CommentTutorial />
        </Element>
        <Element name="operator">
          <OperatorsTutorial />
        </Element>
        <Element name="conditional_statement">
          <ConditionalStatementsTutorial />
        </Element>
        <Element name="loop">
          <Loop />
        </Element>
        <Element name="array">
          <Array />
        </Element>
        <Element name="object">
          <Object />
        </Element>
        <Element name="function">
          <FunctionTutorial />
        </Element>
        <Element name="expression">
          <StatementExpressionTutorial />
        </Element>
        <Element name="dry_principal">
          <DRYPrincipleTutorial />
        </Element>
        <Element name="Ecmascript">
          <ECMAScriptTutorial />
        </Element>
        <Element name="hoisting">
          <HoistingTutorial />
        </Element>
        <Element name="behind_the_seen">
          <BehindTheScenesTutorial />
        </Element>
        <Element name="scope">
          <ScopeTutorial />
        </Element>
        <Element name="closure">
          <ClosureTutorial />
        </Element>
        <Element name="IIFE">
          <IIFETutorial />
        </Element>
        <Element name="this">
          <ThisKeywordTutorial />
        </Element>
        <Element name="call">
          <CallMethodTutorial />
        </Element>
        <Element name="apply">
          <ApplyMethodTutorial />
        </Element>
        <Element name="bind">
          <BindMethodTutorial />
        </Element>
        <Element name="constructorr">
          <ConstructorTutorial />
        </Element>
        <Element name="neww">
          <NewKeywordTutorial />
        </Element>
        <Element name="inheritances">
          <InheritanceTutorial />
        </Element>
        <Element name="stricts">
          <StrictModeTutorial />
        </Element>
        <Element name="template_literal">
          <TemplateLiteralsTutorial />
        </Element>
        <Element name="strings">
          <StringOperations />
        </Element>
        <Element name="arrows">
          <ArrowFunctionTutorial />
        </Element>
        <Element name="destructuring">
          <DestructuringTutorial />
        </Element>
        <Element name="hoc">
          <HigherOrderTutorial />
        </Element>
        <Element name="map_">
          <MapTutorial />
        </Element>
        <Element name="set_">
          <SetTutorial />
        </Element>
        <Element name="spread_operator">
          <SpreadOperatorTutorial />
        </Element>
        <Element name="rest_">
          <RestParameterTutorial />
        </Element>
        <Element name="default_">
          <DefaultParameterTutorial />
        </Element>
        <Element name="class_">
          <ClassTutorial />
        </Element>
        <Element name="class_inheritance">
          <ClassInheritanceTutorial />
        </Element>
        <Element name="Es6_">
          <ES6EnvironmentTutorial />
        </Element>
        <Element name="mapfunction">
          <MapFunctionTutorial />
        </Element>
        <Element name="filterfunction">
          <FilterFunctionTutorial />
        </Element>
        <Element name="reducefunction">
          <ReduceFunctionTutorial />
        </Element>
        <Element name="object_loop">
          <ObjectLoopTutorial />
        </Element>
        <Element name="dot_notation">
          <DotNotationTutorial />
        </Element>
        <Element name="bracket_notation">
          <BracketNotationTutorial />
        </Element>
        <Element name="logical_operator">
          <LogicalOperatorsTutorial />
        </Element>
        <Element name="ternary_operator">
          <TernaryOperatorTutorial />
        </Element>
        <Element name="regex">
          <RegexTutorial />
        </Element>
        <Element name="error_handling">
          <ErrorHandlingTutorial />
        </Element>
        <Element name="asynchronus">
          <AsyncTutorial />
        </Element>
        <Element name="callback">
          <CallbackExample />
        </Element>
        <Element name="promises">
          <PromiseTutorial />
        </Element>
        <Element name="awaits">
          <AsyncAwaitTutorial />
        </Element>
      </div>
    </div>
  );
};

export default JavaScriptHomePage;
