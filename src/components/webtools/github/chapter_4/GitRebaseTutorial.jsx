import React from 'react';

const GitRebaseTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git Rebase: কিভাবে ব্যবহার করবেন</h2>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git rebase</code> একটি গিট কমান্ড যা বর্তমান শাখার ভিত্তি পরিবর্তন করে, অন্য একটি শাখার শীর্ষে আপনার পরিবর্তনগুলিকে প্রয়োগ করে। এটি একটি পরিষ্কার কমিট ইতিহাস তৈরি করতে সহায়ক হতে পারে। রিবেস মূলত দুই ধরণের ব্যবহৃত হয়: ইন্টারেক্টিভ রিবেস এবং সাধারণ রিবেস।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">প্রাথমিক ব্যবহার</h3>
      <p className="mb-4">
        <code className="bg-blue-600 px-2 py-1 rounded">git rebase</code> ব্যবহার করলে আপনি বর্তমান শাখার পরিবর্তনগুলিকে অন্য একটি শাখার ভিত্তি হিসেবে প্রয়োগ করতে পারেন। এটি পরিবর্তনগুলি একত্রিত করার জন্য এবং শাখার ইতিহাস পরিষ্কার রাখার জন্য ব্যবহৃত হয়।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">সাধারণ রিবেস</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-green-400">
          git rebase &lt;branch&gt;
        </code>
      </pre>
      <p className="mb-4">
        এই কমান্ডটি বর্তমান শাখার পরিবর্তনগুলি <code className="bg-green-600 px-2 py-1 rounded">&lt;branch&gt;</code> শাখার উপর প্রয়োগ করবে। এটি বর্তমান শাখার ভিত্তি হিসেবে <code className="bg-green-600 px-2 py-1 rounded">&lt;branch&gt;</code> শাখার শীর্ষ ব্যবহার করবে।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">ইন্টারেক্টিভ রিবেস</h4>
      <pre className="bg-gray-700 p-4 rounded-md">
        <code className="text-yellow-400">
          git rebase -i &lt;commit&gt;
        </code>
      </pre>
      <p className="mb-4">
        <code className="bg-yellow-600 px-2 py-1 rounded">-i</code> (ইন্টারেক্টিভ) অপশনটি আপনাকে একটি কমিটের তালিকা দেখাবে যেখানে আপনি বিভিন্ন পরিবর্তন করতে পারেন, যেমন কমিটগুলি একত্রিত করা, পুনরায় সাজানো, বা সম্পাদনা করা। এটি বিশেষত ইতিহাস পুনর্বিন্যাস করার জন্য উপকারী।
      </p>

      <h4 className="text-lg font-semibold mb-2 mt-6">রিবেস কনফ্লিক্ট সমাধান</h4>
      <p className="mb-4">
        রিবেস চলাকালীন কনফ্লিক্ট হলে গিট আপনাকে কনফ্লিক্ট সমাধান করার জন্য বলবে। কনফ্লিক্ট সমাধানের পরে, আপনি পরিবর্তনগুলি গ্রহণ করতে <code className="bg-red-600 px-2 py-1 rounded">git rebase --continue</code> কমান্ডটি ব্যবহার করবেন।
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-8">উদাহরণ এবং ব্যবহার</h3>
      <ul className="list-disc list-inside mb-4">
        <li><code className="bg-green-600 px-2 py-1 rounded">git rebase main</code>: বর্তমান শাখার পরিবর্তনগুলি <code className="bg-green-600 px-2 py-1 rounded">main</code> শাখার উপর প্রয়োগ করবে।</li>
        <li><code className="bg-yellow-600 px-2 py-1 rounded">git rebase -i HEAD~3</code>: শেষ তিনটি কমিটের তালিকা ইন্টারেক্টিভ মোডে দেখাবে এবং পুনর্বিন্যাসের অনুমতি দেবে।</li>
        <li><code className="bg-red-600 px-2 py-1 rounded">git rebase --continue</code>: কনফ্লিক্ট সমাধানের পরে রিবেস চলিয়ে নেবে।</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-8">যত্নের পরামর্শ</h3>
      <p className="mb-4">
        রিবেস করার সময় সতর্ক থাকুন কারণ এটি আপনার কমিট ইতিহাস পরিবর্তন করতে পারে। বিশেষ করে পাবলিক শাখার উপর রিবেস করা থেকে বিরত থাকুন, কারণ এটি অন্যদের কাজের সাথে সমস্যা সৃষ্টি করতে পারে। প্রয়োজনে আপনার কাজের ব্যাকআপ রাখতে ভুলবেন না।
      </p>
      
      {/* Additional sections or tips can go here */}
      
    </div>
  );
};

export default GitRebaseTutorial;
