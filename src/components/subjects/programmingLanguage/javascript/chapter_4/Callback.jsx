import React, { useState } from "react";

const CallbackTutorial = () => {
  const [status, setStatus] = useState("বাটনে ক্লিক করুন শুরু করতে...");
  const count = 3;  // This variable is defined but not used
  const item = "";  // This variable is defined but not used

  // কলব্যাক ফাংশন
  const callbackFunction = (message) => {
    console.log(message);
    setStatus(message);
  };

  // কলব্যাক অপারেশন সিমুলেট করুন
  const startCallback = () => {
    setStatus("কলব্যাক শুরু হয়েছে...");

    // setTimeout দিয়ে দেরি সিমুলেট করা
    setTimeout(() => {
      callbackFunction("কলব্যাক অপারেশন সম্পন্ন হয়েছে।");
    }, 2000); // ২ সেকেন্ড দেরি
  };

  // কলব্যাক অপারেশনটি অ্যাসিনক্রোনাস লগিং সহ
  const startLoggingWithCallback = () => {
    setStatus("লগিং শুরু হয়েছে...");

    const logInterval = 1000; // ১ সেকেন্ড
    const totalLogs = 5; // লগ সংখ্যা

    // কলব্যাক ফাংশনের মাধ্যমে লগিং সিমুলেট করা
    const logMessages = (callback) => {
      let count = 0;
      const intervalId = setInterval(() => {
        console.log(`লগ বার্তা ${count + 1}`);
        setStatus(`লগ বার্তা ${count + 1}`);
        count += 1;

        if (count >= totalLogs) {
          clearInterval(intervalId);
          callback("লগিং সম্পন্ন হয়েছে।");
        }
      }, logInterval);
    };

    // কলব্যাক ফাংশন কল করা
    logMessages(callbackFunction);
  };

  // উদাহরণ অ্যাসিনক্রোনাস ফাংশন
  const fetchData = async (item) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // দেরি সিমুলেট করা
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
      <h1 className="text-3xl font-bold mb-4">JavaScript কলব্যাক ও অ্যাসিনক্রোনাস </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Callback কী?</h2>
        <p>
          <span className="font-semibold">Callback</span> হলো একটি ফাংশন যা অন্য একটি ফাংশনে প্যারামিটার হিসেবে পাস করা হয় এবং সেই ফাংশনটি সম্পন্ন হওয়ার পরে কল করা হয়। কলব্যাক ফাংশনগুলি সাধারণত অ্যাসিনক্রোনাস অপারেশনগুলো সম্পন্ন করার জন্য ব্যবহৃত হয়।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Callback এর ব্যবহার কিভাবে?</h2>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-semibold">অ্যাসিনক্রোনাস অপারেশন:</span> অনেক সময় আমাদের কিছু কাজ করতে হয় যা কিছু সময় নেয়, যেমন ডেটা লোড করা বা টাইমার সেট করা। কলব্যাক ফাংশন এই ধরনের অপারেশনগুলোর জন্য ব্যবহৃত হয়, যা একটি নির্দিষ্ট সময় পরে বা কোনো নির্দিষ্ট ঘটনা ঘটলে কল করা হয়।
          </li>
          <li>
            <span className="font-semibold">ডেটা প্রক্রিয়াকরণ:</span> ডেটা প্রক্রিয়াকরণের জন্য কলব্যাক ফাংশন ব্যবহার করা হয়। উদাহরণস্বরূপ, একটি অ্যারের উপরে অপারেশন করার জন্য কলব্যাক ফাংশন ব্যবহার করা যায়।
          </li>
          <li>
            <span className="font-semibold">ইভেন্ট হ্যান্ডলিং:</span> ওয়েব অ্যাপ্লিকেশনগুলিতে ব্যবহারকারীর ইন্টারঅ্যাকশন (যেমন ক্লিক, স্ক্রোল) ট্র্যাক করার জন্য কলব্যাক ফাংশন ব্যবহার করা হয়।
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">কেন কলব্যাক ব্যবহার করবেন?</h2>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-semibold">অ্যাসিনক্রোনাস প্রোগ্রামিং:</span> কলব্যাক ফাংশন অ্যাসিনক্রোনাস অপারেশনগুলো পরিচালনা করতে সাহায্য করে, যাতে প্রধান ফ্লো থেমে না গিয়ে কাজ চলতে থাকে।
          </li>
          <li>
            <span className="font-semibold">বিনামূল্যে কোড রিওজেবিলিটি:</span> কলব্যাক ফাংশন ব্যবহার করে কোড পুনরায় ব্যবহারযোগ্য এবং মডুলার করা যায়।
          </li>
          <li>
            <span className="font-semibold">ইভেন্ট-ড্রিভেন প্রোগ্রামিং:</span> ইউজার ইন্টারঅ্যাকশন এবং অন্যান্য ইভেন্ট ট্র্যাক করতে কলব্যাক ব্যবহার করা হয়, যা ইভেন্ট-ড্রিভেন প্রোগ্রামিংয়ে সহায়ক।
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">কলব্যাক ফাংশন উদাহরণ</h2>
        <p className="mb-4">
          এই উদাহরণটি দেখায় কিভাবে কলব্যাক ফাংশন ব্যবহার করে অ্যাসিনক্রোনাস অপারেশন পরিচালনা করা যায়। বাটনে ক্লিক করে কলব্যাক অপারেশন শুরু করুন।
        </p>
        <button
          onClick={startCallback}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-500"
        >
          কলব্যাক শুরু করুন
        </button>
        <p className="mt-4">{status}</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-400">const</span> callbackFunction = (message) => {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-green-300">console</span>.<span className="text-green-300">log</span>(message);
              <br />
              &nbsp;&nbsp;<span className="text-white">setStatus</span>(message);
              <br />
              {`}`}
              <br />
              <br />
              <span className="text-yellow-400">const</span> startCallback = () => {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-white">setStatus</span>(<span className="text-blue-400">"কলব্যাক শুরু হয়েছে..."</span>);
              <br />
              &nbsp;&nbsp;<span className="text-white">setTimeout</span>(() => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">callbackFunction</span>(<span className="text-blue-400">"কলব্যাক অপারেশন সম্পন্ন হয়েছে।"</span>);
              <br />
              &nbsp;&nbsp;{"}"}, 2000); <span className="text-gray-500">// ২ সেকেন্ড দেরি</span>
              <br />
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">কলব্যাক সহ লগিং উদাহরণ</h2>
        <p className="mb-4">
          এই উদাহরণটি কলব্যাক ফাংশন ব্যবহার করে লগিং অপারেশন সিমুলেট করে। বাটনে ক্লিক করলে লগিং শুরু হবে।
        </p>
        <button
          onClick={startLoggingWithCallback}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-500"
        >
          লগিং শুরু করুন
        </button>
        <p className="mt-4">{status}</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-400">const</span> logMessages = (callback) => {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">let</span> count = 0;
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">const</span> intervalId = <span className="text-white">setInterval</span>(() => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">console</span>.<span className="text-green-300">log</span>(<span className="text-blue-400">`লগ বার্তা ${count + 1}`</span>);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">setStatus</span>(<span className="text-blue-400">`লগ বার্তা ${count + 1}`</span>);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;count += 1;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">if</span> (count >= <span className="text-yellow-400">totalLogs</span>) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">clearInterval</span>(intervalId);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">callback</span>(<span className="text-blue-400">"লগিং সম্পন্ন হয়েছে।"</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {`}`};
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">অ্যাসিনক্রোনাস অপারেশন উদাহরণ</h2>
        <p className="mb-4">
          এই উদাহরণটি দেখায় কিভাবে অ্যাসিনক্রোনাস অপারেশন সিমুলেট করে এবং আইটেম প্রক্রিয়া করে। বাটনে ক্লিক করলে আইটেম প্রক্রিয়া শুরু হবে।
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
    </div>
  );
};

export default CallbackTutorial;
