import React from "react";

const ZIndexAndStackingContext = () => {
  const sections = [
    {
      title: "1. Z-Index কি?",
      content:
        "`z-index` একটি CSS প্রপার্টি যা উপাদানগুলোর layering বা overlapping নির্দেশ করে। উপাদানটি অন্য উপাদানগুলোর উপরে বা নিচে কিভাবে সাজানো হবে তা নির্ধারণ করতে `z-index` ব্যবহার করা হয়।",
      code: `.box {
        position: relative;
        z-index: 10; /* উপাদানটি অন্যদের উপরে রাখে */
      }`,
    },
    {
      title: "2. Stacking Context কি?",
      content:
        "Stacking context হল একটি থ্রিডি ধারণা যা নির্ধারণ করে কোন উপাদান কোনটির উপরে থাকবে। নতুন stacking context তৈরি হয় যখন কোন উপাদানের `z-index`, `opacity`, `transform`, ইত্যাদি ব্যবহার করা হয়।",
      code: `.container {
        position: relative;
        z-index: 1;
      }
      .child {
        position: absolute;
        z-index: 2; /* এই উপাদানটি প্যারেন্টের উপরে থাকবে */
      }`,
    },
    {
      title: "3. Z-Index Values",
      content:
        "`z-index` এর মান ইতিবাচক, নেতিবাচক বা শূন্য হতে পারে। বড় `z-index` মানের উপাদানটি অন্য উপাদানগুলোর উপরে প্রদর্শিত হবে।",
      code: `.box-1 {
        position: relative;
        z-index: 1; /* নিচে থাকবে */
      }
      .box-2 {
        position: relative;
        z-index: 100; /* উপরে থাকবে */
      }`,
    },
  ];

  return (
    <div className="p-6 bg-gray-800 text-white">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="mb-4">{section.content}</p>
          {section.code && (
            <pre className="bg-slate-900 text-amber-300 p-4 rounded-md shadow-md mb-4">
              {section.code}
            </pre>
          )}
        </section>
      ))}

      {/* Demo of z-index and stacking context */}
      <div className="relative h-[300px] w-full mt-6">
        <div className="absolute top-0 left-0 w-40 h-40 bg-red-500 z-10 shadow-lg text-center flex items-center justify-center">
          z-index: 10
        </div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 z-20 shadow-lg text-center flex items-center justify-center">
          z-index: 20
        </div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-500 z-30 shadow-lg text-center flex items-center justify-center">
          z-index: 30
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        Stacking Context উদাহরণ
      </h3>

      {/* Stacking context demo */}
      <div className="relative bg-yellow-100 p-6 rounded-md shadow-lg">
        <div className="relative z-10 bg-red-500 w-32 h-32 p-2 shadow-lg text-white">
          Parent z-index: 10
        </div>
        <div className="absolute top-4 left-16 bg-blue-500 w-32 h-32 p-2 shadow-lg text-white">
          Child z-index: Auto (stacked with parent)
        </div>
        <div className="absolute top-12 left-32 bg-green-500 w-32 h-32 p-2 shadow-lg text-white z-50">
          Child z-index: 50 (Above parent)
        </div>
      </div>
    </div>
  );
};

export default ZIndexAndStackingContext;
