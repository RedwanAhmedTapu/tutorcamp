import React from "react";

const ColorAndBackground = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">CSS রঙ এবং পটভূমি</h1>

      {/* RGB Values */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. RGB মান</h2>
        <p>RGB (Red, Green, Blue) মানের মাধ্যমে রঙ নির্ধারণ করা হয়। প্রতিটি রঙ চ্যানেল 0 থেকে 255 এর মধ্যে একটি মান গ্রহণ করে।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.rgb-example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>: <span className="text-pink-500">rgb(255, 99, 71)</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">এখানে, <code>rgb(255, 99, 71)</code> একটি রঙ তৈরি করে যা টমেটো রঙের সমতুল্য।</p>
      </section>

      {/* HEX Codes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. HEX কোড</h2>
        <p>HEX কোড একটি 6 অঙ্কের হেক্সাডেসিমাল সংখ্যা যা রঙ নির্ধারণ করে। প্রতিটি জোড় 0 থেকে 255 পর্যন্ত একটি মান প্রতিনিধিত্ব করে।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.hex-example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>: <span className="text-pink-500">#FF6347</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">এখানে, <code>#FF6347</code> একটি টমেটো রঙের HEX কোড।</p>
      </section>

      {/* Color Names */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Color Name</h2>
        <p>CSS এ বিভিন্ন পূর্বনির্ধারিত রঙ নাম ব্যবহার করা যেতে পারে।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.color-name-example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>: <span className="text-pink-500">lightcoral</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">এখানে, <code>lightcoral</code> একটি পূর্বনির্ধারিত রঙ নাম।</p>
      </section>

      {/* Color Picker */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Color Picker</h2>
        <p>রঙ পিক্কার একটি ইনপুট এলিমেন্ট যা ব্যবহারকারীদের একটি রঙ নির্বাচন করতে দেয়।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              &lt;input type="color" value="#FF6347" /&gt;
            </code>
          </pre>
        </div>
        <p className="mt-2">এটি একটি রঙ পিক্কার ইনপুট যা টমেটো রঙের প্রাথমিক মান দেখায়।</p>
      </section>

      {/* Hue, Saturation, Brightness */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Hue, Saturation, Brightness</h2>
        <p>এই বৈশিষ্ট্যগুলি HSL (Hue, Saturation, Lightness) রঙ স্পেসে রঙ নির্ধারণ করে:</p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Hue</strong>: রঙের প্রাথমিক টোন (0° থেকে 360° পর্যন্ত)।</li>
          <li><strong>Saturation</strong>: রঙের তীব্রতা (0% থেকে 100% পর্যন্ত)।</li>
          <li><strong>Brightness</strong>: রঙের উজ্জ্বলতা (0% থেকে 100% পর্যন্ত)।</li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.hsl-example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>: <span className="text-pink-500">hsl(120, 100%, 50%)</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">এখানে, <code>hsl(120, 100%, 50%)</code> একটি সোনালী সবুজ রঙ নির্ধারণ করে।</p>
      </section>

      {/* Contrast */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. কনট্রাস্ট</h2>
        <p>কনট্রাস্ট মানে দুটি রঙের মধ্যে পার্থক্য। উচ্চ কনট্রাস্ট রঙগুলি পড়তে সহজ।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.contrast-example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>: <span className="text-pink-500">#FFFFFF</span>;
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">background-color</span>: <span className="text-pink-500">#000000</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">এখানে, সাদা রঙের টেক্সট কালো পটভূমিতে উচ্চ কনট্রাস্ট তৈরি করে।</p>
      </section>

      {/* Opacity */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. অস্বচ্ছতা</h2>
        <p>অস্বচ্ছতা একটি উপাদানের স্বচ্ছতা নির্ধারণ করে। এটি 0 (সম্পূর্ণ স্বচ্ছ) থেকে 1 (সম্পূর্ণ অপারিস) পর্যন্ত পরিমাপ করা হয়।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.opacity-example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">opacity</span>: <span className="text-pink-500">0.5</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">এখানে, <code>opacity: 0.5</code> উপাদানটিকে 50% অস্বচ্ছ করে তোলে।</p>
      </section>

      {/* RGBA and HSLA Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. RGBA এবং HSLA রঙ</h2>
        <p>RGBA এবং HSLA রঙ গাণিতিক রঙের সাথেও অস্বচ্ছতা নির্ধারণ করে।</p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.rgba-example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>: <span className="text-pink-500">rgba(255, 99, 71, 0.5)</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
              <br /><br />
              <span className="text-yellow-500">.hsla-example &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">color</span>: <span className="text-pink-500">hsla(120, 100%, 50%, 0.5)</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>
        <p className="mt-2">এখানে, <code>rgba(255, 99, 71, 0.5)</code> একটি টমেটো রঙের 50% অস্বচ্ছ সংস্করণ এবং <code>hsla(120, 100%, 50%, 0.5)</code> একটি সোনালী সবুজ রঙের 50% অস্বচ্ছ সংস্করণ তৈরি করে।</p>
      </section>

      {/* Cyan Color Variations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Cyan রঙের ভেরিয়েশন</h2>
        <p>নিচে সায়ান রঙের বিভিন্ন ভেরিয়েশন দেখানো হয়েছে:</p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-cyan-100 p-4 rounded-md text-center">Cyan 100</div>
          <div className="bg-cyan-200 p-4 rounded-md text-center">Cyan 200</div>
          <div className="bg-cyan-300 p-4 rounded-md text-center">Cyan 300</div>
          <div className="bg-cyan-400 p-4 rounded-md text-center">Cyan 400</div>
          <div className="bg-cyan-500 p-4 rounded-md text-center">Cyan 500</div>
          <div className="bg-cyan-600 p-4 rounded-md text-center">Cyan 600</div>
          <div className="bg-cyan-700 p-4 rounded-md text-center">Cyan 700</div>
          <div className="bg-cyan-800 p-4 rounded-md text-center">Cyan 800</div>
          <div className="bg-cyan-900 p-4 rounded-md text-center">Cyan 900</div>
        </div>
      </section>

      {/* Linear Gradients */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. লিনিয়ার গ্রেডিয়েন্ট</h2>
        <p>
          লিনিয়ার গ্রেডিয়েন্ট একটি গ্রেডিয়েন্ট যা দুটি বা ততোধিক রঙের মধ্যে একটি সরল রেখায় পরিবর্তিত হয়। এটি প্রায়ই ব্যাকগ্রাউন্ড, বোতাম, এবং ডিভাইডারগুলিতে আকর্ষণীয় ভিজ্যুয়াল ইফেক্ট তৈরির জন্য ব্যবহৃত হয়।
        </p>

        <h3 className="text-xl font-semibold mt-4">Example Project:</h3>
        <p className="mt-2">
          ধরুন, আপনি একটি কার্ড কম্পোনেন্ট তৈরি করছেন যেখানে ব্যাকগ্রাউন্ডে একটি লিনিয়ার গ্রেডিয়েন্ট প্রয়োগ করতে চান। এটি একটি কুপন কার্ড হতে পারে যা টমেটো রঙ থেকে সোনালী রঙে পরিবর্তিত হয়।
        </p>

        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.coupon-card &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">background</span>:{" "}
              <span className="text-pink-500">
                linear-gradient(to right, #FF6347, #FFD700);
              </span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">padding</span>:{" "}
              <span className="text-pink-500">20px</span>;
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">border-radius</span>:{" "}
              <span className="text-pink-500">10px</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>

        <p className="mt-2">
          <code>linear-gradient(to right, #FF6347, #FFD700)</code> একটি
          লিনিয়ার গ্রেডিয়েন্ট যা টমেটো রঙ থেকে সোনালী রঙে পরিবর্তিত হয়।
          কুপন কার্ডটির ব্যাকগ্রাউন্ডে এই গ্রেডিয়েন্টটি প্রয়োগ করলে এটি একটি
          আকর্ষণীয় ভিজ্যুয়াল ইফেক্ট তৈরি করবে।
        </p>

        <h3 className="text-xl font-semibold mt-4">Expected Output:</h3>
        <div className="coupon-card mt-4 text-white text-center">
          <h3 className="text-2xl font-bold">50% OFF</h3>
          <p>On all products</p>
        </div>
      </section>

      {/* Radial Gradients */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">11. রেডিয়াল গ্রেডিয়েন্ট</h2>
        <p>
          রেডিয়াল গ্রেডিয়েন্ট একটি গ্রেডিয়েন্ট যা একটি কেন্দ্র থেকে চারপাশে পরিবর্তিত হয়। এটি প্রায়ই ব্যাকগ্রাউন্ড এবং বাটনগুলিতে গভীরতা এবং মাত্রা যোগ করার জন্য ব্যবহৃত হয়।
        </p>

        <h3 className="text-xl font-semibold mt-4">Example Project:</h3>
        <p className="mt-2">
          ধরুন, আপনি একটি প্রোফাইল কার্ড তৈরি করছেন যেখানে ব্যাকগ্রাউন্ডে একটি রেডিয়াল গ্রেডিয়েন্ট প্রয়োগ করতে চান যা কেন্দ্র থেকে টমেটো রঙ থেকে সোনালী রঙে পরিবর্তিত হয়।
        </p>

        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-500">.profile-card &#123;</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">background</span>:{" "}
              <span className="text-pink-500">
                radial-gradient(circle, #FF6347, #FFD700);
              </span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">padding</span>:{" "}
              <span className="text-pink-500">30px</span>;
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">border-radius</span>:{" "}
              <span className="text-pink-500">50%</span>;
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">text-align</span>:{" "}
              <span className="text-pink-500">center</span>;
              <br />
              <span className="text-yellow-500">&#125;</span>
            </code>
          </pre>
        </div>

        <p className="mt-2">
          <code>radial-gradient(circle, #FF6347, #FFD700)</code> একটি রেডিয়াল
          গ্রেডিয়েন্ট যা কেন্দ্র থেকে টমেটো রঙ থেকে সোনালী রঙে পরিবর্তিত হয়।
          প্রোফাইল কার্ডের ব্যাকগ্রাউন্ডে এই গ্রেডিয়েন্টটি প্রয়োগ করলে এটি
          গভীরতা ও মাত্রা যোগ করবে।
        </p>

        <h3 className="text-xl font-semibold mt-4">Expected Output:</h3>
        <div className="profile-card mt-4 text-white">
          <h3 className="text-2xl font-bold">Jane Doe</h3>
          <p>Frontend Developer</p>
        </div>
      </section>
    </div>
  );
};

export default ColorAndBackground;
