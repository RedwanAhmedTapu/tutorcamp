import React from 'react';

const ProjectForkTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">প্রজেক্ট ফর্ক করার বিস্তারিত প্রক্রিয়া</h2>
      <p className="mb-4">
        গিটহাবে ফর্ক করা আপনাকে মূল রিপোজিটরি থেকে আপনার নিজের কপি তৈরি করতে দেয়। এই প্রক্রিয়ায়, আপনি মূল প্রজেক্টের সাথে কাজ করতে পারেন এবং আপনার পরিবর্তনগুলি পরে মূল রিপোজিটরিতে প্রস্তাব করতে পারেন। এখানে ফর্ক করার ধাপগুলি ব্যাখ্যা করা হয়েছে:
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ১: রিপোজিটরি ফর্ক করুন</h3>
      <p className="mb-4">
        প্রথমে গিটহাবের মূল রিপোজিটরিতে যান যা আপনি ফর্ক করতে চান। 'Fork' বোতামটি ক্লিক করুন। এটি আপনার গিটহাব অ্যাকাউন্টে রিপোজিটরির একটি কপি তৈরি করবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ২: ফর্ক করা রিপোজিটরি ক্লোন করুন</h3>
      <p className="mb-4">
        ফর্ক করার পরে, আপনাকে এটি আপনার লোকাল মেশিনে ক্লোন করতে হবে। এটি করার জন্য, নিচের কমান্ডটি ব্যবহার করুন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-yellow-400">$ git clone https://github.com/your-username/forked-repo.git</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি আপনার মেশিনে ফর্ক করা রিপোজিটরির একটি লোকাল কপি তৈরি করবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৩: মূল রিপোজিটরির সাথে সংযোগ স্থাপন করুন</h3>
      <p className="mb-4">
        আপনি যখন আপনার রিপোজিটরি ক্লোন করেছেন, তখন মূল রিপোজিটরির সাথে সংযোগ স্থাপন করা গুরুত্বপূর্ণ যাতে আপনি আপডেটগুলি টানতে পারেন। এটি করতে, নিচের কমান্ডটি ব্যবহার করুন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git remote add upstream https://github.com/original-owner/original-repo.git</code>
      </div>

      <p className="mb-4">
        এখানে <span className="text-yellow-400">upstream</span> হল মূল রিপোজিটরির জন্য রেফারেন্স নাম।
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৪: মূল রিপোজিটরি থেকে আপডেট টানুন</h3>
      <p className="mb-4">
        আপনার ফর্ক করা প্রজেক্ট আপ টু ডেট রাখতে, আপনি মূল রিপোজিটরি থেকে আপডেটগুলি টানতে পারেন। এটি করার জন্য, নিচের কমান্ডগুলি ব্যবহার করুন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git fetch upstream</code><br />
        <code className="text-blue-400">$ git merge upstream/main</code>
      </div>

      <p className="mb-4">
        প্রথম কমান্ডটি মূল রিপোজিটরি থেকে সমস্ত আপডেট টেনে আনে, এবং দ্বিতীয় কমান্ডটি আপনার লোকাল ব্রাঞ্চে সেগুলি মার্জ করে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৫: আপনার পরিবর্তনগুলি মূল রিপোজিটরিতে পাঠান</h3>
      <p className="mb-4">
        আপনার পরিবর্তনগুলি করার পর, আপনি মূল রিপোজিটরিতে সেগুলি পাঠানোর জন্য একটি <span className="text-red-400">pull request</span> তৈরি করতে পারেন। এটি মূল প্রজেক্টের মালিকদের আপনার পরিবর্তনগুলি পর্যালোচনা এবং গ্রহণ করার সুযোগ দেবে।
      </p>

      <p className="mb-4">
        'Pull request' তৈরি করার জন্য, গিটহাবের ওয়েব ইন্টারফেসে যান এবং 'New Pull Request' বোতামটি ক্লিক করুন। তারপর, আপনার পরিবর্তনগুলি ব্যাখ্যা করে এবং একটি বিবরণ যোগ করে আপনার 'Pull Request' সাবমিট করুন।
      </p>

      <p className="mb-4">
        ফর্ক করা প্রজেক্টে কাজ করার এই প্রক্রিয়াটি আপনাকে মূল প্রজেক্টের সাথে কাজ করার স্বাধীনতা দেয় এবং আপনার অবদানগুলি মূল প্রজেক্টে যুক্ত করার সুযোগ প্রদান করে।
      </p>
    </div>
  );
};

export default ProjectForkTutorial;
