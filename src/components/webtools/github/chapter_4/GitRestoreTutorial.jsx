import React from 'react';

const GitRestoreTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git Restore: কিভাবে ব্যবহৃত হয়</h2>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git restore</code> একটি গিট কমান্ড যা ফাইলের অবস্থান ফিরিয়ে আনার জন্য ব্যবহৃত হয়। এটি মূলত দুটি প্রধান কাজ সম্পাদন করে: ট্র্যাকিং এফাইলগুলি পুনরুদ্ধার করা এবং স্টেজিং এরিয়া থেকে ফাইলগুলি আনস্টেজ করা।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">প্রাথমিক ব্যবহার</h3>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git restore</code> কমান্ডের মাধ্যমে আপনি স্টেজিং এরিয়া এবং ওয়ার্কিং ডিরেক্টরি থেকে ফাইল পুনরুদ্ধার করতে পারেন।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">ফাইলের পরিবর্তন পুনরুদ্ধার করা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-green-400">
          git restore &lt;filename&gt;
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি <code className="bg-green-600 px-2 py-1 rounded">&lt;filename&gt;</code> ফাইলের পরিবর্তনগুলি আপনার ওয়ার্কিং ডিরেক্টরিতে ফিরিয়ে আনবে, তবে এটি স্টেজিং এরিয়া থেকে কিছু পরিবর্তন মুছে ফেলবে না।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">স্টেজিং এরিয়া থেকে পরিবর্তন আনস্টেজ করা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-yellow-400">
          git restore --staged &lt;filename&gt;
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি <code className="bg-yellow-600 px-2 py-1 rounded">&lt;filename&gt;</code> ফাইলটিকে স্টেজিং এরিয়া থেকে আনস্টেজ করবে, তবে এটি ফাইলের পরিবর্তনগুলি আপনার ওয়ার্কিং ডিরেক্টরিতে রেখে দেবে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">সম্পূর্ণ ফোল্ডার পুনরুদ্ধার করা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-red-400">
          git restore &lt;foldername&gt;
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি <code className="bg-red-600 px-2 py-1 rounded">&lt;foldername&gt;</code> ফোল্ডারের সমস্ত ফাইলের পরিবর্তনগুলি পুনরুদ্ধার করবে।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">উদাহরণ এবং ব্যবহার</h3>
      <ul className="list-disc list-inside mb-4">
        <li><code className="bg-green-600 px-2 py-1 rounded">git restore file.txt</code>: <code className="bg-green-600 px-2 py-1 rounded">file.txt</code> ফাইলের পরিবর্তনগুলি পুনরুদ্ধার করে আপনার ওয়ার্কিং ডিরেক্টরিতে ফিরিয়ে আনে।</li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">git restore --staged file.txt</code>: <code className="bg-yellow-600 px-2 py-1 rounded">file.txt</code> ফাইলটিকে স্টেজিং এরিয়া থেকে আনস্টেজ করে, কিন্তু আপনার পরিবর্তনগুলি ওয়ার্কিং ডিরেক্টরিতে রাখে।</li>
        <li><code className="bg-red-600 px-2 py-1 rounded">git restore .</code>: বর্তমান ডিরেকটরির সমস্ত ফাইলের পরিবর্তন পুনরুদ্ধার করে।</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-8">যত্নের পরামর্শ</h3>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git restore</code> কমান্ড ব্যবহারের আগে আপনার পরিবর্তনগুলি যাচাই করুন, কারণ এটি আপনার কাজের অবস্থা ফিরিয়ে আনতে পারে। নিশ্চিত করুন যে আপনি সঠিক ফাইল বা ডিরেক্টরি পুনরুদ্ধার করছেন।
      </p>
      
      {/* Additional sections or tips can go here */}
      
    </div>
  );
};

export default GitRestoreTutorial;
