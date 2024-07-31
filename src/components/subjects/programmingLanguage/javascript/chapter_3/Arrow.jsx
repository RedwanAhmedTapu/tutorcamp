import React, { useState } from "react";

const ArrowFunctionTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("Result will be shown here");

  const ArrowFunctionList = [
    { method: `() => 5 + 3`, description: "A simple arrow function returning the sum of 5 and 3" },
    { method: `(x) => x * x`, description: "An arrow function that squares its parameter" },
    { method: `(a, b) => a + b`, description: "An arrow function that adds two parameters" },
    { method: `() => "Hello, World!"`, description: "An arrow function that returns a greeting" },
    { method: `arr.map(x => x * 2)`, description: "An arrow function used in map to double each element in an array" },
  ];

  const executeArrowFunction = (index) => {
    let res;
    switch (index) {
      case 0:
        res = (() => 5 + 3)();
        setResult(res);
        setText(`The result of () => 5 + 3 is: ${res}`);
        break;
      case 1:
        res = ((x) => x * x)(4);
        setResult(res);
        setText(`The result of (x) => x * x with x=4 is: ${res}`);
        break;
      case 2:
        res = ((a, b) => a + b)(2, 3);
        setResult(res);
        setText(`The result of (a, b) => a + b with a=2 and b=3 is: ${res}`);
        break;
      case 3:
        res = (() => "Hello, World!")();
        setResult(res);
        setText(`The result of () => "Hello, World!" is: "${res}"`);
        break;
      case 4:
        const arr = [1, 2, 3, 4];
        res = arr.map(x => x * 2);
        setResult(res);
        setText(`The result of arr.map(x => x * 2) with arr=[1, 2, 3, 4] is: [${res.join(', ')}]`);
        break;
      default:
        setText("Unknown operation");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Arrow Functions:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>
      
      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Arrow Function</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          {ArrowFunctionList.map((curMethod, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeArrowFunction(index)}
            >
              {curMethod.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 ">
        <h3 className="text-teal-500 text-lg md:text-xl">Arrow Function Descriptions:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Function</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {ArrowFunctionList.map((methodObj, index) => (
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

export default ArrowFunctionTutorial;
