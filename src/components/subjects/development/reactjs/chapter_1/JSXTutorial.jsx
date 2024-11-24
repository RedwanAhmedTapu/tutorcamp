import React from 'react';

const JSXTutorial = () => {
  return (
    <div className="p-6 max-w-4xl bg-gray-800 mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-teal-500">JSX কী?</h1>
      <p className="mb-4 text-white">
        <strong>JSX (JavaScript XML)</strong> হল JavaScript-এর একটি সিনট্যাক্স এক্সটেনশন, যা React-এ UI উপাদানগুলি বর্ণনা করতে ব্যবহৃত হয়। এটি ডেভেলপারদের JavaScript ফাইলে HTML-এর মতো সিনট্যাক্স লিখতে দেয়, যা কম্পোনেন্ট তৈরি করা আরও সহজ এবং কার্যকরী করে তোলে।
      </p>

      <h2 className="text-2xl font-bold mb-2 text-teal-500">JSX কীভাবে কাজ করে</h2>
      <p className="mb-4 text-white">
        JSX স্বতন্ত্রভাবে বৈধ JavaScript নয়। এটি React-এর <code>createElement()</code> ফাংশনে কম্পাইল করা হয়। উদাহরণস্বরূপ:
      </p>

      <div className="bg-gray-900 p-4 mb-4 text-amber-300 overflow-x-scroll md:overflow-hidden">
        <pre >
          <code>
            {`const element = <h1>Hello, World!</h1>;`}
          </code>
        </pre>
        <p>যা কম্পাইল হয়:</p>
        <pre>
          <code>
            {`const element = React.createElement('h1', null, 'Hello, World!');`}
          </code>
        </pre>
      </div>

      <p className="mb-4 text-white">
        JSX উপাদানগুলি DOM কীভাবে দেখতে হবে তা উপস্থাপন করে। React এই JSX উপাদানগুলোকে JavaScript কোডে রূপান্তর করে যা Virtual DOM তৈরি করে।
      </p>

      <h3 className="text-xl font-bold mb-2 text-teal-500">ডায়াগ্রাম: JSX ওয়ার্কফ্লো</h3>
      <p className="mb-4 text-white">এই ডায়াগ্রামটি JSX এর ফ্লো দেখায়, কোড লেখা থেকে JavaScript আউটপুট হওয়া পর্যন্ত:</p>

      <div className="bg-gray-900 text-gray-300 p-4 mb-4">
        <pre className='overflow-x-scroll md:overflow-hidden'>
          <code>
            {`
   JSX কোড               Babel Compiler                   JavaScript আউটপুট
 ┌──────────────┐       ┌───────────────────────┐       ┌─────────────────────────┐
 │<h1>হ্যালো</h1 │ --->  │ React.createElement() │  ---> │ JavaScript কোড যা DOM  │
 │<div>বিশ্ব</div>│       │ ফাংশন কল সিনট্যাক্স     │       │ ব্যবস্থাপনা করে React     │
 │              │       │ প্রপস এবং চিলড্রেন সহ   │       │ createElement() দিয়ে    │
 └──────────────┘       └───────────────────────┘       └─────────────────────────┘
            `}
          </code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-teal-500">JSX-এর বিশেষ বৈশিষ্ট্য</h2>
      <ul className="list-disc pl-5 mb-4 text-white ">
        <li>JavaScript এর মধ্যে HTML-এর মতো সিনট্যাক্স, যা UI তৈরি করা সহজ করে।</li>
        <li>কম্পোনেন্ট পুনঃব্যবহারযোগ্য: JSX কম্পোনেন্ট লেখা এবং পুনরায় ব্যবহার করা সহজ করে।</li>
        <li>JSX কোড পড়া সহজ করে তোলার মাধ্যমে জটিল `createElement()` ফাংশন কলের প্রয়োজন কমিয়ে দেয়।</li>
        <li>JSX-এ `{}` এর মধ্যে JavaScript এক্সপ্রেশন লেখা যায়।</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-teal-500">JSX-এর ব্যবহার</h2>
      <p className="mb-4 text-white font-semibold">JSX বিভিন্ন কাজে ব্যবহৃত হয় React অ্যাপ্লিকেশনে:</p>

      <ul className="list-disc pl-5 mb-4 text-pink">
        <li>UI কম্পোনেন্ট রেন্ডার করতে:</li>
        <pre className="bg-gray-900 text-white p-2">
          <code>{`const Welcome = (props) => <h1>স্বাগতম, {props.name}!</h1>;`}</code>
        </pre>

        <li>স্টেট বা প্রপসের উপর ভিত্তি করে ডায়নামিক রেন্ডারিং:</li>
        <pre className="bg-gray-900 text-white p-2">
          <code>{`
const isLoggedIn = true;
const message = isLoggedIn ? <h1>ফিরে আসার জন্য ধন্যবাদ!</h1> : <h1>অনুগ্রহ করে সাইন ইন করুন</h1>;
          `}</code>
        </pre>

        <li>শর্তসাপেক্ষ রেন্ডারিং:</li>
        <pre className="bg-gray-900 text-white p-2">
          <code>{`{isLoggedIn ? <LogoutButton /> : <LoginButton />}`}</code>
        </pre>

        <li>তালিকা রেন্ডারিং `.map()` ব্যবহার করে:</li>
        <pre className="bg-gray-900 text-white p-2">
          <code>{`
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>{number}</li>);
          `}</code>
        </pre>

        <li>ইনলাইন স্টাইলিং ব্যবহার করে:</li>
        <pre className="bg-gray-900 text-white p-2">
          <code>{`
const divStyle = { color: 'blue', backgroundColor: 'lightgrey' };
const element = <div style={divStyle}>স্টাইল করা Div</div>;
          `}</code>
        </pre>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-teal-500">JSX বনাম HTML</h2>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-400 text-white">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">JSX</th>
            <th className="border border-gray-400 px-4 py-2">HTML</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">`{}` এর মধ্যে JavaScript এক্সপ্রেশন লেখা যায়।</td>
            <td className="border border-gray-400 px-4 py-2">JavaScript সরাসরি সমর্থন করে না।</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">অ্যাট্রিবিউট ক্যামেলকেসে (যেমন, `className`) লেখা হয়।</td>
            <td className="border border-gray-400 px-4 py-2">HTML-এ অ্যাট্রিবিউট ক্লাসিক HTML সিনট্যাক্সে লেখা হয় (যেমন, `class`)।</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">JSX উপাদানগুলি অবশ্যই একটি প্যারেন্ট উপাদানের মধ্যে থাকা উচিত।</td>
            <td className="border border-gray-400 px-4 py-2">HTML-এ এমন কোনো বাধ্যবাধকতা নেই।</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2 text-teal-500">JSX উদাহরণ</h2>
      <p className="mb-4 text-white">
        নিচে একটি সাধারণ React কম্পোনেন্ট দেওয়া হয়েছে যা JSX ব্যবহার করে একটি ডায়নামিক UI তৈরি করে:
      </p>

      <pre className="bg-gray-900 text-green-500 md:overflow-hidden overflow-x-scroll p-2">
        <code>{`
const App = () => {
  const isLoggedIn = true;
  const user = { name: 'আলিস', age: ২৫ };
  
  return (
    <div>
      <h1>আমার অ্যাপে স্বাগতম</h1>
      {isLoggedIn ? (
        <p>হ্যালো, {user.name}. আপনি {user.age} বছর বয়সী।</p>
      ) : (
        <p>চালিয়ে যেতে অনুগ্রহ করে লগ ইন করুন।</p>
      )}
    </div>
  );
};

export default App;
        `}</code>
      </pre>
      
    </div>
  );
};

export default JSXTutorial;
