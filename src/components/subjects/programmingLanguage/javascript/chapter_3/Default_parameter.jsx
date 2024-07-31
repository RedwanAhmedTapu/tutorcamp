import React from "react";

const DefaultParametersTutorial = () => {
    const age=24;

  // Code text for formatting
  const basicDefaultParameter = `
    function greet(name = "Guest") {
      return \`Hello, \${name}!\`;
    }
    
    console.log(greet()); // Output: Hello, Guest!
    console.log(greet("Alice")); // Output: Hello, Alice!
  `;

  const defaultParameterInObject = `
    function createProfile(name, age = 30) {
      return \`Name: \${name}, Age: \${age}\`;
    }
    
    console.log(createProfile("Bob")); // Output: Name: Bob, Age: 30
    console.log(createProfile("Charlie", 25)); // Output: Name: Charlie, Age: 25
  `;

  const defaultParameterWithExpression = `
    function calculatePrice(price, discount = price * 0.1) {
      return price - discount;
    }
    
    console.log(calculatePrice(100)); // Output: 90
    console.log(calculatePrice(100, 20)); // Output: 80
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট ডিফল্ট প্যারামিটার </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. ডিফল্ট প্যারামিটার কী?</h2>
        <p>
          ডিফল্ট প্যারামিটার হল একটি বৈশিষ্ট্য যা একটি ফাংশনের প্যারামিটারদের জন্য ডিফল্ট মান সেট করতে সাহায্য করে। যখন কোন আর্গুমেন্ট প্রদান করা হয় না, তখন এই ডিফল্ট মান ব্যবহৃত হয়।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. বেসিক ডিফল্ট প্যারামিটার ব্যবহার</h2>
        <p>
          ডিফল্ট প্যারামিটার ব্যবহার করে, আপনি ফাংশনে একটি প্যারামিটার সরবরাহ না করা হলে ডিফল্ট মান প্রদান করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> greet(name = <span className="text-yellow-500">"Guest"</span>) {'{'}
              <br />
                <span className="text-yellow-600">return</span> \`Hello, \${name}!\`;
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">console.log</span>(greet()); <span className="text-gray-500">// Output: Hello, Guest!</span>
              <br />
              <span className="text-yellow-600">console.log</span>(greet(<span className="text-yellow-500">"Alice"</span>)); <span className="text-gray-500">// Output: Hello, Alice!</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. অবজেক্টের সাথে ডিফল্ট প্যারামিটার</h2>
        <p>
          ডিফল্ট প্যারামিটার ব্যবহার করে আপনি অবজেক্টের সাথে অতিরিক্ত বা বিকল্প মান সরবরাহ করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> createProfile(name, age = <span className="text-yellow-500">30</span>) {'{'}
              <br />
                <span className="text-yellow-600">return</span> \`Name: \${name}, Age: \${age}\`;
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">console.log</span>(createProfile(<span className="text-yellow-500">"Bob"</span>)); <span className="text-gray-500">// Output: Name: Bob, Age: 30</span>
              <br />
              <span className="text-yellow-600">console.log</span>(createProfile(<span className="text-yellow-500">"Charlie"</span>, <span className="text-yellow-500">25</span>)); <span className="text-gray-500">// Output: Name: Charlie, Age: 25</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. এক্সপ্রেশন সহ ডিফল্ট প্যারামিটার</h2>
        <p>
          আপনি ডিফল্ট প্যারামিটার হিসাবে অন্যান্য এক্সপ্রেশনও ব্যবহার করতে পারেন, যেমন গণনা করা মান।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> calculatePrice(price, discount = price * 0.1) {'{'}
              <br />
                <span className="text-yellow-600">return</span> price - discount;
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">console.log</span>(calculatePrice(<span className="text-yellow-500">100</span>)); <span className="text-gray-500">// Output: 90</span>
              <br />
              <span className="text-yellow-600">console.log</span>(calculatePrice(<span className="text-yellow-500">100</span>, <span className="text-yellow-500">20</span>)); <span className="text-gray-500">// Output: 80</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          ডিফল্ট প্যারামিটার জাভাস্ক্রিপ্টের একটি শক্তিশালী বৈশিষ্ট্য যা একটি ফাংশনের প্যারামিটারগুলির জন্য ডিফল্ট মান সেট করতে সহায়ক। এটি কোড লেখার সময় আরো নমনীয়তা প্রদান করে এবং ডিফল্ট মানের সুবিধা গ্রহণ করতে সাহায্য করে।
        </p>
      </section>
    </div>
  );
};

export default DefaultParametersTutorial;
