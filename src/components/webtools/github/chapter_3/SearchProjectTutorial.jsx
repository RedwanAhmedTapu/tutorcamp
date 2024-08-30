import React from 'react';

const SearchProjectTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">গিট প্রজেক্টে কীভাবে সার্চ করবেন</h2>
      <p className="mb-4">
        গিট আপনাকে আপনার প্রজেক্টের ভিতরে নির্দিষ্ট টেক্সট বা কোড খুঁজে পেতে সহায়তা করে। নিচে এই প্রক্রিয়া কীভাবে সম্পন্ন করবেন তা ব্যাখ্যা করা হয়েছে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ধাপ ১: নির্দিষ্ট টেক্সট সার্চ করুন</h3>
      <p className="mb-4">
        আপনার প্রজেক্টে একটি নির্দিষ্ট টেক্সট সার্চ করতে <span className="text-yellow-400 font-semibold">git grep</span> কমান্ড ব্যবহার করুন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-yellow-400">$ git grep "functionName"</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ২: নির্দিষ্ট ফাইল বা ফোল্ডারে সার্চ করুন</h3>
      <p className="mb-4">
        আপনি নির্দিষ্ট একটি ফাইল বা ফোল্ডারের ভিতরে টেক্সট সার্চ করতে পারেন <span className="text-green-400 font-semibold">git grep -e "searchText" -- ./path/to/file_or_directory</span> কমান্ড ব্যবহার করে। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git grep -e "myVariable" -- ./src/utils</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৩: পুরানো কমিটগুলোর মধ্যে সার্চ করুন</h3>
      <p className="mb-4">
        আপনার প্রজেক্টের ইতিহাসে পুরানো কমিটগুলোর মধ্যে একটি নির্দিষ্ট টেক্সট খুঁজতে <span className="text-blue-400 font-semibold">git log -S "searchText"</span> কমান্ড ব্যবহার করুন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git log -S "functionName"</code>
      </div>

      <h3 className="text-xl font-semibold mb-2">ধাপ ৪: নির্দিষ্ট ব্রাঞ্চে সার্চ করুন</h3>
      <p className="mb-4">
        আপনি একটি নির্দিষ্ট ব্রাঞ্চে টেক্সট সার্চ করতে <span className="text-red-400 font-semibold">git grep "searchText" branchName</span> কমান্ড ব্যবহার করতে পারেন। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git grep "functionName" main</code>
      </div>

      <p className="mb-4">
        এইভাবে, আপনি আপনার প্রজেক্টের ভিতরে নির্দিষ্ট টেক্সট বা কোড খুঁজে পেতে পারেন, যা আপনাকে দ্রুত এবং কার্যকরভাবে আপনার কাজ সম্পাদন করতে সহায়তা করবে।
      </p>
    </div>
  );
};

export default SearchProjectTutorial;
