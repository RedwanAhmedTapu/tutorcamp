import React from "react";

const HTMLTableTutorial = () => {
  return (
    <div className="p-4 w-screen sm:w-full text-white bg-slate-900 min-h-screen">
      <h1 className="text-xl font-bold mb-4">টেবিলের ব্যবহার</h1>
      <p className="mb-4">
        টি বিশেষ পদ্ধতিতে সংবাদপ/উপস্থাপন করার জন্য টেবিল তৈরি করা হয়। সারি (রা) ও স্তম্ভের (পা) সগান সৃষ্টি থাকে। বললে টেবিল তৈরি করার প্রয়োজন দেখা যায়। এইচটিএমএল পেজে <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;table&gt;</code> ট্যাগ নির্ধারণ করা হয়। একটি টেবিল <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;tr&gt;</code> ট্যাগ দ্বারা রো তে বিভক্ত থাকে এবং প্রতিটি রো আবার <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;td&gt;</code> ট্যাগ দ্বারা এটা লেপসমূহ বিভক্ত থাকে। <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;td&gt;</code> ট্যাগ মানে "table data" যা একটি ডেটা সেলের কনটেন্ট। একটি ডেটা দল, বাণ, পন, গাবয, গ, পরিজন্টাল রূপ, চরিল ইত্যাদি বহন করতে পারে। একটি দুই কলাম এবং দুই রো বিশিষ্ট টেবিল তৈরি করার জন্য নিচের মতো কোড লিখতে হবে।
      </p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Example Table</h2>
        <pre className="bg-slate-800 p-2 rounded text-slate-300">
          {`
<table border="1">
  <tr>
    <td>row 1, cell 1</td>
    <td>row 1, cell 2</td>
  </tr>
  <tr>
    <td>row 2, cell 1</td>
    <td>row 2, cell 2</td>
  </tr>
</table>
          `}
        </pre>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Rendered Table:</h2>
        <table className="border-collapse border border-slate-600 w-full">
          <tr className="bg-slate-700">
            <td className="border border-slate-600 p-2">row 1, cell 1</td>
            <td className="border border-slate-600 p-2">row 1, cell 2</td>
          </tr>
          <tr className="bg-slate-800">
            <td className="border border-slate-600 p-2">row 2, cell 1</td>
            <td className="border border-slate-600 p-2">row 2, cell 2</td>
          </tr>
        </table>
      </div>

      <p className="mb-4">
        টেবিলে হেডারসহ প্রদর্শন করার জন্য <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;th&gt;</code> ট্যাগটি ব্যবহৃত হয়।
      </p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Example Table with Headers</h2>
        <pre className="bg-slate-800 p-2 rounded text-slate-300">
          {`
<html>
<body>
  <h4>Table headers:</h4>
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Telephone</th>
    </tr>
    <tr>
      <td>redwan ahmed</td>
      <td>123456</td>
    </tr>
  </table>
</body>
</html>
          `}
        </pre>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Rendered Table with Headers:</h2>
        <table className="border-collapse border border-slate-600 w-full">
          <thead className="bg-slate-700">
            <tr>
              <th className="border border-slate-600 p-2">Name</th>
              <th className="border border-slate-600 p-2">Telephone</th>
            </tr>
          </thead>
          <tbody className="bg-slate-800">
            <tr>
              <td className="border border-slate-600 p-2">redwan ahmed</td>
              <td className="border border-slate-600 p-2">123456</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        টেবিল এবং এতে ব্যবহৃত তথ্যকে বিভিন্নভাবে উপস্থাপন করার জন্য <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;table&gt;</code> ট্যাগের সাথে বিভিন্ন অ্যাট্রিবিউট ব্যবহার করা যায়। নিচে উল্লেখযোগ্য কয়েকটি অ্যাট্রিবিউটের বর্ণনা প্রদান করা হলো:
      </p>

      <table className="border-collapse border border-slate-600 w-full mb-4">
        <thead className="bg-slate-700">
          <tr>
            <th className="border border-slate-600 p-2">অ্যাট্রিবিউট</th>
            <th className="border border-slate-600 p-2">বর্ণনা</th>
          </tr>
        </thead>
        <tbody className="bg-slate-800">
          <tr>
            <td className="border border-slate-600 p-2">Border</td>
            <td className="border border-slate-600 p-2">টেবিল বর্ডার তৈরি করার জন্য এ অ্যাট্রিবিউটটি ব্যবহার করা হয়।</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">Width</td>
            <td className="border border-slate-600 p-2">টেবিলের প্রশস্ততা নির্ধারণ করার জন্য এ অ্যাট্রিবিউটটি ব্যবহার করা হয়।</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">Align</td>
            <td className="border border-slate-600 p-2">ব্রাউজার উইন্ডোতে টেবিলের এলাইনমেন্ট নির্ধারণ করার জন্য এ অ্যাট্রিবিউটটি ব্যবহার করা হয়।</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">Cellspacing</td>
            <td className="border border-slate-600 p-2">সেলের মধ্যে ফাঁকা স্থান নির্ধারণ করার জন্য এ অ্যাট্রিবিউটটি ব্যবহার করা হয়।</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">Cellpadding</td>
            <td className="border border-slate-600 p-2">টেবিলের সেল এবং সেলের কনটেন্ট এর মধ্যে ফাঁকা স্থানের পরিমাণ নির্ধারণ করার জন্য এ অ্যাট্রিবিউটটি ব্যবহার করা হয়।</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">Bgcolor</td>
            <td className="border border-slate-600 p-2">টেবিলের ব্যাকগ্রাউন্ড কালার পরিবর্তন করার জন্য এ অ্যাট্রিবিউটটি ব্যবহার করা হয়।</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        স্বাভাবিকভাবে টেবিল ওয়েবপেজের বামদিকে থাকে। ব্রাউজার উইন্ডোতে টেবিলের এলাইনমেন্ট (alignment) অর্থাৎ টেবিলের অবস্থান বামে, ডানে বা কেন্দ্রের কোথায় হবে তা নির্ধারণ করার জন্য <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;table align="right"&gt;</code>, <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;table align="left"&gt;</code>, <code className="bg-slate-700 px-1 py-0.5 rounded">&lt;table align="center"&gt;</code> অ্যাট্রিবিউট ব্যবহার করা যায়।
      </p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Example Table with Alignment</h2>
        <pre className="bg-slate-800 p-2 rounded text-slate-300 overflow-x-auto">
          {`
<html>
<body>
  <table border="1" align="center">
    <caption>Align Center</caption>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Price</th>
    </tr>
    <tr>
              <td className="border border-slate-600 p-2">ICT HSC</td>
              <td className="border border-slate-600 p-2">Redwan</td>
              <td className="border border-slate-600 p-2">Tk 200</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">Physics</td>
              <td className="border border-slate-600 p-2">Md. Tapu</td>
              <td className="border border-slate-600 p-2">Tk 300</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">Chemistry</td>
              <td className="border border-slate-600 p-2">Hazari Nag</td>
              <td className="border border-slate-600 p-2">Tk 250</td>
            </tr>
  </table>
</body>
</html>
          `}
        </pre>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Rendered Table with Alignment:</h2>
        <table className="border-collapse border border-slate-600 w-full mx-auto bg-slate-700">
          <caption className="text-lg font-semibold my-2">Align Center</caption>
          <thead>
            <tr>
              <th className="border border-slate-600 p-2">Title</th>
              <th className="border border-slate-600 p-2">Author</th>
              <th className="border border-slate-600 p-2">Price</th>
            </tr>
          </thead>
          <tbody className="bg-slate-800">
            <tr>
              <td className="border border-slate-600 p-2">ICT HSC</td>
              <td className="border border-slate-600 p-2">Redwan</td>
              <td className="border border-slate-600 p-2">Tk 200</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">Physics</td>
              <td className="border border-slate-600 p-2">Md. Tapu</td>
              <td className="border border-slate-600 p-2">Tk 300</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">Chemistry</td>
              <td className="border border-slate-600 p-2">Hazari Nag</td>
              <td className="border border-slate-600 p-2">Tk 250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HTMLTableTutorial;
