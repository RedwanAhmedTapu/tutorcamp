import React from 'react';

const HTMLTextFormatting = () => {
  return (
    <div className="p-6 w-screen sm:w-full bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4 text-teal-500">HTML এ টেক্সট ফরমেটিং</h1>
      <p className="mb-4">
        লেখা বা টেক্সটকে সঠিক আকৃতি বা রূপ প্রদান করে, দৃষ্টিনন্দন করে, উপস্থাপন করে একটি ওয়েবপেজকে ফুটিয়ে তোলার চেষ্টাকে ফরম্যাটিং বলা হয়। HTML এর পেজের টেক্সট এর সাথে বিভিন্ন ট্যাগ ব্যবহার করে টেক্সটকে বিভিন্নভাবে ফরমেটিং করা যায়। ওয়েব ব্রাউজার উপাত্ত/টেক্সটকে সুন্দর ও দৃষ্টিনন্দনভাবে উপস্থাপনের জন্য টেক্সট ফরমেটিং ট্যাগ ব্যবহার করা হয়।
      </p>
      <div className="mb-4">
        <p><b>This text is bold</b></p>
        <p><u>This text is underline</u></p>
        <p><i>This text is italic</i></p>
        <p><small>This text is small</small></p>
        <p>This is <sub>subscript</sub> and <sup>superscript</sup></p>
      </div>
      <h2 className="text-xl font-semibold mb-2">টেক্সট ফরমেটিং ট্যাগ</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">ট্যাগ</th>
            <th className="px-4 py-2">বর্ণনা</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">&lt;b&gt;</td>
            <td className="border px-4 py-2">টেক্সটকে বোল্ড করতে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;u&gt;</td>
            <td className="border px-4 py-2">টেক্সটকে আন্ডারলাইন করতে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;big&gt;</td>
            <td className="border px-4 py-2">টেক্সটকে বড় করে দেখাতে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;em&gt;</td>
            <td className="border px-4 py-2">এমফাসাইজড টেক্সট দেখাতে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;small&gt;</td>
            <td className="border px-4 py-2">টেক্সটকে ছোট করে দেখাতে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;strong&gt;</td>
            <td className="border px-4 py-2">টেক্সটকে স্ট্রং করে দেখাতে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;sub&gt;</td>
            <td className="border px-4 py-2">সাবস্ক্রিপ্ট টেক্সট দেখাতে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;sup&gt;</td>
            <td className="border px-4 py-2">সুপারস্ক্রিপ্ট টেক্সট দেখাতে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;ins&gt;</td>
            <td className="border px-4 py-2">ইনসার্টকৃত টেক্সট নির্ধারণে ব্যবহৃত হয়।</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">&lt;del&gt;</td>
            <td className="border px-4 py-2">কোনো টেক্সটের মাঝখানে দাগ টেনে সেটি ডিলিট করা হয়েছে এমন বুঝাতে ব্যবহৃত হয়।</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-semibold mb-2">নন-ব্রেকিং স্পেস (Non-breaking Space)</h2>
      <p className="mb-4">
        HTML এ সবচেয়ে সাধারণ ক্যারেক্টার এনটিটি হলো নন-ব্রেকিং স্পেস। স্বাভাবিকভাবে HTML টেক্সটের ভেতরের স্পেসগুলোকে সরিয়ে দেয়। যদি টেক্সটে ১০টি স্পেস দেয়া হয় তবে HTML এদের মধ্যে ৯টিকে ছেঁটে ফেলবে। তাই টেক্সটে প্রচুর স্পেস যোগ করতে &amp;nbsp; ক্যারেক্টার এনটিটি ব্যবহার করা হয়।
      </p>
      <h2 className="text-xl font-semibold mb-2">&lt;address&gt; ট্যাগের উদাহরণ</h2>
      <p className="mb-4">HTML ডকুমেন্টে অ্যাড্রেস লেখার জন্য নিচের মতো কোড লিখতে হবে।</p>
      <pre className="bg-gray-700 p-4 rounded-md mb-4">
        &lt;address&gt;<br />
        &lt;p&gt;123 Main Street&lt;/p&gt;<br />
        &lt;p&gt;Anytown, USA&lt;/p&gt;<br />
        &lt;/address&gt;
      </pre>
      <h2 className="text-xl font-semibold mb-2">প্রিফরমেটেড টেক্সট এর উদাহরণ</h2>
      <p className="mb-4">
        HTML এ প্রিফরমেটেড টেক্সট তৈরি করতে &lt;pre&gt; ট্যাগ ব্যবহৃত হয়। ওয়ার্ড প্রসেসরে যেভাবে টেক্সটকে লাইনে ভেঙে ভেঙে সাজিয়ে লেখা হয় &lt;pre&gt; ট্যাগটি ব্যবহার করে কোড লিখলে ব্রাউজার ফলাফল প্রদর্শন করবে।
      </p>
      <pre className="bg-gray-700 p-4 rounded-md mb-4">
        &lt;pre&gt;<br />
        This is<br />
        preformatted text.<br />
        It preserves both spaces<br />
        and line breaks.<br />
        &lt;/pre&gt;
      </pre>
      <p>The pre tag is good for displaying computer code:</p>
      <pre className="bg-gray-700 p-4 rounded-md mb-4">
        for i = 1 to 10<br />
        print i<br />
        next i
      </pre>
      <h2 className="text-xl font-semibold mb-2">HTML এ মন্তব্য (comments) লেখা</h2>
      <p className="mb-4">
        HTML এর কোডের মধ্যে কিছু বুঝানোর উদ্দেশ্যে কমেন্টস বা মন্তব্য লেখা হয় যা ব্রাউজার প্রদর্শন করে না।
      </p>
      <p className="mb-4">
        <strong>এক লাইনের কমেন্টের জন্য:</strong> &lt;!-- This is a comment --&gt;<br />
        <strong>একাধিক লাইনের কমেন্টের জন্য:</strong> &lt;!-- Comments are not displayed in the browser --&gt;
      </p>
    </div>
  );
}

export default HTMLTextFormatting;
