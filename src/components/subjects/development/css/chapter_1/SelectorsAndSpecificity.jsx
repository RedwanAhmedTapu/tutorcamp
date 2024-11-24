import React from "react";

const SelectorsAndSpecificity = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">CSS সিলেক্টর এবং স্পেসিফিসিটি</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. HTML উদাহরণ</h2>
        <p>নিচে একটি সাধারণ HTML কাঠামো দেওয়া হল:</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line text-white">
              &lt;div id="container"&gt;{"\n"}
              &nbsp;&nbsp;&lt;h1 className="title"&gt;শিরোনাম&lt;/h1&gt;{"\n"}
              &nbsp;&nbsp;&lt;p className="intro"&gt;এটি একটি প্যারা&lt;/p&gt;
              {"\n"}
              &nbsp;&nbsp;&lt;ul className="list"&gt;{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;আইটেম ১&lt;/li&gt;{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;li className="highlight"&gt;আইটেম
              ২&lt;/li&gt;{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;আইটেম ৩&lt;/li&gt;{"\n"}
              &nbsp;&nbsp;&lt;/ul&gt;{"\n"}
              &nbsp;&nbsp;&lt;a href="#" className="link"&gt;আরও জানুন&lt;/a&gt;
              {"\n"}
              &lt;/div&gt;
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. CSS সিলেক্টর ব্যাখ্যা
        </h2>

        {/* Element Selector */}
        <h3 className="text-xl font-semibold mb-2">Element সিলেক্টর</h3>
        <p>Element সিলেক্টর HTML ট্যাগের নাম ব্যবহার করে নির্দিষ্ট করা হয়।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">h1 &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">blue</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br />
              <span className="text-yellow-500">p &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">font-size</span>:{" "}
              <span className="text-pink-500">16px</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>h1</code> এবং <code>p</code> Element সিলেক্টর শিরোনাম এবং
          প্যারাগ্রাফের রঙ এবং ফন্ট সাইজ নির্ধারণ করে।
        </p>

        {/* Class Selector */}
        <h3 className="text-xl font-semibold mb-2">Class সিলেক্টর</h3>
        <p>
          Class সিলেক্টর <code>.</code> এর পরে ক্লাসের নাম লিখে নির্দিষ্ট করা
          হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.title &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">
                text-align
              </span>: <span className="text-pink-500">center</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br />
              <span className="text-yellow-500">.intro &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">gray</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>.title</code> এবং <code>.intro</code> Class সিলেক্টরগুলো
          শিরোনামকে কেন্দ্র করে এবং প্যারাগ্রাফের রঙ নির্ধারণ করে।
        </p>

        {/* ID Selector */}
        <h3 className="text-xl font-semibold mb-2">Id সিলেক্টর</h3>
        <p>
          Id সিলেক্টর <code>#</code> এর পরে আইডির নাম লিখে নির্দিষ্ট করা হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">#container &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">padding</span>:{" "}
              <span className="text-pink-500">20px</span>;
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">border</span>:{" "}
              <span className="text-pink-500">1px solid #ccc</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>#container</code> Id সিলেক্টরটি <code>&lt;div&gt;</code>{" "}
          উপাদানের জন্য প্যাডিং এবং বর্ডার নির্ধারণ করে।
        </p>

        {/* Universal Selector */}
        <h3 className="text-xl font-semibold mb-2">Universal সিলেক্টর</h3>
        <p>
          Universal সিলেক্টর <code>*</code> ব্যবহার করে সমস্ত উপাদানকে লক্ষ্য
          করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">*</span>{" "}
              <span className="text-yellow-500">&#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">
                box-sizing
              </span>: <span className="text-pink-500">border-box</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এই সিলেক্টরটি সব HTML উপাদানগুলির জন্য <code>box-sizing</code>{" "}
          নির্ধারণ করে।
        </p>

        {/* Child Selector */}
        <h3 className="text-xl font-semibold mb-2">Child সিলেক্টর</h3>
        <p>
          Child সিলেক্টর <code>&gt;</code> চিহ্ন ব্যবহার করে সরাসরি চাইল্ড
          উপাদানকে লক্ষ্য করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">
                #container &gt; .title &#123;
              </span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">red</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>#container &gt; .title</code> সরাসরি{" "}
          <code>&lt;div id="container"&gt;</code> এর চাইল্ড{" "}
          <code>&lt;h1 className="title"&gt;</code> উপাদানকে লক্ষ্য করে।
        </p>

        {/* Descendant Selector */}
        <h3 className="text-xl font-semibold mb-2">Descendant সিলেক্টর</h3>
        <p>
          Descendant সিলেক্টর একটি এলিমেন্টের যেকোনো স্তরের চাইল্ডকে লক্ষ্য করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">
                #container .list li &#123;
              </span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">
                margin-left
              </span>: <span className="text-pink-500">20px</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>#container .list li</code>{" "}
          <code>&lt;ul className="list"&gt;</code> এর সমস্ত{" "}
          <code>&lt;li&gt;</code> উপাদানকে লক্ষ্য করে।
        </p>

        {/* Adjacent Sibling Selector */}
        <h3 className="text-xl font-semibold mb-2">
          Adjacent Sibling সিলেক্টর
        </h3>
        <p>
          Adjacent সিলেক্টর <code>+</code> ব্যবহার করে অবিলম্বে পরবর্তী সিবলিং
          উপাদানকে লক্ষ্য করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.intro + .list &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">
                margin-top
              </span>: <span className="text-pink-500">10px</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>.intro + .list</code> <code>.intro</code> ক্লাসের
          প্যারাগ্রাফের পরে অবিলম্বে আসা <code>.list</code> কে লক্ষ্য করে।
        </p>

        {/* General Sibling Selector */}
        <h3 className="text-xl font-semibold mb-2">General Sibling সিলেক্টর</h3>
        <p>
          General সিলেক্টর <code>~</code> ব্যবহার করে সমস্ত সিবলিং উপাদানকে
          লক্ষ্য করে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.intro ~ .link &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">
                font-weight
              </span>: <span className="text-pink-500">bold</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>.intro ~ .link</code> <code>.intro</code> ক্লাসের
          প্যারাগ্রাফের পরে আসা সমস্ত <code>.link</code> উপাদানকে লক্ষ্য করে।
        </p>

        {/* Attribute Selector */}
        <h3 className="text-xl font-semibold mb-2">Attribute সিলেক্টর</h3>
        <p>
          অ্যাট্রিবিউট সিলেক্টর একটি উপাদানের নির্দিষ্ট অ্যাট্রিবিউটের মান
          ভিত্তিতে নির্বাচিত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">a[href="#"] &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">orange</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>a[href="#"]</code> সিলেক্টরটি শুধুমাত্র সেই{" "}
          <code>&lt;a&gt;</code> উপাদানকে লক্ষ্য করে যার <code>href</code>{" "}
          অ্যাট্রিবিউটের মান <code>#</code>।
        </p>

        {/* Pseudo-class Selector */}
        <h3 className="text-xl font-semibold mb-2">Pseudo-Class সিলেক্টর</h3>
        <p>
          Pseudo-Class সিলেক্টর একটি উপাদানের অবস্থার ভিত্তিতে নির্বাচিত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">a:hover &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">purple</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>a:hover</code> Pseudo-class সিলেক্টরটি{" "}
          <code>&lt;a&gt;</code> উপাদানের উপর মাউস হোভার করা হলে তার রঙ পরিবর্তন
          করে।
        </p>

        {/* Pseudo-element Selector */}
        <h3 className="text-xl font-semibold mb-2">Pseudo-Element সিলেক্টর</h3>
        <p>Pseudo-Element সিলেক্টর একটি উপাদানের নির্দিষ্ট অংশকে লক্ষ্য করে।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">p::first-line &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">
                font-weight
              </span>: <span className="text-pink-500">bold</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>p::first-line</code> Pseudo-Element সিলেক্টরটি
          প্যারাগ্রাফের প্রথম লাইনের ফন্ট-ওয়েট পরিবর্তন করে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. CSS Specificity</h2>
        <p>
          CSS স্পেসিফিসিটি নির্ধারণ করে কোন স্টাইল প্রাধান্য পাবে। এটি নির্ধারিত
          হয় সিলেক্টরের টাইপ ও সংখ্যা অনুযায়ী।
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>ইনলাইন স্টাইল</strong> (যেমন: <code>style="..."</code>)
            সর্বোচ্চ স্পেসিফিসিটি রাখে।
          </li>
          <li>
            <strong>আইডি সিলেক্টর</strong> (<code>#container</code>) মাঝারি
            স্পেসিফিসিটি রাখে।
          </li>
          <li>
            <strong>ক্লাস সিলেক্টর</strong> (<code>.intro</code>) কম
            স্পেসিফিসিটি রাখে।
          </li>
          <li>
            <strong>এলিমেন্ট সিলেক্টর</strong> (<code>p</code>) সবচেয়ে কম
            স্পেসিফিসিটি রাখে।
          </li>
        </ul>

        <p className="mt-2">উদাহরণস্বরূপ:</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">#container .intro &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">red</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br />
              <span className="text-yellow-500">.intro &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">blue</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>#container .intro</code> সিলেক্টরের প্রাধান্য{" "}
          <code>.intro</code> সিলেক্টরের চেয়ে বেশি।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. CSS Inheritance</h2>
        <p>
          CSS স্টাইল উত্তরাধিকারিকভাবে কাজ করে, অর্থাৎ একটি উপাদানের মধ্যে থাকা
          উপাদানগুলি বাইরের উপাদানের স্টাইল অনুসরণ করতে পারে। উত্তরাধিকার
          শুধুমাত্র কিছু প্রপার্টি যেমন <code>font-size</code>,{" "}
          <code>color</code>, ইত্যাদিতে প্রযোজ্য।
        </p>

        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">body &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">font-size</span>:{" "}
              <span className="text-pink-500">14px</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br />
              <span className="text-yellow-500">.list &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">font-size</span>:{" "}
              <span className="text-pink-500">inherit</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>.list</code> ক্লাসযুক্ত উপাদানটি <code>body</code>{" "}
          উপাদানের <code>font-size</code> মান উত্তরাধিকার হিসেবে গ্রহণ করবে কারণ
          এটি <code>inherit</code> ব্যবহার করেছে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. CSS !important</h2>
        <p>
          CSS <code>!important</code> একটি রুলের প্রাধান্য বাড়াতে ব্যবহৃত হয়।
          যখন একটি প্রপার্টি <code>!important</code> ব্যবহার করে সেট করা হয়,
          এটি অন্যান্য স্টাইল রুলগুলির চেয়ে বেশি প্রাধান্য পাবে। তবে,{" "}
          <code>!important</code> ব্যবহার সঠিকভাবে করা উচিত, কারণ এটি স্টাইল
          নিয়ন্ত্রণে জটিলতা বাড়িয়ে দিতে পারে।
        </p>

        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.special &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">blue</span>{" "}
              <span className="text-green-500">!important</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br />
              <span className="text-yellow-500">
                #container .special &#123;
              </span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">red</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>.special</code> ক্লাসের <code>color</code> প্রপার্টি{" "}
          <code>!important</code> ব্যবহার করে <code>blue</code> হিসেবে সেট করা
          হয়েছে, যা <code>#container .special</code> সিলেক্টরের{" "}
          <code>color</code> প্রপার্টির <code>red</code> রঙকে অগ্রাধিকার দেয়।
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. CSS Last Rule</h2>
        <p>
          CSS স্টাইল শীটের মধ্যে যখন একাধিক রুল একে অপরকে ওভারল্যাপ করে, তখন
          কেবল শেষ রুল প্রযোজ্য হবে। অর্থাৎ, একটি নির্দিষ্ট সিলেক্টর এবং
          প্রপার্টি যদি একাধিক বার ডিফাইন করা হয়, তবে সর্বশেষ ডিফাইন করা রুলটি
          কার্যকর হবে।
        </p>

        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">green</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br />
              <span className="text-yellow-500">.example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">blue</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>.example</code> ক্লাসের জন্য দুটি <code>color</code>{" "}
          প্রপার্টি সেট করা হয়েছে। প্রথম রুলটি <code>green</code> সেট করে,
          কিন্তু দ্বিতীয় রুলটি <code>blue</code> সেট করে যা সবার আগে কার্যকর
          হবে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          5. উদাহরণ এবং ব্যবহারিক ক্ষেত্রে
        </h2>
        <p>
          নিচের CSS কোড উদাহরণ দেখায় কিভাবে বিভিন্ন সিলেক্টর এবং Specificity
          প্রয়োগ করা যায়:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">#container &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">black</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br />
              <span className="text-yellow-500">.list &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">font-size</span>:{" "}
              <span className="text-pink-500">14px</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br />
              <span className="text-yellow-500">#container .list &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>:{" "}
              <span className="text-pink-500">red</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">
          এখানে, <code>#container .list</code> সিলেক্টরটি <code>.list</code>{" "}
          সিলেক্টরের চেয়ে বেশি প্রাধান্য পাবে। তাই,{" "}
          <code>#container .list</code> সিলেক্টরের জন্য রঙ হবে <code>red</code>।
        </p>
      </section>
    </div>
  );
};

export default SelectorsAndSpecificity;
