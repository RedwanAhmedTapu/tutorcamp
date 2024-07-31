import React from "react";

const ApplyMethodTutorial = () => {
  // Code text for formatting
  const basicApply = `
    function greet(greeting, punctuation) {
      console.log(greeting + ', ' + this.name + punctuation);
    }
    const person = { name: 'Alice' };
    greet.apply(person, ['Hello', '!']); // Output: Hello, Alice!
  `;

  const applyWithArguments = `
    function sum(a, b, c) {
      console.log(a + b + c);
    }
    sum.apply(null, [1, 2, 3]); // Output: 6
  `;

  const applyAndChangeContext = `
    function showName() {
      console.log(this.name);
    }
    const person1 = { name: 'Charlie' };
    const person2 = { name: 'Dana' };
    showName.apply(person1); // Output: Charlie
    showName.apply(person2); // Output: Dana
  `;

  const applyWithFunction = `
    function multiply(a, b) {
      return a * b;
    }
    function calculate(operation, a, b) {
      return operation.apply(null, [a, b]);
    }
    console.log(calculate(multiply, 2, 3)); // Output: 6
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট 'apply' মেথড </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. বেসিক 'apply'</h2>
        <p>
          <code>apply</code> মেথড একটি ফাংশনকে নির্দিষ্ট <code>this</code> কনটেক্সট এবং আর্গুমেন্টগুলির সাথে কল করার অনুমতি দেয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> greet(greeting, punctuation) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">greeting + ', ' + this.name + punctuation</span>);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> person = {"{"} <span className="text-yellow-600">name:</span> <span className="text-green-300">'Alice'</span> {"}"};
              <br />
              <span className="text-yellow-600">greet.apply</span>(person, [<span className="text-green-300">'Hello'</span>, <span className="text-green-300">'!'</span>]); <span className="text-gray-500"> {/* Output: Hello, Alice! */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. আর্গুমেন্টের সাথে 'apply'</h2>
        <p>
          <code>apply</code> মেথডের মাধ্যমে একটি ফাংশনকে অ্যারে হিসেবে আর্গুমেন্ট প্রদান করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> sum(a, b, c) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(a + b + c);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">sum.apply</span>(<span className="text-yellow-600">null</span>, [<span className="text-green-300">1</span>, <span className="text-green-300">2</span>, <span className="text-green-300">3</span>]); <span className="text-gray-500"> {/* Output: 6 */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. কনটেক্সট পরিবর্তন এবং কল করা</h2>
        <p>
          <code>apply</code> মেথড কনটেক্সট পরিবর্তন করে নতুন কনটেক্সটে ফাংশন কল করার অনুমতি দেয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> showName() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(this.name);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> person1 = {"{"} <span className="text-yellow-600">name:</span> <span className="text-green-300">'Charlie'</span> {"}"};
              <br />
              <span className="text-yellow-600">const</span> person2 = {"{"} <span className="text-yellow-600">name:</span> <span className="text-green-300">'Dana'</span> {"}"};
              <br />
              <span className="text-yellow-600">showName.apply</span>(person1); <span className="text-gray-500"> {/* Output: Charlie */}</span>
              <br />
              <span className="text-yellow-600">showName.apply</span>(person2); <span className="text-gray-500"> {/* Output: Dana */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. ফাংশনের সাথে 'apply'</h2>
        <p>
          <code>apply</code> মেথড ব্যবহার করে একটি ফাংশন অন্য ফাংশনের সাথে কল করা যেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> multiply(a, b) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">return</span> a * b;
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">function</span> calculate(operation, a, b) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">return</span> operation.apply(<span className="text-yellow-600">null</span>, [a, b]);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-600">calculate</span>(multiply, <span className="text-green-300">2</span>, <span className="text-green-300">3</span>)); <span className="text-gray-500"> {/* Output: 6 */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          <code>apply</code> মেথড ফাংশনকে নির্দিষ্ট <code>this</code> কনটেক্সট এবং আর্গুমেন্ট অ্যারে সহ কল করার ক্ষমতা প্রদান করে। এটি কনটেক্সট পরিবর্তন এবং আর্গুমেন্টগুলির ব্যবস্থাপনার জন্য একটি শক্তিশালী সরঞ্জাম।
        </p>
      </section>
    </div>
  );
};

export default ApplyMethodTutorial;
