import React from "react";

const RestParametersTutorial = () => {
    const age=24;
  // Code text for formatting
  const basicRestParameter = `
    function sum(...numbers) {
      return numbers.reduce((acc, num) => acc + num, 0);
    }
    
    console.log(sum(1, 2, 3)); // Output: 6
    console.log(sum(10, 20, 30, 40)); // Output: 100
  `;

  const restInObject = `
    function printInfo(name, ...info) {
      console.log(name);
      console.log(info);
    }
    
    printInfo('Alice', '25 years old', 'Engineer', 'Loves coding');
    // Output: Alice
    // ['25 years old', 'Engineer', 'Loves coding']
  `;

  const restInArray = `
    function extractElements(...elements) {
      const [first, ...rest] = elements;
      console.log(first); // Output: 1
      console.log(rest);  // Output: [2, 3, 4]
    }
    
    extractElements(1, 2, 3, 4);
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট রেস্ট প্যারামিটার </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. রেস্ট প্যারামিটার কী?</h2>
        <p>
          রেস্ট প্যারামিটার হল একটি ফিচার যা একটি ফাংশনের মধ্যে ভ্যারিয়েবল সংখ্যা আর্গুমেন্ট গ্রহণ করতে সহায়ক। এটি একাধিক আর্গুমেন্টকে একটি অ্যারে হিসেবে সংগ্রহ করে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. বেসিক রেস্ট প্যারামিটার ব্যবহার</h2>
        <p>
          রেস্ট প্যারামিটার ব্যবহার করে, আপনি একটি ফাংশনে অনির্ধারিত সংখ্যক আর্গুমেন্ট গ্রহণ করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> sum(...numbers) {'{'}
              <br />
                <span className="text-yellow-600">return</span> numbers.<span className="text-yellow-600">reduce</span>((acc, num) => acc + num, 0);
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">console.log</span>(sum(1, 2, 3)); <span className="text-gray-500">// Output: 6</span>
              <br />
              <span className="text-yellow-600">console.log</span>(sum(10, 20, 30, 40)); <span className="text-gray-500">// Output: 100</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. রেস্ট প্যারামিটার ব্যবহার করে অবজেক্ট</h2>
        <p>
          আপনি অবজেক্টের সঙ্গে রেস্ট প্যারামিটার ব্যবহার করে অতিরিক্ত তথ্য গ্রহণ করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> printInfo(name, ...info) {'{'}
              <br />
                <span className="text-yellow-600">console.log</span>(name);
                <br />
                <span className="text-yellow-600">console.log</span>(info);
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">printInfo</span>(<span className="text-yellow-500">'Alice'</span>, <span className="text-yellow-500">'25 years old'</span>, <span className="text-yellow-500">'Engineer'</span>, <span className="text-yellow-500">'Loves coding'</span>);
              <br />
              <span className="text-gray-500">// Output: Alice</span>
              <br />
              <span className="text-gray-500">// ['25 years old', 'Engineer', 'Loves coding']</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. রেস্ট প্যারামিটার ব্যবহার করে অ্যারে</h2>
        <p>
          আপনি অ্যারের সঙ্গে রেস্ট প্যারামিটার ব্যবহার করে একটি অ্যারের প্রথম উপাদান এবং বাকি উপাদানগুলো আলাদা করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> extractElements(...elements) {'{'}
              <br />
                <span className="text-yellow-600">const</span> [first, ...rest] = elements;
                <br />
                <span className="text-yellow-600">console.log</span>(first); <span className="text-gray-500">// Output: 1</span>
                <br />
                <span className="text-yellow-600">console.log</span>(rest);  <span className="text-gray-500">// Output: [2, 3, 4]</span>
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">extractElements</span>(1, 2, 3, 4);
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          রেস্ট প্যারামিটার জাভাস্ক্রিপ্টের একটি শক্তিশালী বৈশিষ্ট্য যা একটি ফাংশনে ভ্যারিয়েবল সংখ্যা আর্গুমেন্ট গ্রহণ করতে সহায়ক। এটি কোডকে আরও নমনীয় এবং রিইউজেবল করতে সাহায্য করে।
        </p>
      </section>
    </div>
  );
};

export default RestParametersTutorial;
