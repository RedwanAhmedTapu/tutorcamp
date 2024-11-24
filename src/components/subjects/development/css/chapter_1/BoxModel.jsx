import React from "react";

const BoxModel = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">CSS Box Model</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. CSS Box Model কি?</h2>
        <p>
          CSS Box Model প্রতিটি HTML উপাদানকে একটি আয়তাকার বক্স হিসাবে দেখে, যার চারটি মূল অংশ রয়েছে: Content, Padding, Border, এবং Margin।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Box Model এর বিভিন্ন অংশ</h2>
        <p>নিচে Box Model এর অংশগুলির রঙে আলাদা আলাদা করে দেখানো হয়েছে:</p>

        <div className="flex justify-center items-center mt-8">
          {/* Outer box representing Margin */}
          <div className="bg-gray-500 p-4 w-full h-full">
            {/* Label for Margin */}
            <p className="text-center text-black mb-2">Margin </p>

            {/* Box representing Border */}
            <div className="bg-yellow-500 p-4 h-full">
              {/* Label for Border */}
              <p className="text-center text-black mb-2">Border </p>

              {/* Box representing Padding */}
              <div className="bg-cyan-500 p-4 h-full">
                {/* Label for Padding */}
                <p className="text-center text-black mb-2">Padding </p>

                {/* Box representing Content */}
                <div className="bg-green-500 p-4 h-full">
                  <p className="text-center text-white">Content </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="mt-4">
            উপরের উদাহরণে Box Model এর বিভিন্ন অংশ রঙে প্রদর্শিত হয়েছে:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <span className="font-semibold">Content:</span> বক্সের ভিতরের উপাদান, যা <div className="w-8 h-4 bg-green-500  inline-flex"></div> রঙে দেখানো হয়েছে।
            </li>
            <li>
              <span className="font-semibold">Padding:</span> Content এর চারপাশের ফাঁকা স্থান, যা <div className="w-8 h-4 bg-cyan-500 inline-flex"></div> রঙে দেখানো হয়েছে।
            </li>
            <li>
              <span className="font-semibold">Border:</span> Padding এর চারপাশের সীমান্ত, যা <div className="w-8 h-4 bg-yellow-500 inline-flex"></div> রঙে দেখা রঙে দেখানো হয়েছে।
            </li>
            <li>
              <span className="font-semibold">Margin:</span> Border এর বাইরের ফাঁকা স্থান, যা <div className="w-8 h-4 bg-gray-500 inline-flex"></div> রঙে দেখা রঙে দেখানো হয়েছে।
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BoxModel;
