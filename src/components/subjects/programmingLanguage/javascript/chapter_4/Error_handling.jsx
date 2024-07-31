import React from "react";

const ErrorHandlingTutorial = () => {
  // Code text for formatting
  const tryKeyword = `try`;
  const catchKeyword = `catch`;
  const finallyKeyword = `finally`;
  const throwKeyword = `throw`;
  const errorObject = `Error`;
  const cnsl = `console`;
  const log = `log`;

  // Tutorial content
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">JavaScript Error Handling</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Error Handling কি?</h2>
        <p>
          প্রোগ্রামিং এ Error একটি সাধারণ বিষয়। Error Handling করার মাধ্যমে আপনি আপনার কোডটি ত্রুটি ঘটলে কিভাবে প্রতিক্রিয়া জানাবে তা নির্ধারণ করতে পারেন। JavaScript এ, আমরা <span className="text-yellow-600">{tryKeyword}</span>, <span className="text-yellow-600">{catchKeyword}</span>, <span className="text-yellow-600">{finallyKeyword}</span>, এবং <span className="text-yellow-600">{throwKeyword}</span> ব্যবহার করে Error Handling করতে পারি।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. try...catch স্টেটমেন্ট</h2>
        <p>
          <span className="text-yellow-600">{tryKeyword}</span> ব্লকের মধ্যে আপনি যে কোডটি পরীক্ষা করতে চান তা রাখেন এবং <span className="text-yellow-600">{catchKeyword}</span> ব্লকের মধ্যে আপনি ত্রুটি ঘটলে যা করতে চান তা রাখেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{tryKeyword}</span> {`{`}
              <br />
              &nbsp;&nbsp; <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">(</span>
              <span className="text-yellow-600">{`"Start of try block"`}</span>
              <span className="text-white font-semibold">)</span>
              <span className="text-white font-semibold">;</span>
              <br />
              &nbsp;&nbsp; <span className="text-yellow-600">{throwKeyword}</span> <span className="text-white font-semibold">new {errorObject}</span>(<span className="text-yellow-600">{`"Something went wrong!"`}</span>);
              <br />
              {`}`} <span className="text-yellow-600">{catchKeyword}</span> (error) {`{`}
              <br />
              &nbsp;&nbsp; <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">(error.message);</span>
              <br />
              {`}`}
            </code>
          </pre>
        </div>
        <p className="mt-2">
          উপরের উদাহরণে, <span className="text-yellow-600">{tryKeyword}</span> ব্লকের মধ্যে একটি ত্রুটি সৃষ্টি করা হয়েছে এবং <span className="text-yellow-600">{catchKeyword}</span> ব্লকে সেই ত্রুটির বার্তা লগ করা হয়েছে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. finally ব্লক</h2>
        <p>
          <span className="text-yellow-600">{finallyKeyword}</span> ব্লকটি <span className="text-yellow-600">{tryKeyword}</span> এবং <span className="text-yellow-600">{catchKeyword}</span> ব্লকের পর ব্যবহার করা হয় এবং তা সবসময় কার্যকর হয়, এমনকি ত্রুটি ঘটলেও।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">{tryKeyword}</span> {`{`}
              <br />
              &nbsp;&nbsp; <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">(</span>
              <span className="text-yellow-600">{`"Start of try block"`}</span>
              <span className="text-white font-semibold">)</span>
              <span className="text-white font-semibold">;</span>
              <br />
              &nbsp;&nbsp; <span className="text-yellow-600">{throwKeyword}</span> <span className="text-white font-semibold">new {errorObject}</span>(<span className="text-yellow-600">{`"Something went wrong!"`}</span>);
              <br />
              {`}`} <span className="text-yellow-600">{catchKeyword}</span> (error) {`{`}
              <br />
              &nbsp;&nbsp; <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">(error.message);</span>
              <br />
              {`}`} <span className="text-yellow-600">{finallyKeyword}</span> {`{`}
              <br />
              &nbsp;&nbsp; <span className="text-violet-300 font-semibold">{cnsl}</span>
              <span className="text-white font-semibold">{"."}</span>
              <span className="text-green-700 font-semibold">{log}</span>
              <span className="text-white font-semibold">(</span>
              <span className="text-yellow-600">{`"This will always run"`}</span>
              <span className="text-white font-semibold">)</span>
              <span className="text-white font-semibold">;</span>
              <br />
              {`}`}
            </code>
          </pre>
        </div>
        <p className="mt-2">
          উপরের উদাহরণে, <span className="text-yellow-600">{finallyKeyword}</span> ব্লকটি সবসময় কার্যকর হয়, error ঘটুক বা না ঘটুক।
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          Error Handling আপনার কোডকে আরও দৃঢ় এবং ত্রুটিমুক্ত করতে সাহায্য করে। <span className="text-yellow-600">{tryKeyword}</span>, <span className="text-yellow-600">{catchKeyword}</span>, <span className="text-yellow-600">{finallyKeyword}</span>, এবং <span className="text-yellow-600">{throwKeyword}</span> ব্যবহার করে আপনি ত্রুটি মোকাবেলা করতে পারেন এবং তাদের প্রতিক্রিয়া কিভাবে হবে তা নির্ধারণ করতে পারেন।
        </p>
      </section>
    </div>
  );
};

export default ErrorHandlingTutorial;
