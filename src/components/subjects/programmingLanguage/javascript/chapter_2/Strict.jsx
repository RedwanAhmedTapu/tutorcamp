import React from "react";

const StrictModeTutorial = () => {
  // Code text for formatting
  const strictModeGlobal = `
    "use strict";
    
    // This will cause an error because x is not declared
    x = 3.14;
  `;

  const strictModeFunction = `
    function strictFunction() {
      "use strict";
      
      // This will cause an error because y is not declared
      y = 3.14;
    }

    strictFunction();
  `;

  const strictModeExample = `
    // Without strict mode
    z = 3.14; // No error

    // With strict mode
    "use strict";
    a = 3.14; // Error: a is not defined
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট Strict মোড </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. স্ট্রিক্ট মোড কী?</h2>
        <p>
          স্ট্রিক্ট মোড জাভাস্ক্রিপ্টের একটি বিশেষ মোড যা সাধারণ কোডিং ভুল এবং "অসুরক্ষিত" ক্রিয়াকলাপগুলি ধরতে সাহায্য করে। এটি কার্যকর করতে, কোডের শীর্ষে বা একটি ফাংশনের শীর্ষে <code>"use strict";</code> ব্যবহার করুন।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. গ্লোবাল স্ট্রিক্ট মোড</h2>
        <p>
          গ্লোবাল স্কোপে স্ট্রিক্ট মোড সক্রিয় করতে, স্ক্রিপ্টের শুরুতে <code>"use strict";</code> ব্যবহার করুন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">"use strict";</span>
              <br />
              <br />
              <span className="text-gray-500">// This will cause an error because x is not declared</span>
              <br />
              <span className="text-red-500">x</span> = <span className="text-yellow-600">3.14</span>;
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. ফাংশন স্কোপ স্ট্রিক্ট মোড</h2>
        <p>
          একটি নির্দিষ্ট ফাংশনে স্ট্রিক্ট মোড সক্রিয় করতে, ফাংশনের শুরুতে <code>"use strict";</code> ব্যবহার করুন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> strictFunction() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">"use strict";</span>
              <br />
              &nbsp;&nbsp;<span className="text-gray-500">// This will cause an error because y is not declared</span>
              <br />
              &nbsp;&nbsp;<span className="text-red-500">y</span> = <span className="text-yellow-600">3.14</span>;
              <br />
              {"}"}
              <br />
              <br />
              <span className="text-yellow-600">strictFunction</span>();
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. উদাহরণ</h2>
        <p>
          নিচের উদাহরণে দেখানো হয়েছে কীভাবে স্ট্রিক্ট মোড কার্যকর করে সাধারণ ভুলগুলোকে এড়ানো যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-gray-500">// Without strict mode</span>
              <br />
              <span className="text-red-500">z</span> = <span className="text-yellow-600">3.14</span>; <span className="text-gray-500">// No error</span>
              <br />
              <br />
              <span className="text-gray-500">// With strict mode</span>
              <br />
              <span className="text-yellow-600">"use strict";</span>
              <br />
              <span className="text-red-500">a</span> = <span className="text-yellow-600">3.14</span>; <span className="text-gray-500">// Error: a is not defined</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          স্ট্রিক্ট মোড জাভাস্ক্রিপ্টে কোডিং ভুল এবং "অসুরক্ষিত" ক্রিয়াকলাপগুলি ধরতে সাহায্য করে। এটি সক্রিয় করতে, গ্লোবাল বা ফাংশন স্কোপে <code>"use strict";</code> ব্যবহার করুন।
        </p>
      </section>
    </div>
  );
};

export default StrictModeTutorial;
