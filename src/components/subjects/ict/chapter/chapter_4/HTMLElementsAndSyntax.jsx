import React from 'react';

const HTMLElementsAndSyntax = () => {
  return (
    <div className="w-screen sm:w-full mx-auto p-4 text-white bg-gray-800 rounded-md">
      <h1 className="text-xl sm:text-2xl text-teal-500 font-bold mb-4">এম্পটি HTML এলিমেন্টসমূহ</h1>
      <p className="mb-4">
        কনটেন্ট নেই এমন ধরনের HTML এলিমেন্টকে এম্পটি এলিমেন্ট বলা হয়। এই এলিমেন্টগুলো স্টার্ট ট্যাগেই শেষ হয়ে যেতে পারে। যেমন: <code className="bg-gray-700 text-white px-1">&lt;hr&gt;</code> হলো একটি এম্পটি এলিমেন্ট, যার কোনো ক্লোজিং ট্যাগ নেই। লাইনের মাঝে ব্রেক দেবার জন্য <code className="bg-gray-700 text-white px-1">&lt;br&gt;</code> ব্যবহার করা হয়।
      </p>
      <p className="mb-4">
        উদাহরণ: <code className="bg-gray-700 text-white px-1">&lt;p&gt; paragraph &lt;/p&gt;</code>
      </p>

      <h2 className="text-xl font-bold mb-4">এইচটিএমএল এট্রিবিউট (HTML attribute)</h2>
      <p className="mb-4">
        এট্রিবিউট হচ্ছে কোন কিছুর বৈশিষ্ট্য নির্ধারক নির্দেশ। ধরা যাক, কোন টেক্সটে একটি শব্দ আছে। এ শব্দটি যদি লাল রং করা হয় তাহলে এর এট্রিবিউট হবে রেড কালার। এইচটিএমএল ডকুমেন্টের জন্য এট্রিবিউট খুবই প্রয়োজনীয়। এট্রিবিউট ছাড়া ওয়েবপেজে অনেক তথ্য যেমন ছবি, হাইপারলিংক, এ্যাংকর নাম ইত্যাদি যুক্ত করা যায় না। 
      </p>
      <p className="mb-4">
        HTML tag এর সাথে এট্রিবিউট যুক্ত করার জন্য ট্যাগ নামের পর স্পেস দিয়ে এট্রিবিউট নাম, সমান চিহ্ন (=) এবং কোটেশন চিহ্নের মধ্যে এট্রিবিউট ভ্যালু দিতে হবে। যেমন:
      </p>
      <pre className="bg-gray-700 text-white p-4 rounded-lg mb-4 overflow-x-auto">
        <code>
          &lt;p style=&quot;color:red;&quot;&gt; This is paragraph &lt;/p&gt;
        </code>
      </pre>

      <div className="mb-4">
        <img src="https://via.placeholder.com/600x200" alt="HTML attributes example" className="w-full h-auto rounded-lg" />
      </div>

      <p className="mb-4">
        নিচে এ কন্টেন্ট এর বিভিন্ন অংশকে চিহ্নিত করে দেখানো হয়েছে।
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>ট্যাগ নেম: <code className="bg-gray-700 text-white px-1">&lt;p&gt;</code></li>
        <li>এট্রিবিউট নেম: <code className="bg-gray-700 text-white px-1">style</code></li>
        <li>এট্রিবিউট ভ্যালু: <code className="bg-gray-700 text-white px-1">color:red;</code></li>
        <li>ক্লোজিং ট্যাগ: <code className="bg-gray-700 text-white px-1">&lt;/p&gt;</code></li>
      </ul>

      <h2 className="text-xl font-bold mb-4">এইচটিএমএল সিনট্যাক্স (HTML syntax)</h2>
      <p className="mb-4">
        কতকগুলো বিধিবদ্ধ রীতি অনুসারে প্রোগ্রামিং ল্যাংগুয়েজের সাহায্যে প্রোগ্রাম তৈরি করা হয়। এ রীতিকে বলা হয় ল্যাংগুয়েজের ব্যাকরণ। 
      </p>
      <p className="mb-4">
        কোন সুনির্দিষ্ট ল্যাংগুয়েজ দ্বারা যে রীতিতে কোন প্রোগ্রামের স্টেটমেন্টগুলো রচিত হয়— সে বিধিবদ্ধ রীতিই উক্ত ল্যাংগুয়েজের ক্ষেত্রে সিনটেক্স হিসেবে বিবেচিত হয়। যেমন ওয়েবপেজে Bangladesh লেখাটি বোল্ড হওয়ার জন্য উক্ত লেখার আগে <code className="bg-gray-700 text-white px-1">&lt;b&gt;</code> ও পরে <code className="bg-gray-700 text-white px-1">&lt;/b&gt;</code> ট্যাগ লিখতে হয়।
      </p>
      <pre className="bg-gray-700 text-white p-4 rounded-lg overflow-x-auto">
        <code>
          &lt;b&gt;Bangladesh&lt;/b&gt;
        </code>
      </pre>
    </div>
  );
};

export default HTMLElementsAndSyntax;
