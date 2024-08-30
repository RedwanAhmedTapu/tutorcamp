import React from 'react';

const StagingAndCommit = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-white rounded-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Git স্টেজিং এবং কমিট</h2>
      <p className="mb-4">
        যখন আপনি গিটের মাধ্যমে আপনার প্রজেক্টের পরিবর্তনগুলো ট্র্যাক করতে চান, তখন আপনাকে প্রথমে সেই ফাইলগুলোকে স্টেজিং এরিয়াতে যোগ করতে হয়। 
        স্টেজিং এরিয়াতে থাকা ফাইলগুলো পরবর্তীতে কমিট করা হয়, যা গিট রিপোজিটরিতে স্থায়ীভাবে সংরক্ষিত হয়।
      </p>

      <h3 className="text-xl font-semibold mb-2">স্টেজিং প্রক্রিয়া</h3>
      <p className="mb-4">
        ফাইলগুলো স্টেজিং এরিয়াতে যোগ করার জন্য <span className="text-green-400 font-semibold">git add</span> কমান্ড ব্যবহার করা হয়। উদাহরণস্বরূপ, 
        আপনি যদি <span className="text-yellow-400 font-semibold">index.html</span> ফাইলটি স্টেজিং এরিয়াতে যোগ করতে চান, তাহলে নিচের কমান্ডটি ব্যবহার করবেন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-teal-400">$ git add index.html</code>
      </div>

      <p className="mb-4">
        এই কমান্ডটি চালানোর মাধ্যমে <span className="text-yellow-400 font-semibold">index.html</span> ফাইলটি স্টেজিং এরিয়াতে যোগ হবে এবং আপনি পরবর্তীতে এটি কমিট করতে পারবেন। 
        যদি আপনি একাধিক ফাইল স্টেজিং এরিয়াতে যোগ করতে চান, তবে আপনি ফাইলগুলোর নাম একসাথে উল্লেখ করতে পারেন, 
        যেমন: <span className="text-teal-400 font-semibold">git add index.html style.css</span>।
      </p>

      <h3 className="text-xl font-semibold mb-2">স্টেজিং এ ফাইল যোগ করা হয়েছে কিনা যাচাই করা</h3>
      <p className="mb-4">
        <span className="text-blue-400 font-semibold">git status</span> কমান্ড চালিয়ে আপনি দেখতে পারেন যে কোন ফাইলগুলো স্টেজিং এরিয়াতে রয়েছে। উদাহরণ:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-blue-400">
          $ git status<br/>
          On branch main<br/>
          Changes to be committed:<br/>
            (use <span className="text-red-400 font-semibold">"git restore --staged ..."</span> to unstage)<br/>
              new file:   <span className="text-yellow-400 font-semibold">index.html</span><br/><br/>
          Changes not staged for commit:<br/>
            modified:   <span className="text-orange-400 font-semibold">style.css</span><br/><br/>
        </code>
      </div>

      <p className="mb-4">
        উপরের আউটপুট থেকে বোঝা যাচ্ছে যে <span className="text-yellow-400 font-semibold">index.html</span> ফাইলটি স্টেজিং এরিয়াতে যোগ করা হয়েছে এবং এখন এটি কমিট করা যাবে। 
        তবে <span className="text-orange-400 font-semibold">style.css</span> ফাইলটি স্টেজিং এরিয়াতে যোগ করা হয়নি, তাই এটি এখনো কমিটের জন্য প্রস্তুত নয়।
      </p>

      <h3 className="text-xl font-semibold mb-2">কমিট করা</h3>
      <p className="mb-4">
        যখন আপনি নিশ্চিত হবেন যে আপনার স্টেজিং এরিয়াতে থাকা ফাইলগুলো ঠিক আছে এবং আপনি সেগুলো রিপোজিটরিতে স্থায়ীভাবে সংরক্ষণ করতে চান, 
        তখন <span className="text-red-400 font-semibold">git commit</span> কমান্ড ব্যবহার করবেন। উদাহরণস্বরূপ, নিচের কমান্ডটি চালিয়ে আপনি আপনার স্টেজিং এরিয়াতে থাকা ফাইলগুলো কমিট করতে পারবেন:
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">$ git commit -m "Added index.html file"</code>
      </div>

      <p className="mb-4">
        এখানে <span className="text-red-400 font-semibold">-m</span> ফ্ল্যাগের মাধ্যমে আপনি কমিটের সাথে একটি বার্তা যুক্ত করছেন, যা এই কমিটটি কেন করা হয়েছে তা বোঝাতে সাহায্য করবে। 
        প্রতিটি কমিটের সাথে এমন একটি বার্তা দেওয়া গুরুত্বপূর্ণ যাতে আপনি এবং আপনার টিম পরবর্তীতে সহজে বুঝতে পারেন কোন কমিট কেন করা হয়েছিল।
      </p>

      <h3 className="text-xl font-semibold mb-2">কমিটের আউটপুট</h3>
      <p className="mb-4">
        কমিট করার পর, আপনি একটি আউটপুট দেখতে পাবেন যেখানে জানানো হবে কতগুলো ফাইল কমিট হয়েছে এবং সেই কমিটের সাথে কতগুলো নতুন লাইনের কোড যোগ করা হয়েছে বা মুছে ফেলা হয়েছে।
      </p>

      <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
        <code className="text-red-400">
          [main d9e7f11] Added index.html file<br/>
          1 file changed, 10 insertions(+)
        </code>
      </div>

      <p className="mb-4">
        উপরের আউটপুটটি দেখায় যে <span className="text-yellow-400 font-semibold">index.html</span> ফাইলটি সফলভাবে কমিট করা হয়েছে এবং ১০টি নতুন লাইন যোগ করা হয়েছে।
      </p>
    </div>
  );
};

export default StagingAndCommit;
