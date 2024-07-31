import React from "react";

const EnvironmentSetUp = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">এনভারোমেন্ট সেটআপ</h1>

      <section className="mb-8">
        <p>
          আমরা এইখানে সবকিছু শেখার সঙ্গে সঙ্গে প্র্যাকটিসও করব। সে জন্য অবশ্যই প্রথমে আমাদের
          এনভারোমেন্ট ঠিক মতো সেটআপ করে নেব। 
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১। ব্রাউজার:</h2>
        <p>
          আমি এখানে ব্রাউজার বলতে আমাদের নিত্যদিনের ব্যবহার করা ক্রোম, মজিলা বা সাফারি ওয়েব ব্রাউজারের কথা
          বলছি। তবে এগুলোর মধ্যে গুগল ক্রোম সবচেয়ে বেশি পাওয়ারফুল ডেভেলপারদের জন্য। আর তাই আমি এখন
          গুগল ক্রোম ইউজ করব। শিউর হয়ে নেবেন যে আপনিও গুগল ক্রোম ইউজ করছেন এবং সেটা আপ-টু-ডেট আছে। পুরোনো
          ভার্সনের গুগল ক্রোমে কিছু কোড না-ও চলতে পারে। তাই অবশ্যই আপডেটেড ভার্সন ইনস্টল করে নেবেন
          <a href="https://www.google.com/chrome" className="text-indigo-500"> এখান থেকে</a>.
        </p>
        <img src="chrome_inspect.png" alt="Chrome Inspect" className="mb-4 mx-auto" />
        <p>
          ব্রাউজার ওপেন করলে আপনি যে পেজেই থাকুন না কেন, খালি জায়গায় right click করে বা Ctrl+Shift+I বা Ctrl+Shift+J একসাথে চাপলে
            আপনি Inspect নামে একটা অপশন পাবেন:
        </p>
        <img src="chrome_console.png" alt="Chrome Console" className="mb-4 mx-auto" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২। নোড জেএস (Node JS):</h2>
        <p>
          আমরা চাইলে জাভাস্ক্রিপ্টকে ব্রাউজারের বাইরেও চালাতে পারব। আর সেটাতে আমাদের হেল্প করবে নোড জেএস। নোড জেএস
          প্রথমে আপনাকে ডাউনলোড করে নিতে হবে <a href="https://nodejs.org" className="text-indigo-500"> এখান থেকে</a>. 
          আপনি LTS ভার্সনটা ডাউনলোড করবেন। ডাউনলোড করে অন্যান্য টুলসের মতোই এটাকে সেটআপ করতে হবে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              node -v
            </code>
          </pre> 
        </div>
        <p className="mt-2">
          এখন এই কমান্ড লেখার পর এন্টার চাপলে নোড জেএসের ভার্সন নম্বর পাবে। এতে করে আপনি বুঝতে পারবেন যে আপনার সিস্টেমে  নোড জেএস ইন্সটল হয়েছে
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              C:\Users\Redwan Ahmed
               node -v
               v20.14.0
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">৩। কোড এডিটর:</h2>
        <p>
          আরেকটা গুরুত্বপূর্ণ জিনিস যেটা হচ্ছে, আপনাকে একটা ভালো কোড এডিটরও ইউজ করতে হবে। নিচে কিছু কোড এডিটর
          সাজেশন হিসেবে দিলাম:
        </p>  
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://atom.io" className="text-indigo-500">অ্যাটম (Atom)</a></li>
          <li><a href="https://code.visualstudio.com" className="text-indigo-500">ভিজ্যুয়াল স্টুডিও কোড (Visual Studio Code)</a></li>
          <li><a href="http://brackets.io" className="text-indigo-500">ব্র্যাকেটস (Brackets)</a></li>
        </ul>
        <p>
          আপনি যেটা ভালো লাগে সেটাই ব্যবহার করবেন। আমি ব্যক্তিগত ভাবে এইক্ষেত্রে Visual Studio Code ব্যবহার করব।
        </p>
      </section>
    </div>
  );
};

export default EnvironmentSetUp;
