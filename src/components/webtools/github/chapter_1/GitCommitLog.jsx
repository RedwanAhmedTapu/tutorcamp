import React from 'react';

const GitCommitLog = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git কমিট লগ</h2>
      <p className="mb-4">
        আপনার গিট রিপোজিটরির ইতিহাস দেখতে এবং পূর্ববর্তী কমিটগুলি পর্যবেক্ষণ করতে আপনি <span className="text-blue-400 font-semibold">git log</span> কমান্ড ব্যবহার করতে পারেন। 
        এটি আপনাকে সমস্ত কমিটের একটি তালিকা দেখাবে যা রিপোজিটরিতে করা হয়েছে।
      </p>

      <h3 className="text-xl font-semibold mb-2">কমিট লগ দেখতে</h3>
      <p className="mb-4">
        <span className="text-blue-400 font-semibold">git log</span> কমান্ডটি চালানোর মাধ্যমে আপনি আপনার রিপোজিটরির সমস্ত কমিট দেখতে পারবেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-cyan-400">$ git log</code>
      </div>

      <p className="mb-4">
        নিচের আউটপুটটি দেখায় কিভাবে কমিট লগ প্রদর্শিত হয়:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-gray-400">
          commit d9e7f11aeb2d6e9b7dcbf1e1c5d36cdbf715c3b3<br/>
          Author: Md. Naimur Rahman &lt;naimur03rahman@gmail.com&gt;<br/>
          Date:   Fri Aug 30 12:34:56 2024 +0600<br/><br/>
          &nbsp;&nbsp;Added index.html file<br/><br/>
          commit 5f9c7b03a7d5a91b9f1bfa4efea013db13bce23<br/>
          Author: Md. Naimur Rahman &lt;naimur03rahman@gmail.com&gt;<br/>
          Date:   Thu Aug 29 14:20:42 2024 +0600<br/><br/>
          &nbsp;&nbsp;Updated style.css with new styles<br/>
        </code>
      </div>

      <p className="mb-4">
        উপরের আউটপুট থেকে বোঝা যাচ্ছে:
        <ul className="list-disc list-inside mb-4">
          <li><strong>commit:</strong> প্রতিটি কমিটের একটি ইউনিক আইডি, যা আলাদা আলাদা কমিটকে চিহ্নিত করে।</li>
          <li><strong>Author:</strong> কমিটটি যে ব্যক্তি করেছে তার নাম এবং ইমেইল।</li>
          <li><strong>Date:</strong> কমিটটি কখন করা হয়েছে তার তারিখ ও সময়।</li>
          <li><strong>Commit Message:</strong> কমিট সম্পর্কে একটি বর্ণনা যা পরিবর্তনগুলো বোঝাতে সাহায্য করে।</li>
        </ul>
      </p>

      <h3 className="text-xl font-semibold mb-2">কমিট লগের শর্ট ফরম্যাট</h3>
      <p className="mb-4">
        যদি আপনি কমিট লগের একটি সংক্ষিপ্ত সংস্করণ দেখতে চান, যেখানে শুধুমাত্র কমিটের আইডি এবং বার্তাগুলি প্রদর্শিত হয়, তাহলে আপনি <span className="text-green-400 font-semibold">--oneline</span> ফ্ল্যাগ ব্যবহার করতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git log --oneline</code>
      </div>

      <p className="mb-4">
        এরকম আউটপুট দেখতে পারেন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-gray-400">
          d9e7f11 Added index.html file<br/>
          5f9c7b0 Updated style.css with new styles<br/>
        </code>
      </div>

      <p className="mb-4">
        এখানে শুধুমাত্র কমিটের শর্ট আইডি এবং কমিট বার্তা দেখানো হয়েছে, যা দ্রুত লোগ দেখতে সাহায্য করে।
      </p>

      <h3 className="text-xl font-semibold mb-2">একটি নির্দিষ্ট কমিট দেখুন</h3>
      <p className="mb-4">
        যদি আপনি একটি নির্দিষ্ট কমিটের বিস্তারিত দেখতে চান, তাহলে আপনি <span className="text-purple-400 font-semibold">git show</span> কমান্ড ব্যবহার করতে পারেন এবং কমিট আইডি প্রদান করতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-purple-400">$ git show d9e7f11</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি নির্দিষ্ট কমিটের সমস্ত বিবরণ প্রদর্শন করবে, যার মধ্যে ফাইল পরিবর্তনগুলি, কমিট বার্তা, এবং অন্য কোনও সম্পর্কিত তথ্য অন্তর্ভুক্ত থাকে।
      </p>
    </div>
  );
};

export default GitCommitLog;
