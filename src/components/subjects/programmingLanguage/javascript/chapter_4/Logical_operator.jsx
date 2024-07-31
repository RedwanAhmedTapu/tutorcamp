import React from "react";

const LogicalOperatorsTutorial = () => {
  // Code text for formatting
  const curlystart = `{`;
  const curlyend = `}`;
  const andOperator = `&&`;
  const orOperator = `||`;
  const notOperator = `!`;
  const equal = `==`;
  const strictEqual = `===`;
  const greaterThan = `>`;
  const lessThan = `<`;
  const semicolon = `;`;
  const constKeyword = `const`;
  const letKeyword = `let`;
  const cnsl = `console`;
  const log = `log`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript লজিক্যাল অপারেটর </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">লজিক্যাল অপারেটর কি?</h2>
        <p>
          লজিক্যাল অপারেটর ব্যবহার করে আপনি একাধিক শর্তের ভিত্তিতে সিদ্ধান্ত নিতে পারেন। JavaScript এ প্রধানত তিনটি লজিক্যাল অপারেটর রয়েছে: AND (<code>{andOperator}</code>), OR (<code>{orOperator}</code>), এবং NOT (<code>{notOperator}</code>).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. AND অপারেটর</h2>
        <p>
          AND অপারেটর (<code>{andOperator}</code>) তখনই সত্য হয় যখন উভয় শর্তই সত্য হয়। 
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span> 
              <span className="text-white">x = 5</span>{semicolon}
              <br />
              <span className="text-yellow-600">{constKeyword}</span> 
              <span className="text-white">y = 10</span>{semicolon}
              <br />
              <span className="text-yellow-600">{constKeyword}</span> 
              <span className="text-white">result = (x {lessThan} 10 {andOperator} y {greaterThan} 5)</span>{semicolon}
              <br />
              <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">{curlystart}result{curlyend}</span>{semicolon}
              <br />
              <span className="text-white">{`// Output: true`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. OR অপারেটর</h2>
        <p>
          OR অপারেটর (<code>{orOperator}</code>) তখনই সত্য হয় যখন কমপক্ষে একটি শর্ত সত্য হয়। 
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span> 
              <span className="text-white">a = 5</span>{semicolon}
              <br />
              <span className="text-yellow-600">{constKeyword}</span> 
              <span className="text-white">b = 10</span>{semicolon}
              <br />
              <span className="text-yellow-600">{constKeyword}</span> 
              <span className="text-white">result = (a {greaterThan} 10 {orOperator} b {greaterThan} 5)</span>{semicolon}
              <br />
              <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">{curlystart}result{curlyend}</span>{semicolon}
              <br />
              <span className="text-white">{`// Output: true`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. NOT অপারেটর</h2>
        <p>
          NOT অপারেটর (<code>{notOperator}</code>) একটি শর্তকে বিপরীত করে। যদি শর্ত সত্য হয়, এটি মিথ্যা রিটার্ন করে এবং যদি শর্ত মিথ্যা হয়, এটি সত্য রিটার্ন করে। 
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span> 
              <span className="text-white">c = true</span>{semicolon}
              <br />
              <span className="text-yellow-600">{constKeyword}</span> 
              <span className="text-white">result = {!notOperator}c</span>{semicolon}
              <br />
              <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">{curlystart}result{curlyend}</span>{semicolon}
              <br />
              <span className="text-white">{`// Output: false`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          লজিক্যাল অপারেটরগুলি প্রোগ্রামিংয়ে সিদ্ধান্ত নেওয়ার জন্য খুবই গুরুত্বপূর্ণ। AND অপারেটর তখনই সত্য হয় যখন উভয় শর্তই সত্য হয়, OR অপারেটর তখনই সত্য হয় যখন কমপক্ষে একটি শর্ত সত্য হয়, এবং NOT অপারেটর একটি শর্তকে বিপরীত করে।
        </p>
      </section>
    </div>
  );
};

export default LogicalOperatorsTutorial;
