import { useState } from "react";

const ObjectTutorial = () => {
  const [objectData, setObjectData] = useState({
    name: "redwan",
    age: 25,
    city: "Narsingdi",
    country: "Bangladesh",
  });
  const [text, setText] = useState("ফলাফল এখানে প্রদর্শিত হবে");
  const [changedItem, setChangedItem] = useState(null);

  const objectMethodList = [
    `Object.keys()`,
    `Object.values()`,
    `Object.entries()`,
    `Object.assign()`,
    `delete obj.propertyname`,
    `hasOwnProperty()`,
    `Object.freeze()`,
    `Object.seal()`,
    `Object.is()`,
    `Object.create()`,
  ];

  const objectEntries = (obj) => {
    return Object.keys(obj).map(key => [key, obj[key]]);
  };

  const keysMethod = () => {
    const keys = Object.keys(objectData);
    setChangedItem(keys);
    setText(`অবজেক্টের কী গুলো প্রদর্শন করে`);
  };

  const valuesMethod = () => {
    const values = Object.values(objectData);
    setChangedItem(values);
    setText(`অবজেক্টের মান গুলো প্রদর্শন করে`);
  };

  const entriesMethod = () => {
    const entries = objectEntries(objectData);
    setChangedItem(entries.map(entry => entry.join(': ')).join(', '));
    setText(`অবজেক্টের key-value জোড়া গুলো প্রদর্শন করে: `);
  };

  const assignMethod = () => {
    const newObj = { ...objectData, occupation: "Engineer" };
    setObjectData(newObj);
    setChangedItem("occupation: Engineer");
    setText(`অবজেক্টে একটি নতুন প্রপার্টি যোগ করে`);
  };

  const deleteMethod = () => {
    const updatedObj = { ...objectData };
    delete updatedObj.city;
    setObjectData(updatedObj);
    setChangedItem("city");
    setText(`'city' প্রপার্টি অবজেক্ট থেকে রিমুভ করে  ফেলে।`);
  };

  const hasOwnPropertyMethod = () => {
    const hasAge = objectData.hasOwnProperty("age");
    setChangedItem(hasAge ? "Yes" : "No");
    setText(`অবজেক্টের 'age' প্রপার্টি আছে কিনা তা যাচাই করে।`);
  };

  const freezeMethod = () => {
    Object.freeze(objectData);
    setChangedItem("অবজেক্ট ফ্রিজ করা হয়েছে");
    setText(`অবজেক্টে কোনো পরিবর্তন করতে বাধা দেয়।`);
  };

  const sealMethod = () => {
    Object.seal(objectData);
    setChangedItem("অবজেক্ট সিল করা হয়েছে");
    setText(`অবজেক্টে প্রপার্টি যোগ বা রিমুভ করা  যাবে না কিন্তু প্রপার্টি পরিবর্তন করা যাবে।`);
  };

  const isMethod = () => {
    const isSame = Object.is(objectData.name, "Redwan");
    setChangedItem(isSame ? "Yes" : "No");
    setText(`অবজেক্টের 'name' প্রপার্টি 'Redwan' কিনা তা যাচাই করে।`);
  };

  const createMethod = () => {
    const newObj = Object.create(objectData);
    newObj.newProperty = "New Value";
    setChangedItem("newProperty: New Value");
    setText(`'objectData' প্রোটোটাইপ হিসেবে ব্যবহার করে একটি নতুন অবজেক্ট তৈরি করে।`);
  };

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট অবজেক্ট </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">অবজেক্ট ডিক্লেয়ারেশন</h2>
        <p>
          অবজেক্টগুলি key-value জোড়া হিসেবে ডেটা স্টোর করার জন্য ব্যবহৃত হয়। এটি এমন একটি ডেটা স্ট্রাকচার যা আপনাকে বিভিন্ন প্রোপার্টি এবং মান সংগ্রহ করতে সহায়ক। নিচে কিছু উদাহরণ দেওয়া হলো:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              const person = {`{`}
              <br />
              &nbsp;&nbsp;name: "Redwan",
              <br />
              &nbsp;&nbsp;age: 25,
              <br />
              &nbsp;&nbsp;city: "Narsingdi",
              <br />
              &nbsp;&nbsp;country: "Bangladesh"
              <br />
              {`}`};
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">অবজেক্ট অ্যাকসেস পদ্ধতি</h2>
        <p>
          অবজেক্ট থেকে আইটেম অ্যাকসেস করার দুটি পদ্ধতি রয়েছে:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              ডট নোটেশন: person.name <br />
              ব্র্যাকেট নোটেশন: person["name"]
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">অবজেক্ট মেথড</h2>
        <p>
          বিভিন্ন অবজেক্ট মেথডগুলি ব্যবহার করে অবজেক্ট পরিচালনা করা যায়। নিচে কিছু গুরুত্বপূর্ণ মেথডের উদাহরণ দেওয়া হলো:
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              Object.keys(person) - কী সমূহ পেতে <br />
              Object.values(person) - মান সমূহ পেতে <br />
              Object.entries(person) - key-value জোড়া পেতে <br />
              Object.assign(target, source) - অবজেক্ট মার্জ করতে <br />
              delete person.age - প্রপার্টি remove করতে  <br />
              person.hasOwnProperty("name") - প্রপার্টি আছে কিনা যাচাই করতে <br />
              Object.freeze(person) - অবজেক্ট ফ্রিজ করতে <br />
              Object.seal(person) - অবজেক্ট সিল করতে <br />
              Object.is(value1, value2) - দুটি মান তুলনা করতে <br />
              Object.create(proto) - নতুন অবজেক্ট তৈরি করতে
            </code>
          </pre>
        </div>
      </section>

      <div className="flex flex-col h-auto p-4">
        <div className="flex flex-col items-center mb-4">
          <div className="text-cyan-600 text-xl md:text-3xl">অবজেক্ট ডেটা:</div>
          <div className="w-full md:w-1/2 bg-slate-950 shadow-lg rounded-lg p-4 border border-gray-300 mt-2">
            {Object.entries(objectData).map(([key, value]) => (
              <div key={key} className="mb-2">
                <div className="font-bold text-lg text-teal-600">{key}:</div>
                <div className="ml-4 text-gray-700">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mb-4">
          <h3 className="text-teal-500 text-2xl">ফলাফল:</h3>
          <p className="text-red-500 text-2xl">
            {changedItem == null ? "" : `${changedItem}`}
            <span className="text-white text-xl">{text}</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-teal-500 text-center mb-4">অবজেক্ট অপারেশন করুন</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {objectMethodList.map((curMethod, index) => (
              <div
                className="text-white bg-slate-500 rounded-sm flex_center text-sm md:text-base w-full py-2 text-center cursor-pointer"
                key={index}
                onClick={() => {
                  switch (index) {
                    case 0:
                      keysMethod();
                      break;
                    case 1:
                      valuesMethod();
                      break;
                    case 2:
                      entriesMethod();
                      break;
                    case 3:
                      assignMethod();
                      break;
                    case 4:
                      deleteMethod();
                      break;
                    case 5:
                      hasOwnPropertyMethod();
                      break;
                    case 6:
                      freezeMethod();
                      break;
                    case 7:
                      sealMethod();
                      break;
                    case 8:
                      isMethod();
                      break;
                    case 9:
                      createMethod();
                      break;
                    default:
                      break;
                  }
                }}
              >
                {curMethod}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectTutorial;
