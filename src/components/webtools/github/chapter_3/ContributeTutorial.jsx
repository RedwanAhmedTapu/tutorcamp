import React from 'react';
import GitForkImage from "../../../../assets/fork-git.webp"

const ContributeForkAndCollaborationTutorial = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">প্রজেক্টে কিভাবে কন্ট্রিবিউট করবেন: ফর্ক এবং কল্যাবোরেশন</h2>
      <p className="mb-4">
        ওপেন সোর্স প্রজেক্টে কন্ট্রিবিউট করার দুটি প্রধান উপায় রয়েছে: ফর্ক এবং কল্যাবোরেশন। এখানে উভয় পদ্ধতির ধাপে ধাপে গাইডলাইন দেওয়া হলো, এবং এর মধ্যে পার্থক্য ও কোন পরিস্থিতিতে কোনটি উত্তম তা ব্যাখ্যা করা হয়েছে।
      </p>

      <h3 className="text-xl font-semibold mb-2">ফর্ক পদ্ধতি</h3>
      <p className="mb-4">
        ফর্ক পদ্ধতি হল যখন আপনি মূল প্রজেক্টের রিপোজিটরির একটি কপি তৈরি করেন এবং এটি আপনার নিজের গিটহাব অ্যাকাউন্টে রাখেন। আপনি আপনার ফর্ক করা রিপোজিটরিতে পরিবর্তনগুলি করতে পারেন এবং শেষে একটি পুল রিকোয়েস্ট পাঠিয়ে মূল প্রজেক্টে আপনার পরিবর্তনগুলি যোগ করার প্রস্তাব করতে পারেন।
      </p>

      <h4 className="text-lg font-semibold mb-2">ধাপ ১: রিপোজিটরি ফর্ক করুন এবং ক্লোন করুন</h4>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-yellow-400">$ git clone https://github.com/your-username/forked-repo.git</code>
      </div>

      <h4 className="text-lg font-semibold mb-2">ধাপ ২: নতুন ব্রাঞ্চ তৈরি করুন</h4>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git checkout -b feature/add-new-feature</code>
      </div>

      <h4 className="text-lg font-semibold mb-2">ধাপ ৩: আপনার পরিবর্তনগুলি করুন এবং কমিট করুন</h4>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git add .</code><br />
        <code className="text-blue-400">$ git commit -m "Added new feature to improve user experience"</code>
      </div>

      <h4 className="text-lg font-semibold mb-2">ধাপ ৪: আপনার পরিবর্তনগুলি পুশ করুন এবং পুল রিকোয়েস্ট তৈরি করুন</h4>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git push origin feature/add-new-feature</code>
      </div>
      <p className="mb-4">
        এর পরে, গিটহাবে যান এবং পুল রিকোয়েস্ট তৈরি করুন, যা আপনার পরিবর্তনগুলি মূল প্রজেক্টে মার্জ করার জন্য প্রস্তাব করে।
      </p>

      <h4 className="text-lg font-semibold mb-2">ধাপ ৫: ফর্ক আপডেট করা</h4>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-purple-400">$ git fetch upstream</code><br />
        <code className="text-purple-400">$ git merge upstream/main</code>
      </div>
      <p className="mb-4">
        <strong>কেন এটি প্রয়োজন:</strong>
        <ul className="list-disc list-inside ml-4">
          <li><code className="text-purple-400">git fetch upstream</code> কমান্ডটি মূল রিপোজিটরির (যা আপনার ফর্ক করা রিপোজিটরি থেকে এসেছে) সবশেষ পরিবর্তনগুলি লোকাল মেশিনে নিয়ে আসে, কিন্তু আপনার লোকাল ব্রাঞ্চের সাথে মার্জ করে না। এটি আপনাকে অন্য কন্ট্রিবিউটরদের কাজের সাথে আপ টু ডেট থাকতে সহায়তা করে।</li>
          <li><code className="text-purple-400">git merge upstream/main</code> কমান্ডটি আপনার লোকাল মেইন ব্রাঞ্চের সাথে মূল রিপোজিটরির মেইন ব্রাঞ্চের পরিবর্তনগুলি মার্জ করে, যাতে আপনার ফর্ক আপ টু ডেট থাকে এবং কোনও কনফ্লিক্ট না থাকে।</li>
        </ul>
      </p>
      <p className="mb-4">
        আপনার ফর্ক আপডেট রাখতে এবং মূল প্রজেক্টের সাথে সিঙ্ক রাখতে এই ধাপটি গুরুত্বপূর্ণ।
      </p>
      <img src={GitForkImage}/>

      <h3 className="text-xl font-semibold mb-2">কল্যাবোরেশন পদ্ধতি</h3>
      <p className="mb-4">
        কল্যাবোরেশন পদ্ধতিতে, আপনি মূল প্রজেক্টের মেইনটেইনারদের কাছ থেকে সরাসরি অ্যাক্সেস পান এবং ফর্ক ছাড়াই তাদের রিপোজিটরিতে ব্রাঞ্চ তৈরি করতে পারেন। এর জন্য আপনাকে 'কল্যাবোরেটর' হিসেবে যুক্ত করা হবে।
      </p>

      <h4 className="text-lg font-semibold mb-2">ধাপ ১: ব্রাঞ্চ তৈরি করুন</h4>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-green-400">$ git checkout -b feature/add-new-feature</code>
      </div>

      <h4 className="text-lg font-semibold mb-2">ধাপ ২: পরিবর্তনগুলি করুন এবং কমিট করুন</h4>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">$ git add .</code><br />
        <code className="text-blue-400">$ git commit -m "Added new feature to improve user experience"</code>
      </div>

      <h4 className="text-lg font-semibold mb-2">ধাপ ৩: পরিবর্তনগুলি পুশ করুন</h4>
      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git push origin feature/add-new-feature</code>
      </div>

      <h4 className="text-lg font-semibold mb-2">ধাপ ৪: পুল রিকোয়েস্ট তৈরি করুন</h4>
      <p className="mb-4">
        পুল রিকোয়েস্ট তৈরি করুন এবং মূল প্রজেক্টে আপনার পরিবর্তনগুলি মার্জ করার প্রস্তাব দিন।
      </p>

      <h3 className="text-xl font-semibold mb-2">ফর্ক বনাম কল্যাবোরেশন: কোনটি উত্তম?</h3>
      <p className="mb-4">
        <strong>ফর্ক পদ্ধতি:</strong> ফর্ক পদ্ধতি ব্যবহার করে আপনি সম্পূর্ণ স্বাধীনভাবে কাজ করতে পারেন। আপনি আপনার নিজস্ব ফর্ক করা রিপোজিটরিতে কাজ করেন এবং এটি প্রয়োজনীয় হলে মূল প্রজেক্টের সাথে সিঙ্ক রাখতে পারেন। এটি বড় প্রজেক্ট বা যেখানে আপনার অবদান এখনও পর্যালোচনা করা হচ্ছে সেসব ক্ষেত্রে উপযোগী।
      </p>
      <p className="mb-4">
        <strong>কল্যাবোরেশন পদ্ধতি:</strong> যদি আপনি প্রজেক্টের মেইনটেইনারদের থেকে সরাসরি অ্যাক্সেস পান, তবে কল্যাবোরেশন পদ্ধতি দ্রুত এবং সহজ হতে পারে, কারণ আপনি সরাসরি মূল রিপোজিটরিতে কাজ করতে পারেন। এটি সাধারণত ছোট দল বা ট্রাস্টেড কন্ট্রিবিউটরদের জন্য উপযুক্ত।
      </p>

      <h3 className="text-xl font-semibold mb-2">ডিসপারিটি (পার্থক্য)</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-gray-700 text-white rounded-md">
          <thead>
            <tr className="bg-gray-600">
              <th className="px-4 py-2">বিষয়</th>
              <th className="px-4 py-2">ফর্ক পদ্ধতি</th>
              <th className="px-4 py-2">কল্যাবোরেশন পদ্ধতি</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">অ্যাক্সেস কন্ট্রোল</td>
              <td className="border px-4 py-2">মুল রিপোজিটরিতে সরাসরি অ্যাক্সেস নেই</td>
              <td className="border px-4 py-2">মুল রিপোজিটরিতে সরাসরি ব্রাঞ্চ তৈরি করতে পারেন</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">পর্যালোচনা প্রক্রিয়া</td>
              <td className="border px-4 py-2">পুল রিকোয়েস্টের মাধ্যমে কাজ পর্যালোচনা করা হয়</td>
              <td className="border px-4 py-2">প্রয়োজন হলে পুল রিকোয়েস্ট ব্যবহার করা হয়</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">কাজের স্বাধীনতা</td>
              <td className="border px-4 py-2">সম্পূর্ণ স্বাধীনভাবে কাজ করতে পারেন</td>
              <td className="border px-4 py-2">মুল রিপোজিটরিতে সরাসরি কাজ করা যায়</td>
            </tr>
          </tbody>
        </table>
      </div>
     

      <p className="mt-4">
        কোন পদ্ধতি উত্তম তা নির্ভর করে আপনার কাজের ধরণ এবং প্রজেক্টের সাথে আপনার সম্পর্কের উপর। বড় প্রজেক্টগুলির জন্য ফর্ক পদ্ধতি ভালো হতে পারে, যেখানে ছোট দল বা ট্রাস্টেড কন্ট্রিবিউটরদের জন্য কল্যাবোরেশন পদ্ধতি সহজ এবং কার্যকর হতে পারে।
      </p>
    </div>
  );
};

export default ContributeForkAndCollaborationTutorial;
