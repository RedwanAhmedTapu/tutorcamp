import React from "react";

const Typography = () => {
  return (
    <div className="p-6 bg-gradient-to-r bg-slate-800 text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        CSS Typography
      </h1>

      {/* 1. Typography Definition */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">1. Typography কি?</h2>
        <p className="bg-slate-900 text-white p-4 rounded-md shadow-md">
          Typography হল টেক্সটের শৈলী এবং প্রদর্শন সম্পর্কিত গুণাবলী যা ওয়েব পেজের
          পঠনযোগ্যতা এবং দর্শনকে উন্নত করে। CSS এর মাধ্যমে বিভিন্ন টেক্সট স্টাইল প্রয়োগ করা হয়।
        </p>
      </section>

      {/* 2. Font Properties */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">2. Font Properties</h2>
        <p className="mb-4">
          Font properties ব্যবহার করে টেক্সটের চেহারা নির্ধারণ করা হয়। নিচে বিভিন্ন প্রোপার্টি এবং তাদের উদাহরণ দেওয়া হল:
        </p>

        {/* Font Family */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Font Family</h3>
          <p className="font-sans bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
            এটা একটি Sans-serif ফন্ট।
          </p>
          <p className="font-serif bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
            এটা একটি Serif ফন্ট।
          </p>
          <p className="font-mono bg-slate-900 text-white p-4 rounded-md shadow-md">
            এটা একটি Monospace ফন্ট।
          </p>
        </div>

        {/* Font Size */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Font Size</h3>
          <p className="text-sm bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
            এটা ছোট ফন্ট সাইজ (Small Text)।
          </p>
          <p className="text-lg bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
            এটা বড় ফন্ট সাইজ (Large Text)।
          </p>
          <p className="text-3xl bg-slate-900 text-white p-4 rounded-md shadow-md">
            এটা খুব বড় ফন্ট সাইজ (Extra Large Text)।
          </p>
        </div>

        {/* Font Weight */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Font Weight</h3>
          <p className="font-thin bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
            এটা পাতলা ফন্ট (Thin Font)।
          </p>
          <p className="font-bold bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
            এটা মোটা ফন্ট (Bold Font)।
          </p>
          <p className="font-extrabold bg-slate-900 text-white p-4 rounded-md shadow-md">
            এটা খুব মোটা ফন্ট (Extra Bold Font)।
          </p>
        </div>

        {/* Font Face */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Font-face</h3>
          <pre className="bg-slate-900 text-white p-4 rounded-md shadow-md">
{`@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont.woff') format('woff');
}`}
          </pre>
        </div>

        {/* Font Style */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Font Style</h3>
          <p className="italic bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
            এটা একটি Italic টেক্সট।
          </p>
          <p className="not-italic bg-slate-900 text-white p-4 rounded-md shadow-md">
            এটা Normal টেক্সট।
          </p>
        </div>
      </section>

      {/* 3. Text Alignment */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">3. Text Alignment</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
          <p className="text-left mb-2">এটা বাম সারিবদ্ধ টেক্সট (Left-aligned text)।</p>
          <p className="text-center mb-2">এটা মাঝখানে সারিবদ্ধ টেক্সট (Center-aligned text)।</p>
          <p className="text-right mb-2">এটা ডান সারিবদ্ধ টেক্সট (Right-aligned text)।</p>
          <p className="text-justify">এটা দুই পাশে সারিবদ্ধ টেক্সট (Justified text)।</p>
        </div>
      </section>

      {/* 4. Text Decoration */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">4. Text Decoration</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md shadow-md mb-2">
          <p className="underline mb-2">এটা Underlined টেক্সট।</p>
          <p className="line-through mb-2">এটা Line-through টেক্সট।</p>
          <p className="no-underline">এটা Normal টেক্সট।</p>
        </div>
      </section>

      {/* 5. Text Transform */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">5. Text Transform</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md shadow-md">
          <p className="uppercase mb-2">এটা Uppercase টেক্সট।</p>
          <p className="lowercase mb-2">এটা Lowercase টেক্সট।</p>
          <p className="capitalize">এটা Capitalized টেক্সট।</p>
        </div>
      </section>

      {/* 6. Word Spacing */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">6. Word Spacing</h2>
        <p className="tracking-wide bg-slate-900 text-white p-4 rounded-md shadow-md">
          এই টেক্সটের শব্দগুলির মধ্যে বড় ফাঁকা (Word Spacing)।
        </p>
      </section>

      {/* 7. Text Shadow */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">7. Text Shadow</h2>
        <p className="shadow-lg bg-slate-900 text-white p-4 rounded-md shadow-md">
          এই টেক্সটের নিচে ছায়া রয়েছে (Text Shadow)।
        </p>
      </section>

      {/* 8. Vertical Alignment */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">8. Vertical Alignment</h2>
        <p className="align-top bg-slate-900 text-white p-4 rounded-md shadow-md">
          এই টেক্সটটি শীর্ষে সারিবদ্ধ (Top aligned)।
        </p>
        <p className="align-middle bg-slate-900 text-white p-4 rounded-md shadow-md">
          এই টেক্সটটি মাঝখানে সারিবদ্ধ (Middle aligned)।
        </p>
        <p className="align-bottom bg-slate-900 text-white p-4 rounded-md shadow-md">
          এই টেক্সটটি নিচে সারিবদ্ধ (Bottom aligned)।
        </p>
      </section>

      {/* 9. Text Indent */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">9. Text Indent</h2>
        <p className="indent-8 bg-slate-900 text-white p-4 rounded-md shadow-md">
          এই টেক্সটটি টেক্সট ইনডেন্ট দিয়ে শুরু হয়েছে।
        </p>
      </section>

      {/* 10. First Line & First Letter */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          10. Pseudo-classes :first-line & :first-letter
        </h2>
        <p className="bg-slate-900 text-white p-4 rounded-md shadow-md first-letter:text-5xl first-line:font-bold">
          প্রথম লাইন এবং প্রথম অক্ষর বিভিন্ন স্টাইলের সাথে হাইলাইট করা যায়।
        </p>
      </section>
    </div>
  );
};

export default Typography;
