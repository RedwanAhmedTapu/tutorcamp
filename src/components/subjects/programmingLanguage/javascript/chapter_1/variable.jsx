import React from "react";

const VariableTutorial = () => {
  // Code text for formatting
  const curlystart = `{`;
  const curlyend = `}`;
  const parenthesisStart = `(`;
  const parenthesisEnd = `)`;
  const semicolon = `;`;
  const varKeyword = `var`;
  const letKeyword = `let`;
  const constKeyword = `const`;
  const functionKeyword = `function`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript ভেরিয়েবল </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. <code>var</code></h2>
        <p>
          <code>var</code> হল JavaScript-এ ভেরিয়েবল ডিক্লেয়ার করার পুরোনো উপায়। এটি ফাংশন-স্কোপড এবং পুনঃডিক্লেয়ার করতে সক্ষম।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{varKeyword}</span> <span className="text-white font-semibold">x</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">10</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              <span className="text-yellow-600">{varKeyword}</span> <span className="text-white font-semibold">x</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">20</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              <span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({parenthesisStart}<span className="text-yellow-600">x</span>{parenthesisEnd})</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              <span className="text-white font-semibold">// Output: 20</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <code>var</code> ব্যবহার করে একাধিকবার একই ভেরিয়েবল ডিক্লেয়ার করা যেতে পারে। এটি ফাংশন স্কোপড, যা বাইরের স্কোপের বাইরে ব্যবহার করা যেতে পারে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. <code>let</code></h2>
        <p>
          <code>let</code> ES6-এ পরিচিত হয় এবং ব্লক-স্কোপড। এটি ভেরিয়েবল ডিক্লেয়ার করার জন্য আধুনিক ও নিরাপদ উপায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{letKeyword}</span> <span className="text-white font-semibold">y</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">30</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              {curlystart}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">{letKeyword}</span> <span className="text-white font-semibold">y</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">40</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp;<span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({parenthesisStart}<span className="text-yellow-600">y</span>{parenthesisEnd})</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              {curlyend}
              <br />
              <span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({parenthesisStart}<span className="text-yellow-600">y</span>{parenthesisEnd})</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              <span className="text-white font-semibold">// Output: 40</span>
              <br />
              <span className="text-white font-semibold">// Output: 30</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <code>let</code> ব্লক-স্কোপড, তাই এটি একটি ব্লকের মধ্যে পরিবর্তন করতে সক্ষম কিন্তু বাইরের স্কোপে পৌঁছাতে পারে না।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. <code>const</code></h2>
        <p>
          <code>const</code> ES6-এ পরিচিত এবং এটি ব্লক-স্কোপড। এটি একটি স্থির ভেরিয়েবল ঘোষণার জন্য ব্যবহৃত হয়, যা একবার সেট হলে পরিবর্তন করা যায় না।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span> <span className="text-white font-semibold">z</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">50</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              <span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({parenthesisStart}<span className="text-yellow-600">z</span>{parenthesisEnd})</span><span className="text-white font-semibold">{semicolon}</span>
              <br />
              <span className="text-white font-semibold">// Output: 50</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <code>const</code> দ্বারা ঘোষিত ভেরিয়েবল একটি বার সেট করার পর পরিবর্তন করা যায় না। তবে, যদি এটি একটি অবজেক্ট বা অ্যারে হয়, তার অর্ন্তগত মান পরিবর্তন করা যেতে পারে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. <code>var</code> vs <code>let</code> vs <code>const</code></h2>
        <p>
          <code>var</code>, <code>let</code>, এবং <code>const</code> তিনটি ভিন্ন ধরনের ভেরিয়েবল ঘোষণা করার কিওয়ার্ড। তাদের মধ্যে পার্থক্যগুলি হল:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-2 border-b border-gray-600">বিশেষত্ব</th>
                <th className="p-2 border-b border-gray-600">var</th>
                <th className="p-2 border-b border-gray-600">let</th>
                <th className="p-2 border-b border-gray-600">const</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-600">স্কোপ</td>
                <td className="p-2 border-b border-gray-600">ফাংশন স্কোপড</td>
                <td className="p-2 border-b border-gray-600">ব্লক স্কোপড</td>
                <td className="p-2 border-b border-gray-600">ব্লক স্কোপড</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-600">পুনঃডিক্লেয়ার করা</td>
                <td className="p-2 border-b border-gray-600">হ্যাঁ</td>
                <td className="p-2 border-b border-gray-600">না</td>
                <td className="p-2 border-b border-gray-600">না</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-600">পুনঃমান পরিবর্তন</td>
                <td className="p-2 border-b border-gray-600">হ্যাঁ</td>
                <td className="p-2 border-b border-gray-600">হ্যাঁ</td>
                <td className="p-2 border-b border-gray-600">না</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          <code>var</code> পুরোনো পদ্ধতি যা ফাংশন-স্কোপড এবং পুনঃডিক্লেয়ার করা যেতে পারে। <code>let</code> এবং <code>const</code> ES6-এ পরিচিত এবং ব্লক-স্কোপড। <code>let</code> ব্যবহার করুন যখন ভেরিয়েবলের মান পরিবর্তন হবে এবং <code>const</code> ব্যবহার করুন যখন ভেরিয়েবলের মান পরিবর্তন হবে না।
        </p>
      </section>
    </div>
  );
};

export default VariableTutorial;
