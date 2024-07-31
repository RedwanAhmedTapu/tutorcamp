import React, { useState } from "react";

const DestructuringTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  const DestructuringList = [
    { method: "const [a, b] = [1, 2]", description: "একটি অ্যারে থেকে মান বের করে আনতে" },
    { method: "const { x, y } = { x: 10, y: 20 }", description: "একটি অবজেক্ট থেকে মান বের করে আনতে" },
    { method: "const [first, ...rest] = [1, 2, 3, 4]", description: "বাকি মানগুলি একটি অ্যারেতে সংগ্রহ করতে" },
    { method: "const { a, b = 5 } = { a: 1 }", description: "ডিফল্ট মান সহ অবজেক্ট ডিকন্সট্রাকশন" },
    { method: "const [a, , c] = [1, 2, 3]", description: "একটি অ্যারে থেকে নির্দিষ্ট ইন্ডেক্সের মান বের করতে" },
    { method: "const { a: { b } } = { a: { b: 2 } }", description: "নেস্টেড অবজেক্ট থেকে মান বের করতে" },
    { method: "const [ {a}, [b] ] = [ {a: 1}, [2] ]", description: "মিশ্রিত অ্যারে থেকে মান বের করতে" },
    { method: "const { a, b: { c, d } } = { a: 1, b: { c: 2, d: 3 } }", description: "অবজেক্টের মধ্যে অবজেক্ট থেকে মান বের করতে" },
  ];

  const executeDestructuring = (index) => {
    let res;
    switch (index) {
      case 0:
        {
          const [a, b] = [1, 2];
          res = `a = ${a}, b = ${b}`;
        }
        setResult(res);
        setText(`একটি অ্যারে থেকে মান বের করা হয়েছে: ${res}`);
        break;
      case 1:
        {
          const { x, y } = { x: 10, y: 20 };
          res = `x = ${x}, y = ${y}`;
        }
        setResult(res);
        setText(`একটি অবজেক্ট থেকে মান বের করা হয়েছে: ${res}`);
        break;
      case 2:
        {
          const [first, ...rest] = [1, 2, 3, 4];
          res = `first = ${first}, rest = [${rest.join(", ")}]`;
        }
        setResult(res);
        setText(`বাকি মানগুলি সংগ্রহ করা হয়েছে: ${res}`);
        break;
      case 3:
        {
          const { a, b = 5 } = { a: 1 };
          res = `a = ${a}, b = ${b}`;
        }
        setResult(res);
        setText(`ডিফল্ট মান সহ অবজেক্ট ডিকন্সট্রাকশন: ${res}`);
        break;
      case 4:
        {
          const [a, , c] = [1, 2, 3];
          res = `a = ${a}, c = ${c}`;
        }
        setResult(res);
        setText(`নির্দিষ্ট ইন্ডেক্সের মান বের করা হয়েছে: ${res}`);
        break;
      case 5:
        {
          const { a: { b } } = { a: { b: 2 } };
          res = `b = ${b}`;
        }
        setResult(res);
        setText(`নেস্টেড অবজেক্ট থেকে মান বের করা হয়েছে: ${res}`);
        break;
      case 6:
        {
          const [ {a}, [b] ] = [ {a: 1}, [2] ];
          res = `a = ${a}, b = ${b}`;
        }
        setResult(res);
        setText(`মিশ্রিত অ্যারে থেকে মান বের করা হয়েছে: ${res}`);
        break;
      case 7:
        {
          const { a, b: { c, d } } = { a: 1, b: { c: 2, d: 3 } };
          res = `a = ${a}, c = ${c}, d = ${d}`;
        }
        setResult(res);
        setText(`অবজেক্টের মধ্যে অবজেক্ট থেকে মান বের করা হয়েছে: ${res}`);
        break;
      default:
        setText("অপরিচিত অপারেশন");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Destructuring:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>
      
      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Execute Destructuring Operation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          {DestructuringList.map((curMethod, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => executeDestructuring(index)}
            >
              {curMethod.method}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 ">
        <h3 className="text-teal-500 text-lg md:text-xl">Destructuring Method Descriptions:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Method</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {DestructuringList.map((methodObj, index) => (
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

export default DestructuringTutorial;
