import React from 'react';

const GitRepo = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">

      <h2 className="text-2xl font-bold mb-4">Git বুঝুন: লোকাল, স্টেজিং, এবং রিপোজিটরি</h2>
      <p className="mb-4">
        Git আপনার ফাইলের পরিবর্তনগুলি তিনটি প্রধান এলাকায় ট্র্যাক করে: লোকাল, স্টেজিং, এবং রিপোজিটরি।
        এখানে এই প্রক্রিয়া কিভাবে কাজ করে তা দেখানো হয়েছে:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>লোকাল:</strong> এটি আপনার কম্পিউটারে আপনার প্রজেক্ট ফাইলগুলি যেখানে অবস্থান করে।</li>
        <li><strong>স্টেজিং এলাকা:</strong> কমিট করার আগে পরিবর্তনগুলি এই এলাকায় যোগ করা হয়, যেখানে সেগুলি পর্যালোচনা এবং প্রস্তুত করা হয়।</li>
        <li><strong>রিপোজিটরি:</strong> এটি ফাইনাল ধাপ, যেখানে আপনার পরিবর্তনগুলি স্থায়ীভাবে সংরক্ষিত হয় এবং ভার্সন-কন্ট্রোল করা হয়।</li>
      </ul>

      <div className="flex justify-center my-8">
        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="100" height="50" fill="skyblue" />
          <text x="40" y="50" fill="black" fontWeight="bold">লোকাল</text>
          
          <rect x="150" y="20" width="100" height="50" fill="lightgreen" />
          <text x="160" y="50" fill="black" fontWeight="bold">স্টেজিং</text>
          
          <rect x="280" y="20" width="100" height="50" fill="orange" />
          <text x="290" y="50" fill="black" fontWeight="bold">রিপোজিটরি</text>
          
          <line x1="120" y1="45" x2="150" y2="45" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="250" y1="45" x2="280" y2="45" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#000" />
            </marker>
          </defs>
        </svg>
      </div>
      
      <p className="mb-4">
        এখন এটাই আপনার প্রোজেক্ট, এখানে আমরা গিট ইনিশিয়ালাইজ করতে চাই। তাহলে আমি আমার কমান্ড লাইন এই ডিরেক্টরিতে ওপেন করে নিচের এই কমান্ড লিখবো:
      </p>
      
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code>&gt; git init</code>
      </div>
      
      <p className="mb-4">
        এরকম আউটপুট দেখবেন:
      </p>
      
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code>Initialized empty Git repository in /Users/redwan/Desktop/learning-git/.git/</code>
      </div>
      
      <p className="mb-4">
        আমি learning-git ডিরেক্টরির ভিতর থেকে git init কমান্ড রান করলাম যেহেতু আমি এটার ভিতরের সবকিছুই ট্র্যাক করতে চাই। 
        ব্যাস এখন এই ডিরেক্টরির ভিতরে গিটের রেপো সেটআপ হয়ে গেলো। এখন থেকে গিট সব ট্র্যাক করা শুরু করতে পারবে, এই ডিরেক্টরির ভিতরে যত ফাইল/ফোল্ডার আছে সব। 
        তবে ট্র্যাক করলেও গিট সেগুলোক ভার্সন হিসেবে স্টোর করবে না। তারজন্যে আপনাকে স্পেসিফিকলি বলে দিতে হবে কোনটা কখন কিভাবে সেইভ করতে হবে।
      </p>
      
      <p className="mb-4">
        আমার এই ডিরেক্টরির ভিতরে দুইটা .txt ফাইল আছে। এগুলো এখন আমি চাচ্ছি গিট ভার্সন হিসেবে সেইভ করুক। 
        তারজন্যে আমাদের দুইটা স্টেজ ক্রস করতে হবে। প্রথমে গিট আপনার উল্লেখিত ফাইলকে স্টেজিং এরিয়াতে নেবে, 
        তারপর আবার আপনি চাইলে সেটা ফাইনাল হিসেবে আপনার গিট রেপোতে কমিট করতে পারবেন। এই দুই স্টেজের জন্য পৃথক পৃথক দুইটা কমান্ড ব্যবহার করতে হবে 
        (অথবা সিঙ্গেল কমান্ড ব্যবহার করেও করা যাবে, কিন্তু শেখার সুবিধার্থে আমরা এখানে আলাদা আলাদা কমান্ড দিয়েই কাজ করব)।
      </p>
    </div>
  );
};

export default GitRepo;
