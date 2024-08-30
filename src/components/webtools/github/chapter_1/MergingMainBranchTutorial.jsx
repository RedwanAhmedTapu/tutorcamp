import React from 'react';

const MergingMainBranchTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">গিটে মেইন ব্রাঞ্চ মার্জ করা</h2>
      <p className="mb-4">
        গিটে, আপনি আপনার কাজের ব্রাঞ্চে মেইন ব্রাঞ্চের সর্বশেষ পরিবর্তনগুলি অন্তর্ভুক্ত করতে মার্জ করতে পারেন। নিচে এর প্রক্রিয়া দেখানো হয়েছে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ১: বর্তমান ব্রাঞ্চে থাকা</h3>
      <p className="mb-4">
        প্রথমে নিশ্চিত করুন যে আপনি যে ব্রাঞ্চে কাজ করছেন সেখানে অবস্থান করছেন। আপনি <span className="text-blue-400 font-semibold">git status</span> দিয়ে চেক করতে পারেন।
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git status</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ২: মেইন ব্রাঞ্চের সর্বশেষ আপডেট পুল করা</h3>
      <p className="mb-4">
        মেইন ব্রাঞ্চের সর্বশেষ আপডেটগুলি পেতে আপনি <span className="text-green-400 font-semibold">git pull origin main</span> কমান্ড ব্যবহার করতে পারেন। এটি রিমোট রিপোজিটরি থেকে মেইন ব্রাঞ্চের সর্বশেষ পরিবর্তনগুলি ডাউনলোড করবে।
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git pull origin main</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৩: মেইন ব্রাঞ্চকে বর্তমান ব্রাঞ্চে মার্জ করা</h3>
      <p className="mb-4">
        এখন আপনি মেইন ব্রাঞ্চকে আপনার বর্তমান ব্রাঞ্চে মার্জ করতে পারেন <span className="text-yellow-400 font-semibold">git merge main</span> কমান্ড দিয়ে। এটি মেইন ব্রাঞ্চের পরিবর্তনগুলো আপনার বর্তমান ব্রাঞ্চে অন্তর্ভুক্ত করবে।
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-yellow-400">$ git merge main</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৪: মার্জ কনফ্লিক্ট সমাধান (যদি থাকে)</h3>
      <p className="mb-4">
        যদি মার্জ কনফ্লিক্ট ঘটে, আপনি <span className="text-red-400 font-semibold">git status</span> কমান্ড দিয়ে কনফ্লিক্ট করা ফাইলগুলো চেক করতে পারেন এবং ম্যানুয়ালি সেগুলো সমাধান করতে পারেন।
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git status</code>
      </div>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git add .</code>
      </div>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git commit</code>
      </div>

      <p className="mb-4">
        কনফ্লিক্ট সমাধানের পর, আপনি <span className="text-green-400 font-semibold">git add</span> এবং <span className="text-blue-400 font-semibold">git commit</span> কমান্ড দিয়ে মার্জ প্রক্রিয়া শেষ করতে পারেন।
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৫: মার্জ সম্পন্ন হওয়ার পর</h3>
      <p className="mb-4">
        সফলভাবে মার্জ সম্পন্ন হলে, আপনার ব্রাঞ্চ মেইন ব্রাঞ্চের সর্বশেষ পরিবর্তনগুলোর সাথে আপডেট হয়ে যাবে এবং আপনি আপনার কাজ চালিয়ে যেতে পারবেন।
      </p>
    </div>
  );
};

export default MergingMainBranchTutorial;
