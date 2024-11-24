import React, { useState } from "react";
import { FiEye, FiCopy, FiCheck } from "react-icons/fi";

const CSSAnimations = () => {
  const [showCode, setShowCode] = useState(null);
  const [toggleEye, setToggleEye] = useState(false);
  const [copied, setCopied] = useState(null);

  const handleToggleCode = (index) => {
    setShowCode(showCode === index ? null : index);
    setToggleEye(!toggleEye);
  };

  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopied(index);
    setTimeout(() => {
      setCopied(null);
      setShowCode(null);
      setToggleEye(!toggleEye);
    }, 1000); // Reset after 2 seconds
  };
  const sections = [
    {
      title: "1. CSS Animation কি?",
      content:
        "CSS Animation হল এমন একটি টুল, যা একটি উপাদানকে সময়ের সাথে সাথে স্টাইল পরিবর্তন করতে দেয়। এর সাহায্যে উপাদানকে আকর্ষণীয় করে তোলা যায়।",
      code: `@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 2s ease-in-out;
}`,
    },
    {
      title: "2. Keyframes কীভাবে কাজ করে?",
      content:
        "CSS Animation এর জন্য @keyframes ব্যবহার করে কোন উপাদান কিভাবে পরিবর্তন হবে তা নির্ধারণ করা হয়।",
      code: `@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}`,
    },
    {
      title: "3. Animation Property",
      content:
        "`animation` প্রপার্টি একটি CSS Animation চালাতে সাহায্য করে। এর সাথে আপনি ডিউরেশন, টাইমিং ফাংশন, ডিলে ইত্যাদি সেট করতে পারেন।",
      code: `.element {
  animation: bounce 1s infinite;
}`,
    },
    {
      title: "4. Animation Properties Explanation",
      content: `
      - **animation-name**: @keyframes এ নির্দিষ্ট নাম।
      - **animation-duration**: অ্যানিমেশন কত সময় ধরে চলবে (যেমন: 2s, 500ms)।
      - **animation-timing-function**: অ্যানিমেশনটি কিভাবে চলবে (যেমন: ease, linear)।
      - **animation-delay**: অ্যানিমেশনটি শুরু হওয়ার আগে কতক্ষণ অপেক্ষা করবে।
      - **animation-iteration-count**: অ্যানিমেশনটি কতবার চলবে (যেমন: infinite)।
      - **animation-direction**: অ্যানিমেশনটি কিভাবে চলবে (যেমন: reverse)।`,
    },
  ];

  const examples = [
    {
      title: "Fade In Animation",
      code: `@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in-box {
  animation: fadeIn 3s ease-in-out infinite;
}`,
      animationClass: "fade-in-box",
      boxStyle: "w-24 h-24 bg-indigo-500 rounded-lg",
    },
    {
      title: "Bounce Animation",
      code: `@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}
.bounce-box {
  animation: bounce 1s infinite;
}`,
      animationClass: "bounce-box",
      boxStyle: "w-24 h-24 bg-green-500 rounded-lg",
    },
    {
      title: "Rotate Animation",
      code: `@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotate-box {
  animation: rotate 2s linear infinite;
}`,
      animationClass: "rotate-box",
      boxStyle: "w-24 h-24 bg-red-500 rounded-lg",
    },
    {
      title: "Loader Animation",
      code: `@keyframes loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loader-circle {
  animation: loader 2s linear infinite;
  border-top: 4px solid transparent;
  border-right: 4px solid white;
  border-bottom: 4px solid white;
  border-left: 4px solid white;
}`,
      animationClass: "loader-circle",
      boxStyle:
        "w-24 h-24 border-4 border-white border-t-transparent rounded-full",
    },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="mb-4">{section.content}</p>
          {section.code && (
            <pre className="bg-slate-800 text-pink-300 p-4 rounded-md shadow-md mb-4">
              {section.code}
            </pre>
          )}
        </section>
      ))}
      <h3 className="text-2xl font-semibold mb-4">প্রাকটিক্যাল উদাহরণ</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {examples.map((example, index) => (
          <div
            key={index}
            className="relative example p-6 rounded-lg bg-gray-800"
          >
            <h4 className="text-lg mb-4">{example.title}</h4>
            <div
              className={`${example.animationClass} ${example.boxStyle}`}
            ></div>

            {/* Eye and Copy Icons */}
            <div className="absolute top-2 right-2 flex space-x-2">
              {!toggleEye ? (
                <button
                  onClick={() => handleToggleCode(index)}
                  className="text-white hover:text-gray-400"
                >
                  <FiEye size={20} />
                </button>
              ) : (
                <button
                  onClick={() => handleCopyCode(example.code, index)}
                  className="text-white hover:text-gray-400"
                >
                  {copied === index ? (
                    <FiCheck size={20} />
                  ) : (
                    <FiCopy size={20} />
                  )}
                </button>
              )}
            </div>

            {/* Code block */}
            {showCode === index && (
              <pre className="mt-4 bg-slate-800 text-pink-300 p-4 rounded-md shadow-md">
                {example.code}
              </pre>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .fade-in-box {
          animation: fadeIn 3s ease-in-out infinite;
        }

        /* Bounce Animation */
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        .bounce-box {
          animation: bounce 1s infinite;
        }

        /* Rotate Animation */
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-box {
          animation: rotate 2s linear infinite;
        }

        /* Loader Animation */
        @keyframes loader {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .loader-circle {
          animation: loader 2s linear infinite;
          border-top: 4px solid transparent;
          border-right: 4px solid white;
          border-bottom: 4px solid white;
          border-left: 4px solid white;
        }
      `}</style>
    </div>
  );
};

export default CSSAnimations;
