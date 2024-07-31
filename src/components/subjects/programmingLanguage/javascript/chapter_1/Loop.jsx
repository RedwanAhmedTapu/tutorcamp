import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Loop = () => {
  // Code text for formatting
  const curlystart = `{`;
  const curlyend = `}`;
  const parenthesisStart = `(`;
  const parenthesisEnd = `)`;
  const forloop = `for`;
  const whileloop = `while`;
  const dowhileloop = `do`;
  const semicolon = `;`;
  const cnsl = `console`;
  const log = `log`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript লুপ টিউটোরিয়াল</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">লুপের পরিচিতি</h2>
        <p>
          প্রোগ্রামিং এ অনেক সময় আমাদের পুনরাবৃত্তি কার্য সম্পাদন করতে হয়। লুপ আমাদের এই পুনরাবৃত্তি প্রক্রিয়া স্বয়ংক্রিয় করতে সাহায্য করে। আসুন JavaScript এ বিভিন্ন ধরনের লুপগুলি অনুসন্ধান করি।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. For লুপ</h2>
        <p>
          <span className="text-yellow-600">{forloop}</span> লুপটি ব্যবহার করা হয় যখন আপনি আগে থেকেই জানেন কতবার একটি স্টেটমেন্ট বা কোড ব্লক চালানো হবে। এটি তিনটি অংশ নিয়ে গঠিত: ইনিশিয়ালাইজেশন, কন্ডিশন, এবং ইনক্রিমেন্ট/ডিক্রিমেন্ট।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &nbsp;&nbsp;<span className="text-yellow-600">{forloop}</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisStart}
              </span>{" "}
              <span className="text-white font-semibold">let i = 0</span>{" "}
              <span className="text-yellow-400 font-semibold">{semicolon}</span>{" "}
              <span className="text-white font-semibold">i &lt; 10</span>{" "}
              <span className="text-yellow-400 font-semibold">{semicolon}</span>{" "}
              <span className="text-white font-semibold">i++</span>{" "}
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
              <span className="text-yellow-600 font-semibold">{`"Iteration " + i`}</span>
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
          এই লুপটি <strong>10 বার</strong> চলবে, <code>i = 0</code> থেকে <code>i &lt; 10</code> পর্যন্ত, প্রতিবার <code>i</code> 1 করে বাড়বে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              Iteration 0
              Iteration 1
              Iteration 2
              Iteration 3
              Iteration 4
              Iteration 5
              Iteration 6
              Iteration 7
              Iteration 8
              Iteration 9
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. While লুপ</h2>
        <p>
          <span className="text-yellow-600">{whileloop}</span> লুপটি ব্যবহার করা হয় যখন আপনি একটি কন্ডিশন যতক্ষণ সত্য থাকবে ততক্ষণ একটি কোড ব্লক পুনরাবৃত্তি করতে চান। কন্ডিশন লুপ চালানোর আগে পরীক্ষা করা হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &nbsp;&nbsp;<span className="text-yellow-600">{whileloop}</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisStart}
              </span>{" "}
              <span className="text-white font-semibold">i &lt; 10</span>{" "}
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
              <span className="text-yellow-600 font-semibold">{`"Iteration " + i`}</span>
              <span className="text-white font-semibold">
                {parenthesisEnd}
              </span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp; &nbsp;&nbsp;{" "}
              <span className="text-white font-semibold">i++</span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlyend}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই লুপটি <strong>10 বার</strong> চলবে, <code>i = 0</code> থেকে <code>i &lt; 10</code> পর্যন্ত, প্রতিবার <code>i</code> 1 করে বাড়বে। যদি কন্ডিশন প্রথম থেকেই মিথ্যা হয়, তাহলে লুপটি চলবে না।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              Iteration 0
              Iteration 1
              Iteration 2
              Iteration 3
              Iteration 4
              Iteration 5
              Iteration 6
              Iteration 7
              Iteration 8
              Iteration 9
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Do...While লুপ</h2>
        <p>
          <span className="text-yellow-600">{dowhileloop}</span>...<span className="text-yellow-600">{whileloop}</span> লুপটি <span className="text-yellow-600">{whileloop}</span> লুপের মতো কিন্তু কন্ডিশন যাচাই করার আগে কোড ব্লকটি প্রথমে চালানো হয়। এর মানে কোড ব্লকটি কমপক্ষে একবার চলবেই, এমনকি কন্ডিশন যদি মিথ্যা হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &nbsp;&nbsp;<span className="text-yellow-600">{dowhileloop}</span>{" "}
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
              <span className="text-yellow-600 font-semibold">{`"Iteration " + i`}</span>
              <span className="text-white font-semibold">
                {parenthesisEnd}
              </span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp; &nbsp;&nbsp;{" "}
              <span className="text-white font-semibold">i++</span>
              <span className="text-white font-semibold">{semicolon}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-white font-semibold">{curlyend}</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">{whileloop}</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisStart}
              </span>{" "}
              <span className="text-white font-semibold">i &lt; 10</span>{" "}
              <span className="text-green-300 font-semibold">
                {parenthesisEnd}
              </span>
              <span className="text-white font-semibold">{semicolon}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই লুপটি <strong>10 বার</strong> চলবে, <code>i = 0</code> থেকে <code>i &lt; 10</code> পর্যন্ত, প্রতিবার <code>i</code> 1 করে বাড়বে। প্রথমে কোড ব্লকটি একবার চলবে, তারপর কন্ডিশন পরীক্ষা হবে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              Iteration 0
              Iteration 1
              Iteration 2
              Iteration 3
              Iteration 4
              Iteration 5
              Iteration 6
              Iteration 7
              Iteration 8
              Iteration 9
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          লুপের ধারণা বুঝতে পারা প্রয়োজনীয় কারণ এটি পুনরাবৃত্তি কাজগুলো দক্ষভাবে সম্পাদন করতে সহায়ক। <span className="text-yellow-600">{forloop}</span> লুপটি যখন পুনরাবৃত্তির সংখ্যা জানা থাকে তখন ব্যবহার করা হয়। <span className="text-yellow-600">{whileloop}</span> লুপটি এমন পরিস্থিতির জন্য উপযুক্ত যেখানে প্রতিটি পুনরাবৃত্তির আগে কন্ডিশন পরীক্ষা করা হয়। <span className="text-yellow-600">{dowhileloop}</span> লুপটি কমপক্ষে একবার চলতে নিশ্চিত করে, এমনকি যদি কন্ডিশন প্রথমে মিথ্যা হয়।
        </p>
      </section>
    </div>
  );
};

export default Loop;
