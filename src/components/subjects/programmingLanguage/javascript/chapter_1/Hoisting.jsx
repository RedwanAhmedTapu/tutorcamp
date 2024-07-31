import React from "react";

const HoistingTutorial = () => {
  // Code text for formatting
  const varKeyword = `var`;
  const letKeyword = `let`;
  const constKeyword = `const`;
  const functionKeyword = `function`;
  const hoistingExplanation = `হোস্টিং হল জাভাস্ক্রিপ্টের একটি মেকানিজম যেখানে ভেরিয়েবল এবং ফাংশন ডিক্লারেশনগুলো তাদের সংশ্লিষ্ট স্কোপের শীর্ষে স্থানান্তরিত হয় কম্পাইলেশন চলাকালীন। এর মানে আপনি কোডে ভেরিয়েবল এবং ফাংশনগুলি তাদের ডিক্লারেশনের আগে ব্যবহার করতে পারেন।`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট হোস্টিং টিউটোরিয়াল</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. হোস্টিং কী?</h2>
        <p>
          <strong>{hoistingExplanation}</strong>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. <code>var</code> হোস্টিং</h2>
        <p>
          <code>var</code> ভেরিয়েবলগুলি তাদের ডিক্লারেশন পর্যন্ত হোস্ট হয়, তবে তাদের ইনিশিয়ালাইজেশন হয় না। এই কারণে, যদি আপনি <code>var</code> ভেরিয়েবলকে ডিক্লারেশনের আগে ব্যবহার করেন, তবে এটি <code>undefined</code> রিটার্ন করবে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{varKeyword}</span> x;
              <br />
              <span className="text-green-300">{`console.log(x); // Output: undefined`}</span>
              <br />
              <span className="text-yellow-600">{varKeyword}</span> <span className="text-white font-semibold">x</span> = 10;
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. <code>let</code> এবং <code>const</code> হোস্টিং</h2>
        <p>
          <code>let</code> এবং <code>const</code> ভেরিয়েবলগুলি ব্লক স্কোপড এবং হোস্টিংয়ের সময় ডিক্লারেশন এরিয়ায় থাকে। তবে, তাদের জন্য টেম্পোরারি ডেড জোন (TDZ) থাকে, যা মানে আপনি তাদের ডিক্লারেশনের আগে ব্যবহার করতে পারবেন না।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{letKeyword}</span> x;
              <br />
              <span className="text-red-600">// ReferenceError: Cannot access 'x' before initialization</span>
              <br />
              <span className="text-yellow-600">{letKeyword}</span> <span className="text-white font-semibold">x</span> = 10;
            </code>
          </pre>
        </div>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{constKeyword}</span> x;
              <br />
              <span className="text-red-600">// ReferenceError: Cannot access 'x' before initialization</span>
              <br />
              <span className="text-yellow-600">{constKeyword}</span> <span className="text-white font-semibold">x</span> = 10;
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. ফাংশন হোস্টিং</h2>
        <p>
          ফাংশন ডিক্লারেশনগুলি সম্পূর্ণভাবে হোস্ট হয়, যা তাদের ব্যবহার করার আগে ডিক্লার করা যেতে পারে। তবে, ফাংশন এক্সপ্রেশনগুলির ক্ষেত্রে, হোস্টিং ঘটে না এবং সেগুলি তাদের ডিক্লারেশনের পরে ব্যবহার করা উচিত।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{functionKeyword}</span> myFunction() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-green-300">{`console.log("Function declared");`}</span>
              <br />
              {"}"}
              <br />
              <span className="text-green-300">{`myFunction(); // Output: Function declared`}</span>
            </code>
          </pre>
        </div>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> myFunction = function() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-green-300">{`console.log("Function expression");`}</span>
              <br />
              {"}"};
              <br />
              <span className="text-red-600">// TypeError: myFunction is not a function</span>
              <br />
              <span className="text-green-300">{`myFunction(); // Output: Function expression`}</span>
            </code>
          </pre>
        </div>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> myArrowFunction = () => {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-green-300">{`console.log("Arrow function");`}</span>
              <br />
              {"}"};
              <br />
              <span className="text-red-600">// TypeError: myArrowFunction is not a function</span>
              <br />
              <span className="text-green-300">{`myArrowFunction(); // Output: Arrow function`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          হোস্টিং জাভাস্ক্রিপ্টের একটি গুরুত্বপূর্ণ বৈশিষ্ট্য যা ভেরিয়েবল এবং ফাংশন ডিক্লারেশনগুলিকে তাদের স্কোপের শীর্ষে স্থানান্তরিত করে। এটি ভেরিয়েবল এবং ফাংশনগুলির ব্যবহার আগে থেকে উপলব্ধ করে, তবে <code>var</code>, <code>let</code>, <code>const</code>, এবং ফাংশন এক্সপ্রেশনগুলির মধ্যে পার্থক্য বোঝা গুরুত্বপূর্ণ। ফাংশন এক্সপ্রেশন এবং অ্যারো ফাংশনের ক্ষেত্রে, সেগুলি ডিক্লারেশনের আগে কল করলে ত্রুটি দেখা দেয়।
        </p>
      </section>
    </div>
  );
};

export default HoistingTutorial;
