import React, { useState } from "react";

const FilterFunctionTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  const filterExamples = [
    { method: "const numbers = [1, 2, 3, 4];\nconst evens = numbers.filter(num => num % 2 === 0);", description: "এখানে জোড় সংখ্যা ফিল্টার করা হচ্ছে।" },
    { method: "const names = ['Alice', 'Bob', 'Charlie'];\nconst longNames = names.filter(name => name.length > 3);", description: "এখানে বড় নামগুলি ফিল্টার করা হচ্ছে।" },
    { method: "const items = [{id: 1}, {id: 2}, {id: 3}];\nconst filteredItems = items.filter(item => item.id > 1);", description: "এখানে আইডি ১ এর উপরে থাকা আইটেমগুলি ফিল্টার করা হচ্ছে।" }
  ];

  const executeFilterFunction = (index) => {
    let res;
    switch (index) {
      case 0:
        {
          const numbers = [1, 2, 3, 4];
          const evens = numbers.filter(num => num % 2 === 0);
          res = `evens = [${evens.join(", ")}]`;
        }
        setResult(res);
        setText(`জোড় সংখ্যা ফিল্টার করা হয়েছে`);
        break;
      case 1:
        {
          const names = ['Alice', 'Bob', 'Charlie'];
          const longNames = names.filter(name => name.length > 3);
          res = `longNames = [${longNames.join(", ")}]`;
        }
        setResult(res);
        setText(`বড় নামগুলি ফিল্টার করা হয়েছে`);
        break;
      case 2:
        {
          const items = [{id: 1}, {id: 2}, {id: 3}];
          const filteredItems = items.filter(item => item.id > 1);
          res = `filteredItems = ${JSON.stringify(filteredItems)}`;
        }
        setResult(res);
        setText(`আইডি ১ এর উপরে থাকা আইটেমগুলি ফিল্টার করা হয়েছে`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Filter Function:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>
      
      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Filter Function Example</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
          {filterExamples.map((example, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeFilterFunction(index)}
            >
              {example.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-teal-500 text-lg md:text-xl">Filter Function Examples:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Example</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {filterExamples.map((example, index) => (
              <tr key={index} className="hover:bg-gray-600">
                <td className="px-4 py-2 border-b text-white border-gray-200">
                  <pre><code>{example.method}</code></pre>
                </td>
                <td className="px-4 py-2 border-b text-white border-gray-200">{example.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilterFunctionTutorial;
