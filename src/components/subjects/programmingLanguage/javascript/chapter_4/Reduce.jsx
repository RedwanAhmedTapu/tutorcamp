import React, { useState } from "react";

const ReduceFunctionTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  const reduceExamples = [
    { method: "const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, num) => acc + num, 0);", description: "এখানে সমস্ত সংখ্যার যোগফল হিসাব করা হচ্ছে।" },
    { method: "const numbers = [1, 2, 3, 4];\nconst product = numbers.reduce((acc, num) => acc * num, 1);", description: "এখানে সমস্ত সংখ্যার গুণফল হিসাব করা হচ্ছে।" },
    { method: "const items = [{price: 10}, {price: 20}, {price: 30}];\nconst totalPrice = items.reduce((acc, item) => acc + item.price, 0);", description: "এখানে সমস্ত আইটেমের মোট মূল্য হিসাব করা হচ্ছে।" }
  ];

  const executeReduce = (index) => {
    let res;
    switch (index) {
      case 0:
        {
          const numbers = [1, 2, 3, 4];
          const sum = numbers.reduce((acc, num) => acc + num, 0);
          res = `sum = ${sum}`;
        }
        setResult(res);
        setText(`সংখ্যার যোগফল`);
        break;
      case 1:
        {
          const numbers = [1, 2, 3, 4];
          const product = numbers.reduce((acc, num) => acc * num, 1);
          res = `product = ${product}`;
        }
        setResult(res);
        setText(`সংখ্যার গুণফল`);
        break;
      case 2:
        {
          const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
          const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
          res = `totalPrice = ${totalPrice}`;
        }
        setResult(res);
        setText(`মোট মূল্য`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Reduce Function:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Reduce Operation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          {reduceExamples.map((curMethod, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-16 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeReduce(index)}
            >
              {curMethod.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 ">
        <h3 className="text-teal-500 text-lg md:text-xl">Reduce Method Descriptions:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Method</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {reduceExamples.map((methodObj, index) => (
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

export default ReduceFunctionTutorial;
