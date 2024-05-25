import React from "react";
import { Element } from "react-scroll";

const Arrow = ({ direction }) => (
  <svg
    className={`w-6 h-6 transform ${
      direction === "down"
        ? "rotate-90"
        : direction === "up"
        ? "-rotate-90"
        : direction === "right"
        ? "rotate-180"
        : direction === "left"
        ? "relative -top-6"
        : "-rotate-180 "
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 17l-5-5m0 0l5-5m-5 5h12"
    ></path>
  </svg>
);

const ExampleBox = ({ children }) => (
  <div className="p-2 sm:p-4 text-[10px] bg-teal-500 flex_center text-white rounded-md ">
    {children}
  </div>
);

const WebsiteStructure = () => {
  return (
    <div className="p-2 w-screen  sm:w-full sm:mx-auto bg-gray-800 text-white">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-teal-500">
        ওয়েবসাইটের কাঠামো (Website Structure)
      </h1>
      <p className="text-xm sm:text-base mb-4">
        যে অবকাঠামোতে একটি ওয়েবসাইটের সকল তথ্য বা বিষয়বস্তু উপস্থাপন করা হয়
        তাকে ওয়েবসাইটের কাঠামো বলে। ওয়েবসাইটে বিভিন্ন পেজ থাকে। প্রতিটি পেজে
        বিভিন্ন উপাদান থাকে। ওয়েবসাইটের অন্তর্গত বিভিন্ন পেজগুলো সাজানোর লেআউটই
        হলো ওয়েবসাইটের কাঠামো।
      </p>
      <p className="text-xm sm:text-base mb-4">
        ওয়েবসাইটের কাঠামোর অংশ একটি ওয়েবসাইটের কাঠামো মূলত তিন ভাগে বিভক্ত
        থাকে। যথা- ১. মূল পেজ (Homepage) ২. মূলধারার পেজ (Main section ) ৩.
        উপ-ধারার পেজ (Sub section )
      </p>

      <Element name="hierarchical" className="mb-4">
        <h2 className="text-lg sm:text-xl text-teal-500 font-semibold mb-2">
          হায়ারারকিক্যাল বা ট্রি কাঠামো (Hierarchical or Tree Structure)
        </h2>
        <p className="text-sm sm:text-base mb-2">
          যে ওয়েবসাইটের পেজগুলো শাখা-প্রশাখায় সাজানো থাকে তাকে ট্রি বা
          হায়ারারকিক্যাল কাঠামো বলা হয়। এ পদ্ধতিতে ওয়েবসাইটের বিভিন্ন
          শাখাগুলোকে আলাদাভাবে সংযুক্ত করা হয়ে থাকে। হোমপেজ, সাব মেনু ও
          অন্যান্য পেজের লিংক থাকে। এতে করে ওয়েবসাইটের ভিজিটররা সহজেই বুঝতে
          পারে কোন অংশে তার প্রয়োজনীয় তথ্যগুলো রয়েছে। বড় বড় প্রতিষ্ঠান বা
          কর্পোরেট প্রতিষ্ঠানের ওয়েবসাইট, স্কুল, কলেজ, ব্যাংক, বীমা,
          বিশ্ববিদ্যালয়সহ বিভিন্ন ব্যবসায়িক প্রতিষ্ঠানের ওয়েবসাইট এ ধরনের
          হয়ে থাকে। বহুস্তরে বিন্যস্ত ওয়েবপেজসমূহ নিয়ে তৈরি ওয়েবসাইটের
          ক্ষেত্রে এ ধরনের কাঠামো ব্যবহৃত হয়।
        </p>
        <div className="p-4 border rounded-lg bg-neutral-800">
          <p className="text-center font-semibold mb-2">Example</p>
          <ul>
            <li>Home Page</li>
            <ul className="ml-6 list-disc h-auto">
              <li>Main Section 1</li>
              <ul className="ml-6  list-disc">
                <li>Sub Section 1.1</li>
                <li>Sub Section 1.2</li>
              </ul>
              <li>Main Section 2</li>
              <ul className="ml-6 list-disc">
                <li>Sub Section 2.1</li>
                <li>Sub Section 2.2</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="mt-4 flex flex-col items-center ">
          <ExampleBox>Home Page</ExampleBox>
          <Arrow direction="up" />
          <hr className=" w-[9.5rem] h-[0.1rem] relative -top-2 bg-white" />
          <div className="w-44 relative -top-[0.8rem] flex justify-between items-start">
            <Arrow direction="up" />
            <Arrow direction="up" />
          </div>

          <div className="flex">
            <div className="flex flex-col gap-x-2 items-center">
              <ExampleBox>Main Section 1</ExampleBox>
              <Arrow direction="up" />
              <ExampleBox>Sub Section 1.1</ExampleBox><br/>
              <ExampleBox>Sub Section 1.2</ExampleBox>
            </div>
            <div className="w-6"></div>
            <div className="flex flex-col  items-center">
              <ExampleBox>Main Section 2</ExampleBox>
              <Arrow direction="up" />
              <ExampleBox>Sub Section 2.1</ExampleBox><br/>
              <ExampleBox>Sub Section 2.2</ExampleBox>
            </div>
          </div>
        </div>
      </Element>

      <Element name="linear" className="mb-4">
        <h2 className="text-lg sm:text-xl text-teal-500 font-semibold mb-2">
          লিনিয়ার কাঠামো বা সিকুয়েন্স (Linear or Sequence Structure)
        </h2>
        <p className="text-sm sm:text-base mb-2">
          কোন ওয়েবসাইটের পেজগুলো ক্রমানুসারে করার স্ট্রাকচার বা কাঠামোকে
          লিনিয়ার স্ট্রাকচার বলা হয়। যখন একটি ওয়েবসাইটের পেজগুলো নির্দিষ্ট
          সিকুয়েন্স অনুসারে ভিজিট করার প্রয়োজন হয় তখন লিনিয়ার স্ট্রাকচার
          ব্যবহার করা হয়। কোন পেজের পর কোন পেজ আসবে তা ওয়েবপেজ ডিজাইন করার
          সময় ঠিক করা হয়ে থাকে। এ ধরনের পেজগুলোতে সাধারণত Next, Previous,
          Last, First ইত্যাদি লিংক ব্যবহার করা হয়। এ পদ্ধতিতে পেজগুলো একটির পর
          আরেকটি এভাবে সিকুয়েন্স অর্ডার অনুযায়ী লিংক করা থাকে। সাধারণত
          প্রোগ্রামিং বা ট্রেনিং সাইটে এ ধরনের স্ট্রাকচার ব্যবহার করা হয়।
          ডকুমেন্টটি খুব বড় না হলে অর্থাৎ পেজের সংখ্যা যদি কম হয় তবে লিনিয়ার
          স্ট্রাকচার ব্যবহার করা ভালো। এতে করে ডকুমেন্টটির যে কোন অংশকে সহজেই
          খুঁজে বের করা যায়।
        </p>
        <div className="p-4 border rounded-lg bg-neutral-800">
          <p className="text-center font-semibold mb-2">Example</p>
          <ol className="list-decimal ml-6">
            <li>Main Page</li>
            <li>Page 1</li>
            <li>Page 2</li>
            <li>Page 3</li>
            <li>Page 4</li>
          </ol>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <ExampleBox>Main Page</ExampleBox>
          <Arrow direction="left" />
          <Arrow direction="right" />
          <ExampleBox>Page 1</ExampleBox>
          <Arrow direction="left" />
          <Arrow direction="right" />
          <ExampleBox>Page 2</ExampleBox>
          <Arrow direction="left" />
          <Arrow direction="right" />
          <ExampleBox>Page 3</ExampleBox>
          <Arrow direction="left" />
          <Arrow direction="right" />
          <ExampleBox>Page 4</ExampleBox>
        </div>
      </Element>

      <Element name="network" className="mb-4">
        <h2 className="text-lg sm:text-xl text-teal-500 font-semibold mb-2">
          নেটওয়ার্ক কাঠামো বা ওয়েবলিংকড (Network or Web Linked Structure)
        </h2>
        <p className="text-sm sm:text-base mb-2">
          যে ধরনের ওয়েবসাইট কাঠামোতে সবগুলো পেজেরই একে অপরের সাথে লিংক থাকে
          তাকে নেটওয়ার্ক কাঠামো বলা হয়। এতে একটি মেইন পেজের সাথে যেভাবে
          অন্যান্য পেজের যেমন লিংক থাকে ঠিক তেমনি অন্যান্য পেজের সাথেও মেইন
          পেজের লিংক থাকে। ফ্রেম ব্যবহার করে তৈরি করা ওয়েবসাইটগুলো এ
          নেটওয়ার্কের মাধ্যমে লিংক করা হয়ে থাকে যাতে একটি ফ্রেমের মধ্যে
          অন্যান্য পেজের লিংকগুলো মেনু আকারে রাখা হয়। এই ফ্রেমটি সাধারণত স্থির
          থাকে এবং কোন একটি লিংক নির্বাচন করলে ঐ পেজটি অপেক্ষাকৃত বড় ফ্রেমের
          মধ্যে দেখায়।
        </p>
        <div className="p-4 border rounded-lg bg-neutral-800">
          <p className="text-center font-semibold mb-2">Example</p>
          <ul className="ml-6 list-disc">
            <li>Page 1</li>
            <li>Page 2</li>
            <li>Page 3</li>
            <li>Page 4</li>
            <li>Page 5</li>
          </ul>
        </div>
        <div className="mt-4 grid grid-cols-3 place-content-end">
          <div className="flex flex-col gap-2">
            <ExampleBox>Page 1</ExampleBox>
            <ExampleBox>Page 2</ExampleBox>
          </div>
          <div className="flex_center">
            <ExampleBox>Page 5</ExampleBox>
          </div>
          <div className="flex flex-col gap-4">
            <ExampleBox>Page 3</ExampleBox>
            <ExampleBox>Page 4</ExampleBox>
          </div>
        </div>
      </Element>

      <Element name="hybrid" className="mb-4">
        <h2 className="text-lg sm:text-xl text-teal-500 font-semibold mb-2">
          হাইব্রিড বা কম্বিনেশন কাঠামো (Hybrid or Combination Structure)
        </h2>
        <p className="text-sm sm:text-base mb-2">
          একাধিক স্ট্রাকচার ব্যবহার করে ডিজাইনকৃত ওয়েবসাইটকে হাইব্রিড বা
          কম্বিনেশন বা মিক্সড স্ট্রাকচার বলা হয়। অনেক সময় লিনিয়ার কাঠামো এবং
          হায়ারারকিক্যাল কাঠামোর মাধ্যমে মিশ্র কাঠামো তৈরি করা যায়।
        </p>
        <div className="p-4 border rounded-lg bg-neutral-800">
          <p className="text-center font-semibold mb-2">Example</p>
          <ul className="ml-6 list-disc">
            <li>Home Page</li>
            <ul className="ml-6 list-disc">
              <li>Linear Section</li>
              <ol className="ml-6 list-decimal">
                <li>Page 1</li>
                <li>Page 2</li>
              </ol>
              <li>Hierarchical Section</li>
              <ul className="ml-6 list-disc">
                <li>Sub Section 1.1</li>
                <li>Sub Section 1.2</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <ExampleBox>Home Page</ExampleBox>
          <Arrow direction="down" />
          <div className="flex">
            <div className="flex flex-col items-center">
              <ExampleBox>Linear Section</ExampleBox>
              <Arrow direction="down" />
              <ExampleBox>Page 1</ExampleBox>
              <Arrow direction="down" />
              <ExampleBox>Page 2</ExampleBox>
            </div>
            <Arrow direction="right" />
            <div className="flex flex-col items-center">
              <ExampleBox>Hierarchical Section</ExampleBox>
              <Arrow direction="down" />
              <ExampleBox>Sub Section 1.1</ExampleBox>
              <ExampleBox>Sub Section 1.2</ExampleBox>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default WebsiteStructure;
