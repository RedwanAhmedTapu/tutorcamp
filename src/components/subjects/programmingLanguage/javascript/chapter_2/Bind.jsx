import React from "react";

const BindMethodTutorial = () => {
  // Code text for formatting
  const basicBind = `
    function greet() {
      console.log('Hello, ' + this.name);
    }
    const person = { name: 'Alice' };
    const boundGreet = greet.bind(person);
    boundGreet(); // Output: Hello, Alice
  `;

  const bindWithArguments = `
    function greet(greeting, punctuation) {
      console.log(greeting + ', ' + this.name + punctuation);
    }
    const person = { name: 'Bob' };
    const boundGreet = greet.bind(person, 'Hi');
    boundGreet('!'); // Output: Hi, Bob!
  `;

  const bindPartialApplication = `
    function multiply(a, b) {
      console.log(a * b);
    }
    const multiplyByTwo = multiply.bind(null, 2);
    multiplyByTwo(5); // Output: 10
  `;

  const bindAndChangeContext = `
    function showName() {
      console.log(this.name);
    }
    const person1 = { name: 'Charlie' };
    const person2 = { name: 'Dana' };
    const boundShowName = showName.bind(person1);
    boundShowName(); // Output: Charlie
    boundShowName.call(person2); // Output: Charlie (bind context remains unchanged)
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট 'bind' মেথড </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. বেসিক 'bind'</h2>
        <p>
          <code>bind</code> মেথড একটি নতুন ফাংশন তৈরি করে যার <code>this</code> মান নির্দিষ্ট করে এবং সেই ফাংশনটি নির্দিষ্ট <code>this</code> কনটেক্সট নিয়ে কল করা যায়।
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
              <span className="text-yellow-600">const</span> boundGreet = <span className="text-yellow-600">greet.bind</span>(person);
              <br />
              <span className="text-yellow-600">boundGreet</span>(); <span className="text-gray-500"> {/* Output: Hello, Alice */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. আর্গুমেন্টের সাথে 'bind'</h2>
        <p>
          <code>bind</code> মেথডে আপনি প্রাথমিক আর্গুমেন্ট পাস করতে পারেন যা পরে ফাংশনের কল করার সময় ব্যবহার করা হয়।
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
              <span className="text-yellow-600">const</span> person = {"{"} <span className="text-yellow-600">name:</span> <span className="text-green-300">'Bob'</span> {"}"};
              <br />
              <span className="text-yellow-600">const</span> boundGreet = <span className="text-yellow-600">greet.bind</span>(person, <span className="text-green-300">'Hi'</span>);
              <br />
              <span className="text-yellow-600">boundGreet</span>(<span className="text-green-300">'!'</span>); <span className="text-gray-500"> {/* Output: Hi, Bob! */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. আংশিক অ্যাপ্লিকেশন</h2>
        <p>
          <code>bind</code> মেথড ব্যবহার করে আপনি একটি ফাংশনের কিছু আর্গুমেন্ট আগে থেকেই নির্ধারণ করতে পারেন এবং পরে অন্য আর্গুমেন্ট সরবরাহ করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> multiply(a, b) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(a * b);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> multiplyByTwo = <span className="text-yellow-600">multiply.bind</span>(<span className="text-yellow-600">null</span>, <span className="text-green-300">2</span>);
              <br />
              <span className="text-yellow-600">multiplyByTwo</span>(<span className="text-green-300">5</span>); <span className="text-gray-500"> {/* Output: 10 */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. কনটেক্সট পরিবর্তন এবং কল করা</h2>
        <p>
          <code>bind</code> মেথড কনটেক্সট পরিবর্তন করে নতুন ফাংশন তৈরি করে, কিন্তু এই কনটেক্সট পরিবর্তন শুধুমাত্র নতুন ফাংশনের জন্য প্রযোজ্য।
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
              <span className="text-yellow-600">const</span> boundShowName = <span className="text-yellow-600">showName.bind</span>(person1);
              <br />
              <span className="text-yellow-600">boundShowName</span>(); <span className="text-gray-500"> {/* Output: Charlie */}</span>
              <br />
              <span className="text-yellow-600">boundShowName.call</span>(person2); <span className="text-gray-500"> {/* Output: Charlie (bind context remains unchanged) */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          <code>bind</code> মেথড একটি নতুন ফাংশন তৈরি করে যার <code>this</code> কনটেক্সট এবং প্রাথমিক আর্গুমেন্টগুলি নির্দিষ্ট করে। এটি ফাংশন কনটেক্সট এবং আর্গুমেন্টগুলি নিয়ন্ত্রণের জন্য একটি শক্তিশালী সরঞ্জাম।
        </p>
      </section>
    </div>
  );
};

export default BindMethodTutorial;
