import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const FunctionTutorial = () => {
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
      <h1 className="text-3xl font-bold mb-4">JavaScript ফাংশন </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">ফাংশনের পরিচিতি</h2>
        <p>
          ফাংশন হল JavaScript কোডের একটি ব্লক যা একটি নির্দিষ্ট কাজ সম্পাদন করার জন্য ডিজাইন করা হয়েছে। আপনি বারবার ব্যবহার করতে পারেন এবং আপনার কোডকে আরও মডুলার ও পুনঃব্যবহারযোগ্য করতে পারেন।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Function Declaration</h2>
        <p>
          একটি <span className="text-yellow-600">{func}</span> ঘোষণার মাধ্যমে ফাংশন তৈরি করা হয়। এটি হল ফাংশন নির্মাণের প্রাথমিক উপায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &nbsp;&nbsp;<span className="text-yellow-600">{func}</span>{" "}
              <span className="text-white font-semibold">greet</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisStart}
              </span>{" "}
              <span className="text-white font-semibold">name</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisEnd}
              </span>
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlystart}</span>
              <br />
              &nbsp;&nbsp; &nbsp;&nbsp;{" "}
              <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">
                {parenthesisStart}
              </span>
              <span className="text-yellow-600 font-semibold">{`"Hello, " + name`}</span>
              <span className="text-white font-semibold">
                {parenthesisEnd}
              </span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlyend}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই ফাংশনটি <code>name</code> প্যারামিটার গ্রহণ করে এবং <code>console.log</code> ব্যবহার করে একটি অভ্যর্থনা বার্তা প্রদর্শন করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              greet("Alice");
              <br />
              // Output: Hello, Alice
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Function Expression</h2>
        <p>
          একটি <span className="text-yellow-600">function expression</span> হল ফাংশন তৈরি করার আরেকটি উপায়। এটি একটি ভেরিয়েবলের সাথে ফাংশন অ্যাসাইন করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &nbsp;&nbsp;<span className="text-white font-semibold">const greet =</span>{" "}
              <span className="text-yellow-600">{func}</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisStart}
              </span>{" "}
              <span className="text-white font-semibold">name</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisEnd}
              </span>
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlystart}</span>
              <br />
              &nbsp;&nbsp; &nbsp;&nbsp;{" "}
              <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">
                {parenthesisStart}
              </span>
              <span className="text-yellow-600 font-semibold">{`"Hello, " + name`}</span>
              <span className="text-white font-semibold">
                {parenthesisEnd}
              </span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlyend}</span>
              <span className="text-white font-semibold">{semicolon}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই উদাহরণে, <code>greet</code> একটি ফাংশন হিসাবে সংজ্ঞায়িত করা হয়েছে যা <code>name</code> প্যারামিটার গ্রহণ করে এবং <code>console.log</code> ব্যবহার করে একটি অভ্যর্থনা বার্তা প্রদর্শন করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              greet("Bob");
              <br />
              // Output: Hello, Bob
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Arrow Function</h2>
        <p>
          <span className="text-yellow-600">Arrow function</span> ES6 এ প্রবর্তিত একটি নতুন ধরনের ফাংশন। এটি একটি সংক্ষিপ্ত সিনট্যাক্স ব্যবহার করে এবং <code>this</code> কীওয়ার্ডের আচরণ পরিবর্তন করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &nbsp;&nbsp;<span className="text-white font-semibold">const greet =</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisStart}
              </span>{" "}
              <span className="text-white font-semibold">name</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisEnd}
              </span> <span className="text-white font-semibold">=></span> &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlystart}</span>
              <br />
              &nbsp;&nbsp; &nbsp;&nbsp;{" "}
              <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">
                {parenthesisStart}
              </span>
              <span className="text-yellow-600 font-semibold">{`"Hello, " + name`}</span>
              <span className="text-white font-semibold">
                {parenthesisEnd}
              </span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlyend}</span>
              <span className="text-white font-semibold">{semicolon}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই উদাহরণে, <code>greet</code> একটি অ্যারো ফাংশন যা <code>name</code> প্যারামিটার গ্রহণ করে এবং <code>console.log</code> ব্যবহার করে একটি অভ্যর্থনা বার্তা প্রদর্শন করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              greet("Charlie");
              <br />
              // Output: Hello, Charlie
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Return Keyword</h2>
        <p>
          <span className="text-yellow-600">return</span> কীওয়ার্ড ফাংশন থেকে একটি মান ফেরত দিতে ব্যবহৃত হয়। এটি ফাংশনের কার্যকারিতা শেষ করে এবং ঐ মানটি ফাংশনের কলিং স্থানে ফেরত পাঠায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &nbsp;&nbsp;<span className="text-yellow-600">{func}</span>{" "}
              <span className="text-white font-semibold">add</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisStart}
              </span>{" "}
              <span className="text-white font-semibold">a, b</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisEnd}
              </span>
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlystart}</span>
              <br />
              &nbsp;&nbsp; &nbsp;&nbsp;{" "}
              <span className="text-white font-semibold">return a + b</span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlyend}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই ফাংশনটি দুটি সংখ্যা <code>a</code> এবং <code>b</code> গ্রহণ করে এবং তাদের যোগফল ফেরত দেয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const sum = add(5, 3);
              <br />
              <span className="text-green-700 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">
                {parenthesisStart}
              </span>
              sum
              <span className="text-white font-semibold">
                {parenthesisEnd}
              </span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              // Output: 8
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Parameters and Arguments</h2>
        <p>
          <span className="text-yellow-600">Parameters</span> হল ভেরিয়েবল যা ফাংশনের সংজ্ঞায় নির্দিষ্ট করা হয় এবং <span className="text-yellow-600">arguments</span> হল মান যা ফাংশন কল করার সময় পাস করা হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &nbsp;&nbsp;<span className="text-yellow-600">{func}</span>{" "}
              <span className="text-white font-semibold">multiply</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisStart}
              </span>{" "}
              <span className="text-white font-semibold">x, y</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisEnd}
              </span>
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlystart}</span>
              <br />
              &nbsp;&nbsp; &nbsp;&nbsp;{" "}
              <span className="text-white font-semibold">return x * y</span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlyend}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই ফাংশনটি দুটি প্যারামিটার <code>x</code> এবং <code>y</code> গ্রহণ করে এবং তাদের গুণফল ফেরত দেয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const product = multiply(4, 7);
              <br />
              <span className="text-green-700 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">
                {parenthesisStart}
              </span>
              product
              <span className="text-white font-semibold">
                {parenthesisEnd}
              </span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              // Output: 28
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          ফাংশনের ধারণা বুঝতে পারা প্রয়োজনীয় কারণ এটি কোড পুনঃব্যবহারযোগ্য করে তোলে এবং প্রোগ্রামিংকে আরও মডুলার করে তোলে। <span className="text-yellow-600">Function declaration</span> হল ফাংশন তৈরি করার প্রাথমিক উপায়। <span className="text-yellow-600">Function expression</span> একটি ভেরিয়েবলের মাধ্যমে ফাংশন অ্যাসাইন করে। <span className="text-yellow-600">Arrow function</span> একটি নতুন ধরনের ফাংশন যা সংক্ষিপ্ত সিনট্যাক্স এবং পরিবর্তিত <code>this</code> কীওয়ার্ডের আচরণ প্রদান করে। <span className="text-yellow-600">return</span> কীওয়ার্ড ফাংশন থেকে একটি মান ফেরত দিতে ব্যবহৃত হয়। <span className="text-yellow-600">Parameters</span> হল ভেরিয়েবল যা ফাংশনের সংজ্ঞায় নির্দিষ্ট করা হয় এবং <span className="text-yellow-600">arguments</span> হল মান যা ফাংশন কল করার সময় পাস করা হয়।
        </p>
      </section>
    </div>
  );
};

export default FunctionTutorial;
