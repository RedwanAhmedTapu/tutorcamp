import React from 'react';

const MergeConflictTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">মার্জ কনফ্লিক্ট: সমাধান এবং বিশেষ চিহ্ন</h2>
      <p className="mb-4">
        গিটে মার্জ কনফ্লিক্ট সাধারণত ঘটে যখন গিট স্বয়ংক্রিয়ভাবে শাখাগুলির মধ্যে পার্থক্য সমাধান করতে পারে না। এই টিউটোরিয়ালে আমরা কিভাবে মার্জ কনফ্লিক্ট সমাধান করতে হয় এবং বিভিন্ন বিশেষ চিহ্ন ব্যাখ্যা করব।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">মার্জ কনফ্লিক্ট চিহ্নগুলি</h3>
      <p className="mb-4">
        যখন মার্জ কনফ্লিক্ট ঘটে, গিট কনফ্লিক্ট চিহ্নগুলি ফাইলগুলিতে চিহ্নিত করে। উদাহরণস্বরূপ:
      </p>
      <pre className="bg-gray-700 p-4 rounded-md overflow-x-auto">
        <code className="text-yellow-400">
          &lt;&lt;&lt;&lt;&lt;&lt; HEAD
          {'\n'}Your changes in the current branch
          {'\n'}======= 
          {'\n'}Changes from the branch being merged
          {'\n'}&gt;&gt;&gt;&gt;&gt;&gt; branch-name
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2 mt-8">মার্জ কনফ্লিক্ট সমাধান করার পদক্ষেপ</h3>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>কনফ্লিক্ট চিহ্নিত করুন:</strong> <code className="bg-blue-600 px-2 py-1 rounded">git status</code> ব্যবহার করে কনফ্লিক্টযুক্ত ফাইলগুলি খুঁজুন।</li>
        <li><strong>কনফ্লিক্টযুক্ত ফাইলগুলি খুলুন:</strong> আপনার কোড এডিটরে কনফ্লিক্ট সেকশনগুলি পর্যালোচনা করুন।</li>
        <li><strong>কনফ্লিক্ট সমাধান করুন:</strong> কনফ্লিক্ট সেকশনগুলি ম্যানুয়ালি সম্পাদনা করুন এবং প্রয়োজনীয় পরিবর্তনগুলি যুক্ত করুন। কনফ্লিক্ট চিহ্নগুলি সরিয়ে ফেলুন।</li>
        <li><strong>বিকল্প:</strong> মার্জ টুল ব্যবহার করতে পারেন যেমন GitKraken, KDiff3, অথবা আপনার IDE এর বিল্ট-ইন টুলগুলি।</li>
      </ol>

      <h3 className="text-xl font-semibold mb-2 mt-8">বিশেষ চিহ্নের ব্যাখ্যা</h3>
      <ul className="list-disc list-inside mb-4">
        <li><code className="bg-yellow-600 px-2 py-1 rounded">&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>: বর্তমান শাখার কনফ্লিক্ট অংশের শুরু।</li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">=======</code>: কনফ্লিক্ট পরিবর্তনগুলির বিভাজক।</li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">&gt;&gt;&gt;&gt;&gt;&gt; branch-name</code>: মার্জ করা শাখার কনফ্লিক্ট অংশের শেষ।</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-8">যত্নের পরামর্শ</h3>
      <p className="mb-4">
        মার্জ কনফ্লিক্টগুলি সাবধানে সমাধান করুন যাতে কোনও পরিবর্তন হারিয়ে না যায়। নিশ্চিত করুন যে আপনার ফাইলগুলি সঠিকভাবে পর্যালোচনা করা হয়েছে এবং সমস্ত কনফ্লিক্ট চিহ্নগুলি মুছে ফেলা হয়েছে।
      </p>

      {/* Additional sections or tips can go here */}
      
    </div>
  );
};

export default MergeConflictTutorial;
