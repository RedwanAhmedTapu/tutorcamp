import React, { useState } from "react";

const MapFunctionTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  const mapExamples = [
    { method: "const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);", description: "এখানে প্রতিটি উপাদানকে দ্বিগুণ করা হচ্ছে।" },
    { method: "const names = ['Alice', 'Bob', 'Charlie'];\nconst uppercased = names.map(name => name.toUpperCase());", description: "এখানে প্রতিটি নামকে বড় অক্ষরে পরিণত করা হচ্ছে।" },
    { method: "const numbers = [1, 2, 3];\nconst squares = numbers.map(num => ({ number: num, square: num * num }));", description: "এখানে প্রতিটি সংখ্যার সাথে তার বর্গফল যোগ করা হচ্ছে।" }
  ];

  const executeMapFunction = (index) => {
    let res;
    switch (index) {
      case 0:
        {
          const numbers = [1, 2, 3];
          const doubled = numbers.map(num => num * 2);
          res = `doubled = [${doubled.join(", ")}]`;
        }
        setResult(res);
        setText(`প্রতিটি উপাদানকে দ্বিগুণ করা হয়েছে`);
        break;
      case 1:
        {
          const names = ['Alice', 'Bob', 'Charlie'];
          const uppercased = names.map(name => name.toUpperCase());
          res = `uppercased = [${uppercased.join(", ")}]`;
        }
        setResult(res);
        setText(`প্রতিটি নামকে বড় অক্ষরে পরিণত করা হয়েছে`);
        break;
      case 2:
        {
          const numbers = [1, 2, 3];
          const squares = numbers.map(num => ({ number: num, square: num * num }));
          res = `squares = ${JSON.stringify(squares)}`;
        }
        setResult(res);
        setText(`প্রতিটি সংখ্যার সাথে তার বর্গফল যোগ করা হয়েছে`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Map Function:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>
      
      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Map Function Example</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
          {mapExamples.map((example, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-16 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeMapFunction(index)}
            >
              {example.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-teal-500 text-lg md:text-xl">Map Function Examples:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Example</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {mapExamples.map((example, index) => (
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

export default MapFunctionTutorial;
