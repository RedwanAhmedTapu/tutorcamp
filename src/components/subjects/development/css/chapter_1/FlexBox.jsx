import React from "react";

const FlexBox = () => {
    const sections = [
        {
          title: "1. CSS Flex Box কি?",
          content:
            "Flexbox হল CSS এর একটি শক্তিশালী Layout মডেল, যা কন্টেইনারের ভিতরের উপাদানগুলোকে Flexible এবং Responsive ভাবে সাজাতে সাহায্য করে।",
        },
        {
          title: "Flexbox প্রোপার্টিস:",
          content: "display: flex;",
          code: `.container {
            display: flex;
          }`,
          usage:
            "`flex` ফ্লেক্সবক্স লেআউট সক্রিয় করে। `inline-flex` ইনলাইন এলিমেন্টের মত আচরণ করে।",
        },
        {
          title: "flex-direction",
          content: "Flex Items কোন direction এ সাজানো হবে তা নির্ধারণ করে।",
          code: `.container {
            flex-direction: row; /* বা column, row-reverse, column-reverse */
          }`,
          usage: "`row` ডিফল্ট ডিরেকশন যা আইটেমগুলোকে বাম থেকে ডান দিকে সাজায়।",
        },
        {
          title: "flex-wrap",
          content: "Flex Items কিভাবে র্যাপ হবে তা নির্ধারণ করে।",
          code: `.container {
            flex-wrap: nowrap; /* বা wrap, wrap-reverse */
          }`,
          usage:
            "`nowrap` ডিফল্ট যা আইটেমগুলোকে এক লাইনে রাখে। `wrap` আইটেমগুলোকে লাইন ব্রেক করতে দেয়।",
        },
        {
          title: "flex-flow",
          content: "flex-direction এবং flex-wrap একত্রে নির্ধারণ করে।",
          code: `.container {
            flex-flow: row wrap; /* বা column nowrap, row-reverse wrap-reverse */
          }`,
          usage:
            "`row wrap` আইটেমগুলোকে বাম থেকে ডান এবং র্যাপ করার জন্য কনফিগার করে।",
        },
        {
          title: "justify-content",
          content: "Main axis বরাবর Flex Items কিভাবে সাজানো হবে তা নির্ধারণ করে।",
          code: `.container {
            display: flex;
            justify-content: flex-start; /* বা center, flex-end, space-between, space-around, space-evenly */
          }`,
          examples: [
            {
              description: "flex-start: আইটেমগুলো কন্টেইনারের শুরুতে থাকে।",
              containerStyle: "flex justify-start",
              code: `.container {
                    display:flex;          
                    justify-content: flex-start;
                  }`,
            },
            {
              description: "flex-end: আইটেমগুলো কন্টেইনারের শেষে থাকে।",
              containerStyle: "flex justify-end",
              code: `.container {
                display:flex;          
                justify-content: flex-end;
              }`,
            },
            {
              description: "center: আইটেমগুলো কন্টেইনারের কেন্দ্রস্থলে থাকে।",
              containerStyle: "flex justify-center",
              code: `.container {
                    display:flex;          
                    justify-content: center;
                  }`,
            },
            {
              description:
                "space-between: আইটেমগুলোর মধ্যে সমান জায়গা থাকবে, প্রথম এবং শেষ আইটেমের মধ্যে কোন জায়গা থাকবে না।",
              containerStyle: "flex justify-between",
              code: `.container {
                    display:flex;          
                    justify-content: space-between;
                  }`,
            },
            {
              description: "space-around: আইটেমগুলোর চারপাশে সমান জায়গা থাকবে।",
              containerStyle: "flex justify-around",
              code: `.container {
                    display:flex;          
                    justify-content: space-around;
                  }`,
            },
            {
              description: "space-evenly: সমস্ত আইটেমের মধ্যে সমান জায়গা থাকবে।",
              containerStyle: "flex justify-evenly",
              code: `.container {
                    display:flex;          
                    justify-content: space-evenly;
                  }`,
            },
          ],
        },
        {
          title: "align-items",
          content: "Cross axis বরাবর Flex Items কিভাবে আলাইন হবে তা নির্ধারণ করে।",
          code: `.container {
            align-items: stretch; /* বা flex-start, center, flex-end, baseline */
          }`,
          usage:
            "`stretch` ডিফল্ট যা আইটেমগুলোকে কন্টেইনারের উচ্চতা অনুসারে প্রসারিত করে।",
          examples: [
            {
              description: "flex-start: আইটেমগুলো কন্টেইনারের শীর্ষে থাকে।",
              containerStyle: "flex items-start",
              code: `.container {
                    display: flex;
                    align-items: flex-start;
                  }`,
            },
            {
              description: "center: আইটেমগুলো কন্টেইনারের কেন্দ্রস্থলে থাকে।",
              containerStyle: "flex items-center",
              code: `.container {
                    display: flex;
                    align-items: center;
                  }`,
            },
            {
              description: "flex-end: আইটেমগুলো কন্টেইনারের তলায় থাকে।",
              containerStyle: "flex items-end",
              code: `.container {
                    display: flex;
                    align-items: flex-end;
                  }`,
            },
            {
              description: "baseline: আইটেমগুলোর বেসলাইন অনুযায়ী আলাইন হয়।",
              containerStyle: "flex items-baseline",
              code: `.container {
                    display: flex;
                    align-items: baseline;
                  }`,
            },
            {
              description: "stretch: আইটেমগুলো কন্টেইনারের উচ্চতা অনুসারে প্রসারিত হয়।",
              containerStyle: "flex items-stretch",
              code: `.container {
                    display: flex;
                    align-items: stretch;
                  }`,
            },
          ],
        },
        {
          title: "align-self",
          content:
            "একটি নির্দিষ্ট Flex Item কিভাবে আলাইন হবে তা নির্ধারণ করে, যা align-items প্রোপার্টির override করে।",
          code: `.item {
            align-self: auto; /* বা flex-start, center, flex-end, baseline, stretch */
          }`,
          usage: "`auto` ডিফল্ট যা parent এর align-items প্রোপার্টির অনুসরণ করে।",
        },
        {
          title: "align-content",
          content:
            "Flex Container এর মধ্যে অনেকগুলি Flex Lines থাকলে কিভাবে সাজানো হবে তা নির্ধারণ করে।",
          code: `.container {
            align-content: flex-start; /* বা center, flex-end, space-between, space-around, stretch */
          }`,
          usage:
            "`stretch` ডিফল্ট যা lines গুলোকে কন্টেইনারের উচ্চতা অনুসারে প্রসারিত করে।",
          examples: [
            {
              description: "flex-start: Flex lines কন্টেইনারের শীর্ষে থাকে।",
              containerStyle: "flex content-start",
              code: `.container {
                    display: flex;
                    align-content: flex-start;
                  }`,
            },
            {
              description: "center: Flex lines কন্টেইনারের কেন্দ্রস্থলে থাকে।",
              containerStyle: "flex content-center",
              code: `.container {
                    display: flex;
                    align-content: center;
                  }`,
            },
            {
              description: "flex-end: Flex lines কন্টেইনারের তলায় থাকে।",
              containerStyle: "flex content-end",
              code: `.container {
                    display: flex;
                    align-content: flex-end;
                  }`,
            },
            {
              description: "space-between: Flex lines গুলোর মধ্যে সমান জায়গা থাকবে, প্রথম এবং শেষ লাইনের মধ্যে কোন জায়গা থাকবে না।",
              containerStyle: "flex content-between",
              code: `.container {
                    display: flex;
                    align-content: space-between;
                  }`,
            },
            {
              description: "space-around: Flex lines গুলোর চারপাশে সমান জায়গা থাকবে।",
              containerStyle: "flex content-around",
              code: `.container {
                    display: flex;
                    align-content: space-around;
                  }`,
            },
            {
              description: "space-evenly: সমস্ত Flex lines এর মধ্যে সমান জায়গা থাকবে।",
              containerStyle: "flex content-evenly",
              code: `.container {
                    display: flex;
                    align-content: space-evenly;
                  }`,
            },
            {
              description: "stretch: Flex lines কন্টেইনারের উচ্চতা অনুসারে প্রসারিত হয়।",
              containerStyle: "flex content-stretch",
              code: `.container {
                    display: flex;
                    align-content: stretch;
                  }`,
            },
          ],
        },
        {
          title: "flex",
          content: "Flex Items এর grow, shrink, এবং basis মান নির্ধারণ করে।",
          code: `.item {
            flex: 1 1 auto; /* বা flex-grow flex-shrink flex-basis */
          }`,
          usage: "`1 1 auto` আইটেমগুলোকে একইভাবে প্রসারিত এবং সংকুচিত হতে দেয়।",
        },
        {
          title: "flex-grow",
          content: "Flex Item কতটা বৃদ্ধি পাবে তা নির্ধারণ করে।",
          code: `.item {
            flex-grow: 1; /* একটি positive number */
          }`,
          usage: "`1` আইটেমটি কন্টেইনারে অবশিষ্ট জায়গার 1 অংশ দখল করবে।",
        },
        {
          title: "flex-shrink",
          content: "Flex Item কতটা সংকুচিত হবে তা নির্ধারণ করে।",
          code: `.item {
            flex-shrink: 1; /* একটি positive number */
          }`,
          usage: "`1` আইটেমটি সংকুচিত হতে 1 অংশ দখল করবে।",
        },
        {
          title: "flex-basis",
          content:
            "Flex Item এর প্রাথমিক আকার নির্ধারণ করে, যা grow এবং shrink প্রোপার্টির জন্য বেস হিসাবে কাজ করে।",
          code: `.item {
            flex-basis: auto; /* একটি length value বা percentage */
          }`,
          usage: "`auto` আইটেমের মূল আকার তার কনটেন্টের আকারের উপর ভিত্তি করে।",
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
          {section.examples &&
            section.examples.map((example, idx) => (
              <div key={idx} className="mt-6">
                <p className="mb-2">
                  <strong>{example.description}</strong>
                </p>
                {example.code && (
                  <pre className="bg-slate-900 text-red-400 p-4 rounded-md shadow-md">
                    {example.code}
                  </pre>
                )}
                <div
                  className={`bg-yellow-50 w-[50%] h-20 rounded-sm shadow-md ${example.containerStyle}`}
                >
                  <div className="w-20 h-16 p-2 rounded-md shadow-lg  bg-amber-500 m-1"></div>
                  <div className="w-20 h-16 p-2 rounded-md shadow-lg  bg-amber-500 m-1"></div>
                  <div className="w-20 h-16 p-2 rounded-md shadow-lg  bg-amber-500 m-1"></div>
                  <div className="w-20 h-16 p-2 rounded-md shadow-lg  bg-amber-500 m-1"></div>
                 
                  
                </div>
              </div>
            ))}
        </section>
      ))}
    </div>
  );
};

export default FlexBox;
