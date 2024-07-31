import React, { useState } from "react";

const MapTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  const MapMethodList = [
    { method: "new Map()", description: "নতুন একটি Map তৈরি করতে" },
    { method: "map.set(key, value)", description: "একটি কী ও মান যোগ করতে" },
    { method: "map.get(key)", description: "নির্দিষ্ট কী এর মান পেতে" },
    { method: "map.has(key)", description: "নির্দিষ্ট কী আছে কিনা পরীক্ষা করতে" },
    { method: "map.delete(key)", description: "নির্দিষ্ট কী ও মান মুছে ফেলতে" },
    { method: "map.size", description: "Map এর মোট আইটেম সংখ্যা পেতে" },
    { method: "map.clear()", description: "Map এর সব আইটেম মুছে ফেলতে" },
  ];

  const executeMapOperation = (index) => {
    let res;
    const map = new Map();
    map.set("name", "Alice");
    map.set("age", 30);
    map.set("country", "Wonderland");

    switch (index) {
      case 0:
        {
          const newMap = new Map();
          res = `নতুন একটি Map তৈরি করা হয়েছে: ${JSON.stringify([...newMap])}`;
        }
        setResult(res);
        setText(`নতুন একটি Map তৈরি করা হয়েছে: ${res}`);
        break;
      case 1:
        {
          map.set("job", "Engineer");
          res = `map.set("job", "Engineer") যোগ করা হয়েছে: ${JSON.stringify([...map])}`;
        }
        setResult(res);
        setText(`কী ও মান যোগ করা হয়েছে: ${res}`);
        break;
      case 2:
        {
          res = `map.get("name") = ${map.get("name")}`;
        }
        setResult(res);
        setText(`নির্দিষ্ট কী এর মান: ${res}`);
        break;
      case 3:
        {
          res = `map.has("age") = ${map.has("age")}`;
        }
        setResult(res);
        setText(`নির্দিষ্ট কী আছে কিনা: ${res}`);
        break;
      case 4:
        {
          map.delete("country");
          res = `map.delete("country") করা হয়েছে: ${JSON.stringify([...map])}`;
        }
        setResult(res);
        setText(`নির্দিষ্ট কী ও মান মুছে ফেলা হয়েছে: ${res}`);
        break;
      case 5:
        {
          res = `map.size = ${map.size}`;
        }
        setResult(res);
        setText(`Map এর মোট আইটেম সংখ্যা: ${res}`);
        break;
      case 6:
        {
          map.clear();
          res = `map.clear() করা হয়েছে: ${JSON.stringify([...map])}`;
        }
        setResult(res);
        setText(`Map এর সব আইটেম মুছে ফেলা হয়েছে: ${res}`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Map Operations:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>
      
      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Map Operation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          {MapMethodList.map((curMethod, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeMapOperation(index)}
            >
              {curMethod.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 ">
        <h3 className="text-teal-500 text-lg md:text-xl">Map Method Descriptions:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Method</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {MapMethodList.map((methodObj, index) => (
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

export default MapTutorial;
