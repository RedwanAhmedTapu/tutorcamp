import React, { useState } from "react";

const AsyncAwaitTutorial = () => {
  const [status, setStatus] = useState("বাটনে ক্লিক করুন শুরু করতে...");
//   const item="";

  // Promise উদাহরণ
  const fetchData = (item) => {
    return new Promise((resolve, reject) => {
      // দেরি সিমুলেট করা
      setTimeout(() => {
        if (Math.random() > 0.2) { // 80% সাফল্য
          resolve(`ডেটা ${item} এর জন্য`);
        } else {
          reject("ডেটা আনার সময়ে ত্রুটি");
        }
      }, 1000);
    });
  };

  // async/await উদাহরণ
  const processItems = async (items) => {
    let results = [];
    setStatus("আইটেম প্রক্রিয়া শুরু হচ্ছে...");

    try {
      for (const item of items) {
        const data = await fetchData(item);
        results.push(data);
      }
      setStatus("আইটেম প্রক্রিয়া সম্পন্ন হয়েছে।");
      console.log(results);
    } catch (error) {
      console.error("ত্রুটি:", error);
      setStatus("ডেটা আনার সময়ে ত্রুটি ঘটেছে।");
    }
  };

  const handleProcessItems = () => {
    const items = ["আইটেম ১", "আইটেম ২", "আইটেম ৩"];
    processItems(items);
  };

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript Async/Await </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Async/Await কী?</h2>
        <p>
          <span className="font-semibold">Async</span> এবং <span className="font-semibold">Await</span> হল জাভাস্ক্রিপ্টের নতুন সিস্ট্যাক্স যা প্রমিসকে আরও সহজভাবে পরিচালনা করতে সাহায্য করে। <span className="font-semibold">Async</span> একটি ফাংশনকে অ্যাসিনক্রোনাস হিসেবে চিহ্নিত করে এবং <span className="font-semibold">Await</span> প্রমিসের ফলাফল পাওয়ার জন্য অপেক্ষা করে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Async/Await কিভাবে কাজ করে?</h2>
        <p className="mb-4">
          <span className="font-semibold">Async</span> ফাংশন একটি প্রমিস রিটার্ন করে। এর ভিতরে <span className="font-semibold">Await</span> ব্যবহৃত হলে, এটি প্রমিস সমাধান হওয়া পর্যন্ত অপেক্ষা করে। এটি কোডকে আরও সিঙ্ক্রোনাস দেখতে সাহায্য করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-400">const</span> processItems = <span className="text-yellow-400">async</span> (items) {"{"}
              <br />
              &nbsp;&nbsp;let results = [];
              <br />
              &nbsp;&nbsp;setStatus(<span className="text-blue-400">"আইটেম প্রক্রিয়া শুরু হচ্ছে..."</span>);
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">try</span> {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">for</span> (const item <span className="text-yellow-400">of</span> items) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const data = <span className="text-yellow-400">await</span> fetchData(item);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results.push(data);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;setStatus(<span className="text-blue-400">"আইটেম প্রক্রিয়া সম্পন্ন হয়েছে।"</span>);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">console</span>.<span className="text-green-300">log</span>(results);
              <br />
              &nbsp;&nbsp;{"}"} <span className="text-yellow-400">catch</span> (error) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">console</span>.<span className="text-green-300">error</span>(<span className="text-blue-400">"ত্রুটি:"</span>, error);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;setStatus(<span className="text-blue-400">"ডেটা আনার সময়ে ত্রুটি ঘটেছে।"</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {`}`};
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">ব্যবহার</h2>
        <p className="mb-4">
          নীচের বোতামটি ক্লিক করে <span className="font-semibold">Async/Await</span> দ্বারা প্রমিসগুলি পরীক্ষা করুন এবং তাদের ফলাফল দেখুন।
        </p>
        <button
          onClick={handleProcessItems}
          className="bg-indigo-500 text-white px-4 py-2 rounded"
        >
          প্রক্রিয়া শুরু করুন
        </button>
        <p className="mt-4">{status}</p>
      </section>
    </div>
  );
};

export default AsyncAwaitTutorial;
