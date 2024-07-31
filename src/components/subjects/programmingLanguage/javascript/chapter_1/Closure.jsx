import React from "react";

const ClosureTutorial = () => {
  // Code text for formatting
  const basicClosureExample = `
    function createCounter() {
      let count = 0;
      
      return function() {
        count++;
        return count;
      };
    }
    
    const counter = createCounter();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
  `;

  const closureWithParameters = `
    function multiplier(factor) {
      return function(number) {
        return number * factor;
      };
    }
    
    const double = multiplier(2);
    const triple = multiplier(3);
    console.log(double(5)); // Output: 10
    console.log(triple(5)); // Output: 15
  `;

  const closureInLoop = `
    function createFunctions() {
      let funcs = [];
      
      for (var i = 0; i < 3; i++) {
        funcs.push(function() {
          return i;
        });
      }
      
      return funcs;
    }
    
    const funcs = createFunctions();
    console.log(funcs[0]()); // Output: 3
    console.log(funcs[1]()); // Output: 3
    console.log(funcs[2]()); // Output: 3
  `;

  const closureInLoopWithLet = `
    function createFunctionsWithLet() {
      let funcs = [];
      
      for (let i = 0; i < 3; i++) {
        funcs.push(function() {
          return i;
        });
      }
      
      return funcs;
    }
    
    const funcs = createFunctionsWithLet();
    console.log(funcs[0]()); // Output: 0
    console.log(funcs[1]()); // Output: 1
    console.log(funcs[2]()); // Output: 2
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট ক্লোজার </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. মৌলিক ক্লোজার</h2>
        <p>
          ক্লোজার হল একটি ফাংশন যা তার লেক্সিকাল স্কোপে ডিফাইন করা ভেরিয়েবল এবং ফাংশনের সাথে অ্যাক্সেস রাখে, যদিও এটি তার আউটারে কল করা হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> createCounter() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">let</span> count = <span className="text-green-300">0</span>;
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">return</span> function() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">count++</span>;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">return</span> <span className="text-yellow-500">count</span>;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> counter = <span className="text-yellow-600">createCounter</span>();
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">counter</span>()); <span className="text-gray-500">// Output: 1</span>
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">counter</span>()); <span className="text-gray-500">// Output: 2</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          1
          <br />
          2
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. ক্লোজার প্যারামিটার সহ</h2>
        <p>
          ক্লোজার প্যারামিটার সহ ব্যবহার করা হলে, ফাংশন একটি মান গ্রহণ করে যা তার ভিতরে অন্য ফাংশন দ্বারা ব্যবহার করা হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> multiplier(factor) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">return</span> function(number) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">return</span> number * <span className="text-yellow-500">factor</span>;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> double = <span className="text-yellow-600">multiplier</span>(<span className="text-green-300">2</span>);
              <br />
              <span className="text-yellow-600">const</span> triple = <span className="text-yellow-600">multiplier</span>(<span className="text-green-300">3</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">double</span>(<span className="text-green-300">5</span>)); <span className="text-gray-500">// Output: 10</span>
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">triple</span>(<span className="text-green-300">5</span>)); <span className="text-gray-500">// Output: 15</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          10
          <br />
          15
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. লুপে ক্লোজার</h2>
        <p>
          লুপের ভিতরে ক্লোজার ব্যবহার করার সময়, সমস্ত ক্লোজার একই লুপ ইটারেশনের পরবর্তী মান দেখাবে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> createFunctions() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">let</span> funcs = [];
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">for</span> (<span className="text-yellow-600">var</span> i = <span className="text-green-300">0</span>; i &lt; <span className="text-green-300">3</span>; i++) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;funcs.push(function() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">return</span> <span className="text-yellow-500">i</span>;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"});
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">return</span> funcs;
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> funcs = <span className="text-yellow-600">createFunctions</span>();
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">funcs[0]</span>()); <span className="text-gray-500">// Output: 3</span>
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">funcs[1]</span>()); <span className="text-gray-500">// Output: 3</span>
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">funcs[2]</span>()); <span className="text-gray-500">// Output: 3</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          3
          <br />
          3
          <br />
          3
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. লুপে ক্লোজার সহ <code>let</code></h2>
        <p>
          <code>let</code> ব্যবহার করার সময়, প্রতিটি লুপ ইটারেশনে একটি নতুন ক্লোজার তৈরি হয়, যা সঠিক মান প্রদান করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> createFunctionsWithLet() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">let</span> funcs = [];
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">for</span> (<span className="text-yellow-600">let</span> i = <span className="text-green-300">0</span>; i &lt; <span className="text-green-300">3</span>; i++) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;funcs.push(function() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">return</span> <span className="text-yellow-500">i</span>;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"});
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">return</span> funcs;
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> funcs = <span className="text-yellow-600">createFunctionsWithLet</span>();
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">funcs[0]</span>()); <span className="text-gray-500">// Output: 0</span>
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">funcs[1]</span>()); <span className="text-gray-500">// Output: 1</span>
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">funcs[2]</span>()); <span className="text-gray-500">// Output: 2</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          0
          <br />
          1
          <br />
          2
        </p>
      </section>
    </div>
  );
};

export default ClosureTutorial;
