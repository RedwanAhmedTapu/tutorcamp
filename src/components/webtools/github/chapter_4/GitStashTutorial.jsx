import React from 'react';

const GitStashTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git Stash: কিভাবে ব্যবহার করবেন</h2>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git stash</code> একটি গিট কমান্ড যা আপনার বর্তমান কাজের অবস্থাকে সংরক্ষণ করে এবং আপনার ওয়ার্কিং ডিরেক্টরি পরিষ্কার করে দেয়। এটি বিশেষভাবে উপকারী যখন আপনি কিছু কাজের মাঝে অন্য একটি শাখায় যাওয়ার প্রয়োজন অনুভব করেন, কিন্তু আপনার কাজটি ফেলা অথবা কমিট করা চান না।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">প্রাথমিক ব্যবহার</h3>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git stash</code> কমান্ডটি আপনার বর্তমান পরিবর্তনগুলি সংরক্ষণ করে এবং আপনার ওয়ার্কিং ডিরেক্টরি সাফ করে দেয়। এটি আপনার কাজের একটি নতুন স্ট্যাশ এন্ট্রি তৈরি করে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">বেসিক স্ট্যাশ করা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-green-400">
          git stash
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি আপনার সমস্ত অকমিট পরিবর্তনগুলি স্ট্যাশ করবে এবং আপনার ওয়ার্কিং ডিরেক্টরি পুনরুদ্ধার করবে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">স্ট্যাশ তালিকা দেখা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-yellow-400">
          git stash list
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি আপনার স্ট্যাশ করা সমস্ত এন্ট্রির তালিকা দেখাবে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">স্ট্যাশ পুনরুদ্ধার করা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-teal-400">
          git stash apply
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি সর্বশেষ স্ট্যাশ এন্ট্রি পুনরুদ্ধার করবে এবং আপনার বর্তমান ওয়ার্কিং ডিরেক্টরিতে প্রয়োগ করবে। আপনি নির্দিষ্ট স্ট্যাশ এন্ট্রি পুনরুদ্ধার করতে <code className="bg-teal-600 px-2 py-1 rounded">git stash apply stash@{'n'}</code> ব্যবহার করতে পারেন, যেখানে <code className="bg-teal-600 px-2 py-1 rounded">n</code> হল স্ট্যাশের সংখ্যা।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">স্ট্যাশ ড্রপ করা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-red-400">
          git stash drop
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি সর্বশেষ স্ট্যাশ এন্ট্রি মুছে ফেলবে। আপনি নির্দিষ্ট স্ট্যাশ এন্ট্রি মুছে ফেলতে <code className="bg-red-600 px-2 py-1 rounded">git stash drop stash@{'n'}</code> ব্যবহার করতে পারেন।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">স্ট্যাশ সব মুছে ফেলা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-purple-400">
          git stash clear
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি সমস্ত স্ট্যাশ এন্ট্রি মুছে ফেলবে।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">উদাহরণ এবং ব্যবহার</h3>
      <ul className="list-disc list-inside mb-4">
        <li><code className="bg-green-600 px-2 py-1 rounded">git stash</code>: বর্তমান পরিবর্তনগুলি স্ট্যাশ করে ওয়ার্কিং ডিরেক্টরি পরিষ্কার করে।</li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">git stash list</code>: স্ট্যাশ করা সমস্ত এন্ট্রি দেখায়।</li>
        <li><code className="bg-teal-600 px-2 py-1 rounded">git stash apply</code>: সর্বশেষ স্ট্যাশ এন্ট্রি পুনরুদ্ধার করে।</li>
        <li><code className="bg-red-600 px-2 py-1 rounded">git stash drop stash@{0}</code>: নির্দিষ্ট স্ট্যাশ এন্ট্রি মুছে ফেলে।</li>
        <li><code className="bg-purple-600 px-2 py-1 rounded">git stash clear</code>: সমস্ত স্ট্যাশ এন্ট্রি মুছে ফেলে।</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-8">যত্নের পরামর্শ</h3>
      <p className="mb-4">
        স্ট্যাশ ব্যবহারের পরে আপনার পরিবর্তনগুলি পুনরুদ্ধার করতে ভুলবেন না। স্ট্যাশ এন্ট্রি হারিয়ে যেতে পারে যদি আপনি স্ট্যাশ তালিকা পরিষ্কার করেন অথবা নির্দিষ্ট স্ট্যাশ এন্ট্রি ড্রপ করেন।
      </p>
      
      {/* Additional sections or tips can go here */}
      
    </div>
  );
};

export default GitStashTutorial;
