import React from 'react';

const CommitDifferenceTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">গিটে কমিটের মধ্যে পার্থক্য দেখুন</h2>
      <p className="mb-4">
        গিটে, আপনি বিভিন্ন কমিটের মধ্যে কী পরিবর্তন হয়েছে তা দেখতে পারেন। এটি আপনার কোডের ইতিহাস বুঝতে এবং সমস্যার সমাধান করতে সহায়ক। নিচে এর প্রক্রিয়া দেখানো হয়েছে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ১: সর্বশেষ কমিটের সাথে বর্তমান পরিবর্তনগুলো দেখুন</h3>
      <p className="mb-4">
        আপনার বর্তমান কাজ এবং সর্বশেষ কমিটের মধ্যে পার্থক্য দেখতে <span className="text-yellow-400 font-semibold">git diff</span> কমান্ড ব্যবহার করুন।
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-yellow-400">$ git diff</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ২: দুইটি নির্দিষ্ট কমিটের মধ্যে পার্থক্য দেখুন</h3>
      <p className="mb-4">
        আপনি দুইটি নির্দিষ্ট কমিটের মধ্যে পার্থক্য দেখতে পারেন <span className="text-green-400 font-semibold">git diff [প্রথম কমিট] [দ্বিতীয় কমিট]</span> কমান্ড ব্যবহার করে। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git diff abc123 def456</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৩: স্টেজিং এরিয়ার পরিবর্তনগুলো দেখুন</h3>
      <p className="mb-4">
        যদি আপনি স্টেজিং এরিয়ার পরিবর্তনগুলো দেখতে চান, তাহলে <span className="text-blue-400 font-semibold">git diff --staged</span> কমান্ড ব্যবহার করুন।
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git diff --staged</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৪: একটি নির্দিষ্ট ফাইলের পরিবর্তন দেখুন</h3>
      <p className="mb-4">
        নির্দিষ্ট একটি ফাইলের পরিবর্তন দেখতে <span className="text-red-400 font-semibold">git diff [ফাইলের নাম]</span> কমান্ড ব্যবহার করুন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git diff index.html</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৫: একটি কমিটের পরিবর্তন দেখুন</h3>
      <p className="mb-4">
        আপনি একটি নির্দিষ্ট কমিটে কী পরিবর্তন হয়েছে তা দেখতে <span className="text-purple-400 font-semibold">git show [কমিট আইডি]</span> কমান্ড ব্যবহার করতে পারেন।
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-purple-400">$ git show abc123</code>
      </div>

      <p className="mb-4">
        এইভাবে, আপনি আপনার প্রোজেক্টে কোন পরিবর্তন হয়েছে তা সহজেই ট্র্যাক করতে এবং আগের অবস্থায় ফিরে যেতে পারেন।
      </p>
    </div>
  );
};

export default CommitDifferenceTutorial;
