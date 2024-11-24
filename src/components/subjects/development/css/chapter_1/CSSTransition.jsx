import React from "react";

const CSSTransitions = () => {
    const sections = [
        {
          title: "1. CSS Transition কি?",
          content:
            "CSS Transition হল এমন একটি পদ্ধতি যা স্টাইল বা প্রপার্টি পরিবর্তনের সময়কাল নির্ধারণ করে, যাতে পরিবর্তনটি স্মুথ বা মসৃণভাবে ঘটে। এটি উপাদানগুলোকে আরও ইন্টারেক্টিভ করে তোলে।",
          code: `.element {
        transition: all 0.3s ease;
      }
      
      .element:hover {
        transform: scale(1.1);
        background-color: #f00;
      }`,
        },
        {
          title: "2. Transition এর Properties",
          content: `
            - **transition-property**: কোন প্রপার্টিগুলোতে পরিবর্তন ঘটবে (যেমন: \`transform\`, \`background-color\`)।
            - **transition-duration**: কত সময় ধরে পরিবর্তন হবে (যেমন: 0.3s, 1s)।
            - **transition-timing-function**: পরিবর্তনটি কিভাবে ঘটবে (যেমন: \`ease\`, \`linear\`, \`ease-in-out\`)।
            - **transition-delay**: পরিবর্তনটি শুরু হওয়ার আগে কতক্ষণ অপেক্ষা করবে।`,
          code: `.element {
        transition: background-color 0.5s ease-in-out, transform 0.3s ease;
      }`,
        },
        {
          title: "3. Hover Effect",
          content: "উপাদানের উপর মাউস রেখে দিলে Transition প্রভাব দেখানো হয়।",
          code: `.element:hover {
        background-color: #ff6347;
        transform: translateY(-10px);
      }`,
        },
        {
          title: "4. Transition shorthand",
          content:
            "transition shorthand এর মাধ্যমে আপনি একবারে একাধিক প্রপার্টি নির্ধারণ করতে পারেন।",
          code: `.element {
        transition: all 0.3s ease-in-out;
      }`,
        },
      ];
      

  return (
    <div className="p-6 bg-gray-900 text-white">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="mb-4">{section.content}</p>
          {section.code && (
            <pre className="bg-slate-800 text-pink-300 p-4 rounded-md shadow-md mb-4">
              {section.code}
            </pre>
          )}
        </section>
      ))}

      <h3 className="text-2xl font-semibold mb-4">প্রাকটিক্যাল উদাহরণ</h3>

      {/* Transition Demos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="example p-6 rounded-lg bg-gray-800">
          <h4 className="text-lg mb-4">Hover to Scale & Color Change</h4>
          <div className="transition-box w-24 h-24 bg-blue-500 rounded-lg"></div>
        </div>

        <div className="example p-6 rounded-lg bg-gray-800">
          <h4 className="text-lg mb-4">Hover to Expand</h4>
          <div className="expand-box w-24 h-24 bg-green-500 rounded-lg"></div>
        </div>

        <div className="example p-6 rounded-lg bg-gray-800">
          <h4 className="text-lg mb-4">Hover to Change Background</h4>
          <div className="bg-change-box w-24 h-24 bg-red-500 rounded-lg"></div>
        </div>
      </div>

      <style jsx>{`
        /* Basic Transition */
        .transition-box {
          transition: all 0.3s ease-in-out;
        }
        .transition-box:hover {
          transform: scale(1.2);
          background-color: #ff6347;
        }

        /* Expand Box */
        .expand-box {
          transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        }
        .expand-box:hover {
          width: 100px;
          height: 100px;
        }

        /* Background Change */
        .bg-change-box {
          transition: background-color 0.5s ease;
        }
        .bg-change-box:hover {
          background-color: #4caf50;
        }
      `}</style>
    </div>
  );
};

export default CSSTransitions;
