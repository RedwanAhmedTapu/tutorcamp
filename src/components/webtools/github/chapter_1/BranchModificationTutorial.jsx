import React from 'react';

const BranchModificationTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">গিটে ব্রাঞ্চ সংশোধন</h2>
      <p className="mb-4">
        ব্রাঞ্চ সংশোধন গিটে সাধারণত বর্তমান ব্রাঞ্চের নাম পরিবর্তন, বর্তমান কাজ অন্য ব্রাঞ্চে স্থানান্তর, বা ব্রাঞ্চ রিবেস করার মাধ্যমে করা যায়। নিচে এই সংশোধনগুলোর প্রক্রিয়া দেখানো হয়েছে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ব্রাঞ্চের নাম পরিবর্তন</h3>
      <p className="mb-4">
        আপনি কোনো ব্রাঞ্চের নাম পরিবর্তন করতে চাইলে, আপনি <span className="text-blue-400 font-semibold">git branch -m</span> কমান্ড ব্যবহার করতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git branch -m old-branch-name new-branch-name</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি <span className="text-gray-400">old-branch-name</span> ব্রাঞ্চের নাম পরিবর্তন করে <span className="text-gray-400">new-branch-name</span> রাখবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">কাজ অন্য ব্রাঞ্চে স্থানান্তর</h3>
      <p className="mb-4">
        যদি আপনি ভুল ব্রাঞ্চে কাজ করে থাকেন, তবে সেই কাজ অন্য ব্রাঞ্চে স্থানান্তর করতে পারেন <span className="text-green-400 font-semibold">git stash</span> এবং <span className="text-green-400 font-semibold">git stash pop</span> ব্যবহার করে। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git stash</code>
      </div>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git checkout correct-branch</code>
      </div>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git stash pop</code>
      </div>

      <p className="mb-4">
        এই প্রক্রিয়াটি আপনার বর্তমান কাজকে <span className="text-gray-400">stash</span> করবে এবং সঠিক ব্রাঞ্চে গিয়ে সেই কাজকে পুনরায় প্রয়োগ করবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ব্রাঞ্চ রিবেস</h3>
      <p className="mb-4">
        রিবেস একটি শক্তিশালী টুল যা একটি ব্রাঞ্চকে অন্য ব্রাঞ্চের উপর ভিত্তি করে আপডেট করতে ব্যবহৃত হয়। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-yellow-400">$ git checkout feature-branch</code>
      </div>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git rebase main</code>
      </div>

      <p className="mb-4">
        এই প্রক্রিয়ায় <span className="text-gray-400">feature-branch</span> ব্রাঞ্চটিকে <span className="text-gray-400">main</span> ব্রাঞ্চের সর্বশেষ কমিটের উপরে নিয়ে আসা হয়।
      </p>

      <h3 className="text-xl font-semibold mb-2">ব্রাঞ্চ মার্জ কনফ্লিক্ট সমাধান</h3>
      <p className="mb-4">
        রিবেস করার সময় বা মার্জ করার সময়, মার্জ কনফ্লিক্ট হতে পারে। আপনি <span className="text-red-400 font-semibold">git status</span> কমান্ড ব্যবহার করে দেখতে পারেন কোন ফাইলগুলো কনফ্লিক্ট করেছে, এবং তারপর ম্যানুয়ালি সেই কনফ্লিক্টগুলো সমাধান করতে পারেন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git status</code>
      </div>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git add .</code>
      </div>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git rebase --continue</code>
      </div>

      <p className="mb-4">
        এই প্রক্রিয়ায়, কনফ্লিক্ট সমাধান করা হলে, আপনি রিবেস বা মার্জ প্রক্রিয়া অব্যাহত রাখতে পারেন।
      </p>
    </div>
  );
};

export default BranchModificationTutorial;
