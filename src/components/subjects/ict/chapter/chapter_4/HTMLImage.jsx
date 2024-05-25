import React from 'react';

const HTMLImage = () => {
  return (
    <div className="p-6 w-screen sm:w-full bg-gray-800 text-white max-w-6xl">
      <h1 className="text-2xl font-bold mb-4 text-teal-500">HTML ইমেজ</h1>
      <p className="mb-4">
        ইমেজ যুক্ত করতে HTML এ <code className="bg-gray-700 p-1 rounded">&lt;img&gt;</code> ট্যাগ ব্যবহার করা হয়। এটি একটি "self-closing" ট্যাগ।
      </p>
      <h2 className="text-xl font-semibold mb-2">ইমেজ ট্যাগের সিনট্যাক্স</h2>
      <pre className="bg-gray-700 p-4 rounded-md mb-4">
        &lt;img src="image_url" alt="description" /&gt;
      </pre>
      <p className="mb-4">
        <code className="bg-gray-700 p-1 rounded">src</code> অ্যাট্রিবিউটটি ইমেজের সোর্স (URL) নির্দিষ্ট করে। <code className="bg-gray-700 p-1 rounded">alt</code> অ্যাট্রিবিউটটি ইমেজ লোড হতে ব্যর্থ হলে ইমেজের একটি বর্ণনা প্রদান করে।
      </p>
      <h2 className="text-xl font-semibold mb-2">ইমেজ ট্যাগের বিভিন্ন অ্যাট্রিবিউট</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">অ্যাট্রিবিউট</th>
            <th className="px-4 py-2">বর্ণনা</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">src</td>
            <td className="border px-4 py-2">ইমেজের URL বা ফাইলের পাথ নির্দিষ্ট করে।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">alt</td>
            <td className="border px-4 py-2">ইমেজ লোড হতে ব্যর্থ হলে প্রদর্শিত টেক্সট নির্দিষ্ট করে।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">width</td>
            <td className="border px-4 py-2">ইমেজের প্রস্থ নির্দিষ্ট করে।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">height</td>
            <td className="border px-4 py-2">ইমেজের উচ্চতা নির্দিষ্ট করে।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">title</td>
            <td className="border px-4 py-2">ইমেজের টুলটিপ টেক্সট নির্দিষ্ট করে, যা ইমেজের উপর মাউস হোভার করলে প্রদর্শিত হয়।</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-semibold mb-2">ইমেজ ট্যাগের উদাহরণ</h2>
      <p className="mb-4">
        নিচের উদাহরণে একটি ইমেজ প্রদর্শন করা হয়েছে:
      </p>
      <pre className="bg-gray-700 p-4 rounded-md mb-4 overflow-x-auto">
        &lt;img src="https://cdn.pixabay.com/photo/2023/10/16/15/21/robot-8319460_960_720.jpg" alt="robot Image" width="500" height="300" /&gt;
      </pre>
      <p className="mb-4">
        এটি একটি ইমেজ তৈরি করবে যা প্রদর্শিত হবে এবং ইমেজ লোড হতে ব্যর্থ হলে "Example Image" টেক্সট প্রদর্শিত হবে।
      </p>
      <div className="flex justify-center mb-4">
        <img src="https://cdn.pixabay.com/photo/2023/10/16/15/21/robot-8319460_960_720.jpg" alt="robot Image" className="w-64 h-48 rounded-md object-cover" />
      </div>
    </div>
  );
}

export default HTMLImage;
