import React from 'react';

const Git_Reset_Tutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git Reset: কিভাবে ব্যবহার করবেন</h2>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git reset</code> একটি গিট কমান্ড যা আপনার স্টেজিং এরিয়া এবং ওয়ার্কিং ডিরেক্টরি পরিবর্তন করার জন্য ব্যবহৃত হয়। এটি মূলত তিনটি মোডে কাজ করে: <code className="bg-blue-600 px-2 py-1 rounded">--soft</code>, <code className="bg-blue-600 px-2 py-1 rounded">--mixed</code>, এবং <code className="bg-blue-600 px-2 py-1 rounded">--hard</code>। প্রতিটি মোডের ব্যবহারের উদ্দেশ্য ভিন্ন।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">প্রাথমিক ব্যবহার</h3>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git reset</code> কমান্ডটি ব্যবহার করে আপনি একটি বা একাধিক কমিট ফিরিয়ে আনতে পারেন এবং তাদের পরিবর্তনগুলিকে পুনরুদ্ধার করতে পারেন। এটি বিভিন্ন মোডে কাজ করে যা আপনার পরিবর্তনগুলি কীভাবে পরিচালিত হবে তা নির্ধারণ করে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">সফট রিসেট</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-green-400">
          git reset --soft &lt;commit&gt;
        </code>
      </pre>
      <p className="mb-4">
        <code className="bg-green-600 px-2 py-1 rounded">--soft</code> অপশনটি কমিট ইতিহাসকে পরিবর্তন করে কিন্তু স্টেজিং এরিয়া এবং ওয়ার্কিং ডিরেক্টরিতে কোনও পরিবর্তন করবে না। এটি মূলত ব্যবহার করা হয় যখন আপনি পূর্ববর্তী কমিটগুলি ফিরিয়ে আনতে চান কিন্তু আপনার পরিবর্তনগুলি রাখতে চান।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">মিক্সড রিসেট</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-yellow-400">
          git reset --mixed &lt;commit&gt;
        </code>
      </pre>
      <p className="mb-4">
        <code className="bg-yellow-600 px-2 py-1 rounded">--mixed</code> অপশনটি স্টেজিং এরিয়া থেকে পরিবর্তনগুলি সরিয়ে দেয় কিন্তু আপনার ওয়ার্কিং ডিরেক্টরির পরিবর্তনগুলি রেখে দেয়। এটি প্রধানত ব্যবহার করা হয় যখন আপনি কিছু পরিবর্তন আনস্টেজ করতে চান কিন্তু মুছতে চান না।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">হার্ড রিসেট</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-red-400">
          git reset --hard &lt;commit&gt;
        </code>
      </pre>
      <p className="mb-4">
        <code className="bg-red-600 px-2 py-1 rounded">--hard</code> অপশনটি স্টেজিং এরিয়া এবং ওয়ার্কিং ডিরেক্টরি উভয়কেই পুনরুদ্ধার করে। এটি সমস্ত পরিবর্তন মুছে দেয় এবং কমিট করা অবস্থায় ফিরে আসে। এটি ব্যবহার করার সময় সতর্ক থাকুন কারণ আপনার কাজ হারিয়ে যেতে পারে।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">উদাহরণ এবং ব্যবহার</h3>
      <ul className="list-disc list-inside mb-4">
        <li><code className="bg-green-600 px-2 py-1 rounded">git reset --soft HEAD~1</code>: সর্বশেষ কমিট ফিরিয়ে আনে, পরিবর্তনগুলি স্টেজড অবস্থায় রাখে।</li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">git reset --mixed HEAD~1</code>: সর্বশেষ কমিট ফিরিয়ে আনে, পরিবর্তনগুলি আনস্টেজ করে রাখে।</li>
        <li><code className="bg-red-600 px-2 py-1 rounded">git reset --hard HEAD~1</code>: সর্বশেষ কমিট ফিরিয়ে আনে, সমস্ত পরিবর্তন মুছে ফেলে।</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-8">যত্নের পরামর্শ</h3>
      <p className="mb-4">
        <code className="bg-red-600 px-2 py-1 rounded">--hard</code> রিসেট ব্যবহারের আগে নিশ্চিত করুন যে আপনার পরিবর্তনগুলি নিরাপদে সংরক্ষিত হয়েছে কারণ এটি সমস্ত অকমিট পরিবর্তন মুছে ফেলবে। <code className="bg-blue-600 px-2 py-1 rounded">git stash</code> ব্যবহার করে আপনার কাজ স্ট্যাশ করতে পারেন যদি আপনি নিশ্চিত না হন।
      </p>
      
      {/* Additional sections or tips can go here */}
      
    </div>
  );
};

export default Git_Reset_Tutorial;
