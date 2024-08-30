import React from 'react';

const CreateBranchTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">গিটে ব্রাঞ্চ তৈরি ও ব্যবস্থাপনা</h2>
      <p className="mb-4">
        গিটের অন্যতম শক্তিশালী ফিচার হলো ব্রাঞ্চিং। ব্রাঞ্চের মাধ্যমে আপনি আলাদা আলাদা ফিচার বা বাগ ফিক্সের জন্য পৃথক লাইন অব ডেভেলপমেন্ট তৈরি করতে পারেন। 
        নিচে গিটে ব্রাঞ্চ তৈরি এবং ব্যবস্থাপনা করার প্রক্রিয়া দেখানো হয়েছে।
      </p>

      <h3 className="text-xl font-semibold mb-2">নতুন ব্রাঞ্চ তৈরি করা</h3>
      <p className="mb-4">
        একটি নতুন ব্রাঞ্চ তৈরি করতে, আপনি <span className="text-blue-400 font-semibold">git branch</span> কমান্ড ব্যবহার করতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git branch new-feature</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি একটি নতুন ব্রাঞ্চ তৈরি করবে যার নাম <span className="text-gray-400">new-feature</span>। তবে, আপনি এখনও এই ব্রাঞ্চে স্যুইচ করেননি।
      </p>

      <h3 className="text-xl font-semibold mb-2">নতুন ব্রাঞ্চে স্যুইচ করা</h3>
      <p className="mb-4">
        নতুন ব্রাঞ্চে কাজ শুরু করতে, আপনাকে সেই ব্রাঞ্চে স্যুইচ করতে হবে। এজন্য <span className="text-blue-400 font-semibold">git checkout</span> কমান্ড ব্যবহার করুন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git checkout new-feature</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি আপনাকে <span className="text-gray-400">new-feature</span> ব্রাঞ্চে নিয়ে যাবে এবং এখন থেকে আপনার সমস্ত পরিবর্তন এই ব্রাঞ্চে হবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ব্রাঞ্চ তৈরি ও স্যুইচ একসাথে করা</h3>
      <p className="mb-4">
        আপনি চাইলে একটি নতুন ব্রাঞ্চ তৈরি এবং সাথে সাথে স্যুইচ করতে পারেন একটি কমান্ডের মাধ্যমে। এজন্য <span className="text-green-400 font-semibold">git checkout -b</span> কমান্ড ব্যবহার করা হয়:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git checkout -b new-feature</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি <span className="text-gray-400">new-feature</span> নামে একটি ব্রাঞ্চ তৈরি করবে এবং সাথে সাথে আপনাকে সেই ব্রাঞ্চে স্যুইচ করিয়ে দেবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ব্রাঞ্চ মুছে ফেলা</h3>
      <p className="mb-4">
        যদি আপনি কোনো ব্রাঞ্চ আর না রাখতে চান, তাহলে আপনি <span className="text-red-400 font-semibold">git branch -d</span> কমান্ড ব্যবহার করে সেই ব্রাঞ্চটি মুছে ফেলতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git branch -d old-feature</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি <span className="text-gray-400">old-feature</span> ব্রাঞ্চটি মুছে ফেলবে যদি এটি মার্জ করা হয়ে থাকে। 
        তবে, যদি এটি মার্জ না করা হয়, আপনি <span className="text-red-400 font-semibold">git branch -D</span> ব্যবহার করতে পারেন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git branch -D old-feature</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ব্রাঞ্চগুলোর তালিকা দেখা</h3>
      <p className="mb-4">
        আপনার সকল ব্রাঞ্চের তালিকা দেখতে, আপনি <span className="text-yellow-400 font-semibold">git branch</span> কমান্ড ব্যবহার করতে পারেন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-yellow-400">$ git branch</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি আপনার সকল ব্রাঞ্চের তালিকা দেখাবে এবং বর্তমানে কোন ব্রাঞ্চে আছেন তা নির্ধারণ করবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">সতর্কতা</h3>
      <p className="mb-4">
        ব্রাঞ্চে কাজ করার সময়, মনে রাখবেন যে ব্রাঞ্চগুলোর মধ্যে মার্জ কনফ্লিক্ট হতে পারে। 
        তাই কাজের সময় সতর্ক থাকুন এবং নিয়মিত আপনার কাজের ব্যাকআপ রাখুন।
      </p>
    </div>
  );
};

export default CreateBranchTutorial;
