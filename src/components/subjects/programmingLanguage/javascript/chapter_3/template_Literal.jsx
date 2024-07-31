import React from "react";

const TemplateLiteralsTutorial = () => {
    const a = 5;
    const b = 10;
    const title = "Template Literals";
  // Code text for formatting
  const templateLiteralBasic = `
    const name = "John";
    const greeting = \`Hello, \${name}!\`;
    console.log(greeting); // Output: Hello, John!
  `;

  const multiLineString = `
    const multiLine = \`
      This is a string
      that spans multiple
      lines.
    \`;
    console.log(multiLine);
  `;

  const expressionInterpolation = `
    const a = 5;
    const b = 10;
    console.log(\`The sum of \${a} and \${b} is \${a + b}\`);
    // Output: The sum of 5 and 10 is 15
  `;

  const htmlTemplate = `
    const title = "Template Literals";
    const content = \`
      <div>
        <h1>\${title}</h1>
        <p>This is an example of using template literals.</p>
      </div>
    \`;
    console.log(content);
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট টেমপ্লেট লিটারাল </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. টেমপ্লেট লিটারাল কী?</h2>
        <p>
          টেমপ্লেট লিটারাল হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা সহজে স্ট্রিং ইন্টারপোলেশন এবং মাল্টি-লাইন স্ট্রিংয়ের অনুমতি দেয়। ব্যাকটিক (<code>`</code>) চিহ্নের ভিতরে স্ট্রিং লিখে এটি ব্যবহার করা হয়।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. বেসিক টেমপ্লেট লিটারাল ব্যবহার</h2>
        <p>
          আপনি টেমপ্লেট লিটারাল ব্যবহার করে স্ট্রিং-এর মধ্যে ভেরিয়েবল যোগ করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> name = <span className="text-yellow-500">"John"</span>;
              <br />
              <span className="text-yellow-600">const</span> greeting = <span className="text-yellow-500">\`Hello, \${name}!\`</span>;
              <br />
              <span className="text-yellow-600">console.log</span>(greeting); <span className="text-gray-500">// Output: Hello, John!</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. মাল্টি-লাইন স্ট্রিং</h2>
        <p>
          টেমপ্লেট লিটারাল ব্যবহার করে মাল্টি-লাইন স্ট্রিং সহজে তৈরি করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> multiLine = <span className="text-yellow-500">\`
                This is a string
                that spans multiple
                lines.
              \`</span>;
              <br />
              <span className="text-yellow-600">console.log</span>(multiLine);
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. এক্সপ্রেশন ইন্টারপোলেশন</h2>
        <p>
          টেমপ্লেট লিটারালের মধ্যে যেকোনো জাভাস্ক্রিপ্ট এক্সপ্রেশন ব্যবহার করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> a = <span className="text-yellow-500">5</span>;
              <br />
              <span className="text-yellow-600">const</span> b = <span className="text-yellow-500">10</span>;
              <br />
              <span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">\`The sum of \${a} and \${b} is \${a + b}\`</span>);
              <br />
              <span className="text-gray-500">// Output: The sum of 5 and 10 is 15</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. HTML টেমপ্লেট</h2>
        <p>
          টেমপ্লেট লিটারাল ব্যবহার করে সহজে HTML টেমপ্লেট তৈরি করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">const</span> title = <span className="text-yellow-500">"Template Literals"</span>;
              <br />
              <span className="text-yellow-600">const</span> content = <span className="text-yellow-500">\`
                <div>
                  <h1>\${title}</h1>
                  <p>This is an example of using template literals.</p>
                </div>
              \`</span>;
              <br />
              <span className="text-yellow-600">console.log</span>(content);
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          টেমপ্লেট লিটারাল হল একটি শক্তিশালী বৈশিষ্ট্য যা সহজে স্ট্রিং ইন্টারপোলেশন এবং মাল্টি-লাইন স্ট্রিংয়ের অনুমতি দেয়। এটি ব্যবহার করে স্ট্রিংয়ের মধ্যে যেকোনো জাভাস্ক্রিপ্ট এক্সপ্রেশন যোগ করা যায়।
        </p>
      </section>
    </div>
  );
};

export default TemplateLiteralsTutorial;
