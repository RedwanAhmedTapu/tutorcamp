import React from 'react';

const HTMLHyperlink = () => {
  return (
    <div className="p-6 w-screen sm:w-full bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4 text-teal-500">HTML হাইপারলিঙ্ক</h1>
      <p className="mb-4">
        হাইপারলিঙ্ক (বা লিঙ্ক) হলো একটি রেফারেন্স যা ব্যবহারকারী ক্লিক বা ট্যাপ করে অনুসরণ করতে পারে। হাইপারলিঙ্ক একটি সম্পূর্ণ ডকুমেন্ট বা ডকুমেন্টের নির্দিষ্ট উপাদানের দিকে নির্দেশ করে। ওয়েবের একটি অপরিহার্য বৈশিষ্ট্য হলো হাইপারলিঙ্ক।
      </p>
      <h2 className="text-xl font-semibold mb-2">হাইপারলিঙ্কের সিনট্যাক্স</h2>
      <pre className="bg-gray-700 p-4 rounded-md mb-4">
        &lt;a href="URL"&gt;লিঙ্ক টেক্সট&lt;/a&gt;
      </pre>
      <p className="mb-4">
        <code className="bg-gray-700 p-1 rounded">&lt;a&gt;</code> ট্যাগটি একটি হাইপারলিঙ্ক সংজ্ঞায়িত করে। <code className="bg-gray-700 p-1 rounded">href</code> অ্যাট্রিবিউট হলো <code className="bg-gray-700 p-1 rounded">&lt;a&gt;</code> ট্যাগের সবচেয়ে গুরুত্বপূর্ণ অ্যাট্রিবিউট, যা লিঙ্কের গন্তব্য নির্দেশ করে।
      </p>
      <h2 className="text-xl font-semibold mb-2">হাইপারলিঙ্কের উদাহরণ</h2>
      <div className="mb-4">
        <p className="mb-2">কিছু হাইপারলিঙ্কের উদাহরণ এখানে দেওয়া হলো:</p>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            <a href="https://www.example.com" className="text-blue-400 underline">Visit Example.com</a>
          </li>
          <li className="mb-2">
            <a href="https://www.example.com/about" className="text-blue-400 underline">About Us</a>
          </li>
          <li className="mb-2">
            <a href="https://www.example.com/contact" className="text-blue-400 underline">Contact Us</a>
          </li>
        </ul>
      </div>
      <h2 className="text-xl font-semibold mb-2">হাইপারলিঙ্কে বিভিন্ন অ্যাট্রিবিউট ব্যবহার</h2>
      <p className="mb-4">
        হাইপারলিঙ্কে অতিরিক্ত অ্যাট্রিবিউট ব্যবহার করে আরো তথ্য নির্দিষ্ট করা যায়:
      </p>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">অ্যাট্রিবিউট</th>
            <th className="px-4 py-2">বর্ণনা</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">href</td>
            <td className="border px-4 py-2">লিঙ্কটি যে পৃষ্ঠায় যাবে তার URL নির্দিষ্ট করে।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">target</td>
            <td className="border px-4 py-2">লিঙ্ক করা ডকুমেন্ট কোথায় খোলা হবে তা নির্দিষ্ট করে।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">title</td>
            <td className="border px-4 py-2">লিঙ্কের অতিরিক্ত তথ্য নির্দিষ্ট করে (টুলটিপ হিসেবে প্রদর্শিত হয়)।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">rel</td>
            <td className="border px-4 py-2">বর্তমান ডকুমেন্ট এবং লিঙ্ক করা ডকুমেন্টের মধ্যে সম্পর্ক নির্দিষ্ট করে।</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-semibold mb-2">বিভিন্ন অ্যাট্রিবিউট সহ উদাহরণ</h2>
      <p className="mb-4">
        এখানে একটি উদাহরণ দেওয়া হলো যেখানে লিঙ্কটি নতুন ট্যাবে খোলা হবে, টুলটিপ সহ এবং সম্পর্ক অ্যাট্রিবিউট সহ:
      </p>
      <pre className="bg-gray-700 p-4 rounded-md mb-4">
        &lt;a href="https://www.example.com" target="_blank" title="Visit Example.com" rel="noopener noreferrer"&gt;Visit Example.com&lt;/a&gt;
      </pre>
      <p className="mb-4">
        এটি একটি লিঙ্ক তৈরি করবে যা নতুন ট্যাবে (বা উইন্ডোতে) খোলা হবে এবং লিঙ্কে হোভার করলে একটি টুলটিপ প্রদর্শন করবে।
      </p>
    </div>
  );
}

export default HTMLHyperlink;
