import React from "react";

const CallMethodTutorial = () => {
  // Code text for formatting
  const globalContext = `
    function greet() {
      console.log('Hello, ' + this.name);
    }
    const person = { name: 'Alice' };
    greet.call(person); // Output: Hello, Alice
  `;

  const multipleArguments = `
    function add(a, b) {
      console.log(a + b);
    }
    add.call(null, 5, 10); // Output: 15
  `;

  const changingContext = `
    function greet() {
      console.log('Hello, ' + this.name);
    }
    const person1 = { name: 'Alice' };
    const person2 = { name: 'Bob' };
    greet.call(person1); // Output: Hello, Alice
    greet.call(person2); // Output: Hello, Bob
  `;

  const withArrayArguments = `
    function add(a, b, c) {
      console.log(a + b + c);
    }
    const numbers = [5, 10, 15];
    add.call(null, ...numbers); // Output: 30
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট 'call' মেথড </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. গ্লোবাল কনটেক্সটে 'call'</h2>
        <p>
          <code>call</code> মেথড একটি ফাংশনকে একটি নির্দিষ্ট <code>this</code> মান এবং পৃথক আর্গুমেন্ট দিয়ে কল করতে ব্যবহৃত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> greet() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">'Hello, ' + this.name</span>);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> person = {"{"} <span className="text-yellow-600">name:</span> <span className="text-green-300">'Alice'</span> {"}"};
              <br />
              <span className="text-yellow-600">greet.call</span>(person); <span className="text-gray-500"> {/* Output: Hello, Alice */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. একাধিক আর্গুমেন্টের সাথে 'call'</h2>
        <p>
          <code>call</code> মেথডে ফাংশনের জন্য একাধিক আর্গুমেন্ট পাস করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> add(a, b) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(a + b);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">add.call</span>(<span className="text-yellow-600">null</span>, <span className="text-green-300">5</span>, <span className="text-green-300">10</span>); <span className="text-gray-500"> {/* Output: 15 */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. কনটেক্সট পরিবর্তন করা</h2>
        <p>
          <code>call</code> মেথডের মাধ্যমে আপনি একটি ফাংশনের <code>this</code> কনটেক্সট পরিবর্তন করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> greet() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">'Hello, ' + this.name</span>);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> person1 = {"{"} <span className="text-yellow-600">name:</span> <span className="text-green-300">'Alice'</span> {"}"};
              <br />
              <span className="text-yellow-600">const</span> person2 = {"{"} <span className="text-yellow-600">name:</span> <span className="text-green-300">'Bob'</span> {"}"};
              <br />
              <span className="text-yellow-600">greet.call</span>(person1); <span className="text-gray-500"> {/* Output: Hello, Alice */}</span>
              <br />
              <span className="text-yellow-600">greet.call</span>(person2); <span className="text-gray-500"> {/* Output: Hello, Bob */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. অ্যারে আর্গুমেন্টের সাথে 'call'</h2>
        <p>
          <code>call</code> মেথডের মাধ্যমে আপনি একটি ফাংশনে অ্যারে আর্গুমেন্ট পাঠাতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> add(a, b, c) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(a + b + c);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> numbers = [<span className="text-green-300">5</span>, <span className="text-green-300">10</span>, <span className="text-green-300">15</span>];
              <br />
              <span className="text-yellow-600">add.call</span>(<span className="text-yellow-600">null</span>, <span className="text-yellow-600">...numbers</span>); <span className="text-gray-500"> {/* Output: 30 */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          <code>call</code> মেথড একটি ফাংশনকে একটি নির্দিষ্ট <code>this</code> মান এবং পৃথক আর্গুমেন্ট দিয়ে কল করতে ব্যবহৃত হয়। এটি কনটেক্সট পরিবর্তন, একাধিক আর্গুমেন্ট প্রদান, এবং অ্যারে আর্গুমেন্ট পাঠানোর জন্য অত্যন্ত কার্যকর।
        </p>
      </section>
    </div>
  );
};

export default CallMethodTutorial;
