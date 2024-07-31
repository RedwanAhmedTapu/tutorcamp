import React, { useState } from "react";

const ES6EnvironmentTutorial = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");

  // ES6 Features
  const es6Features = [
    { feature: "let and const", description: "ব্লক-স্কোপ ভেরিয়েবল ঘোষণা করতে ব্যবহৃত হয়" },
    { feature: "Arrow Functions", description: "অ্যাক্সপ্রেশন ফাংশন তৈরি করার একটি সংক্ষিপ্ত সিনট্যাক্স" },
    { feature: "Template Literals", description: "স্ট্রিংগুলিকে মাল্টি-লাইন এবং এক্সপ্রেশন সহ ব্যবহৃত হয়" },
    { feature: "Destructuring", description: "অবজেক্ট এবং অ্যারে থেকে মান বের করার সহজ পদ্ধতি" },
    { feature: "Default Parameters", description: "ফাংশনের জন্য ডিফল্ট মান প্রদান করা" },
    { feature: "Rest Parameters", description: "একাধিক আর্গুমেন্ট একত্রিত করে একটি অ্যারে তৈরি করা" },
    { feature: "Spread Operator", description: "অ্যারে বা অবজেক্টের উপাদানগুলিকে বিস্তৃত করে" },
    { feature: "Classes", description: "অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের জন্য ক্লাস তৈরি করা" },
    { feature: "Modules", description: "কোডের ভাগ ভাগ করে পৃথক ফাইলের মধ্যে ব্যবহৃত হয়" },
  ];

  const explainFeature = (feature) => {
    switch (feature) {
      case "let and const":
        setResult("let এবং const: ব্লক-স্কোপ ভেরিয়েবল ঘোষণা করতে ব্যবহৃত হয়। let পুনরায় বরাদ্দযোগ্য কিন্তু const একবার সেট হলে অপরিবর্তিত থাকে।");
        setText("let এবং const এর ব্যবহারে ভেরিয়েবলগুলি ব্লক-স্কোপে থাকে, যার ফলে প্রোগ্রামিংয়ে আরও সঠিকতা আসে।");
        break;
      case "Arrow Functions":
        setResult("Arrow Functions: ফাংশন তৈরি করার একটি সংক্ষিপ্ত সিনট্যাক্স যা লেক্সিক্যাল স্কোপিং ব্যবহার করে।");
        setText("Arrow Functions অজ্ঞাত পরিভাষা দ্বারা ফাংশনের সংজ্ঞায়ন সহজ করে এবং 'this' এর আচরণ সংরক্ষণ করে।");
        break;
      case "Template Literals":
        setResult("Template Literals: স্ট্রিংগুলিকে মাল্টি-লাইন এবং এক্সপ্রেশন সহ ব্যবহার করতে সক্ষম করে।");
        setText("Template Literals ${} দিয়ে ভেরিয়েবল ইন্টারপোলেশন এবং মাল্টি-লাইন স্ট্রিং তৈরি করতে ব্যবহৃত হয়।");
        break;
      case "Destructuring":
        setResult("Destructuring: অবজেক্ট এবং অ্যারে থেকে মান বের করার সহজ পদ্ধতি।");
        setText("Destructuring সিনট্যাক্স ব্যবহার করে, আমরা অবজেক্ট এবং অ্যারে থেকে সরাসরি মান বের করতে পারি।");
        break;
      case "Default Parameters":
        setResult("Default Parameters: ফাংশনের জন্য ডিফল্ট মান প্রদান করা।");
        setText("Default Parameters ব্যবহার করে, ফাংশন কলের সময় কিছু আর্গুমেন্ট সরবরাহ না করা হলে একটি ডিফল্ট মান ব্যবহার করা হয়।");
        break;
      case "Rest Parameters":
        setResult("Rest Parameters: একাধিক আর্গুমেন্ট একত্রিত করে একটি অ্যারে তৈরি করা।");
        setText("Rest Parameters ব্যবহার করে, আমরা একটি ফাংশনে অসীম সংখ্যক আর্গুমেন্ট গ্রহণ করতে পারি এবং তাদের একটি অ্যারেতে একত্রিত করতে পারি।");
        break;
      case "Spread Operator":
        setResult("Spread Operator: অ্যারে বা অবজেক্টের উপাদানগুলিকে বিস্তৃত করে।");
        setText("Spread Operator (...) অ্যারে এবং অবজেক্টের উপাদানগুলিকে বিস্তৃত করতে ব্যবহৃত হয়।");
        break;
      case "Classes":
        setResult("Classes: অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের জন্য ক্লাস তৈরি করা।");
        setText("Classes ES6 এ নতুন সিনট্যাক্সে অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের জন্য ব্যবহৃত হয়।");
        break;
      case "Modules":
        setResult("Modules: কোডের ভাগ ভাগ করে পৃথক ফাইলের মধ্যে ব্যবহৃত হয়।");
        setText("Modules কোডকে পৃথক ফাইলের মধ্যে ভাগ করে এবং এক ফাইল থেকে অন্য ফাইলে ফাংশন, অবজেক্ট, বা ক্লাস আমদানি ও রপ্তানি করার অনুমতি দেয়।");
        break;
      default:
        setResult(null);
        setText("অপরিচিত বৈশিষ্ট্য");
        break;
    }
  };

  return (
    <div className="flex flex-col h-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">ES6 Features:</div>
      </div>

      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
        <p className="text-red-500 text-base md:text-lg">
          {result === "undefined" || result === null ? "" : `${result}`}
          <span className="text-white text-base md:text-lg">{text}</span>
        </p>
      </div>
      
      <div className="mt-4 md:mt-2">
        <h3 className="text-teal-500 text-lg md:text-xl text-center">Learn About ES6 Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
          {es6Features.map((featureObj, index) => (
            <div
              className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
              key={index}
              onClick={() => explainFeature(featureObj.feature)}
            >
              {featureObj.feature}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 ">
        <h3 className="text-teal-500 text-lg md:text-xl">ES6 Features Explanation:</h3>
        <table className="min-w-full bg-slate-950 border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Feature</th>
              <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {es6Features.map((featureObj, index) => (
              <tr key={index} className="hover:bg-gray-600">
                <td className="px-4 py-2 border-b text-white border-gray-200">{featureObj.feature}</td>
                <td className="px-4 py-2 border-b text-white border-gray-200">{featureObj.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ES6EnvironmentTutorial;
