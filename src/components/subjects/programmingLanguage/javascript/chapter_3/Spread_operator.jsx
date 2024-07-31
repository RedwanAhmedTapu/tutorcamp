import React from "react";

const SpreadOperatorTutorial = () => {
  // Code text for formatting
  const basicArraySpread = `
    const numbers = [1, 2, 3];
    const moreNumbers = [4, 5, 6];
    const allNumbers = [...numbers, ...moreNumbers];
    
    console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6]
  `;

  const spreadInFunctionCall = `
    function sum(a, b, c) {
      return a + b + c;
    }
    
    const numbers = [1, 2, 3];
    console.log(sum(...numbers)); // Output: 6
  `;

  const basicObjectSpread = `
    const person = { name: "Alice", age: 25 };
    const job = { title: "Engineer" };
    const personWithJob = { ...person, ...job };
    
    console.log(personWithJob); // Output: { name: 'Alice', age: 25, title: 'Engineer' }
  `;

  const spreadInObjectUpdate = `
    const person = { name: "Alice", age: 25 };
    const updatedPerson = { ...person, age: 26 };
    
    console.log(updatedPerson); // Output: { name: 'Alice', age: 26 }
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট স্প্রেড অপারেটর </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. স্প্রেড অপারেটর কী?</h2>
        <p>
          স্প্রেড অপারেটর হল একটি বৈশিষ্ট্য যা আপনাকে একটি অ্যারে বা অবজেক্টের উপাদানগুলোকে আলাদাভাবে ব্যবহার করতে দেয়। এটি তিনটি ডট ( <code>...</code> ) চিহ্ন দ্বারা চিহ্নিত হয়।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. অ্যারেতে স্প্রেড অপারেটর ব্যবহার</h2>
        <p>
          স্প্রেড অপারেটর ব্যবহার করে একটি অ্যারের সমস্ত উপাদান নতুন একটি অ্যারেতে যুক্ত করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> numbers = [1, 2, 3];
              <br />
              <span className="text-yellow-600">const</span> moreNumbers = [4, 5, 6];
              <br />
              <span className="text-yellow-600">const</span> allNumbers = [...numbers, ...moreNumbers];
              <br />
              <span className="text-yellow-600">console.log</span>(allNumbers); <span className="text-gray-500">// Output: [1, 2, 3, 4, 5, 6]</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. ফাংশন কলের মধ্যে স্প্রেড অপারেটর ব্যবহার</h2>
        <p>
          ফাংশনের প্যারামিটার হিসাবে একটি অ্যারের উপাদানগুলোকে পৃথক আর্গুমেন্টে রূপান্তর করতে স্প্রেড অপারেটর ব্যবহার করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> sum(a, b, c) {'{'}
              <br />
                <span className="text-yellow-600">return</span> a + b + c;
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">const</span> numbers = [1, 2, 3];
              <br />
              <span className="text-yellow-600">console.log</span>(sum(...numbers)); <span className="text-gray-500">// Output: 6</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. অবজেক্টে স্প্রেড অপারেটর ব্যবহার</h2>
        <p>
          স্প্রেড অপারেটর ব্যবহার করে একটি অবজেক্টের সমস্ত প্রপার্টি নতুন একটি অবজেক্টে কপি করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> person = { '{' } name: <span className="text-yellow-500">"Alice"</span>, age: <span className="text-yellow-500">25</span> { '}' };
              <br />
              <span className="text-yellow-600">const</span> job = { '{' } title: <span className="text-yellow-500">"Engineer"</span> { '}' };
              <br />
              <span className="text-yellow-600">const</span> <code>personWithJob = { '{' } ...person, ...job { '}' }</code>;

              <br />
              <span className="text-yellow-600">console.log</span>(<code>personWithJob</code>); <span className="text-gray-500">// Output: { '{' } name: 'Alice', age: 25, title: 'Engineer' { '}' }</span>

            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. অবজেক্ট আপডেটে স্প্রেড অপারেটর</h2>
        <p>
          স্প্রেড অপারেটর ব্যবহার করে অবজেক্টের কিছু প্রপার্টি আপডেট করা যায়, পুরোনো প্রপার্টিগুলি রক্ষা করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> person = { '{' } name: <span className="text-yellow-500">"Alice"</span>, age: <span className="text-yellow-500">25</span> { '}' };
              <br />
              {/* <span className="text-yellow-600">const</span> updatedPerson = `{<code>{'...'}</code>person, <span className="text-yellow-600">age:</span> <span className="text-yellow-500">26</span>}`; */}

<br />
<span className="text-yellow-600">console.log</span>(<code>updatedPerson</code>); <span className="text-gray-500">// Output: { '{' } name: 'Alice', age: 26 { '}' }</span>

            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          স্প্রেড অপারেটর একটি শক্তিশালী বৈশিষ্ট্য যা আপনাকে অ্যারে ও অবজেক্টের উপাদানগুলোকে আলাদাভাবে ব্যবহারের সুযোগ দেয়। এটি নতুন অ্যারে বা অবজেক্ট তৈরি করতে এবং ফাংশন কলের আর্গুমেন্টস রূপান্তর করতে সহায়ক।
        </p>
      </section>
    </div>
  );
};

export default SpreadOperatorTutorial;
