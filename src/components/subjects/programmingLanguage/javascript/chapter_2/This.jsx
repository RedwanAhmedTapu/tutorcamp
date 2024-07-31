import React from "react";

const ThisKeywordTutorial = () => {
  // Code text for formatting
  const globalContext = `
    console.log(this); // In the global context, 'this' refers to the global object (window in browsers)
  `;

  const objectMethod = `
    const obj = {
      name: 'Alice',
      greet() {
        console.log(this.name); // 'this' refers to the object itself
      }
    };
    obj.greet(); // Output: Alice
  `;

  const constructorFunction = `
    function Person(name) {
      this.name = name;
    }
    const person = new Person('Bob');
    console.log(person.name); // Output: Bob
  `;

  const arrowFunction = `
    const obj = {
      name: 'Charlie',
      greet: () => {
        console.log(this.name); // 'this' refers to the outer context (global object)
      }
    };
    obj.greet(); // Output: undefined
  `;

  const eventHandler = `
    class Button {
      constructor() {
        this.message = 'Button clicked';
      }
      click() {
        setTimeout(() => {
          console.log(this.message); // 'this' refers to the class instance
        }, 1000);
      }
    }
    const button = new Button();
    button.click(); // Output: Button clicked
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট 'this' কিওয়ার্ড </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. গ্লোবাল কনটেক্সটে 'this'</h2>
        <p>
          গ্লোবাল কনটেক্সটে, <code>this</code> গ্লোবাল অবজেক্টকে (ব্রাউজারে <code>window</code>) নির্দেশ করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this</span>);
              <span className="text-gray-500"> {/* Output: Window (in browsers) */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. অবজেক্ট মেথডে 'this'</h2>
        <p>
          অবজেক্টের মেথডে, <code>this</code> অবজেক্টটিকে নির্দেশ করে যা মেথডটি কল করেছে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> obj = {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">name:</span> <span className="text-green-300">'Alice'</span>,
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">greet</span> <span className="text-yellow-600">()</span> {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.name</span>); <span className="text-gray-500"> {/* Output: Alice */}</span>
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"};
              <br />
              <span className="text-yellow-600">obj.greet</span>(); <span className="text-gray-500"> {/* Output: Alice */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. কনস্ট্রাক্টর ফাংশনে 'this'</h2>
        <p>
          কনস্ট্রাক্টর ফাংশনের মধ্যে, <code>this</code> নতুন ইনস্ট্যান্সকে নির্দেশ করে যা কনস্ট্রাক্টর ফাংশনের মাধ্যমে তৈরি করা হয়েছে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> Person(name) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">this.name</span> = <span className="text-green-300">name</span>;
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> person = <span className="text-yellow-600">new</span> Person(<span className="text-green-300">'Bob'</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">person.name</span>); <span className="text-gray-500"> {/* Output: Bob */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. অ্যারো ফাংশনে 'this'</h2>
        <p>
          অ্যারো ফাংশনের মধ্যে, <code>this</code> বাইরের স্কোপকে নির্দেশ করে। এটি সাধারণ ফাংশনের তুলনায় ভিন্ন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> obj = {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">name:</span> <span className="text-green-300">'Charlie'</span>,
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">greet:</span> <span className="text-yellow-600">() =></span> {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.name</span>); <span className="text-gray-500"> {/* Output: undefined */}</span>
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"};
              <br />
              <span className="text-yellow-600">obj.greet</span>(); <span className="text-gray-500"> {/* Output: undefined */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৫. ইভেন্ট হ্যান্ডলারে 'this'</h2>
        <p>
          ইভেন্ট হ্যান্ডলার ফাংশনের মধ্যে, <code>this</code> সাধারণত ইভেন্ট লক্ষ্য (যেমন একটি বাটন) কে নির্দেশ করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Button {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">constructor</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this.message</span> = <span className="text-green-300">'Button clicked'</span>;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">click</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">setTimeout</span>(() => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.message</span>); <span className="text-gray-500"> {/* Output: Button clicked */}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}, <span className="text-green-300">1000</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> button = <span className="text-yellow-600">new</span> Button();
              <br />
              <span className="text-yellow-600">button.click</span>(); <span className="text-gray-500"> {/* Output: Button clicked */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          জাভাস্ক্রিপ্টে <code>this</code> কিওয়ার্ড বিভিন্ন কনটেক্সটে ভিন্নভাবে কাজ করে। গ্লোবাল কনটেক্সটে, এটি গ্লোবাল অবজেক্টকে নির্দেশ করে, অবজেক্ট মেথডে এটি অবজেক্টকে নির্দেশ করে, কনস্ট্রাক্টর ফাংশনে এটি নতুন ইনস্ট্যান্সকে নির্দেশ করে, অ্যারো ফাংশনে এটি বাইরের স্কোপকে নির্দেশ করে এবং ইভেন্ট হ্যান্ডলারে এটি ইভেন্ট লক্ষ্যকে নির্দেশ করে।
        </p>
      </section>
    </div>
  );
};

export default ThisKeywordTutorial;
