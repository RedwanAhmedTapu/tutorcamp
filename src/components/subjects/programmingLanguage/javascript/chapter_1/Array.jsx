import { useState } from "react";

const Array = () => {
  const [arrayList, setArrayList] = useState([
    "Apple",
    "Orange",
    "Mango",
    "Lichi",
    "Banana",
    "Guava",
    "Grape",
  ]);
  const [text, setText] = useState("ফলাফল এখানে দেখাবে");
  const [changedItem, setChangedItem] = useState(null);

  const ArrayMethodList = [
    { method: "pop()", description: "শেষ উপাদানটি রিমুভ করে" },
    { method: `push("olive")`, description: "শেষে একটি উপাদান যোগ করে" },
    { method: "shift()", description: "প্রথম উপাদানটি রিমুভ দেয়" },
    { method: `unshift("chilli")`, description: "শুরুর দিকে একটি উপাদান যোগ করে" },
    { method: "slice(2,4)", description: "নির্দিষ্ট অংশ কেটে আনে এবং মূল অ্যারে এর কোন পরিবর্তন করে না" },
    { method: "splice(2,4)", description: "নির্দিষ্ট অংশ রিমুভ করে এবং মূল অ্যারে এর পরিবর্তন করে। যেমন এখানে startingIndex 2 আর কতগুলো উপাদান কাটতে হবে তা হল 4| তাই এটি ইনডেক্স ২ থেকে মোট চারটি উপদান কাতবে।  " },
    { method: "slice(4)", description: "চারটি উপাদানের পরে কেটে আনে" },
    { method: "splice(4)", description: "এটি চার নম্বর ইনডেক্স থেকে শুরু করে পরবর্তী সব কেটে নিবে" },
    { method: `arr[3]="Coconut"`, description: "তৃতীয় ইনডেক্স এর  উপাদানটি পরিবর্তন করে" },
    { method: `indexOf("Mango")`, description: "Mango উপদানটির  ইন্ডেক্স খুঁজে আনে" },
    { method: `indexOf("Rose")`, description: "Rose উপদানটির ইন্ডেক্স খুঁজে আনে (না পাওয়া গেলে -1 return করে )" },
  ];

  const updateArray = () => {
    arrayList[3] = "Coconut";
    setChangedItem(arrayList[3]);
    setText(` তৃতীয় উপাদান পরিবর্তন করে। অর্থাৎ তৃতীয় উপাদান আপডেট করা হয়েছে।`);
  };

  const popMethod = (prevArrayList) => {
    if (prevArrayList.length > 0) {
      const updatedItem = prevArrayList.slice(0, prevArrayList.length - 1);
      setArrayList(updatedItem);
      setChangedItem(`${prevArrayList.pop()}`);
      setText(` শেষ উপাদানটি রিমুভ করা  হয়েছে। অর্থাৎ pop() শেষ উপাদানটি রিমুভ করে `);
    } else {
      setText("কোনও আইটেম নেই  রিমুভ করার মত ");
    }
  };

  const pushMethod = () => {
    setArrayList((prev) => [...prev, "olive"]);
    setChangedItem(`olive`);
    setText(` শেষের দিকে যোগ করা হয়েছে। অর্থাৎ push("olive") শেষের দিকে একটি উপাদান যোগ করে।`);
  };

  const shiftMethod = (prevArrayList) => {
    if (prevArrayList.length > 0) {
      const updatedItem = prevArrayList.slice(1);
      setArrayList(updatedItem);
      setChangedItem(`${prevArrayList.shift()}`);
      setText(` প্রথম উপাদানটি  রিমুভ করা  হয়েছে। অর্থাৎ shift() প্রথম উপাদানটি রিমুভ করে `);
    } else {
      setText("কোনও আইটেম নেই রিমুভ করার মত ");
    }
  };

  const unshiftMethod = () => {
    setArrayList((prev) => ["chilli", ...prev]);
    setChangedItem(`chilli`);
    setText(` শুরুর দিকে যোগ করা হয়েছে। অর্থাৎ unshift("chilli") শুরুর দিকে একটি উপাদান যোগ করে।`);
  };

  const sliceMethod = (prevArrayList) => {
    if (prevArrayList.length > 2) {
      const slicedList = prevArrayList.slice(2, 4);
      setArrayList(prevArrayList);
      setChangedItem(slicedList);
      setText(` মূল অ্যারে থেকে কেটে আনা হয়েছে। slice(2,4) ইন্ডেক্স ২ থেকে ৩ পর্যন্ত উপাদানগুলো কেটে আনে।`);
    } else {
      setChangedItem("");
      setText(` কেটে নেওয়ার জন্য অ্যারেতে যথেষ্ট উপাদান নেই।`);
    }
  };

  const spliceMethod = (prevArrayList) => {
    if (prevArrayList.length >= 6) {
      const splicedList = prevArrayList.splice(2, 4);
      setArrayList(prevArrayList);
      setChangedItem(splicedList);
      setText(` মূল অ্যারে থেকে সরিয়ে দেওয়া হয়েছে। splice(2,4) ইন্ডেক্স ২ থেকে ৪টি উপাদান সরিয়ে দেয়।`);
    } else {
      setChangedItem(``);
      setText(`এখন এই পদ্ধতি ব্যবহার করা যাবে না। অ্যারেটির length যথেষ্ট  নয় ৪টি উপাদান সরানোর জন্য।`);
    }
  };

  const sliceMethod_2 = () => {
    setArrayList(listOfFruits);
  };

  const spliceMethod_2 = (prevArrayList) => {
    if (prevArrayList.length > 4) {
      const splicedData = prevArrayList.splice(4);
      setArrayList(prevArrayList);
      setChangedItem(splicedData);
      setText(` মূল অ্যারে থেকে সরিয়ে দেওয়া হয়েছে। splice(startIndex) স্টার্ট ইনডেক্স থেকে পরবর্তী সব  উপাদান সরিয়ে দেয়।`);
    } else {
      setChangedItem("");
      setText(` ইন্ডেক্স ৪ থেকে সরানোর জন্য অ্যারেতে যথেষ্ট উপাদান নেই।`);
    }
  };

  const indexOfMethod = () => {
    const index = arrayList.indexOf("Mango");
    setChangedItem(index);
    setText(` যা Mango উপাদানটির  ইন্ডেক্স।`);
  };

  const indexOfMethod_2 = () => {
    const index = arrayList.indexOf("Rose");
    setChangedItem(index);
    setText(`  রিটার্ন  হয়েছে কারণ অ্যারেতে কোনও উপাদান Rose নামে নেই।`);
  };

  return (
    <>
      <div className="flex flex-col h-auto p-4">
      <h1 className="text-3xl  text-white font-bold mb-4">জাভাস্ক্রিপ্ট অ্যারে  </h1>

        <div className="flex flex-col md:flex-row md:items-center">
          <div className="text-cyan-600 text-lg md:text-2xl mb-2 md:mb-0">Items:</div>
          <div className="flex flex-col md:h-28 md:flex-row md:flex-wrap space-y-2 md:space-y-0 md:space-x-2">
            {arrayList.map((curList, index) => (
              <div key={index} className="flex items-center bg-violet-50 p-2 rounded-md shadow-md w-full md:w-32 h-12 text-sm md:text-base">
                <div className="bg-teal-700 h-full w-2/3 flex items-center justify-center text-white rounded-l-md">
                  {curList}
                </div>
                <div className="bg-white h-full w-1/3 flex items-center justify-center rounded-r-md">
                  {index}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 md:mt-2">
          <h3 className="text-teal-500 text-lg md:text-xl">Result:</h3>
          <p className="text-red-500 text-base md:text-lg">
            {changedItem == "undefined" || changedItem == null ? "" : `${changedItem}`}
            <span className="text-white text-base md:text-lg">{text}</span>
          </p>
        </div>
        
        <div className="mt-4 md:mt-2">
          <h3 className="text-teal-500 text-lg md:text-xl text-center">Perform Array Operation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {ArrayMethodList.map((curMethod, index) => (
              <div
                className="bg-slate-500 text-white rounded-md flex items-center justify-center h-10 text-xs md:text-sm cursor-pointer"
                key={index}
                onClick={() => {
                  switch (index) {
                    case 0:
                      popMethod(arrayList);
                      break;
                    case 1:
                      pushMethod();
                      break;
                    case 2:
                      shiftMethod(arrayList);
                      break;
                    case 3:
                      unshiftMethod();
                      break;
                    case 4:
                      sliceMethod(arrayList);
                      break;
                    case 5:
                      spliceMethod(arrayList);
                      break;
                    case 6:
                      sliceMethod_2();
                      break;
                    case 7:
                      spliceMethod_2(arrayList);
                      break;
                    case 8:
                      updateArray();
                      break;
                    case 9:
                      indexOfMethod();
                      break;
                    default:
                      indexOfMethod_2();
                      break;
                  }
                }}
              >
                {curMethod.method}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 ">
          <h3 className="text-teal-500 text-lg md:text-xl">Array Method Descriptions:</h3>
          <table className="min-w-full bg-slate-950 border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Method</th>
                <th className="px-4 py-2 border-b-2 text-teal-600 border-gray-200 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {ArrayMethodList.map((methodObj, index) => (
                <tr key={index} className="hover:bg-gray-600">
                  <td className="px-4 py-2 border-b text-white border-gray-200">{methodObj.method}</td>
                  <td className="px-4 py-2 border-b text-white border-gray-200">{methodObj.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Array;
