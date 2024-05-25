import React from 'react';

const HTMLLists = () => {
  return (
    <div className="w-screen sm:w-full mx-auto p-6 bg-gray-800 text-white  ">
      <h1 className="text-2xl font-bold mb-4 text-teal-500">HTML লিস্ট</h1>
      <p className="mb-4">
        HTML এ লিস্ট ব্যবহার করে বিভিন্ন আইটেম বা উপাদান সুশৃঙ্খলভাবে প্রদর্শন করা যায়। এখানে তিন ধরনের লিস্ট রয়েছে:
      </p>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">অর্ডারড লিস্ট (Ordered List)</h2>
        <p className="mb-4">সংখ্যা বা অক্ষর দ্বারা তালিকাভুক্ত করে:</p>
        <pre className="bg-gray-700 p-4 rounded-md mb-4">
          &lt;ol&gt;
          <br />  &lt;li&gt;প্রথম আইটেম&lt;/li&gt;
          <br />  &lt;li&gt;দ্বিতীয় আইটেম&lt;/li&gt;
          <br />  &lt;li&gt;তৃতীয় আইটেম&lt;/li&gt;
          <br />&lt;/ol&gt;
        </pre>
        <div className="bg-gray-700 p-4 rounded-md mb-4">
          <p className='text-xl text-teal-300'>Output</p>
          <ol className="list-decimal ml-8 mb-4">
            <li>প্রথম আইটেম</li>
            <li>দ্বিতীয় আইটেম</li>
            <li>তৃতীয় আইটেম</li>
          </ol>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">আনঅর্ডারড লিস্ট (Unordered List)</h2>
        <p className="mb-4">বুলেট পয়েন্ট দ্বারা তালিকাভুক্ত করে:</p>
        <pre className="bg-gray-700 p-4 rounded-md mb-4">
          &lt;ul&gt;
          <br />  &lt;li&gt;প্রথম আইটেম&lt;/li&gt;
          <br />  &lt;li&gt;দ্বিতীয় আইটেম&lt;/li&gt;
          <br />  &lt;li&gt;তৃতীয় আইটেম&lt;/li&gt;
          <br />&lt;/ul&gt;
        </pre>
        <div className="bg-gray-700 p-4 rounded-md mb-4">
          <p className='text-xl text-teal-300'>Output</p>
          <ul className="list-disc ml-8 mb-4">
            <li>প্রথম আইটেম</li>
            <li>দ্বিতীয় আইটেম</li>
            <li>তৃতীয় আইটেম</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">ডিফিনিশন লিস্ট (Definition List)</h2>
        <p className="mb-4">টার্ম এবং তাদের সংজ্ঞা প্রদর্শনের জন্য ব্যবহৃত হয়:</p>
        <pre className="bg-gray-700 p-4 rounded-md mb-4">
          &lt;dl&gt;
          <br />  &lt;dt&gt;HTML&lt;/dt&gt;
          <br />  &lt;dd&gt;হাইপারটেক্সট মার্কআপ ল্যাঙ্গুয়েজ&lt;/dd&gt;
          <br />  &lt;dt&gt;CSS&lt;/dt&gt;
          <br />  &lt;dd&gt;ক্যাসকেডিং স্টাইল শীটস&lt;/dd&gt;
          <br />&lt;/dl&gt;
        </pre>
        <div className="bg-gray-700 p-4 rounded-md mb-4">
          <p className='text-xl text-teal-300'>Output</p>
          <dl className="mb-4">
            <dt className="font-semibold">HTML</dt>
            <dd className="ml-4">হাইপারটেক্সট মার্কআপ ল্যাঙ্গুয়েজ</dd>
            <dt className="font-semibold mt-2">CSS</dt>
            <dd className="ml-4">ক্যাসকেডিং স্টাইল শীটস</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default HTMLLists;
