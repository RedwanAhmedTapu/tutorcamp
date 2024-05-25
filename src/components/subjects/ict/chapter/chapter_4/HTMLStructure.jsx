import React from 'react';

const HTMLStructure = () => {
  return (
    <div className="w-screen sm:w-full mx-auto p-4 text-white rounded-md bg-gray-800">
      <h1 className="text-xl sm:text-2xl text-teal-500 font-bold mb-4">এইচটিএমএল ডকুমেন্টের মৌলিক কাঠামো (Basic Structure of HTML)</h1>
      <div className="border border-gray-400 p-4 rounded-lg">
        <p className="mb-4">
          এইচটিএমএল ডকুমেন্ট ট্যাগ—এর সমন্বয়ে গঠিত, যা ওয়েবপেজ প্রদর্শনকে নির্দিষ্ট করে। এইচটিএমএল ডকুমেন্টে বেশিরভাগ ট্যাগই শেষ হয় ক্লোজিং ট্যাগ দিয়ে।
        </p>
        <div className="mb-4">
          <p><strong>ওপেনিং ট্যাগ:</strong> <code className="bg-gray-700 text-white px-1">&lt;table&gt;</code></p>
          <p><strong>ক্লোজিং ট্যাগ:</strong> <code className="bg-gray-700 text-white px-1">&lt;/table&gt;</code></p>
          <p className="mt-2">
            যেমন: এখানে এ দু'টি ট্যাগের মধ্যে পার্থক্য হলো এটি ফরওয়ার্ড স্ল্যাশ, যা বুঝায় যে এটি একটি ক্লোজিং ট্যাগ।
          </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>পেজের শুরু ট্যাগ:</strong> প্রত্যেক HTML ডকুমেন্ট অবশ্যই ফাইলের শুরুতে <code className="bg-gray-700 text-white px-1">&lt;html&gt;</code> ট্যাগ এবং ফাইলের শেষে <code className="bg-gray-700 text-white px-1">&lt;/html&gt;</code> ট্যাগ লিখতে হয়। অন্যান্য তথ্যগুলো এর ভেতরে থাকে।
          </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>পেজের <code className="bg-gray-700 text-white px-1">&lt;head&gt;</code>:</strong> এখানে ওয়েবপেজ কীওয়ার্ড, পেজের বর্ণনা এবং পেজ টাইটেল স্থাপন করা হয়। কোন পেজ ব্রাউজারে প্রদর্শিত হওয়ার আগে <code className="bg-gray-700 text-white px-1">&lt;head&gt;</code> থেকে প্রয়োজনীয় অংশ পড়ে নেয়।
          </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>পেজ <code className="bg-gray-700 text-white px-1">&lt;title&gt;</code>:</strong> <code className="bg-gray-700 text-white px-1">&lt;head&gt;</code> এর ভেতরে পেজ এর <code className="bg-gray-700 text-white px-1">&lt;title&gt;</code> লিখতে হয় যেটি ব্রাউজারের উইন্ডোর উপরে টাইটেল হিসেবে প্রদর্শিত হয়।
          </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>পেজের <code className="bg-gray-700 text-white px-1">&lt;body&gt;</code>:</strong> পেজের কন্টেন্ট, টেক্সট, ইমেজ এবং লিংক ইত্যাদি এ অংশে থাকে। ব্রাউজার এ অংশে থাকা সব তথ্যাদি ব্যবহারকারীকে দেখায়।
          </p>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <p className="mb-4">
            নিচের মৌলিক ফরমেট অনুযায়ী প্রত্যেক এইচটিএমএল পেজ লেখা হয়:
          </p>
          <pre className="bg-gray-700 text-white p-4 rounded-lg overflow-x-auto">
            <code>
              &lt;html&gt;{'\n'}
              {'  '}&lt;head&gt;{'\n'}
              {'    '}&lt;title&gt;Title of the Web Page&lt;/title&gt;{'\n'}
              {'  '}&lt;/head&gt;{'\n'}
              {'  '}&lt;body&gt;{'\n'}
              {'    '}Content of the page.{'\n'}
              {'  '}&lt;/body&gt;{'\n'}
              &lt;/html&gt;
            </code>
          </pre>
          <div className="mt-4">
            <p><strong>HTML ডকুমেন্ট তৈরি করা (উদাহরণ-১)</strong></p>
            <p className="mb-4">
              <code className="bg-gray-700 text-white px-1">&lt;body&gt;</code> ট্যাগ ওয়েবপেজ এর উপাদান (কনটেন্ট) ধারণ করে। এখানে টেক্সট, ইমেজ, লিংক, হেডিং ইত্যাদি থাকে।
            </p>
            <p>
              <code className="bg-gray-700 text-white px-1">&lt;/html&gt;</code> ট্যাগ ওয়েবপেজটি শেষ হয়েছে নির্দেশ করে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLStructure;
