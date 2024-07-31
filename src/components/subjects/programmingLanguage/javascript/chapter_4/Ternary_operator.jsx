import React from "react";

const TernaryOperatorTutorial = () => {
  // Code text for formatting
  const ternary = `?`;
  const colon = `:`;
  const letKeyword = `let`;
  const constKeyword = `const`;
  const cnsl = `console`;
  const log = `log`;
  const curlystart = `{`;
  const curlyend = `}`;
  const semicolon = `;`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript টার্নারি অপারেটর </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">টার্নারি অপারেটর কি?</h2>
        <p>
          টার্নারি অপারেটর হল একটি সংক্ষিপ্ত শর্তমূলক স্টেটমেন্ট যা একটি শর্ত সত্য বা মিথ্যা হওয়ার উপর ভিত্তি করে একটি মান ফেরত দেয়। এটি <code>{ternary}</code> এবং <code>{colon}</code> দিয়ে গঠিত।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">টার্নারি অপারেটরের সিনট্যাক্স</h2>
        <p>
          টার্নারি অপারেটরের সিনট্যাক্স নিম্নরূপ:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-white font-semibold">condition</span> <span className="text-yellow-600">{ternary}</span> <span className="text-white font-semibold">valueIfTrue</span> <span className="text-yellow-600">{colon}</span> <span className="text-white font-semibold">valueIfFalse</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">উদাহরণ</h2>
        <p>
          নিচের উদাহরণটি টার্নারি অপারেটর ব্যবহার করে একটি শর্ত পরীক্ষা করে এবং মান ফেরত দেয়:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span> age = 18{semicolon}
              <br />
              <span className="text-yellow-600">{constKeyword}</span> canVote = (age {`>=`} 18) {ternary} <span className="text-yellow-600">{`"Yes"`}</span> {colon} <span className="text-yellow-600">{`"No"`}</span>{semicolon}
              <br />
              <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">{curlystart}canVote{curlyend}</span>{semicolon}
              <br />
              <span className="text-white">{`// Output: "Yes"`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">নেস্টেড টার্নারি অপারেটর</h2>
        <p>
          আপনি টার্নারি অপারেটরকে নেস্টেড করেও ব্যবহার করতে পারেন, তবে এটি কোডটি জটিল করতে পারে। নিচের উদাহরণটি দেখুন:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span> score = 85{semicolon}
              <br />
              <span className="text-yellow-600">{constKeyword}</span> grade = (score {`>=`} 90) {ternary} <span className="text-yellow-600">{`"A"`}</span> {colon} (score {`>=`} 80) {ternary} <span className="text-yellow-600">{`"B"`}</span> {colon} (score {`>=`} 70) {ternary} <span className="text-yellow-600">{`"C"`}</span> {colon} <span className="text-yellow-600">{`"D"`}</span>{semicolon}
              <br />
              <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">{curlystart}grade{curlyend}</span>{semicolon}
              <br />
              <span className="text-white">{`// Output: "B"`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          টার্নারি অপারেটর একটি শক্তিশালী টুল যা আপনাকে কোডটি সংক্ষিপ্ত ও পরিষ্কার রাখতে সাহায্য করে। এটি শর্তমূলক স্টেটমেন্টকে সহজ ও সুন্দর করে তোলে। তবে, অতিরিক্ত নেস্টেড টার্নারি অপারেটর ব্যবহার থেকে বিরত থাকুন কারণ এটি কোডটি জটিল করতে পারে।
        </p>
      </section>
    </div>
  );
};

export default TernaryOperatorTutorial;
