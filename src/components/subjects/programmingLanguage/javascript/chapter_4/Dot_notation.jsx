import React, { useState } from "react";

const DotNotationTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  const dotNotationExamples = [
    { method: "obj.property", description: "অবজেক্টের প্রপার্টি অ্যাক্সেস করতে" },
    { method: "obj.property = value", description: "অবজেক্টের প্রপার্টিতে মান সেট করতে" },
  ];

  const executeDotNotation = (index) => {
    let res;
    const obj = { name: "Alice", age: 25, job: "Engineer" };
    switch (index) {
      case 0:
        {
          const name = obj.name;
          res = `obj.name = ${name}`;
        }
        setResult(res);
        setText(`অবজেক্টের প্রপার্টি অ্যাক্সেস করা হয়েছে: ${res}`);
        break;
      case 1:
        {
          obj.age = 26;
          res = `obj.age = ${obj.age}`;
        }
        setResult(res);
        setText(`অবজেক্টের প্রপার্টিতে মান সেট করা হয়েছে: ${res}`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Dot Notation:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Dot Notation Operation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          {dotNotationExamples.map((curMethod, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeDotNotation(index)}
            >
              {curMethod.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-teal-500 text-lg md:text-xl">Dot Notation Method Descriptions:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Method</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {dotNotationExamples.map((methodObj, index) => (
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

export default DotNotationTutorial;
