import React from "react";

const IntroductionCss = () => {
  const cssSyntax = `selector { property: value; }`;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">CSS পরিচিতি</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. CSS কি?</h2>
        <p>
          CSS (Cascading Style Sheets) হল একটি স্টাইলিং ভাষা যা HTML এর মত মার্কআপ ভাষার সাথে যুক্ত হয়ে ওয়েব পেজের চেহারা নির্ধারণ করে।
        </p>
        <p>
          CSS এর মাধ্যমে HTML উপাদানগুলির রঙ, ফন্ট, বিন্যাস, এবং অন্যান্য দৃষ্টিনন্দন গুণাবলী নির্ধারণ করা হয়।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. CSS Syntax</h2>
        <p>
          CSS এর সাধারণ syntax নিচে দেখানো হল:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-green-400">{cssSyntax}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে <span className="font-semibold">selector</span> হল HTML উপাদান যা আপনি স্টাইল করতে চান, <span className="font-semibold">property</span> হল সেই উপাদানের বৈশিষ্ট্য, এবং <span className="font-semibold">value</span> হল সেই বৈশিষ্ট্যের জন্য নির্ধারিত মান।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. CSS এর উদাহরণ</h2>
        <p>
          নিচে CSS এর একটি সাধারণ উদাহরণ দেওয়া হল যা HTML উপাদানের রঙ এবং ফন্ট সাইজ পরিবর্তন করতে ব্যবহার করা হয়:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">h1 &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>: <span className="text-pink-500">blue</span>;
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">font-size</span>: <span className="text-pink-500">32px</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. CSS এর প্রকারভেদ</h2>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-semibold">Inline CSS:</span> HTML উপাদানের মধ্যে সরাসরি CSS কোড যোগ করা হয়।
          </li>
          <li>
            <span className="font-semibold">Internal CSS:</span> HTML ডকুমেন্টের &lt;head&gt; সেকশনের মধ্যে CSS কোড যোগ করা হয়।
          </li>
          <li>
            <span className="font-semibold">External CSS:</span> আলাদা CSS ফাইলের মাধ্যমে HTML ডকুমেন্টের সাথে স্টাইলিং করা হয়।
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. CSS এর গুরুত্ব</h2>
        <p>
          CSS ওয়েবসাইটের দৃষ্টিনন্দনতা এবং ব্যবহারযোগ্যতা উন্নত করে। এর মাধ্যমে আপনি ওয়েব পেজের চেহারা নিয়ন্ত্রণ করতে পারেন, যা ওয়েবসাইটের ব্যাবহারকারীদের জন্য একটি ভালো অভিজ্ঞতা প্রদান করে।
        </p>
      </section>
    </div>
  );
};

export default IntroductionCss;
