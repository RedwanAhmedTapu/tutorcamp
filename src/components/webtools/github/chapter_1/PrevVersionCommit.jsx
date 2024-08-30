import React from 'react';

const PrevVersionCommit = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">পূর্ববর্তী কমিটে ফিরে যান</h2>
      <p className="mb-4">
        যদি আপনি পূর্ববর্তী কমিটগুলির মধ্যে নেভিগেট করতে চান বা কোনও পুরনো কমিটে ফিরে যেতে চান, তাহলে আপনি <span className="text-cyan-400 font-semibold">git checkout</span> এবং <span className="text-green-400 font-semibold">git reset</span> কমান্ড ব্যবহার করতে পারেন। 
        এই কমান্ডগুলি আপনাকে পূর্ববর্তী কমিটে যেতে এবং প্রয়োজন অনুসারে রিপোজিটরির অবস্থান পরিবর্তন করতে সাহায্য করবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">পূর্ববর্তী কমিটে চলে যাওয়া</h3>
      <p className="mb-4">
        একটি পূর্ববর্তী কমিটে চলে যেতে, আপনি <span className="text-cyan-400 font-semibold">git checkout</span> কমান্ড ব্যবহার করতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-indigo-400">$ git checkout d9e7f11</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি আপনাকে <span className="text-gray-400">d9e7f11</span> আইডি সহ পূর্ববর্তী কমিটে নিয়ে যাবে। 
        এটি আপনাকে সেই কমিটের ভিত্তিতে একটি নতুন ব্রাঞ্চ তৈরি করবে এবং আপনার বর্তমান কাজকে প্রভাবিত করবে না।
      </p>

      <h3 className="text-xl font-semibold mb-2">পূর্ববর্তী কমিটে ফিরে এসে বর্তমান ব্রাঞ্চ আপডেট করা</h3>
      <p className="mb-4">
        যদি আপনি একটি পূর্ববর্তী কমিটে ফিরে আসতে চান এবং সেই পরিবর্তনগুলি আপনার বর্তমান ব্রাঞ্চে আপডেট করতে চান, তাহলে আপনি <span className="text-green-400 font-semibold">git reset</span> কমান্ড ব্যবহার করতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git reset --hard d9e7f11</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি <span className="text-gray-400">d9e7f11</span> আইডি সহ কমিটের অবস্থানে ফিরে যাবে এবং আপনার কাজের পদ্ধতিটি সম্পূর্ণরূপে আপডেট করবে। 
        সমস্ত পরিবর্তন মুছে যাবে এবং বর্তমান অবস্থান পূর্ববর্তী কমিটের সাথে সমন্বিত হবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">নতুন ব্রাঞ্চ তৈরি করে পূর্ববর্তী কমিট থেকে কাজ শুরু করা</h3>
      <p className="mb-4">
        পূর্ববর্তী কমিট থেকে একটি নতুন ব্রাঞ্চ তৈরি করতে, আপনি <span className="text-cyan-400 font-semibold">git checkout -b</span> কমান্ড ব্যবহার করতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-indigo-400">$ git checkout -b new-branch d9e7f11</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি একটি নতুন ব্রাঞ্চ <span className="text-gray-400">new-branch</span> তৈরি করবে এবং <span className="text-gray-400">d9e7f11</span> কমিট থেকে সেই ব্রাঞ্চটি শুরু করবে।
        এটি আপনার বর্তমান ব্রাঞ্চের অবস্থা পরিবর্তন করবে না এবং একটি নতুন ব্রাঞ্চে কাজ করার সুযোগ দেবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">চেকআউট এবং রিসেট সম্পর্কে সতর্কতা</h3>
      <p className="mb-4">
        <span className="text-red-400 font-semibold">git checkout</span> কমান্ডের মাধ্যমে আপনি একটি কমিটে চলে গেলে, আপনার বর্তমান কাজের অগ্রগতি হারাতে পারেন যদি না আপনি নতুন ব্রাঞ্চে চলে যান।
        <span className="text-red-400 font-semibold">git reset --hard</span> কমান্ডের মাধ্যমে পূর্ববর্তী কমিটের অবস্থানে ফিরে গেলে আপনার অপ্রকাশিত পরিবর্তনগুলি মুছে যাবে।
        সুতরাং, এই কমান্ডগুলির সাথে কাজ করার আগে সবসময় সতর্ক থাকুন এবং নিশ্চিত করুন যে আপনার গুরুত্বপূর্ণ পরিবর্তনগুলি সেভ করা হয়েছে।
      </p>
    </div>
  );
};

export default PrevVersionCommit;
