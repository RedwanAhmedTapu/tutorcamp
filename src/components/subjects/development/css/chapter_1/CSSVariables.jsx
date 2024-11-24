import React from "react";

const CSSVariables = () => {
  const sections = [
    {
      title: "1. CSS Variables কি?",
      content:
        "CSS Variables (Custom Properties) হল ভ্যারিয়েবল যা CSS কোডে ডাটা সংরক্ষণ করতে ব্যবহৃত হয়। এটি একটি ভ্যালুকে একাধিক স্থানে ব্যবহারের সুযোগ দেয় এবং ভবিষ্যতে সহজেই পরিবর্তন করা যায়।",
      code: `:root {
        --primary-color: #3498db;
        --secondary-color: #2ecc71;
        --font-size: 16px;
      }

      body {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        font-size: var(--font-size);
      }`,
    },
    {
      title: "2. CSS Variables ব্যবহার করার নিয়ম",
      content:
        "CSS Variables ডিক্লেয়ার করার সময় দুটি ড্যাশ (`--`) দিয়ে ডিফাইন করা হয় এবং `var()` ফাংশনের মাধ্যমে এর মান ব্যবহার করা হয়।",
      code: `button {
        background-color: var(--primary-color);
        color: white;
        font-size: var(--font-size);
      }`,
    },
    {
      title: "3. Scope এবং Inheritance",
      content:
        "CSS Variables গুলো সাধারণত `:root` এ ডিক্লেয়ার করা হয় যাতে পুরো ডকুমেন্ট জুড়ে ব্যবহার করা যায়। তবে নির্দিষ্ট কোনো এলিমেন্টেও এর স্কোপ সীমাবদ্ধ রাখা যায়।",
      code: `.container {
        --button-color: #e74c3c;
      }

      button {
        background-color: var(--button-color); /* local scope */
      }`,
    },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="mb-4">{section.content}</p>
          {section.code && (
            <pre className="bg-slate-800 text-emerald-300 p-4 rounded-md shadow-md mb-4">
              {section.code}
            </pre>
          )}
        </section>
      ))}

     
    </div>
  );
};

export default CSSVariables;
