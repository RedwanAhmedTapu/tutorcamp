import React from "react";

const IIFE_Tutorial = () => {
    const greeting="";
  // Code text for formatting
  const basicIIFEExample = `
    (function() {
      const message = "Hello from IIFE!";
      console.log(message);
    })();
  `;

  const iifeWithParameters = `
    (function(greeting, name) {
      console.log(\`\${greeting}, \${name}!\`);
    })('Hello', 'World');
  `;

  const iifeWithReturn = `
    const result = (function(a, b) {
      return a + b;
    })(5, 7);
    console.log(result); // Output: 12
  `;

  const iifeInsideAnotherFunction = `
    function outerFunction() {
      (function() {
        console.log("Inside inner IIFE");
      })();
      console.log("Inside outer function");
    }
    
    outerFunction();
  `;

  const iifeErrorExample = `
    (function() {
      console.log(greeting); // ReferenceError: greeting is not defined
    })();
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট IIFE </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. মৌলিক IIFE</h2>
        <p>
          Immediately Invoked Function Expression (IIFE) হল একটি ফাংশন এক্সপ্রেশন যা তাৎক্ষণিকভাবে কল করা হয়। এটি একটি ফাংশন ডিফাইন করে এবং সাথে সাথে এক্সিকিউট করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">(function() {"{"}</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">const</span> message = <span className="text-green-300">"Hello from IIFE!"</span>;
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">message</span>);
              <br />
              <span className="text-yellow-600">{"}"}</span>)();
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          Hello from IIFE!
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. প্যারামিটার সহ IIFE</h2>
        <p>
          IIFE প্যারামিটার গ্রহণ করতে পারে, যা ফাংশনের ভিতরে বিভিন্ন মান ব্যবহার করতে সহায়ক।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">(function(greeting, name) {"{"}</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">\`\${greeting}, \${name}!\`</span>);
              <br />
              <span className="text-yellow-600">{"}"}</span>)('Hello', 'World');
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          Hello, World!
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. IIFE সহ রিটার্ন</h2>
        <p>
          IIFE থেকে একটি মান রিটার্ন করা যেতে পারে এবং তা একটি ভেরিয়েবলে সংরক্ষণ করা যেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> result = 
              <span className="text-yellow-600">(function(a, b) {"{"}</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">return</span> a + b;
              <br />
              <span className="text-yellow-600">{"}"}</span>)(<span className="text-green-300">5</span>, <span className="text-green-300">7</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">result</span>); <span className="text-gray-500">// Output: 12</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          12
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. অন্য ফাংশনের ভিতরে IIFE</h2>
        <p>
          IIFE অন্য ফাংশনের ভিতরে ব্যবহার করা যেতে পারে এবং এটি বহিরাগত কোডের সাথে পরস্পর সম্পর্কিত হতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> outerFunction() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">(function() {"{"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">"Inside inner IIFE"</span>);
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">{"}"}</span>)();
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">"Inside outer function"</span>);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">outerFunction</span>();
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          Inside inner IIFE
          <br />
          Inside outer function
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৫. ভুল উদাহরণ: রেফারেন্স এরর</h2>
        <p>
          কিছু ক্ষেত্রে, আপনি একটি IIFE এর মধ্যে এমন ভেরিয়েবল অ্যাক্সেস করার চেষ্টা করতে পারেন যা ডিফাইন করা হয়নি, যা একটি রেফারেন্স এরর সৃষ্টি করতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">(function() {"{"}</span>
              <br />
              &nbsp;&nbsp;<span className="text-red-600">console.log(greeting);</span> <span className="text-gray-500">// ReferenceError: greeting is not defined</span>
              <br />
              <span className="text-yellow-600">{"}"}</span>)();
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>ত্রুটি:</strong>
          <br />
          ReferenceError: greeting is not defined
        </p>
      </section>
    </div>
  );
};

export default IIFE_Tutorial;
