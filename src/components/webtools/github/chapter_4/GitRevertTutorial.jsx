import React from 'react';

const GitRevertTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git Revert: কিভাবে ব্যবহার করবেন</h2>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git revert</code> একটি গিট কমান্ড যা একটি পূর্ববর্তী কমিটের পরিবর্তনগুলি নতুন একটি কমিট হিসেবে উল্টে দেয়। এটি ব্যবহার করা হয় যখন আপনি পূর্ববর্তী কমিটের পরিবর্তনগুলি বাতিল করতে চান কিন্তু কমিট ইতিহাস অক্ষুণ্ন রাখতে চান।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">প্রাথমিক ব্যবহার</h3>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git revert</code> কমান্ডটি একটি নির্দিষ্ট কমিটের পরিবর্তনগুলি একটি নতুন কমিট হিসেবে উল্টায়। এটি মূল কমিটকে মুছে ফেলে না, বরং একটি নতুন কমিট তৈরি করে যা পূর্ববর্তী কমিটের পরিবর্তনগুলি বিপরীত করে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">বেসিক রিভার্ট</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-green-400">
          git revert &lt;commit&gt;
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি নির্দিষ্ট কমিটের পরিবর্তনগুলি নতুন একটি কমিট হিসেবে উল্টাবে। <code className="bg-green-600 px-2 py-1 rounded">&lt;commit&gt;</code> হল সেই কমিটের হ্যাশ যা আপনি রিভার্ট করতে চান।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">মাল্টিপল কমিট রিভার্ট করা</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-yellow-400">
          git revert &lt;commit1&gt; &lt;commit2&gt; &lt;commit3&gt;
        </code>
      </pre>
      <p className="mb-4">
        একাধিক কমিট রিভার্ট করার জন্য, আপনি একাধিক কমিট হ্যাশ প্রদান করতে পারেন। প্রতিটি কমিটের পরিবর্তন একটি নতুন কমিট হিসেবে উল্টানো হবে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">কনফ্লিক্ট হ্যান্ডলিং</h4>
      <p className="mb-4">
        কখনও কখনও, <code className="bg-blue-600 px-2 py-1 rounded">git revert</code> কমান্ড ব্যবহার করার সময় কনফ্লিক্ট হতে পারে। এই ক্ষেত্রে, গিট কনফ্লিক্টের তথ্য প্রদান করবে এবং আপনাকে কনফ্লিক্ট সমাধান করতে হবে। কনফ্লিক্ট সমাধানের পরে, আপনি পরিবর্তনগুলি কমিট করতে পারবেন।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">উদাহরণ এবং ব্যবহার</h3>
      <ul className="list-disc list-inside mb-4">
        <li><code className="bg-green-600 px-2 py-1 rounded">git revert HEAD</code>: সর্বশেষ কমিটের পরিবর্তন উল্টাবে।</li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">git revert abc1234</code>: নির্দিষ্ট কমিটের পরিবর্তন উল্টাবে (যেখানে <code className="bg-yellow-600 px-2 py-1 rounded">abc1234</code> হল কমিটের হ্যাশ)।</li>
        <li><code className="bg-red-600 px-2 py-1 rounded">git revert abc1234 def5678</code>: একাধিক কমিটের পরিবর্তন উল্টাবে।</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-8">যত্নের পরামর্শ</h3>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git revert</code> ব্যবহার করার সময় আপনার বর্তমান শাখায় সমস্ত পরিবর্তনগুলি অখণ্ড রাখুন এবং নিশ্চিত করুন যে আপনি ভুল কমিট রিভার্ট করছেন না। কমিট ইতিহাস পরিষ্কার রাখতে এবং অবাঞ্ছিত পরিবর্তন থেকে বাঁচতে এটি একটি ভাল পদ্ধতি।
      </p>
      
      {/* Additional sections or tips can go here */}
      
    </div>
  );
};

export default GitRevertTutorial;
