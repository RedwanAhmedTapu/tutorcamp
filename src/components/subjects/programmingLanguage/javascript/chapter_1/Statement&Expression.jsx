import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const StatementExpressionTutorial = () => {
  // Code text for formatting
  const curlystart = `{`;
  const curlyend = `}`;
  const parenthesisStart = `(`;
  const parenthesisEnd = `)`;
  const semicolon = `;`;
  const cnsl = `console`;
  const log = `log`;
  const func = `function`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript স্টেটমেন্ট এবং এক্সপ্রেশন </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">স্টেটমেন্ট কি?</h2>
        <p>
          স্টেটমেন্ট হল একটি নির্দেশ যা JavaScript ইঞ্জিনকে একটি নির্দিষ্ট কাজ করতে বলে। স্টেটমেন্টগুলি সাধারণত কোডের বিভিন্ন অংশে কার্যকর হয় এবং সাধারণত সেমিকোলনের সাহায্যে শেষ হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> name <span className="text-white font-semibold">=</span> <span className="text-yellow-600">"Alice"</span>{semicolon}
              <br />
              <span className="text-yellow-600">let</span> age <span className="text-white font-semibold">=</span> <span className="text-yellow-600">30</span>{semicolon}
              <br />
              <span className="text-yellow-600">if</span> <span className="text-green-300 font-semibold">({parenthesisStart}age &gt; 18{parenthesisEnd})</span> <span className="text-white font-semibold">{curlystart}</span>
              <br />
              &nbsp;&nbsp; <span className="text-violet-300 font-semibold">{cnsl}</span><span className="text-white font-semibold">{"."}</span><span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">({parenthesisStart}"Adult"{parenthesisEnd})</span>{semicolon}
              <br />
              &nbsp;&nbsp; <span className="text-white font-semibold">{curlyend}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          উপরের উদাহরণে, <code>const name = "Alice";</code> এবং <code>let age = 30;</code> স্টেটমেন্ট যা ভেরিয়েবল ঘোষণা করে এবং মান অ্যাসাইন করে। <code>if</code> স্টেটমেন্ট একটি শর্ত যাচাই করে এবং শর্ত পূরণ হলে একটি এক্সপ্রেশন (বা স্টেটমেন্ট) কার্যকর করে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">এক্সপ্রেশন কি?</h2>
        <p>
          এক্সপ্রেশন হল এমন একটি কোডের অংশ যা একটি মান উৎপন্ন করে। এক্সপ্রেশনগুলি একটি স্টেটমেন্টের অংশ হতে পারে এবং সেগুলি সাধারণত একটি মান প্রদান করে যা ব্যবহার করা যেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> result <span className="text-white font-semibold">=</span> <span className="text-yellow-600">5</span> <span className="text-white font-semibold">+</span> <span className="text-yellow-600">3</span>{semicolon}
              <br />
              <span className="text-yellow-600">const</span> message <span className="text-white font-semibold">=</span> <span className="text-yellow-600">"Hello, "</span> <span className="text-white font-semibold">+</span> <span className="text-yellow-600">"World"</span>{semicolon}
              <br />
              <span className="text-violet-300 font-semibold">{cnsl}</span><span className="text-white font-semibold">{"."}</span><span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">({parenthesisStart}result{parenthesisEnd})</span>{semicolon}
              <br />
              <span className="text-violet-300 font-semibold">{cnsl}</span><span className="text-white font-semibold">{"."}</span><span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">({parenthesisStart}message{parenthesisEnd})</span>{semicolon}
            </code>
          </pre>
        </div>
        <p className="mt-2">
          উপরের উদাহরণে, <code>5 + 3</code> এবং <code>"Hello, " + "World"</code> এক্সপ্রেশন যা মান উৎপন্ন করে। <code>5 + 3</code> এর ফলস্বরূপ <code>8</code> এবং <code>"Hello, " + "World"</code> এর ফলস্বরূপ <code>"Hello, World"</code>।
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">স্টেটমেন্ট এবং এক্সপ্রেশনের মধ্যে পার্থক্য</h2>
        <p>
          স্টেটমেন্টগুলি সাধারণত একটি কার্য সম্পাদন করে এবং প্রায়শই কোডের একটি ব্লক তৈরি করে, যেখানে এক্সপ্রেশনগুলি একটি মান উৎপন্ন করে। এক্সপ্রেশনগুলি স্টেটমেন্টের অংশ হতে পারে, কিন্তু সব স্টেটমেন্টই এক্সপ্রেশন নয়।
        </p>
        <p>
          উদাহরণস্বরূপ:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> x <span className="text-white font-semibold">=</span> <span className="text-yellow-600">10</span>{semicolon}
              <br />
              <span className="text-yellow-600">const</span> y <span className="text-white font-semibold">=</span> <span className="text-yellow-600">20</span>{semicolon}
              <br />
              <span className="text-yellow-600">const</span> sum <span className="text-white font-semibold">=</span> <span className="text-white font-semibold">x</span> <span className="text-white font-semibold">+</span> <span className="text-white font-semibold">y</span>{semicolon}
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>const x = 10;</code> এবং <code>const y = 20;</code> হল স্টেটমেন্ট যা ভেরিয়েবল ঘোষণা করে। <code>x + y</code> একটি এক্সপ্রেশন যা মান <code>30</code> উৎপন্ন করে এবং এটি <code>sum</code> ভেরিয়েবলে অ্যাসাইন করা হয়েছে।
        </p>
      </section>
    </div>
  );
};

export default StatementExpressionTutorial;
