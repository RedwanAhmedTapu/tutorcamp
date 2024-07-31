import React from "react";

const DRYPrincipleTutorial = () => {
  // Code text for formatting
  const func = `function`;
  const curlystart = `{`;
  const curlyend = `}`;
  const parenthesisStart = `(`;
  const parenthesisEnd = `)`;
  const semicolon = `;`;
  const cnsl = `console`;
  const log = `log`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">DRY (Don't Repeat Yourself) প্রিন্সিপল </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">DRY প্রিন্সিপল কি?</h2>
        <p>
          DRY (Don't Repeat Yourself) প্রিন্সিপল হল একটি প্রোগ্রামিং ধারণা যা বলে যে কোডে একই জিনিস বারবার লেখা উচিত নয়। এর পরিবর্তে, একটি কাজ একবারই করা উচিত এবং তারপরে সেই কোড পুনরায় ব্যবহার করতে হবে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. DRY প্রিন্সিপল এর উদাহরণ</h2>
        <p>
          ভাবুন যে আমাদের একটি গ্রীটিং বার্তা প্রদর্শনের কোড আছে যেটি আমরা বিভিন্ন জায়গায় ব্যবহার করছি। যদি আমরা একই কোড বারবার লিখি, তাহলে এটি ম্যানেজমেন্ট ও রক্ষণাবেক্ষণ কঠিন করে তোলে। DRY প্রিন্সিপল অনুসরণ করে আমরা একটি ফাংশন তৈরি করতে পারি যা এই কাজটি একবার করে দেয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{func}</span> <span className="text-white font-semibold">greet</span> <span className="text-green-300 font-semibold">{parenthesisStart}name{parenthesisEnd}</span>
              <span className="text-white font-semibold">{curlystart}</span>
              <br />
              &nbsp;&nbsp; <span className="text-violet-300 font-semibold">{cnsl}</span><span className="text-white font-semibold">{"."}</span><span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">({parenthesisStart}<span className="text-yellow-600">"Hello, " + name</span>{parenthesisEnd})</span>{semicolon}
              <br />
              &nbsp;&nbsp; <span className="text-white font-semibold">{curlyend}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই <code>greet</code> ফাংশনটি একটি নাম প্যারামিটার গ্রহণ করে এবং একটি স্বাগত বার্তা প্রদর্শন করে। আমরা এই ফাংশনটি একবার তৈরি করেছি এবং বিভিন্ন স্থানে ব্যবহার করতে পারি, কোড পুনরাবৃত্তি এড়ানো হয়েছে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              greet("Alice");
              <br />
              greet("Bob");
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. DRY প্রিন্সিপল না মানলে কি হয়?</h2>
        <p>
          যদি DRY প্রিন্সিপল অনুসরণ না করা হয়, তবে কোড পুনরাবৃত্তি হতে পারে, যা কোডের রক্ষণাবেক্ষণ ও পরিবর্তনকে কঠিন করে তোলে। উদাহরণস্বরূপ, যদি আমরা একটি কাজ একাধিক স্থানে কোড করি, তাহলে যে কোনো পরিবর্তন করতে হলে আমাদের প্রতিটি স্থানে পরিবর্তন করতে হবে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-violet-300 font-semibold">{cnsl}</span><span className="text-white font-semibold">{"."}</span><span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">({parenthesisStart}<span className="text-yellow-600">"Hello, Alice"</span>{parenthesisEnd})</span>{semicolon}
              <br />
              <span className="text-violet-300 font-semibold">{cnsl}</span><span className="text-white font-semibold">{"."}</span><span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">({parenthesisStart}<span className="text-yellow-600">"Hello, Bob"</span>{parenthesisEnd})</span>{semicolon}
            </code>
          </pre>
        </div>
        <p className="mt-2">
          উপরের কোডে, বারবার একই কোড লেখা হয়েছে, যা পরিবর্তন করার সময় কষ্টকর হতে পারে। DRY প্রিন্সিপল অনুসরণ করে এই কোডটি একটি ফাংশনে পুনর্ব্যবহারযোগ্য করে তোলা হয়েছে।
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          DRY (Don't Repeat Yourself) প্রিন্সিপল হল একটি গুরুত্বপূর্ণ প্রোগ্রামিং ধারণা যা কোড পুনরাবৃত্তি এড়ানোর মাধ্যমে কোডকে আরও মডুলার এবং রক্ষণাবেক্ষণযোগ্য করে তোলে। একটি কাজ একবার করলেই যথেষ্ট এবং তারপর সেই কোড পুনরায় ব্যবহার করা উচিত।
        </p>
      </section>
    </div>
  );
};

export default DRYPrincipleTutorial;
