import React from "react";

const CommentTutorial = () => {
  // Code text for formatting
  const singleLineComment = `//`;
  const multiLineStart = `/*`;
  const multiLineEnd = `*/`;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript মন্তব্য টিউটোরিয়াল</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. একক-লাইন মন্তব্য</h2>
        <p>
          একক-লাইন মন্তব্য <code>{singleLineComment}</code> দ্বারা শুরু হয়। এটি একটি লাইনের মন্তব্য যোগ করতে ব্যবহৃত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{singleLineComment}</span> এই একটি একক-লাইন মন্তব্য
              <br />
              <span className="text-white font-semibold">const x = 10;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          একক-লাইন মন্তব্যের মাধ্যমে একটি লাইনে মন্তব্য করা হয় যা কোডের বাকি অংশের জন্য কার্যকরীভাবে কোনো প্রভাব ফেলে না।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. বহু-লাইন মন্তব্য</h2>
        <p>
          বহু-লাইন মন্তব্য <code>{multiLineStart}</code> এবং <code>{multiLineEnd}</code> দ্বারা ঘেরা থাকে। এটি একাধিক লাইনের জন্য মন্তব্য করতে ব্যবহৃত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{multiLineStart}</span>
              <br />
              &nbsp;&nbsp;এই মন্তব্যটি একাধিক লাইনে বিস্তৃত।
              <br />
              &nbsp;&nbsp;এটি কোডের বিশদ ব্যাখ্যার জন্য ব্যবহার করা হয়।
              <br />
              <span className="text-yellow-600">{multiLineEnd}</span>
              <br />
              <span className="text-white font-semibold">const y = 20;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          বহু-লাইন মন্তব্য একাধিক লাইনের জন্য মন্তব্য করার সুযোগ দেয়, যা কোডের অংশের মধ্যে বিশদ ব্যাখ্যা প্রদান করতে সহায়ক।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. মন্তব্যের সেরা অনুশীলন</h2>
        <ul className="list-disc ml-6">
          <li>
            মন্তব্যগুলি পরিষ্কার এবং সংক্ষিপ্ত হওয়া উচিত। কোডের উদ্দেশ্য বা জটিলতার একটি সংক্ষিপ্ত ব্যাখ্যা প্রদান করা উচিত।
          </li>
          <li>
            অপ্রয়োজনীয় মন্তব্য এড়ানো উচিত যা কোড পড়ার সময় বিভ্রান্তি সৃষ্টি করতে পারে।
          </li>
          <li>
            কোড পরিবর্তনের সময় মন্তব্যও আপডেট করুন যাতে তারা সঠিক এবং প্রাসঙ্গিক থাকে।
          </li>
          <li>
            মন্তব্যগুলি কোডের লজিক বর্ণনা করতে সাহায্য করতে পারে, কিন্তু কোডের নিজস্ব স্পষ্টতা সর্বদা প্রাধান্য পাওয়া উচিত।
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          JavaScript-এ মন্তব্য কোডে ব্যাখ্যা যোগ করার জন্য ব্যবহৃত হয়। একক-লাইন মন্তব্য <code>{singleLineComment}</code> দ্বারা শুরু হয় এবং বহু-লাইন মন্তব্য <code>{multiLineStart}</code> এবং <code>{multiLineEnd}</code> দ্বারা ঘেরা থাকে। মন্তব্যগুলি পরিষ্কার, প্রাসঙ্গিক এবং আপডেট থাকা উচিত।
        </p>
      </section>
    </div>
  );
};

export default CommentTutorial;
