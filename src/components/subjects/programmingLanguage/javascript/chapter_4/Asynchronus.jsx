import React, { useState } from "react";

const AsyncTutorial = () => {
  const [status, setStatus] = useState("বাটনে ক্লিক করুন শুরু করতে...");

  const item=""

  // উদাহরণ অ্যাসিনক্রোনাস ফাংশন
  const fetchData = async (item) => {
    // দেরি সিমুলেট করা
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `ডেটা ${item} এর জন্য`;
  };

  // অ্যাসিনক্রোনাস অপারেশন ম্যাপ ব্যবহার করে
  const processItems = async (items) => {
    try {
      const results = await Promise.all(items.map(async (item) => {
        const data = await fetchData(item);
        return data;
      }));
      return results;
    } catch (error) {
      console.error("ডেটা আনার সময়ে ত্রুটি:", error);
      setStatus("ডেটা আনার সময়ে ত্রুটি ঘটেছে।");
    }
  };

  const handleProcessItems = async () => {
    setStatus("আইটেম প্রক্রিয়া শুরু হচ্ছে...");
    const items = ["আইটেম ১", "আইটেম ২", "আইটেম ৩"];
    const results = await processItems(items);
    console.log(results);
    setStatus("আইটেম প্রক্রিয়া সম্পন্ন হয়েছে।");
  };

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript অ্যাসিনক্রোনাস </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">অ্যাসিনক্রোনাস কী?</h2>
        <p>
          <span className="font-semibold">অ্যাসিনক্রোনাস</span> অপারেশন হলো এমন অপারেশন যা একেবারে সাথে সাথে সম্পন্ন হয় না এবং প্রোগ্রামটি মূল কোড চালানোর সময় অপেক্ষা করে না। এটি মূলত লম্বা সময়ের কাজগুলো (যেমন নেটওয়ার্ক রিকোয়েস্ট, টাইমার) পরিচালনা করতে ব্যবহৃত হয়।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">অ্যাসিনক্রোনাস অপারেশন কিভাবে কাজ করে?</h2>
        <p className="mb-4">
          অ্যাসিনক্রোনাস অপারেশনগুলি সাধারণত <span className="font-semibold">Promise</span> অথবা <span className="font-semibold">async/await</span> ব্যবহার করে পরিচালিত হয়। <span className="font-semibold">Promise</span> একটি অবজেক্ট যা ভবিষ্যতের একটি মান বা ত্রুটির জন্য একটি হ্যান্ডলার প্রদান করে, এবং <span className="font-semibold">async/await</span> সিনট্যাক্স এই প্রক্রিয়াকে আরো সহজ এবং পাঠযোগ্য করে তোলে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">অ্যাসিনক্রোনাস অপারেশন উদাহরণ</h2>
        <p className="mb-4">
          এই উদাহরণটি দেখায় কিভাবে অ্যাসিনক্রোনাস অপারেশন ব্যবহার করে ডেটা প্রক্রিয়া করা যায়। বাটনে ক্লিক করে আইটেম প্রক্রিয়া শুরু করুন।
        </p>
        <button
          onClick={handleProcessItems}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-500"
        >
          আইটেম প্রক্রিয়া শুরু করুন
        </button>
        <p className="mt-4">{status}</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-400">const</span> fetchData = async (item) => {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">await</span> <span className="text-white">new Promise</span>((resolve) => <span className="text-white">setTimeout</span>(resolve, 1000)); <span className="text-gray-500">// দেরি সিমুলেট করা</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">return</span> <span className="text-blue-400">`ডেটা ${item} এর জন্য`</span>;
              <br />
              {`}`}
              <br />
              <br />
              <span className="text-yellow-400">const</span> processItems = async (items) => {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">try</span> {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">const</span> results = <span className="text-white">await</span> <span className="text-white">Promise.all</span>(items.<span className="text-green-300">map</span>(async (item) => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">const</span> data = <span className="text-white">await</span> fetchData(item);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">return</span> data;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"});
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">return</span> results;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">catch</span> (error) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">console</span>.<span className="text-green-300">error</span>(<span className="text-blue-400">"ডেটা আনার সময়ে ত্রুটি:"</span>, error);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">setStatus</span>(<span className="text-blue-400">"ডেটা আনার সময়ে ত্রুটি ঘটেছে।"</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">অ্যাসিনক্রোনাস ত্রুটি পরিচালনা</h2>
        <p className="mb-4">
          অ্যাসিনক্রোনাস অপারেশনগুলিতে ত্রুটি পরিচালনা করা গুরুত্বপূর্ণ। উদাহরণস্বরূপ, যদি কোনো সমস্যা হয় বা নেটওয়ার্ক রিকোয়েস্ট ব্যর্থ হয়, তাহলে আমাদের সেই ত্রুটির সমাধান করার জন্য কোডে <span className="font-semibold">try/catch</span> ব্লক ব্যবহার করতে হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-400">const</span> fetchData = async (item) => {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">try</span> {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">await</span> <span className="text-white">new Promise</span>((resolve) => <span className="text-white">setTimeout</span>(resolve, 1000));
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">return</span> <span className="text-blue-400">`ডেটা ${item} এর জন্য`</span>;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">catch</span> (error) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">console</span>.<span className="text-green-300">error</span>(<span className="text-blue-400">"ত্রুটি:"</span>, error);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">throw</span> error;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {`}`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default AsyncTutorial;
