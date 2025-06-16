import React from "react";
import Scene from "./BehindSceeneAnimation";
import RuntimeVisualizer from "./BehindSceeneAnimation";

const BehindTheScenesTutorial = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্টের পেছনের দৃশ্য</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. জাভাস্ক্রিপ্ট ইঞ্জিন</h2>
        <p>
          জাভাস্ক্রিপ্ট ইঞ্জিনগুলি কোড রান করার জন্য বিভিন্ন ব্রাউজার দ্বারা ব্যবহৃত হয়। এখানে প্রধান কিছু ইঞ্জিনের তালিকা:
        </p>
        <table className="w-full bg-gray-900 mt-4 border border-gray-700">
          <thead>
            <tr>
              <th className="p-2 border-b border-gray-700">ব্রাউজার</th>
              <th className="p-2 border-b border-gray-700">ইঞ্জিন</th>
              <th className="p-2 border-b border-gray-700">রেফারেন্স লিঙ্ক</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-gray-700">Google Chrome</td>
              <td className="p-2 border-b border-gray-700">V8</td>
              <td className="p-2 border-b border-gray-700">
                <a href="https://v8.dev/" className="text-blue-400" target="_blank" rel="noopener noreferrer">V8 Engine</a>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">Mozilla Firefox</td>
              <td className="p-2 border-b border-gray-700">SpiderMonkey</td>
              <td className="p-2 border-b border-gray-700">
                <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey" className="text-blue-400" target="_blank" rel="noopener noreferrer">SpiderMonkey</a>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">Safari</td>
              <td className="p-2 border-b border-gray-700">JavaScriptCore</td>
              <td className="p-2 border-b border-gray-700">
                <a href="https://webkit.org/blog/1820/about-javascriptcore/" className="text-blue-400" target="_blank" rel="noopener noreferrer">JavaScriptCore</a>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">Microsoft Edge</td>
              <td className="p-2 border-b border-gray-700">Chakra</td>
              <td className="p-2 border-b border-gray-700">
                <a href="https://docs.microsoft.com/en-us/previous-versions/windows/desktop/legacy/ms678542(v=vs.85)" className="text-blue-400" target="_blank" rel="noopener noreferrer">Chakra</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. কোড পার্সিং এবং এক্সিকিউশন</h2>
        <p>
          জাভাস্ক্রিপ্ট কোড রান করার জন্য একাধিক ধাপ অনুসরণ করে:
        </p>
        <table className="w-full bg-gray-900 mt-4 border border-gray-700">
          <thead>
            <tr>
              <th className="p-2 border-b border-gray-700">ধাপ</th>
              <th className="p-2 border-b border-gray-700">বর্ণনা</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-gray-700">১. পার্সার</td>
              <td className="p-2 border-b border-gray-700">
                কোডটিকে সিনট্যাক্স বিশ্লেষণ করে <code>Abstract Syntax Tree (AST)</code> তৈরি করে।
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">২. কম্পাইলার</td>
              <td className="p-2 border-b border-gray-700">
                AST থেকে বাইনারি কোড তৈরি করে যা ব্রাউজার চলাতে পারে।
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">৩. এক্সিকিউশন কনটেক্সট</td>
              <td className="p-2 border-b border-gray-700">
                কোডের জন্য কনটেক্সট তৈরি করে যা চলানোর সময় চলতে থাকে।
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">৪. এক্সিকিউশন স্ট্যাক</td>
              <td className="p-2 border-b border-gray-700">
                চলমান কনটেক্সটের স্তরগুলির সঞ্চয়স্থল।
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. এক্সিকিউশন কনটেক্সট</h2>
        <p>
          এক্সিকিউশন কনটেক্সটের দুটি প্রধান ধাপ:
        </p>
        <table className="w-full bg-gray-900 mt-4 border border-gray-700">
          <thead>
            <tr>
              <th className="p-2 border-b border-gray-700">ধাপ</th>
              <th className="p-2 border-b border-gray-700">বর্ণনা</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-gray-700">১. ক্রিয়েশন</td>
              <td className="p-2 border-b border-gray-700">
                ভেরিয়েবল ডিক্লারেশন এবং ফাংশন ডিক্লারেশন সংজ্ঞায়িত হয়।
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-700">২. এক্সিকিউশন</td>
              <td className="p-2 border-b border-gray-700">
                কোডের কার্যকর অংশ চালানো হয়।
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৪. এক্সিকিউশন স্ট্যাক</h2>
        <p>
          এক্সিকিউশন স্ট্যাক দেখায় কিভাবে কোড চলাকালীন একাধিক কনটেক্সট ব্যবস্থাপনা হয়। নিম্নলিখিত উদাহরণটি দেখায় কিভাবে স্ট্যাক পরিবর্তিত হয়:
        </p>
          {/* Left side: Code example */}
          <div className="p-2 bg-gray-900 rounded-md ">
            <h3 className="text-xl font-semibold mb-2">কোড উদাহরণ</h3>
            <RuntimeVisualizer/>
         
        </div>
      </section>
    </div>
  );
};

export default BehindTheScenesTutorial;
