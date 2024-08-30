import React from 'react';

const GitStatus = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git Status: আপনার রেপোর বর্তমান অবস্থা জানুন</h2>
      <p className="mb-4">
        <code>git status</code> কমান্ডটি আপনার গিট রেপোতে বর্তমানে কী পরিবর্তন হয়েছে এবং কী কী ফাইল ট্র্যাক করা হচ্ছে, সেগুলি জানাতে সাহায্য করে। 
        এই কমান্ডটি চালানোর মাধ্যমে আপনি জানতে পারবেন কোন ফাইলগুলি স্টেজিং এরিয়াতে রয়েছে, কোন ফাইলগুলি নতুন যোগ হয়েছে, 
        এবং কোন ফাইলগুলি পরিবর্তিত হয়েছে কিন্তু এখনও কমিট করা হয়নি।
      </p>

      <h3 className="text-xl font-semibold mb-2">যে পরিস্থিতিগুলিতে আপনি <code>git status</code> ব্যবহার করবেন:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>নতুন ফাইল যোগ করেছেন</li>
        <li>কোনো ফাইলে পরিবর্তন করেছেন</li>
        <li>কোনো ফাইল ডিলিট করেছেন</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">উদাহরণ</h3>
      <p className="mb-4">
        ধরুন, আপনার রেপোতে দুটি ফাইল রয়েছে: <code>index.html</code> এবং <code>style.css</code>। 
        আপনি <code>index.html</code> ফাইলটি এডিট করেছেন এবং <code>style.css</code> ফাইলটি নতুন তৈরি করেছেন। 
        এখন আপনি <code>git status</code> কমান্ডটি রান করবেন, এবং এর মাধ্যমে নিচের আউটপুট দেখতে পাবেন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code>
          $ git status<br/>
          On branch main<br/>
          Changes not staged for commit:<br/>
            (use "git add ..." to update what will be committed)<br/>
            (use "git restore ..." to discard changes in working directory)<br/>
              modified:   index.html<br/><br/>
          Untracked files:<br/>
            (use "git add ..." to include in what will be committed)<br/>
              style.css<br/><br/>
          no changes added to commit (use "git add" and/or "git commit -a")
        </code>
      </div>

      <p className="mb-4">
        এই আউটপুটে দেখা যাচ্ছে, <code>index.html</code> ফাইলটি মডিফাইড হয়েছে কিন্তু এখনও স্টেজিং এরিয়াতে যোগ করা হয়নি। 
        <code>style.css</code> ফাইলটি নতুন যোগ হয়েছে, কিন্তু এটি এখনও ট্র্যাক করা হয়নি। 
        এই ফাইলগুলোকে স্টেজিং এরিয়াতে যোগ করার জন্য আপনাকে <code>git add</code> কমান্ড ব্যবহার করতে হবে।
      </p>

      <h3 className="text-xl font-semibold mb-2">অন্যান্য তথ্য</h3>
      <p className="mb-4">
        <code>git status</code> কমান্ডের মাধ্যমে আপনি আপনার রেপোর বর্তমান শাখার (ব্রাঞ্চের) নামও দেখতে পারবেন। 
        এটি নিশ্চিত করে যে আপনি কোন শাখায় কাজ করছেন এবং কোন পরিবর্তনগুলি এখনও কমিট করা হয়নি।
      </p>
    </div>
  );
};

export default GitStatus;
