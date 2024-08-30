import React from 'react';

const GitSquashTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git Squash: কিভাবে ব্যবহার করবেন</h2>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git squash</code> একটি গিট ফিচার যা একাধিক কমিটকে একত্রিত করে একটি একক কমিটে পরিণত করে। এটি সাধারণত ইতিহাস পরিষ্কার রাখতে এবং একাধিক সংশোধনগুলি একটি কমিট হিসেবে প্রদর্শন করতে ব্যবহৃত হয়।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">প্রাথমিক ব্যবহার</h3>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git squash</code> সরাসরি কমান্ড নয়, বরং এটি ইন্টারেক্টিভ রিবেসের অংশ হিসেবে ব্যবহৃত হয়। এটি মূলত কমিট ইতিহাস পরিষ্কার করার জন্য ব্যবহৃত হয়।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">ইন্টারেক্টিভ রিবেসের মাধ্যমে স্কোয়াশ</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-green-400">
          git rebase -i HEAD~&lt;n&gt;
        </code>
      </pre>
      <p className="mb-4">
        এখানে <code className="bg-green-600 px-2 py-1 rounded">&lt;n&gt;</code> হল সেই সংখ্যা যা আপনি স্কোয়াশ করতে চান তার পরিমাণ। উদাহরণস্বরূপ, যদি আপনি শেষ 3 কমিট স্কোয়াশ করতে চান, তাহলে <code className="bg-green-600 px-2 py-1 rounded">HEAD~3</code> ব্যবহার করুন।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">স্কোয়াশ অপশন</h4>
      <p className="mb-4">
        ইন্টারেক্টিভ রিবেস চলাকালীন একটি ভিন্ন টেক্সট এডিটরে একটি তালিকা দেখানো হবে যেখানে আপনাকে <code className="bg-yellow-600 px-2 py-1 rounded">pick</code> শব্দটি <code className="bg-yellow-600 px-2 py-1 rounded">squash</code> বা <code className="bg-yellow-600 px-2 py-1 rounded">s</code> দ্বারা প্রতিস্থাপন করতে হবে প্রতিটি কমিটের পাশে যা আপনি স্কোয়াশ করতে চান।
      </p>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-yellow-400">
          pick 1234567 Commit message 1
          squash 2345678 Commit message 2
          squash 3456789 Commit message 3
        </code>
      </pre>
      <p className="mb-4">
        এখানে, প্রথম কমিটটি মূল কমিট হিসেবে থাকবে এবং পরবর্তী দুইটি কমিট স্কোয়াশ করা হবে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">স্কোয়াশের পরে</h4>
      <p className="mb-4">
        স্কোয়াশ করার পরে, আপনি একটি নতুন কমিট মেসেজ লিখতে পারেন যা সব স্কোয়াশ করা কমিটের জন্য প্রতিনিধিত্ব করে। এটি একটি পরিষ্কার এবং সংক্ষিপ্ত ইতিহাস প্রদান করে।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">উদাহরণ এবং ব্যবহার</h3>
      <ul className="list-disc list-inside mb-4">
        <li><code className="bg-green-600 px-2 py-1 rounded">git rebase -i HEAD~3</code>: শেষ 3 কমিট ইন্টারেক্টিভ রিবেসে নিয়ে আসবে।</li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">pick 1234567 Commit A</code></li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">squash 2345678 Commit B</code></li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">squash 3456789 Commit C</code></li>
        <li>উপরোক্ত সেটআপে, কমিট B এবং C কমিট A এর সাথে স্কোয়াশ হবে।</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-8">যত্নের পরামর্শ</h3>
      <p className="mb-4">
        স্কোয়াশ করার সময় সতর্ক থাকুন, কারণ এটি কমিট ইতিহাস পরিবর্তন করে এবং যদি আপনি পাবলিক শাখায় কাজ করছেন, তবে এটি অন্যদের কাজের সাথে সংঘর্ষ সৃষ্টি করতে পারে। ব্যবহারের আগে নিশ্চিত করুন যে আপনি সমস্ত পরিবর্তন যাচাই করেছেন এবং আপনি কমিট ইতিহাস পরিবর্তন করার প্রভাব বুঝেন।
      </p>
      
      {/* Additional sections or tips can go here */}
      
    </div>
  );
};

export default GitSquashTutorial;
