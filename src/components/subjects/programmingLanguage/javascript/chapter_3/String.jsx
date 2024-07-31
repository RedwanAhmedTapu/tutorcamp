import React, { useState } from "react";

const StringOperations = () => {
  const [string, setString] = useState("Hello, World!");
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");
  const [changedItem, setChangedItem] = useState(null);
  const [originalLength, setOriginalLength] = useState(string.length);
  const [trimmedLength, setTrimmedLength] = useState(string.length);

  const StringMethodList = [
    { method: "charAt(1)", description: "নির্দিষ্ট ইনডেক্সের character রিটার্ন করে " },
    { method: `concat("!!!")`, description: "স্ট্রিংগুলিকে একত্রিত করে" },
    { method: "includes('World')", description: "স্ট্রিংটি অন্য একটি স্ট্রিং আছে কিনা পরীক্ষা করে" },
    { method: `indexOf("World")`, description: "নির্দিষ্ট সাবস্ট্রিংয়ের ইনডেক্স রিটার্ন দেয়" },
    { method: "slice(7,12)", description: "স্ট্রিংয়ের নির্দিষ্ট অংশ কেটে আনে" },
    { method: "substring(0,5)", description: "দুটি ইনডেক্সের মধ্যে স্ট্রিংয়ের অংশ রিটার্ন দেয়" },
    { method: "toLowerCase()", description: "স্ট্রিংকে ছোট হাতের অক্ষরে পরিবর্তন করে" },
    { method: "toUpperCase()", description: "স্ট্রিংকে বড় হাতের অক্ষরে পরিবর্তন করে" },
    { method: "trim()", description: "স্ট্রিংয়ের প্রান্ত থেকে white space সরিয়ে দেয়" },
    { method: `replace("World", "Universe")`, description: "একটি সাবস্ট্রিং অন্য একটি সাবস্ট্রিং দ্বারা প্রতিস্থাপন করে" },
    { method: `split(" ")`, description: "স্ট্রিংকে একটি অ্যারে-তে ভাগ করে দেয়" },
    { method: `repeat(3)`, description: "স্ট্রিংটি নির্দিষ্ট সংখ্যক বার পুনরাবৃত্তি করে" },
    { method: `startsWith("Hello")`, description: "স্ট্রিংটি নির্দিষ্ট সাবস্ট্রিং দিয়ে শুরু হয় কিনা পরীক্ষা করে" },
    { method: `endsWith("!")`, description: "স্ট্রিংটি নির্দিষ্ট সাবস্ট্রিং দিয়ে শেষ হয় কিনা পরীক্ষা করে" },
    { method: `padStart(20, "*")`, description: "স্ট্রিংয়ের শুরুতে নির্দিষ্ট প্যাডিং যোগ করে" },
    { method: `padEnd(20, "*")`, description: "স্ট্রিংয়ের শেষে নির্দিষ্ট প্যাডিং যোগ করে" },
    { method: `toString()`, description: "মানকে স্ট্রিংয়ে রূপান্তরিত করে" },
    { method: "trimStart()", description: "স্ট্রিংয়ের শুরু থেকে white space সরিয়ে দেয়" },
    { method: "trimEnd()", description: "স্ট্রিংয়ের শেষ থেকে white space সরিয়ে দেয়" },
  ];

  const updateString = (operation) => {
    let result;
    switch (operation) {
      case 0:
        result = string.charAt(1);
        setChangedItem(result);
        setText(`নির্দিষ্ট ইনডেক্সের character`);
        break;
      case 1:
        result = string.concat("!!!");
        setString(result);
        setChangedItem(result);
        setText(`স্ট্রিংগুলিকে একত্রিত করা হয়েছে`);
        break;
      case 2:
        result = string.includes("World");
        setChangedItem(result ? "Yes" : "No");
        setText(`স্ট্রিংটি "World" আছে: ${result}`);
        break;
      case 3:
        result = string.indexOf("World");
        setChangedItem(result);
        setText(`"World" এর ইনডেক্স`);
        break;
      case 4:
        result = string.slice(7, 12);
        setChangedItem(result);
        setText(`স্ট্রিংয়ের নির্দিষ্ট অংশ`);
        break;
      case 5:
        result = string.substring(0, 5);
        setChangedItem(result);
        setText(`দুটি ইনডেক্সের মধ্যে স্ট্রিংয়ের অংশ"`);
        break;
      case 6:
        result = string.toLowerCase();
        setString(result);
        setChangedItem(result);
        setText(`স্ট্রিং ছোট হাতের অক্ষরে পরিবর্তিত হয়েছে"`);
        break;
      case 7:
        result = string.toUpperCase();
        setString(result);
        setChangedItem(result);
        setText(`স্ট্রিং বড় হাতের অক্ষরে পরিবর্তিত হয়েছে"`);
        break;
      case 8:
        const originalStr = "   Hello, World!   ";
        result = originalStr.trim();
        setString(result);
        setChangedItem(result);
        setOriginalLength(originalStr.length);
        setTrimmedLength(result.length);
        setText(`স্ট্রিংয়ের প্রান্ত থেকে white space সরানো হয়েছে"`);
        break;
      case 9:
        result = string.replace("World", "Universe");
        setString(result);
        setChangedItem(result);
        setText(`"World" প্রতিস্থাপন করা হয়েছে`);
        break;
      case 10:
        result = string.split(" ");
        setChangedItem(result);
        setText(`স্ট্রিংটি বিভক্ত হয়েছে: ${JSON.stringify(result)}`);
        break;
      case 11:
        result = string.repeat(3);
        setString(result);
        setChangedItem(result);
        setText(`স্ট্রিংটি পুনরাবৃত্তি করা হয়েছে: "${result}"`);
        break;
      case 12:
        result = string.startsWith("Hello");
        setChangedItem(result ? "Yes" : "No");
        setText(`স্ট্রিংটি "Hello" দিয়ে শুরু হয়: ${result}`);
        break;
      case 13:
        result = string.endsWith("!");
        setChangedItem(result ? "Yes" : "No");
        setText(`স্ট্রিংটি "!" দিয়ে শেষ হয়: ${result}`);
        break;
      case 14:
        result = string.padStart(20, "*");
        setString(result);
        setChangedItem(result);
        setText(`স্ট্রিংটির শুরুতে প্যাডিং যোগ করা হয়েছে: "${result}"`);
        break;
      case 15:
        result = string.padEnd(20, "*");
        setString(result);
        setChangedItem(result);
        setText(`স্ট্রিংটির শেষে প্যাডিং যোগ করা হয়েছে: "${result}"`);
        break;
      case 16:
        result = string.toString();
        setChangedItem(result);
        setText(`স্ট্রিংয়ে রূপান্তরিত হয়েছে: "${result}"`);
        break;
      case 17:
        result = "   Hello, World!   ".trimStart();
        setString(result);
        setChangedItem(result);
        setText(`স্ট্রিংয়ের শুরু থেকে white space সরানো হয়েছে: "${result}"`);
        break;
      case 18:
        result = "   Hello, World!   ".trimEnd();
        setString(result);
        setChangedItem(result);
        setText(`স্ট্রিংয়ের শেষ থেকে white space সরানো হয়েছে: "${result}"`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col h-auto p-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">String:</div>
          <div className="flex flex-col md:flex-row md:flex-wrap space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex items-center bg-violet-50 p-2 rounded-md shadow-md w-full md:w-auto h-12 text-sm md:text-base">
                {string}
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-2">
          <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
          <p className="text-red-500 text-base md:text-lg">
            {changedItem === "undefined" || changedItem === null ? "" : `${changedItem}`}
            <span className="text-white text-base md:text-lg">{text}</span>
          </p>
          {originalLength !== trimmedLength && (
            <p className="text-yellow-50 text-base md:text-lg ">
              মূল দৈর্ঘ্য: {originalLength}, ট্রিম করা দৈর্ঘ্য: {trimmedLength}
            </p>
          )}
        </div>
        
        <div className="mt-4 md:mt-2">
          <h3 className="text-teal-500 text-lg md:text-xl text-center">Perform String Operation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {StringMethodList.map((curMethod, index) => (
              <div
                className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
                key={index}
                onClick={() => updateString(index)}
              >
                {curMethod.method}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 ">
          <h3 className="text-teal-500 text-lg md:text-xl">String Method Descriptions:</h3>
          <table className="min-w-full bg-slate-950 border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Method</th>
                <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {StringMethodList.map((methodObj, index) => (
                <tr key={index} className="hover:bg-gray-600">
                  <td className="px-4 py-2 border-b text-white border-gray-200">{methodObj.method}</td>
                  <td className="px-4 py-2 border-b text-white border-gray-200">{methodObj.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StringOperations;
