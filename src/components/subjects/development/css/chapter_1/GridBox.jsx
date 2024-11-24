import React from "react";

const GridBox = () => {
  const sections = [
  {
    title: "1. CSS Grid কি?",
    content:
      "Grid হল CSS এর একটি শক্তিশালী Layout মডেল যা একটি কনটেইনারকে গ্রিডের সেলগুলোতে বিভক্ত করে উপাদানগুলোকে একটি সুসংগঠিত এবং মানানসইভাবে সাজাতে সাহায্য করে।",
  },
  {
    title: "grid-template-columns",
    content: "Grid Container এর কলাম গুলোর সংখ্যা এবং আকার নির্ধারণ করে।",
    code: `.container {
      grid-template-columns: repeat(3, 1fr); /* বা 100px 200px auto, minmax() */
    }`,
    usage:
      "`repeat(3, 1fr)` তিনটি কলাম তৈরি করে যার প্রত্যেকটি কলাম সমান আকারের হবে।",
    containerStyle: "grid grid-cols-3 gap-4",
  },
  {
    title: "grid-template-rows",
    content: "Grid Container এর সারি গুলোর সংখ্যা এবং আকার নির্ধারণ করে।",
    code: `.container {
      grid-template-rows: repeat(2, 100px); /* বা 50px auto, minmax() */
    }`,
    usage:
      "`repeat(2, 100px)` দুটি সারি তৈরি করে যার প্রত্যেকটির উচ্চতা 100px হবে।",
    containerStyle: "grid grid-rows-2 gap-4",
  },
  {
    title: "grid-template-areas",
    content: "Grid Container এর grid items গুলোর জন্য একটি মানচিত্র তৈরি করে।",
    code: `.container {
      grid-template-areas:
        "header header header"
        "main main sidebar"
        "footer footer footer";
    }`,
    usage:
      "`grid-template-areas` উপাদানগুলোর জন্য একটি মানচিত্র তৈরি করে যা কিভাবে গ্রিডের মধ্যে সাজানো হবে তা নির্ধারণ করে।",
    containerStyle: "grid grid-areas-header-main-sidebar-footer gap-4",
  },
  {
    title: "grid-column",
    content: "Grid Item কোন কলাম গুলো দখল করবে তা নির্ধারণ করে।",
    code: `.item {
      grid-column: 1 / 3; /* বা span 2 */
    }`,
    usage:
      "`1 / 3` আইটেমটি প্রথম কলাম থেকে শুরু হয়ে তৃতীয় কলাম পর্যন্ত বিস্তৃত হবে।",
    containerStyle: "grid grid-cols-3 gap-4",
  },
  {
    title: "grid-row",
    content: "Grid Item কোন সারি গুলো দখল করবে তা নির্ধারণ করে।",
    code: `.item {
      grid-row: 1 / 2; /* বা span 2 */
    }`,
    usage:
      "`1 / 2` আইটেমটি প্রথম সারি দখল করবে এবং দ্বিতীয় সারির মধ্যে সীমাবদ্ধ থাকবে।",
    containerStyle: "grid grid-rows-2 gap-4",
  },
  {
    title: "grid-auto-flow",
    content: "Grid Items গুলো কিভাবে গ্রিডের মধ্যে ফ্লো হবে তা নির্ধারণ করে।",
    code: `.container {
      grid-auto-flow: row; /* বা column, dense */
    }`,
    usage:
      "`row` ডিফল্ট যা আইটেমগুলোকে সারি দ্বারা সাজায়। `column` আইটেমগুলোকে কলাম দ্বারা সাজায়।",
    containerStyle: "grid grid-flow-row gap-4",
  },
  {
    title: "grid-gap (grid-column-gap, grid-row-gap)",
    content: "Grid Items গুলোর মধ্যে গ্যাপ বা ফাঁকা জায়গা নির্ধারণ করে।",
    code: `.container {
      grid-gap: 10px; /* বা grid-column-gap: 10px; grid-row-gap: 20px; */
    }`,
    usage:
      "`10px` সারি এবং কলামের মধ্যে 10px গ্যাপ তৈরি করে। আলাদাভাবে কলাম এবং সারির গ্যাপ নির্ধারণ করতে grid-column-gap এবং grid-row-gap ব্যবহার করা হয়।",
    containerStyle: "grid grid-cols-3 grid-rows-2 gap-10",
  },
  {
    title: "justify-items",
    content: "Grid Item এর inline axis বরাবর কিভাবে সাজানো হবে তা নির্ধারণ করে।",
    code: `.container {
      justify-items: start; /* বা end, center, stretch */
    }`,
    usage:
      "`start` আইটেমগুলোকে কন্টেইনারের শুরুতে রাখবে। `center` আইটেমগুলোকে কেন্দ্রস্থলে রাখবে।",
    containerStyle: "grid justify-items-start gap-4",
  },
  {
    title: "align-items",
    content: "Grid Item এর block axis বরাবর কিভাবে সাজানো হবে তা নির্ধারণ করে।",
    code: `.container {
      align-items: start; /* বা end, center, stretch */
    }`,
    usage:
      "`start` আইটেমগুলোকে কন্টেইনারের শীর্ষে রাখবে। `center` আইটেমগুলোকে কেন্দ্রস্থলে রাখবে।",
    containerStyle: "grid align-items-start gap-4",
  },
  {
    title: "justify-content",
    content: "Grid Container এর inline axis বরাবর কিভাবে সাজানো হবে তা নির্ধারণ করে।",
    code: `.container {
      justify-content: start; /* বা end, center, space-between, space-around */
    }`,
    usage:
      "`start` আইটেমগুলোকে কন্টেইনারের শুরুতে রাখবে। `center` আইটেমগুলোকে কেন্দ্রস্থলে রাখবে।",
    containerStyle: "grid justify-content-start gap-4",
  },
  {
    title: "align-content",
    content: "Grid Container এর block axis বরাবর কিভাবে সাজানো হবে তা নির্ধারণ করে।",
    code: `.container {
      align-content: start; /* বা end, center, space-between, space-around, stretch */
    }`,
    usage:
      "`start` গ্রীড লাইন্সগুলোকে কন্টেইনারের শীর্ষে রাখবে। `center` গ্রীড লাইন্সগুলোকে কেন্দ্রস্থলে রাখবে।",
    containerStyle: "grid align-content-start gap-4",
  },
];


    return (
        <div className="p-6 bg-gray-800 text-white">
            {sections.map((section, index) => (
                <section key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                    <p>{section.content}</p>
                    {section.code && (
                        <pre className="bg-slate-900 text-amber-300 p-4 rounded-md shadow-md">
                            {section.code}
                        </pre>
                    )}
                    {section.usage && <p>{section.usage}</p>}
                    
                          
                                <div
                                    className={`bg-yellow-50 w-[50%] h-96 rounded-sm shadow-md ${section.containerStyle}`}
                                >
                                    <div className="w-20 h-16 p-2 rounded-md shadow-lg bg-amber-500 m-1"></div>
                                    <div className="w-20 h-16 p-2 rounded-md shadow-lg bg-amber-500 m-1"></div>
                                    <div className="w-20 h-16 p-2 rounded-md shadow-lg bg-amber-500 m-1"></div>
                                    <div className="w-20 h-16 p-2 rounded-md shadow-lg bg-amber-500 m-1"></div>
                                </div>
                </section>
            ))}
        </div>
    );
};

export default GridBox;
