import React from "react";

const OperatorsTutorial = () => {
  // Code text for formatting
  const addition = `+`;
  const subtraction = `-`;
  const multiplication = `*`;
  const division = `/`;
  const modulus = `%`;
  const equal = `==`;
  const strictEqual = `===`;
  const notEqual = `!=`;
  const strictNotEqual = `!==`;
  const greaterThan = `>`;
  const lessThan = `<`;
  const greaterThanOrEqual = `>=`;
  const lessThanOrEqual = `<=`;
  const logicalAnd = `&&`;
  const logicalOr = `||`;
  const logicalNot = `!`;
  const assignment = `=`;
  const addAssign = `+=`;
  const subAssign = `-=`;
  const mulAssign = `*=`;
  const divAssign = `/=`;
  const modAssign = `%=`;
  const ternary = `?`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript অপারেটর </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. গাণিতিক অপারেটর (Arithmetic Operators)</h2>
        <p>
          গাণিতিক অপারেটর গাণিতিক হিসাব করার জন্য ব্যবহৃত হয়। এর মধ্যে রয়েছে:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Addition:</strong> <code>{addition}</code></li>
          <li><strong>Subtraction:</strong> <code>{subtraction}</code></li>
          <li><strong>Multiplication:</strong> <code>{multiplication}</code></li>
          <li><strong>Division:</strong> <code>{division}</code></li>
          <li><strong>Modulus:</strong> <code>{modulus}</code></li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">let</span> <span className="text-white font-semibold">a</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">10</span><span className="text-white font-semibold">{addition}</span><span className="text-green-300 font-semibold">5</span><span className="text-white font-semibold">{`;`}</span>
              <br />
              <span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({`a`})</span>
              <br />
              <span className="text-white font-semibold">// Output: 15</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. তুলনামূলক অপারেটর (Comparison Operators)</h2>
        <p>
          তুলনামূলক অপারেটর দুটি মানের মধ্যে তুলনা করার জন্য ব্যবহৃত হয়। এর মধ্যে রয়েছে:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Equal to:</strong> <code>{equal}</code></li>
          <li><strong>Strict Equal to:</strong> <code>{strictEqual}</code></li>
          <li><strong>Not Equal to:</strong> <code>{notEqual}</code></li>
          <li><strong>Strict Not Equal to:</strong> <code>{strictNotEqual}</code></li>
          <li><strong>Greater Than:</strong> <code>{greaterThan}</code></li>
          <li><strong>Less Than:</strong> <code>{lessThan}</code></li>
          <li><strong>Greater Than or Equal to:</strong> <code>{greaterThanOrEqual}</code></li>
          <li><strong>Less Than or Equal to:</strong> <code>{lessThanOrEqual}</code></li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">let</span> <span className="text-white font-semibold">x</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">10</span><span className="text-white font-semibold">{equal}</span><span className="text-green-300 font-semibold">10</span><span className="text-white font-semibold">{`;`}</span>
              <br />
              <span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({`x`})</span>
              <br />
              <span className="text-white font-semibold">// Output: true</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. লজিক্যাল অপারেটর (Logical Operators)</h2>
        <p>
          লজিক্যাল অপারেটর বিভিন্ন শর্তের মধ্যে সম্পর্ক স্থাপন করতে ব্যবহৃত হয়। এর মধ্যে রয়েছে:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>AND:</strong> <code>{logicalAnd}</code></li>
          <li><strong>OR:</strong> <code>{logicalOr}</code></li>
          <li><strong>NOT:</strong> <code>{logicalNot}</code></li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">let</span> <span className="text-white font-semibold">a</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">true</span><span className="text-white font-semibold">{logicalAnd}</span><span className="text-green-300 font-semibold">false</span><span className="text-white font-semibold">{`;`}</span>
              <br />
              <span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({`a`})</span>
              <br />
              <span className="text-white font-semibold">// Output: false</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. অ্যাসাইনমেন্ট অপারেটর (Assignment Operators)</h2>
        <p>
          অ্যাসাইনমেন্ট অপারেটর ব্যবহার করে ভেরিয়েবলের মান সেট করা হয়। এর মধ্যে রয়েছে:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Assign:</strong> <code>{assignment}</code></li>
          <li><strong>Add and Assign:</strong> <code>{addAssign}</code></li>
          <li><strong>Subtract and Assign:</strong> <code>{subAssign}</code></li>
          <li><strong>Multiply and Assign:</strong> <code>{mulAssign}</code></li>
          <li><strong>Divide and Assign:</strong> <code>{divAssign}</code></li>
          <li><strong>Modulus and Assign:</strong> <code>{modAssign}</code></li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">let</span> <span className="text-white font-semibold">b</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">5</span><span className="text-white font-semibold">{addAssign}</span><span className="text-green-300 font-semibold">3</span><span className="text-white font-semibold">{`;`}</span>
              <br />
              <span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({`b`})</span>
              <br />
              <span className="text-white font-semibold">// Output: 8</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. টারনারি অপারেটর (Ternary Operator)</h2>
        <p>
          টারনারি অপারেটর একটি শর্তের উপর ভিত্তি করে মান ফেরত দেয়। এর ব্যবহার:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Syntax:</strong> <code>{`condition {ternary} trueValue : falseValue`}</code></li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">let</span> <span className="text-white font-semibold">age</span> <span className="text-white font-semibold">=</span> <span className="text-green-300 font-semibold">18</span><span className="text-white font-semibold">{`;`}</span>
              <br />
              <span className="text-yellow-600">let</span> <span className="text-white font-semibold">canVote</span> <span className="text-white font-semibold">=</span> <span className="text-white font-semibold">age</span> <span className="text-white font-semibold">{greaterThanOrEqual}</span><span className="text-green-300 font-semibold">18</span> <span className="text-white font-semibold">{ternary}</span> <span className="text-green-300 font-semibold">'Yes'</span> <span className="text-white font-semibold">{`:`}</span> <span className="text-green-300 font-semibold">'No'</span><span className="text-white font-semibold">{`;`}</span>
              <br />
              <span className="text-white font-semibold">console</span><span className="text-white font-semibold">.</span><span className="text-green-700 font-semibold">log</span><span className="text-white font-semibold">({`canVote`})</span>
              <br />
              <span className="text-white font-semibold">// Output: Yes</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          JavaScript-এ বিভিন্ন ধরনের অপারেটর রয়েছে যা গাণিতিক, তুলনামূলক, লজিক্যাল, অ্যাসাইনমেন্ট এবং টারনারি অপারেশন সম্পাদন করতে ব্যবহৃত হয়। এগুলি কোডের কার্যকারিতা বৃদ্ধি করে এবং বিভিন্ন প্রকারের ডাটা ম্যানিপুলেশন সম্ভব করে।
        </p>
      </section>
      <table className="min-w-full bg-gray-900 border border-gray-700">
          <thead>
            <tr>
              <th className="p-3">প্রকার</th>
              <th className="p-3">চিহ্ন</th>
              <th className="p-3">উদাহরণ</th>
              <th className="p-3">আউটপুট</th>
              <th className="p-3">বিবরণ</th>
            </tr>
          </thead>
          <tbody>
            {/* Arithmetic Operators */}
            <tr>
              <td className="p-2">গণনা</td>
              <td className="p-2">+</td>
              <td className="p-2">5 + 3</td>
              <td className="p-2">8</td>
              <td className="p-2">যোগফল</td>
            </tr>
            <tr>
              <td className="p-2">গণনা</td>
              <td className="p-2">-</td>
              <td className="p-2">5 - 3</td>
              <td className="p-2">2</td>
              <td className="p-2">বিয়োগফল</td>
            </tr>
            <tr>
              <td className="p-2">গণনা</td>
              <td className="p-2">*</td>
              <td className="p-2">5 * 3</td>
              <td className="p-2">15</td>
              <td className="p-2">গুণফল</td>
            </tr>
            <tr>
              <td className="p-2">গণনা</td>
              <td className="p-2">/</td>
              <td className="p-2">6 / 3</td>
              <td className="p-2">2</td>
              <td className="p-2">ভাগফল</td>
            </tr>
            <tr>
              <td className="p-2">গণনা</td>
              <td className="p-2">% </td>
              <td className="p-2">5 % 3</td>
              <td className="p-2">2</td>
              <td className="p-2">মডুলাস</td>
            </tr>
            {/* Comparison Operators */}
            <tr>
              <td className="p-2">তুলনামূলক</td>
              <td className="p-2">==</td>
              <td className="p-2">5 == 5</td>
              <td className="p-2">true</td>
              <td className="p-2">সঠিক সমতা</td>
            </tr>
            <tr>
              <td className="p-2">তুলনামূলক</td>
              <td className="p-2">===</td>
              <td className="p-2">5 === '5'</td>
              <td className="p-2">false</td>
              <td className="p-2">সঠিক অ-সমতা</td>
            </tr>
            <tr>
              <td className="p-2">তুলনামূলক</td>
              <td className="p-2">{greaterThan}</td>
              <td className="p-2">10 {greaterThan} 5</td>
              <td className="p-2">true</td>
              <td className="p-2">বড়</td>
            </tr>
            <tr>
              <td className="p-2">তুলনামূলক</td>
              <td className="p-2">&lt;</td>
              <td className="p-2">10 &lt; 5</td>
              <td className="p-2">false</td>
              <td className="p-2">ছোট</td>
            </tr>
            <tr>
              <td className="p-2">তুলনামূলক</td>
              <td className="p-2">{greaterThan}=</td>
              <td className="p-2">10 {greaterThan}= 5</td>
              <td className="p-2">true</td>
              <td className="p-2">বড় বা সমান</td>
            </tr>
            <tr>
              <td className="p-2">তুলনামূলক</td>
              <td className="p-2">&lt;=</td>
              <td className="p-2">10 &lt;= 5</td>
              <td className="p-2">false</td>
              <td className="p-2">ছোট বা সমান</td>
            </tr>
            {/* Logical Operators */}
            <tr>
              <td className="p-2">লজিক্যাল</td>
              <td className="p-2">&amp;&amp;</td>
              <td className="p-2">true &amp;&amp; false</td>
              <td className="p-2">false</td>
              <td className="p-2">লজিক্যাল AND</td>
            </tr>
            <tr>
              <td className="p-2">লজিক্যাল</td>
              <td className="p-2">||</td>
              <td className="p-2">true || false</td>
              <td className="p-2">true</td>
              <td className="p-2">লজিক্যাল OR</td>
            </tr>
            <tr>
              <td className="p-2">লজিক্যাল</td>
              <td className="p-2">!</td>
              <td className="p-2">!true</td>
              <td className="p-2">false</td>
              <td className="p-2">লজিক্যাল NOT</td>
            </tr>
            {/* Assignment Operators */}
            <tr>
              <td className="p-2">অ্যাসাইনমেন্ট</td>
              <td className="p-2">=</td>
              <td className="p-2">let a = 10</td>
              <td className="p-2">10</td>
              <td className="p-2">অ্যাসাইন</td>
            </tr>
            <tr>
              <td className="p-2">অ্যাসাইনমেন্ট</td>
              <td className="p-2">+=</td>
              <td className="p-2">let a = 10; a += 5</td>
              <td className="p-2">15</td>
              <td className="p-2">যোগ এবং অ্যাসাইন</td>
            </tr>
            <tr>
              <td className="p-2">অ্যাসাইনমেন্ট</td>
              <td className="p-2">-=</td>
              <td className="p-2">let a = 10; a -= 5</td>
              <td className="p-2">5</td>
              <td className="p-2">বিয়োগ এবং অ্যাসাইন</td>
            </tr>
            <tr>
              <td className="p-2">অ্যাসাইনমেন্ট</td>
              <td className="p-2">*=</td>
              <td className="p-2">let a = 10; a *= 5</td>
              <td className="p-2">50</td>
              <td className="p-2">গুণফল এবং অ্যাসাইন</td>
            </tr>
            <tr>
              <td className="p-2">অ্যাসাইনমেন্ট</td>
              <td className="p-2">/=</td>
              <td className="p-2">let a = 10; a /= 5</td>
              <td className="p-2">2</td>
              <td className="p-2">ভাগফল এবং অ্যাসাইন</td>
            </tr>
            <tr>
              <td className="p-2">অ্যাসাইনমেন্ট</td>
              <td className="p-2">%=</td>
              <td className="p-2">let a = 10; a %= 3</td>
              <td className="p-2">1</td>
              <td className="p-2">মডুলাস এবং অ্যাসাইন</td>
            </tr>
            {/* Ternary Operator */}
            <tr>
              <td className="p-2">টারনারি</td>
              <td className="p-2">?</td>
              <td className="p-2">let result = (5 {greaterThan} 3) ? 'Yes' : 'No'</td>
              <td className="p-2">'Yes'</td>
              <td className="p-2">শর্তের ভিত্তিতে মান নির্ধারণ</td>
            </tr>
            {/* Unary Operators */}
            <tr>
              <td className="p-2">ইউনারি</td>
              <td className="p-2">+</td>
              <td className="p-2">+5</td>
              <td className="p-2">5</td>
              <td className="p-2">ইউনারি প্লাস</td>
            </tr>
            <tr>
              <td className="p-2">ইউনারি</td>
              <td className="p-2">-</td>
              <td className="p-2">-5</td>
              <td className="p-2">-5</td>
              <td className="p-2">ইউনারি মাইনাস</td>
            </tr>
            <tr>
              <td className="p-2">ইউনারি</td>
              <td className="p-2">++</td>
              <td className="p-2">let a = 5; ++a</td>
              <td className="p-2">6</td>
              <td className="p-2">ইনক্রিমেন্ট</td>
            </tr>
            <tr>
              <td className="p-2">ইউনারি</td>
              <td className="p-2">--</td>
              <td className="p-2">let a = 5; --a</td>
              <td className="p-2">4</td>
              <td className="p-2">ডিক্রিমেন্ট</td>
            </tr>
            {/* Type Operators */}
            <tr>
              <td className="p-2">টাইপ</td>
              <td className="p-2">typeof</td>
              <td className="p-2">typeof 'hello'</td>
              <td className="p-2">'string'</td>
              <td className="p-2">টাইপ নির্ধারণ</td>
            </tr>
            <tr>
              <td className="p-2">টাইপ</td>
              <td className="p-2">instanceof</td>
              <td className="p-2">'hello' instanceof String</td>
              <td className="p-2">false</td>
              <td className="p-2">অবজেক্টের ক্লাস</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default OperatorsTutorial;
