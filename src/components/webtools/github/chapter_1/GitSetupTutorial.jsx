import React from 'react';

const GiSetupTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h1 className="text-lg sm:text-xl md:text-2xl text-teal-500 font-bold mb-4"> গিট সেটআপ</h1>
      <div className="border border-gray-400 p-4 rounded-lg">
        <p className="mb-4">
          গিট ব্যবহার করতে চাইলে অবশ্যই আপনাকে গিট 
          <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="text-teal-300 underline"> এখানে</a> 
          থেকে ডাউনলোড করে ইন্সটল করতে হবে আপনার সিস্টেমে। আপনার অপারেটিং সিস্টেম যেটাই হউক না কেন, সবার জন্যই গিট এভেইলেবল।
        </p>
        <p className="mb-4">
          সেটাপ প্রসেসে আমি বিস্তারিত যাবো না। খুবই সিম্পল, যদি কিছু বুঝতে না পারেন, জাস্ট নেক্সট নেক্সট দিয়ে সেটাপ প্রসেস কমপ্লিট করুন। সেটাপ করা শেষ হলে একটা গিট ব্যাশ (Git Bash) অ্যাপ্লিকেশন পাবেন। এটা কমান্ড লাইন এনভায়রনমেন্ট। এটা ওপেন করলে কমান্ড দেওয়ার উইন্ডো পাবেন, এখানে আপনি ইউনিক্স-লাইক অপারেটিং সিস্টেমের কমান্ড ব্যবহার করতে পারবেন।
        </p>
        <p className="mb-4">
          আপনার আগের কিছু লিনাক্স/ইউনিক্স এর কমান্ডের সাথে পরিচয় থাকলে সহজেই এখানে ব্যবহার করতে পারবেন। অথবা আজকে এখানে যে যে কমান্ডগুলো ব্যবহার করব সেগুলো কোনটা কিভাবে কাজ করে সেগুলো শিখে ফেললেই আপাতত আপনি গিট ব্যবহার করতে পারবেন।
        </p>
        <p className="mb-4">
          এখন আপনি চাইলে আপনার কম্পিউটারে থাকা সব কমান্ড লাইন/টার্মিনাল থেকেও এখন গিট চালাতে পারবেন। আপনার পছন্দের কমান্ড লাইন/টার্মিনাল ওপেন করে নিচের কমান্ডটি লিখুন:
        </p>
        <div className="bg-gray-700 p-2 rounded">
          <code className="text-green-400">git --version</code>
        </div>
        <p className="mt-4">
          এটা এরকম কিছু আউটপুট আপনার গিটের ভার্সন দেখাবে। ভার্সন নাম্বার অবশ্যই আমার দেখানোটার চেয়ে ডিফারেন্ট হবে, কারণ আমারটা আমি যখন এই বই লিখি তখনকার ভার্সন দেখাচ্ছে:
        </p>
        <div className="bg-gray-700 p-2 rounded">
          <code className="text-green-400">git version 2.39.0.windows.2</code>
        </div>
      </div>
    </div>
  );
};

export default GiSetupTutorial;
