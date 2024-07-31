import React, { useState } from "react";

const PromiseTutorial = () => {
  const [status, setStatus] = useState("বাটনে ক্লিক করুন শুরু করতে...");
  const item="";

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

  // প্রমিস চেইনিং উদাহরণ
  const processItems = (items) => {
    let results = [];
    setStatus("আইটেম প্রক্রিয়া শুরু হচ্ছে...");

    return items.reduce((promise, item) => {
      return promise
        .then((result) => {
          return fetchData(item)
            .then((data) => {
              results.push(data);
              return results;
            });
        })
        .catch((error) => {
          console.error("ত্রুটি:", error);
          setStatus("ডেটা আনার সময়ে ত্রুটি ঘটেছে।");
          throw error;
        });
    }, Promise.resolve([]))
    .then(() => {
      setStatus("আইটেম প্রক্রিয়া সম্পন্ন হয়েছে।");
      console.log(results);
    });
  };

  const handleProcessItems = () => {
    const items = ["আইটেম ১", "আইটেম ২", "আইটেম ৩"];
    processItems(items);
  };

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript প্রমিস </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">প্রমিস কী?</h2>
        <p>
          <span className="font-semibold">প্রমিস</span> হলো একটি অবজেক্ট যা ভবিষ্যতে একটি মান বা ত্রুটির জন্য হ্যান্ডলার প্রদান করে। এটি আসিনক্রোনাস অপারেশনের ফলাফল পরিচালনা করতে ব্যবহৃত হয়।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">প্রমিস কিভাবে কাজ করে?</h2>
        <div className="mb-4">
          একটি প্রমিস তিনটি স্টেটে থাকে:
          <ul className="list-disc list-inside">
            <li><span className="font-semibold">Pending</span>: প্রমিসটি এখনও সমাধান হয়নি।</li>
            <li><span className="font-semibold">Fulfilled</span>: প্রমিসটি সফলভাবে সমাধান হয়েছে এবং মান প্রদান করেছে।</li>
            <li><span className="font-semibold">Rejected</span>: প্রমিসটি ব্যর্থ হয়েছে এবং একটি ত্রুটি প্রদান করেছে।</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">প্রমিস কিভাবে ব্যবহার করবেন?</h2>
        <p className="mb-4">
          প্রমিস ব্যবহারের জন্য, আপনাকে <span className="font-semibold">.then()</span> এবং <span className="font-semibold">.catch()</span> মেথড ব্যবহার করতে হবে। <span className="font-semibold">.then()</span> মেথডটি প্রমিস সফল হলে কল হয়, এবং <span className="font-semibold">.catch()</span> মেথডটি ত্রুটি হলে কল হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-400">const</span> fetchData = (item) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">return</span> new <span className="text-white">Promise</span>((resolve, reject) => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">setTimeout</span>(() => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">if</span> (Math.random() > 0.2) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">resolve</span>(<span className="text-blue-400">`ডেটা ${item} এর জন্য`</span>);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} <span className="text-yellow-400">else</span> {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">reject</span>(<span className="text-blue-400">"ডেটা আনার সময়ে ত্রুটি"</span>);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;{"}"}, 1000);
              <br />
              {`}`};
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">প্রমিস চেইনিং</h2>
        <p className="mb-4">
          একাধিক প্রমিসকে চেইন করা হলে তারা একটির পরে আরেকটি চলবে। এটি অত্যন্ত কার্যকরী যখন আপনি একাধিক অ্যাসিনক্রোনাস অপারেশন চালাতে চান একটি নির্দিষ্ট ক্রমে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-400">const</span> processItems = (items) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">return</span> items.<span className="text-green-300">reduce</span>((promise, item) => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return promise
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">.then</span>((result) => fetchData(item)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">.then</span>((data) => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results.push(data);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">return</span> results;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"});
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"})
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-400">catch</span>((error) => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">console</span>.<span className="text-green-300">error</span>(<span className="text-blue-400">"ত্রুটি:"</span>, error);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">throw</span> error;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"})
              <br />
              &nbsp;&nbsp;.<span className="text-yellow-400">then</span>(() => {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;setStatus(<span className="text-blue-400">"আইটেম প্রক্রিয়া সম্পন্ন হয়েছে।"</span>);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">console</span>.<span className="text-green-300">log</span>(results);
              <br />
              &nbsp;&nbsp;{"}"});
              <br />
              {`}`};
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">ব্যবহার</h2>
        <p className="mb-4">
          নীচের বোতামটি ক্লিক করে প্রমিসগুলি পরীক্ষা করুন এবং তাদের ফলাফল দেখুন।
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

export default PromiseTutorial;
