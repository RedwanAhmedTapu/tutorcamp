import React from "react";

const BehindTheScenesTutorial = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্টের পেছনের দৃশ্য</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. জাভাস্ক্রিপ্ট ইঞ্জিন</h2>
        <p>
          জাভাস্ক্রিপ্ট ইঞ্জিনগুলি কোড রান করার জন্য বিভিন্ন ব্রাউজার দ্বারা ব্যবহৃত হয়। এখানে প্রধান কিছু ইঞ্জিনের তালিকা:
        </p>
        <table className="w-full bg-gray-900 mt-4 border border-gray-700">
          <thead>
            <tr>
              <th className="p-2 border-b border-gray-700">ব্রাউজার</th>
              <th className="p-2 border-b border-gray-700">ইঞ্জিন</th>
              <th className="p-2 border-b border-gray-700">রেফারেন্স লিঙ্ক</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-gray-700">Google Chrome</td>
              <td className="p-2 border-b border-gray-700">V8</td>
              <td className="p-2 border-b border-gray-700">
                <a href="https://v8.dev/" className="text-blue-400" target="_blank" rel="noopener noreferrer">V8 Engine</a>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">Mozilla Firefox</td>
              <td className="p-2 border-b border-gray-700">SpiderMonkey</td>
              <td className="p-2 border-b border-gray-700">
                <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey" className="text-blue-400" target="_blank" rel="noopener noreferrer">SpiderMonkey</a>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">Safari</td>
              <td className="p-2 border-b border-gray-700">JavaScriptCore</td>
              <td className="p-2 border-b border-gray-700">
                <a href="https://webkit.org/blog/1820/about-javascriptcore/" className="text-blue-400" target="_blank" rel="noopener noreferrer">JavaScriptCore</a>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">Microsoft Edge</td>
              <td className="p-2 border-b border-gray-700">Chakra</td>
              <td className="p-2 border-b border-gray-700">
                <a href="https://docs.microsoft.com/en-us/previous-versions/windows/desktop/legacy/ms678542(v=vs.85)" className="text-blue-400" target="_blank" rel="noopener noreferrer">Chakra</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. কোড পার্সিং এবং এক্সিকিউশন</h2>
        <p>
          জাভাস্ক্রিপ্ট কোড রান করার জন্য একাধিক ধাপ অনুসরণ করে:
        </p>
        <table className="w-full bg-gray-900 mt-4 border border-gray-700">
          <thead>
            <tr>
              <th className="p-2 border-b border-gray-700">ধাপ</th>
              <th className="p-2 border-b border-gray-700">বর্ণনা</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-gray-700">১. পার্সার</td>
              <td className="p-2 border-b border-gray-700">
                কোডটিকে সিনট্যাক্স বিশ্লেষণ করে <code>Abstract Syntax Tree (AST)</code> তৈরি করে।
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">২. কম্পাইলার</td>
              <td className="p-2 border-b border-gray-700">
                AST থেকে বাইনারি কোড তৈরি করে যা ব্রাউজার চলাতে পারে।
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">৩. এক্সিকিউশন কনটেক্সট</td>
              <td className="p-2 border-b border-gray-700">
                কোডের জন্য কনটেক্সট তৈরি করে যা চলানোর সময় চলতে থাকে।
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">৪. এক্সিকিউশন স্ট্যাক</td>
              <td className="p-2 border-b border-gray-700">
                চলমান কনটেক্সটের স্তরগুলির সঞ্চয়স্থল।
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. এক্সিকিউশন কনটেক্সট</h2>
        <p>
          এক্সিকিউশন কনটেক্সটের দুটি প্রধান ধাপ:
        </p>
        <table className="w-full bg-gray-900 mt-4 border border-gray-700">
          <thead>
            <tr>
              <th className="p-2 border-b border-gray-700">ধাপ</th>
              <th className="p-2 border-b border-gray-700">বর্ণনা</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-gray-700">১. ক্রিয়েশন</td>
              <td className="p-2 border-b border-gray-700">
                ভেরিয়েবল ডিক্লারেশন এবং ফাংশন ডিক্লারেশন সংজ্ঞায়িত হয়।
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">২. এক্সিকিউশন</td>
              <td className="p-2 border-b border-gray-700">
                কোডের কার্যকর অংশ চালানো হয়।
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. এক্সিকিউশন স্ট্যাক</h2>
        <p>
          এক্সিকিউশন স্ট্যাক দেখায় কিভাবে কোড চলাকালীন একাধিক কনটেক্সট ব্যবস্থাপনা হয়। নিম্নলিখিত উদাহরণটি দেখায় কিভাবে স্ট্যাক পরিবর্তিত হয়:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side: Code example */}
          <div className="p-4 bg-gray-900 rounded-md">
            <h3 className="text-xl font-semibold mb-2">কোড উদাহরণ</h3>
            <pre>
              <code className="whitespace-pre-line">
                {`// Variables
var a = 5;
var b = 10;
var c = a + b;

// Function declaration
function add(x, y) {
  return x + y;
}

// Array and object
var numbers = [1, 2, 3, 4, 5];
var person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

// Function call
var result = add(a, b);
console.log(result); // Output: 15
person.greet(); // Output: Hello, John

// Nested function call
function outerFunction() {
  var outerVar = 'I am outer!';
  function innerFunction() {
    var innerVar = 'I am inner!';
    console.log(outerVar); // Output: I am outer!
    console.log(innerVar); // Output: I am inner!
  }
  innerFunction();
}
outerFunction();
`}
              </code>
            </pre>
          </div>

          {/* Right side: Execution Stack */}
          <div className="p-4 bg-gray-900 rounded-md">
            <h3 className="text-xl font-semibold mb-2">এক্সিকিউশন স্ট্যাক</h3>
            <div className="bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold mb-2">স্টেপ ১: গ্লোবাল কনটেক্সট</h4>
              <pre>
                <code className="whitespace-pre-line">
                  {`Global Execution Context:
- a: 5
- b: 10
- c: 15 (calculated as a + b)
- add function declared
- numbers array initialized
- person object initialized with name, age, and greet method`}
                </code>
              </pre>
            </div>

            <div className="bg-gray-800 p-4 rounded-md mt-4">
              <h4 className="text-lg font-semibold mb-2">স্টেপ ২: ফাংশন কল</h4>
              <pre>
                <code className="whitespace-pre-line">
                  {`Function Execution Context for add(a, b):
- x: 5
- y: 10
- return x + y = 15

Function Execution Context for person.greet():
- this: {name: "John"}

Function Execution Context for outerFunction():
- outerVar: 'I am outer!'

Function Execution Context for innerFunction():
- outerVar: 'I am outer!'
- innerVar: 'I am inner!'
`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BehindTheScenesTutorial;
