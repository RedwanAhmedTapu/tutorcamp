import React from "react";

const ConditionalStatementsTutorial = () => {
  // Code text for formatting
  const ifKeyword = `if`;
  const elseKeyword = `else`;
  const elseIfKeyword = `else if`;
  const switchKeyword = `switch`;
  const caseKeyword = `case`;
  const defaultKeyword = `default`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট কন্ডিশনাল স্টেটমেন্ট টিউটোরিয়াল</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. <code>if</code> স্টেটমেন্ট</h2>
        <p>
          <code>if</code> স্টেটমেন্ট একটি নির্দিষ্ট শর্ত পূরণ হলে কোডের একটি অংশ এক্সিকিউট করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{ifKeyword}</span><span className="text-white font-semibold"> (x &gt; 10) </span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"{"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("x is greater than 10");`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"}"}</span>
              <br />
              <span className="text-white font-semibold">// Output: x is greater than 10 (if x is indeed greater than 10)</span>
            </code>
          </pre>
        </div>
        <p>
          <code>if</code> স্টেটমেন্ট সাধারণত একটি একক শর্ত পরীক্ষা করার জন্য ব্যবহৃত হয়, যখন আপনি জানেন যে শর্তটি সত্য হলে একটি নির্দিষ্ট কোড ব্লক এক্সিকিউট হবে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. <code>if...else</code> স্টেটমেন্ট</h2>
        <p>
          <code>if...else</code> স্টেটমেন্ট দুটি ভিন্ন শর্ত অনুযায়ী কোড এক্সিকিউট করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{ifKeyword}</span><span className="text-white font-semibold"> (x &gt; 10) </span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"{"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("x is greater than 10");`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"}"}</span>
              <br />
              <span className="text-yellow-600">{elseKeyword}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"{"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("x is 10 or less");`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"}"}</span>
              <br />
              <span className="text-white font-semibold">// Output: x is 10 or less (if x is not greater than 10)</span>
            </code>
          </pre>
        </div>
        <p>
          <code>if...else</code> স্টেটমেন্ট ব্যবহার করা হয় যখন দুটি সম্ভাব্য ফলাফল থাকে—একটি শর্ত সত্য হলে একটি কোড ব্লক এবং মিথ্যা হলে অন্য একটি কোড ব্লক এক্সিকিউট হয়।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. <code>if...else if...else</code> স্টেটমেন্ট</h2>
        <p>
          <code>if...else if...else</code> স্টেটমেন্ট একাধিক শর্ত অনুযায়ী কোড এক্সিকিউট করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{ifKeyword}</span><span className="text-white font-semibold"> (x &gt; 10) </span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"{"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("x is greater than 10");`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"}"}</span>
              <br />
              <span className="text-yellow-600">{elseIfKeyword}</span><span className="text-white font-semibold"> (x === 10) </span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"{"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("x is exactly 10");`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"}"}</span>
              <br />
              <span className="text-yellow-600">{elseKeyword}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"{"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("x is less than 10");`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"}"}</span>
              <br />
              <span className="text-white font-semibold">// Output: The message corresponding to the value of x</span>
            </code>
          </pre>
        </div>
        <p>
          <code>if...else if...else</code> স্টেটমেন্ট ব্যবহার করা হয় যখন একাধিক শর্ত যাচাই করতে হয় এবং প্রত্যেক শর্তের জন্য আলাদা কোড ব্লক এক্সিকিউট করতে হয়। এটি একটি শর্ত মিথ্যা হলে পরবর্তী শর্ত পরীক্ষা করতে সাহায্য করে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. <code>switch</code> স্টেটমেন্ট</h2>
        <p>
          <code>switch</code> স্টেটমেন্ট একটি ভেরিয়েবলের বিভিন্ন মানের জন্য বিভিন্ন কোড এক্সিকিউট করে। এটি বিশেষ করে ব্যবহৃত হয় যখন আপনি একাধিক মানের মধ্যে তুলনা করতে চান।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{switchKeyword}</span><span className="text-white font-semibold"> (day) </span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"{"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">{caseKeyword}</span><span className="text-white font-semibold"> 0:</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("Sunday");`}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">{"break;"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">{caseKeyword}</span><span className="text-white font-semibold"> 1:</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("Monday");`}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">{defaultKeyword}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">{`console.log("Another day");`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white">{"}"}</span>
              <br />
              <span className="text-white font-semibold">// Output: The day of the week based on the value of day</span>
            </code>
          </pre>
        </div>
        <p>
          <code>switch</code> স্টেটমেন্ট ব্যবহার করা হয় যখন আপনার একটি ভেরিয়েবলের বিভিন্ন মানের জন্য আলাদা কোড এক্সিকিউট করার প্রয়োজন হয়। এটি অনেকগুলি <code>if...else if</code> স্টেটমেন্টের পরিবর্তে ব্যবহৃত হয় এবং কোডের পাঠযোগ্যতা বৃদ্ধি করে। একটি <code>switch</code> স্টেটমেন্টে <code>break</code> স্টেটমেন্ট ব্যবহার করা প্রয়োজন যাতে একবার একটি <code>case</code> পূরণ হলে, পরবর্তী <code>case</code> এ প্রবাহ না ঘটে।
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <div>
          কন্ডিশনাল স্টেটমেন্টস যেমন <code>if</code>, <code>if...else</code>, <code>if...else if...else</code>, এবং <code>switch</code> স্টেটমেন্টগুলি বিভিন্ন শর্ত অনুযায়ী কোডের বিভিন্ন অংশ এক্সিকিউট করার জন্য ব্যবহৃত হয়। 
          <ul className="list-disc list-inside ml-6">
            <li><code>if</code>: একক শর্তের জন্য</li>
            <li><code>if...else</code>: দুইটি শর্তের জন্য</li>
            <li><code>if...else if...else</code>: একাধিক শর্তের জন্য</li>
            <li><code>switch</code>: একটি ভেরিয়েবলের বিভিন্ন মানের জন্য</li>
          </ul>
          এগুলি কোডের লজিক সংজ্ঞায়িত করতে সাহায্য করে এবং প্রোগ্রামের প্রবাহ নিয়ন্ত্রণ করে।
        </div>
      </section>
    </div>
  );
};

export default ConditionalStatementsTutorial;
