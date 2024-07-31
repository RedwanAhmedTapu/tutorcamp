import React, { useState } from "react";

const ObjectLoopTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  const objectLoopExamples = [
    { method: "for (const key in obj)", description: "অবজেক্টের সব কী এর উপর লুপ করতে" },
    { method: "Object.keys(obj)", description: "অবজেক্টের সব কী এর একটি অ্যারে পেতে" },
    { method: "Object.values(obj)", description: "অবজেক্টের সব ভ্যালুর একটি অ্যারে পেতে" },
    { method: "Object.entries(obj)", description: "অবজেক্টের সব কী-ভ্যালু জোড়ার একটি অ্যারে পেতে" }
  ];

  const executeObjectLoop = (index) => {
    let res;
    const obj = { a: 1, b: 2, c: 3 };
    switch (index) {
      case 0:
        {
          let keys = [];
          for (const key in obj) {
            keys.push(key);
          }
          res = `keys = [${keys.join(", ")}]`;
        }
        setResult(res);
        setText(`অবজেক্টের সব কী: ${res}`);
        break;
      case 1:
        {
          const keys = Object.keys(obj);
          res = `keys = [${keys.join(", ")}]`;
        }
        setResult(res);
        setText(`অবজেক্টের সব কী এর অ্যারে: ${res}`);
        break;
      case 2:
        {
          const values = Object.values(obj);
          res = `values = [${values.join(", ")}]`;
        }
        setResult(res);
        setText(`অবজেক্টের সব ভ্যালুর অ্যারে: ${res}`);
        break;
      case 3:
        {
          const entries = Object.entries(obj);
          res = `entries = [${entries.map(entry => `{${entry[0]}: ${entry[1]}}`).join(", ")}]`;
        }
        setResult(res);
        setText(`অবজেক্টের সব কী-ভ্যালু জোড়া: ${res}`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Object Looping:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Object Loop Operation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          {objectLoopExamples.map((curMethod, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeObjectLoop(index)}
            >
              {curMethod.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-teal-500 text-lg md:text-xl">Object Loop Method Descriptions:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Method</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {objectLoopExamples.map((methodObj, index) => (
              <tr key={index} className="hover:bg-gray-600">
                <td className="px-4 py-2 border-b text-white border-gray-200">{methodObj.method}</td>
                <td className="px-4 py-2 border-b text-white border-gray-200">{methodObj.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ObjectLoopTutorial;
