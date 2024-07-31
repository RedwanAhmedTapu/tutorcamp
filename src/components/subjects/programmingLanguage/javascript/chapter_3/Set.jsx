import React, { useState } from "react";

const SetTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  const SetMethodList = [
    { method: "new Set()", description: "নতুন একটি Set তৈরি করতে" },
    { method: "set.add(value)", description: "একটি মান যোগ করতে" },
    { method: "set.has(value)", description: "একটি মান আছে কিনা পরীক্ষা করতে" },
    { method: "set.delete(value)", description: "একটি মান মুছে ফেলতে" },
    { method: "set.size", description: "Set এর মোট আইটেম সংখ্যা পেতে" },
    { method: "set.clear()", description: "Set এর সব আইটেম মুছে ফেলতে" },
  ];

  const executeSetOperation = (index) => {
    let res;
    const set = new Set(["Apple", "Banana", "Mango"]);

    switch (index) {
      case 0:
        {
          const newSet = new Set();
          res = `নতুন একটি Set তৈরি করা হয়েছে: ${JSON.stringify([...newSet])}`;
        }
        setResult(res);
        setText(`নতুন একটি Set তৈরি করা হয়েছে: ${res}`);
        break;
      case 1:
        {
          set.add("Orange");
          res = `set.add("Orange") যোগ করা হয়েছে: ${JSON.stringify([...set])}`;
        }
        setResult(res);
        setText(`মান যোগ করা হয়েছে: ${res}`);
        break;
      case 2:
        {
          res = `set.has("Banana") = ${set.has("Banana")}`;
        }
        setResult(res);
        setText(`মান আছে কিনা: ${res}`);
        break;
      case 3:
        {
          set.delete("Mango");
          res = `set.delete("Mango") করা হয়েছে: ${JSON.stringify([...set])}`;
        }
        setResult(res);
        setText(`মান মুছে ফেলা হয়েছে: ${res}`);
        break;
      case 4:
        {
          res = `set.size = ${set.size}`;
        }
        setResult(res);
        setText(`Set এর মোট আইটেম সংখ্যা: ${res}`);
        break;
      case 5:
        {
          set.clear();
          res = `set.clear() করা হয়েছে: ${JSON.stringify([...set])}`;
        }
        setResult(res);
        setText(`Set এর সব আইটেম মুছে ফেলা হয়েছে: ${res}`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Set Operations:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>
      
      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Set Operation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          {SetMethodList.map((curMethod, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeSetOperation(index)}
            >
              {curMethod.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 ">
        <h3 className="text-teal-500 text-lg md:text-xl">Set Method Descriptions:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Method</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {SetMethodList.map((methodObj, index) => (
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

export default SetTutorial;
