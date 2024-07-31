import React from "react";

const ScopeTutorial = () => {
  // Code text for formatting
  const globalScopeExample = `
    var globalVar = 'I am a global variable';
    
    function globalFunction() {
      console.log(globalVar); // Output: 'I am a global variable'
    }
    
    globalFunction();
    console.log(globalVar); // Output: 'I am a global variable'
  `;
  
  const functionScopeExample = `
    function exampleFunction() {
      var functionVar = 'I am a function variable';
      console.log(functionVar); // Output: 'I am a function variable'
    }
    
    exampleFunction();
    console.log(functionVar); // Error: functionVar is not defined
  `;
  
  const blockScopeExample = `
    function blockScopeFunction() {
      if (true) {
        let blockVar = 'I am a block variable';
        const blockConst = 'I am a block constant';
        console.log(blockVar); // Output: 'I am a block variable'
        console.log(blockConst); // Output: 'I am a block constant'
      }
      
      console.log(blockVar); // Error: blockVar is not defined
      console.log(blockConst); // Error: blockConst is not defined
    }
    
    blockScopeFunction();
  `;

  const lexicalScopeExample = `
    function outerFunction() {
      var outerVar = 'I am an outer variable';
      
      function innerFunction() {
        console.log(outerVar); // Output: 'I am an outer variable'
      }
      
      innerFunction();
    }
    
    outerFunction();
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট স্কোপ </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. গ্লোবাল স্কোপ</h2>
        <p>
          গ্লোবাল স্কোপে ডিক্লেয়ার করা ভেরিয়েবল এবং ফাংশনগুলি পুরো স্ক্রিপ্টের মধ্যে কোথাও ব্যবহার করা যেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">var</span> globalVar = <span className="text-green-300">'I am a global variable'</span>;
              <br />
              <span className="text-yellow-600">function</span> globalFunction() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">globalVar</span>); <span className="text-gray-500">// Output: 'I am a global variable'</span>
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">globalFunction</span>();
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">globalVar</span>); <span className="text-gray-500">// Output: 'I am a global variable'</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong> 
          <br />
          'I am a global variable'
          <br />
          'I am a global variable'
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. ফাংশন স্কোপ</h2>
        <p>
          ফাংশন স্কোপের মধ্যে ডিক্লেয়ার করা ভেরিয়েবল এবং ফাংশনগুলি শুধুমাত্র সেই ফাংশনের মধ্যে ব্যবহার করা যেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> exampleFunction() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">var</span> functionVar = <span className="text-green-300">'I am a function variable'</span>;
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">functionVar</span>); <span className="text-gray-500">// Output: 'I am a function variable'</span>
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">exampleFunction</span>();
              <br />
              <span className="text-red-600">console.log</span>(<span className="text-yellow-500">functionVar</span>); <span className="text-red-600">// Error: functionVar is not defined</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          'I am a function variable'
          <br />
          <strong>এরর:</strong>
          <br />
          'ReferenceError: functionVar is not defined'
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. ব্লক স্কোপ</h2>
        <p>
          <code>let</code> এবং <code>const</code> এর সাহায্যে ডিক্লেয়ার করা ভেরিয়েবলগুলি ব্লক স্কোপড, অর্থাৎ তারা শুধুমাত্র ব্লকের মধ্যে অ্যাক্সেস করা যেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> blockScopeFunction() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">if</span> (true) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">let</span> blockVar = <span className="text-green-300">'I am a block variable'</span>;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">const</span> blockConst = <span className="text-green-300">'I am a block constant'</span>;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">blockVar</span>); <span className="text-gray-500">// Output: 'I am a block variable'</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">blockConst</span>); <span className="text-gray-500">// Output: 'I am a block constant'</span>
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-red-600">console.log</span>(<span className="text-yellow-500">blockVar</span>); <span className="text-red-600">// Error: blockVar is not defined</span>
              <br />
              &nbsp;&nbsp;<span className="text-red-600">console.log</span>(<span className="text-yellow-500">blockConst</span>); <span className="text-red-600">// Error: blockConst is not defined</span>
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">blockScopeFunction</span>();
            </code>
          </pre>
        </div>
        <p className="mt-2">
          <strong>আউটপুট:</strong>
          <br />
          'I am a block variable'
          <br />
          'I am a block constant'
          <br />
          <strong>এরর:</strong>
          <br />
          'ReferenceError: blockVar is not defined'
          <br />
          'ReferenceError: blockConst is not defined'
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. লেক্সিকাল স্কোপ</h2>
        <p>
          লেক্সিকাল স্কোপিং হল একটি ফাংশন চলাকালীন সময়ে তার স্কোপ নির্ধারণ করা, যা তার ডিক্লারেশনের সময় নির্ধারিত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> outerFunction() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">var</span> outerVar = <span className="text-green-300">'I am an outer variable'</span>;
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">function</span> innerFunction() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">outerVar</span>); <span className="text-gray-500">// Output: 'I am an outer variable'</span>
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">innerFunction</span>();
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
          'I am an outer variable'
        </p>
      </section>
    </div>
  );
};

export default ScopeTutorial;
