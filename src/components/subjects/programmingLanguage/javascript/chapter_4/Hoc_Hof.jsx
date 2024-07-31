import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const HigherOrderTutorial = () => {
  // Code text for formatting
  const curlystart = `{`;
  const curlyend = `}`;
  const arrow = `=>`;
  const constKeyword = `const`;
  const semicolon = `;`;
  const returnKeyword = `return`;
  const functionKeyword = `function`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">উচ্চ-স্তরের কম্পোনেন্ট এবং ফাংশন </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">উচ্চ-স্তরের কম্পোনেন্ট (HOC)</h2>
        <p>
          উচ্চ-স্তরের কম্পোনেন্ট (HOC) হল একটি ফাংশন যা একটি কম্পোনেন্টকে গ্রহণ করে এবং একটি নতুন কম্পোনেন্ট রিটার্ন করে। এটি কোড পুনরায় ব্যবহারযোগ্যতা বাড়ানোর জন্য ব্যবহৃত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span>{" "}
              <span className="text-white">withExtraInfo</span> = (
              <span className="text-cyan-500">WrappedComponent</span>
              ) {arrow} ({curlystart}
              <br />
              &nbsp;&nbsp;{returnKeyword} (props) {arrow} (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"<div>"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<WrappedComponent {...props} extraInfo='some extra info' />"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}
              <br />
              &nbsp;&nbsp;);
              <br />
              {curlyend}{semicolon}
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই HOC <code>WrappedComponent</code> কে একটি নতুন <code>extraInfo</code> প্রপ দিয়ে মোড়ানো হয়েছে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">উচ্চ-স্তরের ফাংশন (HOF)</h2>
        <p>
          উচ্চ-স্তরের ফাংশন (HOF) হল এমন ফাংশন যা একটি ফাংশন গ্রহণ করে বা একটি ফাংশন রিটার্ন করে। এটি ফাংশনাল প্রোগ্রামিংয়ের একটি মূল ধারণা।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span>{" "}
              <span className="text-white">multiplyBy</span> = (
              <span className="text-cyan-500">multiplier</span>
              ) {arrow} ({curlystart}
              <br />
              &nbsp;&nbsp;{returnKeyword} (
              <span className="text-cyan-500">value</span>
              ) {arrow} <span className="text-cyan-500">value</span> *{" "}
              <span className="text-cyan-500">multiplier</span>
              {semicolon}
              <br />
              {curlyend}{semicolon}
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই HOF <code>multiplyBy</code> একটি <code>multiplier</code> গ্রহণ করে এবং একটি নতুন ফাংশন রিটার্ন করে যা একটি মানকে <code>multiplier</code> দ্বারা গুণ করে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">উচ্চ-স্তরের ফাংশন উদাহরণ: Array.map</h2>
        <p>
          <code>Array.map</code> একটি উচ্চ-স্তরের ফাংশনের উদাহরণ যা একটি ফাংশন গ্রহণ করে এবং একটি নতুন অ্যারে রিটার্ন করে যেখানে প্রতিটি উপাদানকে প্রদত্ত ফাংশন প্রয়োগ করা হয়েছে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-white">const numbers = [1, 2, 3, 4, 5]</span>{semicolon}
              <br />
              <span className="text-white">const doubled = numbers.map(num {arrow} num * 2)</span>{semicolon}
              <br />
              <span className="text-white">{`// doubled = [2, 4, 6, 8, 10]`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          উচ্চ-স্তরের কম্পোনেন্ট এবং ফাংশন প্রোগ্রামিং এবং রিয়াক্ট ডেভেলপমেন্টে কোড পুনরায় ব্যবহারযোগ্যতা এবং মডুলারিটি বাড়ানোর জন্য ব্যবহৃত হয়। উচ্চ-স্তরের কম্পোনেন্ট একটি কম্পোনেন্টকে মোড়ানো করে এবং উচ্চ-স্তরের ফাংশন একটি ফাংশন গ্রহণ করে বা রিটার্ন করে।
        </p>
      </section>
    </div>
  );
};

export default HigherOrderTutorial;
