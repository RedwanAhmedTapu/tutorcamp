import React from 'react';

const HTMLPageLayout = () => {
  return (
    <div className="w-screen sm:w-full  h-auto flex flex-col bg-gray-900 text-white" id="layout">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-start text-2xl sm:text-3xl text-teal-500">HTML Page Layout</h1>
      </header>
      <div className="flex flex-col sm:flex-row flex-1 p-4">
        <div className="w-full sm:w-1/2 bg-gray-800 p-4 shadow-md sm:mr-2 mb-4 sm:mb-0 rounded">
          <h2 className="text-lg font-bold mb-4">Description</h2>
          <p>ওয়েবসাইটে বিভিন্ন উপাদান থাকে। যেমন— টাইটেল, হেডিং, প্রধান কনটেন্ট (টেক্সট, ইমেজ, লিংক ইত্যাদি), ফুটার ইত্যাদি কোনটি কোথায়, কীভাবে স্থাপিত হবে তার পরিকল্পনা বা ছককে লেআউট বলা হয়। লেআউট হলো একটি পেজের প্রধান কন্টেন্ট এরিয়ার স্ট্রাকচার বা অবকাঠামো। সম্পূর্ণ ওয়েবসাইটটি একটি ডিজাইন হতে পারে কিন্তু প্রত্যেকটি আলাদা পেজের লেআউট ভিন্ন হতে পারে। ওয়েবসাইটে বিভিন্ন পেজ থাকে। একটি সম্পূর্ণ ওয়েবসাইট তৈরি করা অনেক সময়সাপেক্ষ। তাই সাইট তৈরি করার পূর্বেই এর লেআউট তৈরি করে নিলে কাজের সুবিধা হয়। ক্লায়েন্টরা ওয়েব ডেভলপারদেরকে লেআউট বুঝিয়ে দিলে সে অনুযায়ী সাইট ডিজাইন করা যায়।</p>
          <p className="mt-4">ওয়েবপেজকে বিভিন্ন ভাগে বিভক্ত করার পদ্ধতিই হলো HTML এর লেআউট। HTML এ দুভাবে লেআউট করা যায়:</p>
          <ol className="list-decimal list-inside mt-2">
            <li>&lt;table&gt; ট্যাগ ব্যবহার করে।</li>
            <li>&lt;div&gt; ট্যাগ ব্যবহার করে।</li>
          </ol>
          <p className="mt-4">ট্যাগ ব্যবহার করে HTML এর লেআউট তৈরি করা (উদাহরণ-২)</p>
          <p className="mt-4">ট্যাগ ব্যবহার করে ওয়েবপেজকে কলাম এবং সারিভিত্তিক বিভক্ত করা যায়। সারির <code>&lt;td&gt;</code> ট্যাগের বিভিন্ন এট্রিবিউট ব্যবহার করে বিভক্ত অংশে আলাদা আলাদা ডিজাইন করা যায়। নিচের উদাহরণে <code>&lt;table&gt;</code> ট্যাগ ব্যবহার করে ওয়েবপেজের লেআউট তৈরি দেখানো হলো।</p>
        </div>
        <div className="w-full sm:w-1/2 bg-gray-800 p-4 shadow-md sm:ml-2 rounded">
          <h2 className="text-lg font-bold mb-4">Example</h2>
          <div className="h-96 bg-gray-100 flex flex-col">
            <header className="bg-white shadow p-4">
              <div className="text-green-600 text-3xl sm:text-4xl font-bold">
                header
              </div>
            </header>

            <nav className="sticky top-0 bg-green-600 text-white py-2">
              <div className="container mx-auto text-center text-xl sm:text-2xl">
                nav
              </div>
            </nav>

            <main className="flex-1 p-4 bg-slate-600">
              <section id="Content" className="ml-5">
                <h3 className="text-lg sm:text-xl font-semibold">Content section</h3>
              </section>
            </main>

            <footer className="bg-slate-900 text-white text-center py-6 mt-auto">
              <div className="text-xl sm:text-2xl font-bold">Footer Section</div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLPageLayout;
