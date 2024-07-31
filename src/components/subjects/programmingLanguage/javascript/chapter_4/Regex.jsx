import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const RegexTutorial = () => {
  const [input, setInput] = useState("");

  const [videoId, setVideoId] = useState("");

  // Code text for formatting
  const curlystart = `{`;
  const curlyend = `}`;
  const textMatch = `"bac54356acf234"`;

  const regex = `/pattern/flags`;
  const match = `match`;
  const search = `search`;
  const replace = `replace`;
  const test = `test`;
  const exec = `exec`;
  const split = `split`;
  const textSample = `text`;
  const samplePattern = `/\\d+/g`;
  const parenthesisStart = `(`;
  const parenthesisEnd = `)`;
  const squareBracketStart = `[`;
  const squareBracketEnd = `]`;
  const semicolon = `;`;
  const cnsl = `console`;
  const log = `log`;
  // const text = "bac54356acf234";
  // const regexx = /\d+/g;
  // let matchh;
  // while ((matchh = regexx.exec(text))) {
  //   console.log(matchh);
  // }

  const text = "abc123!@#";
  const regexx = /\w+/g;
  let matchs;
  while ((matchs = regexx.exec(text))){
  console.log(matchs); 

  }
  // ["abc"], ["123"]
  
  

  // Extract Video ID from YouTube Link
  const extractVideoId = () => {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|user\/.*\/(?:playlist|videos)\/)?([^"&?\/\s]{11})/;
    const match = input.match(youtubeRegex);
    setVideoId(match ? match[1] : "ভিডিও আইডি পাওয়া যায়নি");
  };

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript Regex </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Regex এর পরিচিতি</h2>
        <p>
          রেগুলার এক্সপ্রেশন (Regex) হলো একটি শক্তিশালী টুল যা পাঠ্যতে নির্দিষ্ট
          প্যাটার্ন অনুসন্ধান, মেলানো এবং মডিফাই করতে ব্যবহৃত হয়। আসুন
          JavaScript এ বিভিন্ন প্রকারের Regex অপারেশন গুলি অন্বেষণ করি।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Regex তৈরি করা</h2>
        <p>
          একটি রেগুলার এক্সপ্রেশন তৈরি করতে আপনি{" "}
          <span className="text-yellow-600">{regex}</span> সিনট্যাক্স ব্যবহার
          করতে পারেন। উদাহরণস্বরূপ:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-green-300 font-semibold">
                {samplePattern}
                <br />
                <span className="text-slate-300">or</span>
                <br />
                const regexCons = new RegExp("\\d", "g");
              </span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          match()—এটা স্ট্রিংয়ের মেথড, স্ট্রিং থেকে কাঙ্ক্ষিত ক্যারেক্টারগুলো
          ম্যাচ করে অ্যারে আকারে রিটার্ন করে । কিছু না পেলে null রিটার্ন করবে
          উপরের উদাহরণটি এমন একটি প্যাটার্ন যা সংখ্যা মেলানোর জন্য ব্যবহৃত হয়।{" "}
          <code>\\d</code> হলো সংখ্যা বোঝানোর জন্য ব্যবহৃত হয় এবং <code>g</code>{" "}
          ফ্ল্যাগটি যতগুলো মিল পাবে তার সবগুলো রিটার্ন করে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. match() পদ্ধতি</h2>
        <p>
          <span className="text-yellow-600">{match}</span> এটা স্ট্রিংয়ের মেথড,
          স্ট্রিং থেকে কাঙ্ক্ষিত ক্যারেক্টারগুলো ম্যাচ করে অ্যারে আকারে রিটার্ন
          করে । কিছু না পেলে null রিটার্ন করবে
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const text=<span className="text-red-500">{textMatch}</span>
              <br />
              const result = {textSample}.{match}({samplePattern});
              <br />
              <span className="text-violet-300 font-semibold">console</span>.
              <span className="text-green-700 font-semibold">log</span>(result);
            </code>
          </pre>
        </div>
        <p className="mt-2">
          উপরের কোডটি <code>{textSample}</code> এ থাকা সব সংখ্যাকে একটি অ্যারেতে
          রিটার্ন করবে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line"> ['54356', '234']</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. search() পদ্ধতি</h2>
        <p>
          <span className="text-yellow-600">{search}</span> পদ্ধতিটি একটি
          স্ট্রিংয়ের মধ্যে প্যাটার্ন অনুসন্ধান করে এবং প্রথম মিল পাওয়ার সাথে
          সাথে ইনডেক্স রিটার্ন করে। যদি কোনো মিল না পাওয়া যায়, এটি -1 রিটার্ন
          করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const text=<span className="text-red-500">{textMatch}</span>
              <br />
              const position = {textSample}.{search}({samplePattern});
              <br />
              <span className="text-violet-300 font-semibold">console</span>.
              <span className="text-green-700 font-semibold">log</span>
              (position);
            </code>
          </pre>
        </div>
        <p className="mt-2">এই উদাহরণটি প্রথম মিলে ইনডেক্স রিটার্ন করবে।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">3</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. replace() পদ্ধতি</h2>
        <p>
          <span className="text-yellow-600">{replace}</span> পদ্ধতিটি একটি
          স্ট্রিংয়ের নির্দিষ্ট প্যাটার্ন মেলানো এবং পরিবর্তন করতে ব্যবহৃত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const text=<span className="text-red-500">{textMatch}</span>
              <br />
              const newText = {textSample}.{replace}({samplePattern}, 'x');
              <br />
              <span className="text-violet-300 font-semibold">console</span>.
              <span className="text-green-700 font-semibold">log</span>
              (newText);
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই কোডটি স্ট্রিংয়ে সব সংখ্যাকে 'x' দ্বারা প্রতিস্থাপন করবে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">// Output: bacxacfx</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. test() পদ্ধতি</h2>
        <p>
          <span className="text-yellow-600">{test}</span> পদ্ধতিটি একটি বুলিয়ান
          মান রিটার্ন করে যা নির্দিষ্ট প্যাটার্ন মেলে কিনা নির্দেশ করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const text=<span className="text-red-500">{textMatch}</span>
              <br />
              const isMatch = {samplePattern}.{test}({textSample});
              <br />
              <span className="text-violet-300 font-semibold">console</span>.
              <span className="text-green-700 font-semibold">log</span>
              (isMatch);
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই উদাহরণটি চেক করবে স্ট্রিংয়ে কোনো সংখ্যা আছে কিনা।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">true</code>
          </pre>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Exec পদ্ধতি</h2>
        <p>
          The <span className="text-yellow-600">`exec`</span>
          রেগুলার এক্সপ্রেশনের মেথড, স্ট্রিংয়ে ম্যাচ করতে ব্যবহার করা হয়। এই
          স্পেশাল মেথড সাধারণত লুপের সঙ্গে ব্যবহার করা হয়। এটা অ্যারেতে
          ম্যাচগুলোর কিছু ইনফরমেশনসহ বা কিছু না পেলে null রিটার্ন করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const text=<span className="text-red-500">{textMatch}</span>
              <br />
              const regex = /\d+/g;
              <br />
              let match;
              <br />
              while ((match = regex.exec(text)) ) {curlystart}
              <br />
              <span className="text-violet-300 font-semibold">console</span>.
              <span className="text-green-700 font-semibold">log</span>
              (match);
              <br />
              {curlyend}
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এভাবে লুপ ইউজ করলে এটা প্রতিটা ম্যাচের জন্য কিছু ইনফরমেশনসহ অ্যারে
          রিটার্ন করবে। এখানে যেহেতু দুইটা ম্যাচ আছে, তাই দুইবার দুইটা ম্যাচের
          জন্য ইনফরমেনশনসহ দুইটা অ্যারে রিটার্ন করবে
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              ['54356', index: 3, input: 'bac54356acf234', groups: undefined]
              <br />
              ['234', index: 11, input: 'bac54356acf234', groups: undefined]
            </code>
          </pre>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Split পদ্ধতি</h2>
        <p>
          The <span className="text-yellow-600">`split`</span>মেথডটি একটি
          স্ট্রিংকে সাবস্ট্রিংগুলোতে বিভক্ত করে একটি অ্যারে হিসেবে রিটার্ন করে।
          বিভাজক হিসাবে একটি রেগুলার এক্সপ্রেশন বা একটি নির্দিষ্ট স্ট্রিং
          ব্যবহার করা যেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const text=<span className="text-red-500">{textMatch}</span>
              <br />
              const substring = {samplePattern}.{split}({textSample});
              <br />
              <span className="text-violet-300 font-semibold">console</span>.
              <span className="text-green-700 font-semibold">log</span>
              (substring);
            </code>
          </pre>
        </div>
        <p className="mt-2">
         এখানে  d+ মেটাক্যারেক্টারটি সবগুলো সংখ্যা একটি গ্রুপ হিসেবে নেয়। <br/><br/>
          প্রথম ম্যাচ (54356) এর আগে স্ট্রিংয়ের অংশটি হলো "bac"।
          <br />
          <br />
          প্রথম ম্যাচ (54356) এবং দ্বিতীয় ম্যাচ (234) এর মধ্যে স্ট্রিংয়ের
          অংশটি হলো "acf"।
          <br />
          <br />
          শেষ ম্যাচ (234) এর পরের স্ট্রিংয়ের অংশটি একটি খালি স্ট্রিং ""।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">[ "bac", "acf" , ""]</code>
          </pre>
        </div>
      </section>
      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-2">রেগুলার এক্সপ্রেশন (Regex)</h2>
  <p>
    রেগুলার এক্সপ্রেশন (regex) হলো স্ট্রিংয়ে চরিত্রের সংমিশ্রণ মেলানোর জন্য ব্যবহৃত একটি প্যাটার্ন। এখানে কিছু সাধারণ মেটাক্যারেক্টার, কোয়ান্টিফায়ার, এবং ব্র্যাকেটের বিবরণ দেওয়া হলো।
  </p>

  <div className="bg-gray-900 p-4 rounded-md mt-2">
    <h3 className="text-xl font-semibold mb-2">১. মেটাক্যারেক্টার</h3>
    <p>
      মেটাক্যারেক্টার হলো বিশেষ চিহ্ন যা regex প্যাটার্নে নির্দিষ্ট অর্থ বহন করে।
    </p>
    <ul className="list-disc ml-6">
      <li><span className="text-yellow-600">.</span> — নতুন লাইন ব্যতীত যেকোনো একক চরিত্র মেলে।</li>
      <li><span className="text-yellow-600">\d</span> — যেকোনো ডিজিট মেলে (যেমন [0-9]).</li>
      <li><span className="text-yellow-600">\w</span> — যেকোনো শব্দ চরিত্র মেলে (আলফানিউমেরিক এবং আন্ডারস্কোরসহ)।</li>
      <li><span className="text-yellow-600">\s</span> — যেকোনো হোয়াইটস্পেস চরিত্র মেলে (স্পেস, ট্যাব, নতুন লাইন)।</li>
      <li><span className="text-yellow-600">\D</span> — যেকোনো নন-ডিজিট চরিত্র মেলে।</li>
      <li><span className="text-yellow-600">\W</span> — যেকোনো নন-ওয়ার্ড চরিত্র মেলে।</li>
      <li><span className="text-yellow-600">\S</span> — যেকোনো নন-হোয়াইটস্পেস চরিত্র মেলে।</li>
      <li><span className="text-yellow-600">^</span> — স্ট্রিংয়ের শুরুতে মেলে।</li>
      <li><span className="text-yellow-600">$</span> — স্ট্রিংয়ের শেষে মেলে।</li>
      <li><span className="text-yellow-600">\b</span> — একটি শব্দের সীমান্তে মেলে।</li>
      <li><span className="text-yellow-600">\B</span> — একটি নন-শব্দের সীমান্তে মেলে।</li>
    </ul>
  </div>

  <div className="bg-gray-900 p-4 rounded-md mt-2">
    <h3 className="text-xl font-semibold mb-2">২. কোয়ান্টিফায়ার</h3>
    <p>
      কোয়ান্টিফায়ার নির্ধারণ করে কতবার একটি চরিত্র, গ্রুপ, বা চরিত্র ক্লাস মেলা উচিত।
    </p>
    <ul className="list-disc ml-6">
      <li><span className="text-yellow-600">*</span> — পূর্ববর্তী উপাদানের 0 বা তার বেশি ঘটনার সাথে মেলে।</li>
      <li><span className="text-yellow-600">+</span> — পূর্ববর্তী উপাদানের 1 বা তার বেশি ঘটনার সাথে মেলে।</li>
      <li><span className="text-yellow-600">?</span> — পূর্ববর্তী উপাদানের 0 বা 1 ঘটনার সাথে মেলে।</li>
      <li><span className="text-yellow-600">{'{n}'}</span> — পূর্ববর্তী উপাদানের ঠিক n সংখ্যক ঘটনার সাথে মেলে।</li>
      <li><span className="text-yellow-600">{'{n,}'}</span> — পূর্ববর্তী উপাদানের n বা তার বেশি ঘটনার সাথে মেলে।</li>
      <li><span className="text-yellow-600">{'{n,m}'}</span> — পূর্ববর্তী উপাদানের n থেকে m সংখ্যক ঘটনার সাথে মেলে।</li>
    </ul>
  </div>

  <div className="bg-gray-900 p-4 rounded-md mt-2">
    <h3 className="text-xl font-semibold mb-2">৩. ব্র্যাকেটস</h3>
    <p>
      ব্র্যাকেটস একটি চরিত্র ক্লাস সংজ্ঞায়িত করতে ব্যবহৃত হয়। একটি চরিত্র ক্লাস কোন একটি চরিত্রের মধ্য থেকে যে কোনও একটিকে মেলে।
    </p>
    <ul className="list-disc ml-6">
      <li><span className="text-yellow-600">[abc]</span> — a, b, বা c এর যেকোনো একটির সাথে মেলে।</li>
      <li><span className="text-yellow-600">[^abc]</span> — a, b, বা c ব্যতীত যেকোনো চরিত্রের সাথে মেলে।</li>
      <li><span className="text-yellow-600">[a-z]</span> — a থেকে z পর্যন্ত যেকোনো ছোট হাতের অক্ষরের সাথে মেলে।</li>
      <li><span className="text-yellow-600">[A-Z]</span> — A থেকে Z পর্যন্ত যেকোনো বড় হাতের অক্ষরের সাথে মেলে।</li>
      <li><span className="text-yellow-600">[0-9]</span> — 0 থেকে 9 পর্যন্ত যেকোনো ডিজিটের সাথে মেলে।</li>
    </ul>
  </div>

  <div className="bg-gray-900 p-4 rounded-md mt-2">
    <h3 className="text-xl font-semibold mb-2">৪. কোড উদাহরণ</h3>
    <p>
      নিচে কিছু regex উপাদান ব্যবহারের উদাহরণ দেওয়া হলো।
    </p>
    <div className="bg-gray-800 p-2 rounded-md mt-2">
      <pre>
        <code className="whitespace-pre-line">
          const text = <span className="text-red-500">"abc123!@#"</span>;
          <br />
          <br />
          <span className="text-green-700">// ১. match() ফাংশন উদাহরণ</span>
          <br />
          const digits = text.match(/<span className="text-yellow-600">\d+</span>/);
          <br />
          <span className="text-violet-300 font-semibold">console</span>.
          <span className="text-green-700 font-semibold">log</span>(digits); <span className="text-gray-500">// ["123"]</span>
          <br />
          <br />
          <span className="text-green-700">// ২. exec() ফাংশন উদাহরণ</span>
          <br />
          const regex = /<span className="text-yellow-600">\w+</span>/g;
          <br />
          let match;
          <br />
          <span className="text-violet-300 font-semibold">while</span> (match = regex.exec(text)) <span className="text-indigo-500">{curlystart}</span>
          <br />
          &nbsp; &nbsp;<span className="text-violet-300 font-semibold">console</span>.
          <span className="text-green-700 font-semibold">log</span>(match);
          <br />
         <span className="text-indigo-500">{curlyend}</span>
          <br />
          <span className="text-gray-500">// ["abc123"]</span>
          <br />
          <br />
          <span className="text-green-700">// ৩. split() ফাংশন উদাহরণ</span>
          <br />
          const words = text.split(/<span className="text-yellow-600">\W</span>+/);
          <br />
          <span className="text-violet-300 font-semibold">console</span>.
          <span className="text-green-700 font-semibold">log</span>(words); <span className="text-gray-500">// ["abc", "123"]</span>
          <br />
          <br />
          <span className="text-green-700">// ৪. replace() ফাংশন উদাহরণ</span>
          <br />
          const replaced = text.replace(/<span className="text-yellow-600">[^a-zA-Z0-9]</span>/g, '');
          <br />
          <span className="text-violet-300 font-semibold">console</span>.
          <span className="text-green-700 font-semibold">log</span>(replaced); <span className="text-gray-500">// "abc123"</span>
        </code>
      </pre>
    </div>
  </div>

  
</section>
 


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          YouTube ভিডিও আইডি বের করুন
        </h2>
        <p className="mb-4">
          একটি YouTube লিঙ্ক থেকে ভিডিও আইডি বের করার জন্য একটি রেগুলার
          এক্সপ্রেশন ব্যবহার করা হয়।
        </p>
        <label className="block mb-2">
          <span className="font-semibold">YouTube লিঙ্ক:</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded placeholder:text-white text-white bg-gray-700"
          />
        </label>
        <button
          onClick={extractVideoId}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-500"
        >
          ভিডিও আইডি বের করুন
        </button>
        <p className="mt-4">{videoId}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          রেগুলার এক্সপ্রেশন একটি শক্তিশালী টুল যা পাঠ্য প্রক্রিয়াজাতকরণ
          কার্যগুলি সহজ করে তোলে।{" "}
          <span className="text-yellow-600">{match}</span> পদ্ধতি মেলে আনা
          আইটেমগুলি রিটার্ন করে,{" "}
          <span className="text-yellow-600">{search}</span> মেলে অবস্থান রিটার্ন
          করে, <span className="text-yellow-600">{replace}</span> প্যাটার্ন
          মেলানো এবং পরিবর্তন করে এবং{" "}
          <span className="text-yellow-600">{test}</span> প্যাটার্ন মেলে কিনা তা
          চেক করে।
        </p>
      </section>
    </div>
  );
};

export default RegexTutorial;
