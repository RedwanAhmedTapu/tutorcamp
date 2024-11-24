import React from "react";

const PositionBox = () => {
  const sections = [
    {
      title: "1. Static Position",
      content:
        "এই অবস্থানটি ডিফল্ট অবস্থান যা সমস্ত HTML উপাদানের জন্য প্রযোজ্য। উপাদানটি তার সাধারণ প্রকারক্রম অনুযায়ী পৃষ্ঠা উপরে এবং বাম দিকে অবস্থান করে।",
      code: `.static {
        position: static;
        /* ডিফল্ট অবস্থা, কোনো পরিবর্তন নেই */
      }`,
      containerStyle: "relative bg-gray-100 p-4",
    },
    {
      title: "2. Relative Position",
      content:
        "একটি উপাদানকে তার স্বাভাবিক অবস্থান থেকে স্থানান্তরিত করতে ব্যবহার করা হয়। এর সঠিক অবস্থানটি নিয়মিত অবস্থান থেকে পরিমাপ করা হয়।",
      code: `.relative {
        position: relative;
        top: 20px; /* স্বাভাবিক অবস্থান থেকে 20px নীচে */
        left: 30px; /* স্বাভাবিক অবস্থান থেকে 30px ডানে */
      }`,
      containerStyle: "relative bg-gray-100 p-4",
    },
    {
      title: "3. Absolute Position",
      content:
        "এই অবস্থানটি প্রয়োগ করলে উপাদানটি তার নিকটতম পজিশন-কন্টেইনার থেকে স্থানান্তরিত হয়। যদি কোন পজিশন-কন্টেইনার না থাকে তবে এটি পৃষ্ঠার প্রান্ত থেকে স্থানান্তরিত হয়।",
      code: `.absolute {
        position: absolute;
        top: 10px; /* পৃষ্ঠা অথবা পজিশন-কন্টেইনারের শীর্ষ থেকে 10px */
        right: 20px; /* পৃষ্ঠা অথবা পজিশন-কন্টেইনারের ডান প্রান্ত থেকে 20px */
      }`,
      containerStyle: "absolute bg-gray-200 p-4",
    },
    {
      title: "4. Fixed Position",
      content:
        "এই অবস্থানটি পৃষ্ঠার স্ক্রল করার সময়ও উপাদানটি একটি নির্দিষ্ট অবস্থানে থাকে। এটি স্ক্রলিংয়ের সাথে স্থানান্তরিত হয় না।",
      code: `.fixed {
        position: fixed;
        bottom: 0; /* পৃষ্ঠার নীচের প্রান্ত থেকে */
        left: 0; /* পৃষ্ঠার বাম প্রান্ত থেকে */
      }`,
      containerStyle: "fixed bg-gray-300 p-4",
    },
    {
      title: "5. Sticky Position",
      content:
        "এই অবস্থানটি স্ক্রলিং অবস্থানের উপর ভিত্তি করে কার্যকর হয়। এটি নির্দিষ্ট অবস্থান থেকে স্ক্রলিংয়ের সাথে প্যাচ হবে এবং স্ক্রল করা হলে সেটি তার পজিশন পরিবর্তন করবে।",
      code: `.sticky {
        position: sticky;
        top: 0; /* স্ক্রল করার সময় উপরের প্রান্তে আটকে থাকবে */
      }`,
      containerStyle: "sticky bg-gray-400 p-4",
    },
  ];

  return (
    <div className="p-6 bg-gray-800 text-white">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="mb-4">{section.content}</p>
          {section.code && (
            <pre className="bg-slate-900 text-amber-300 p-4 rounded-md shadow-md mb-4">
              {section.code}
            </pre>
          )}
          <div
            className={`relative bg-yellow-50 w-96 p-4 h-24 rounded-sm shadow-md ${section.containerStyle}`}
          >
            <div className="w-16 h-16 bg-amber-500 rounded-md shadow-lg"></div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PositionBox;
