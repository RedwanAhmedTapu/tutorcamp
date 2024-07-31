import React from "react";

const DeveloperConsoleTutorial = () => {
  // Code text for formatting
  const consoleKeyword = `console`;
  const logKeyword = `log`;
  const errorKeyword = `error`;
  const warnKeyword = `warn`;
  const tableKeyword = `table`;
  const groupKeyword = `group`;
  const groupEndKeyword = `groupEnd`;
  const assertKeyword = `assert`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">ডেভেলপার কনসোল </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. ডেভেলপার কনসোল কি?</h2>
        <p>
          ডেভেলপার কনসোল হলো একটি টুল যা ব্রাউজারের ডেভেলপার টুলসের অংশ হিসেবে উপলব্ধ। এটি ডেভেলপারদের জন্য লগ, ত্রুটি, সতর্কতা, এবং অন্যান্য তথ্য দেখতে সাহায্য করে।
        </p>
        <p className="mt-2">
          কনসোলের আরও কার্যকর ব্যবহারের জন্য <code>Ctrl+Shift+I</code> ব্যবহার করে এলিমেন্ট ইন্সপেক্ট করুন এবং <code>Ctrl+L</code> বা <code>clear()</code> ব্যবহার করে কনসোল ক্লিয়ার করুন।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. <code>console.log()</code></h2>
        <p>
          <code>console.log()</code> হল কনসোলে তথ্য আউটপুট করার জন্য ব্যবহৃত একটি মেথড।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-green-300 font-semibold">{logKeyword}</span><span className="text-white font-semibold">({`"Hello, world!"`})</span>
              <br />
              <span className="text-white font-semibold">// Output: Hello, world!</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          কনসোল লগ দেখতে <code>Ctrl+Shift+I</code> ব্যবহার করুন এবং কনসোল ক্লিয়ার করতে <code>Ctrl+L</code> চাপুন।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. <code>console.error()</code></h2>
        <p>
          <code>console.error()</code> ব্যবহৃত হয় ত্রুটি  বার্তা প্রদর্শনের জন্য।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-red-600 font-semibold">{errorKeyword}</span><span className="text-white font-semibold">({`"An error occurred!"`})</span>
              <br />
              <span className="text-white font-semibold">// Output: An error occurred!</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          ত্রুটি দেখতে কনসোল ইন্সপেক্ট করতে <code>Ctrl+Shift+I</code> ব্যবহার করুন এবং ত্রুটি মেসেজ ক্লিয়ার করতে <code>Ctrl+L</code> চাপুন।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. <code>console.warn()</code></h2>
        <p>
          <code>console.warn()</code> ব্যবহৃত হয় সতর্কতার বার্তা প্রদর্শনের জন্য।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-yellow-500 font-semibold">{warnKeyword}</span><span className="text-white font-semibold">({`"This is a warning!"`})</span>
              <br />
              <span className="text-white font-semibold">// Output: This is a warning!</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          সতর্কতা দেখতে কনসোল ইন্সপেক্ট করতে <code>Ctrl+Shift+I</code> ব্যবহার করুন এবং সতর্কতা মেসেজ ক্লিয়ার করতে <code>Ctrl+L</code> চাপুন।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. <code>console.table()</code></h2>
        <p>
          <code>console.table()</code> ব্যবহৃত হয় একটি টেবিল আকারে তথ্য প্রদর্শনের জন্য।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-green-300 font-semibold">{tableKeyword}</span><span className="text-white font-semibold">([{`"Name"`}: {`"John"`}, {`"Age"`}: {`25`}])</span>
              <br />
              <span className="text-white font-semibold">// Output: A table displaying Name and Age columns</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          টেবিল ভিউ দেখতে কনসোল ইন্সপেক্ট করতে <code>Ctrl+Shift+I</code> ব্যবহার করুন এবং কনসোল ক্লিয়ার করতে <code>Ctrl+L</code> চাপুন।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. <code>console.group()</code> ও <code>console.groupEnd()</code></h2>
        <p>
          <code>console.group()</code> এবং <code>console.groupEnd()</code> ব্যবহার করা হয় লোগগুলো গ্রুপ করার জন্য যাতে আরো ভালভাবে সংগঠিত করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-green-300 font-semibold">{groupKeyword}</span><span className="text-white font-semibold">(`"Group 1"`)</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-green-300 font-semibold">{logKeyword}</span><span className="text-white font-semibold">({`"Inside Group 1"`})</span>
              <br />
              <span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-green-300 font-semibold">{groupEndKeyword}</span>
              <br />
              <span className="text-white font-semibold">// Output: Grouped log messages</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          লগ গ্রুপ দেখতে কনসোল ইন্সপেক্ট করতে <code>Ctrl+Shift+I</code> ব্যবহার করুন এবং গ্রুপ মেসেজ ক্লিয়ার করতে <code>Ctrl+L</code> চাপুন।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. <code>console.assert()</code></h2>
        <p>
          <code>console.assert()</code> ব্যবহার করা হয় একটি শর্ত সত্য কিনা তা যাচাই করার জন্য। শর্ত মিথ্যা হলে একটি বার্তা প্রদর্শিত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-green-300 font-semibold">{assertKeyword}</span><span className="text-white font-semibold">({`2 === 2`}, {`"Assertion failed!"`})</span>
              <br />
              <span className="text-white font-semibold">// No output as the assertion is true</span>
              <br />
              <span className="text-yellow-600">{consoleKeyword}</span><span className="text-white font-semibold">.</span><span className="text-green-300 font-semibold">{assertKeyword}</span><span className="text-white font-semibold">({`2 === 3`}, {`"Assertion failed!"`})</span>
              <br />
              <span className="text-white font-semibold">// Output: Assertion failed!</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          শর্ত যাচাই করতে কনসোল ইন্সপেক্ট করতে <code>Ctrl+Shift+I</code> ব্যবহার করুন এবং শর্তের ফলাফল ক্লিয়ার করতে <code>Ctrl+L</code> চাপুন।
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          ডেভেলপার কনসোল একটি শক্তিশালী টুল যা ডেভেলপারদের কোড ডিবাগিং এবং তথ্য বিশ্লেষণে সহায়তা করে। বিভিন্ন মেথড যেমন <code>console.log()</code>, <code>console.error()</code>, <code>console.warn()</code>, <code>console.table()</code>, <code>console.group()</code>, এবং <code>console.assert()</code> ব্যবহার করে কনসোলের আউটপুট আরও কার্যকরী ও সংগঠিত করা যেতে পারে।
        </p>
      </section>
    </div>
  );
};

export default DeveloperConsoleTutorial;
