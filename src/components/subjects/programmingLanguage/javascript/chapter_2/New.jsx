import React from "react";

const NewKeywordTutorial = () => {
  // Code text for formatting
  const basicNewExample = `
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    Person.prototype.greet = function() {
      console.log('Hello, my name is ' + this.name);
    };
    const person1 = new Person('Alice', 30);
    person1.greet(); // Output: Hello, my name is Alice
  `;

  const newClassExample = `
    class Car {
      constructor(make, model) {
        this.make = make;
        this.model = model;
      }
      displayInfo() {
        console.log('Car: ' + this.make + ' ' + this.model);
      }
    }
    const car1 = new Car('Toyota', 'Corolla');
    car1.displayInfo(); // Output: Car: Toyota Corolla
  `;

  const newWithErrorExample = `
    function Bike(type) {
      this.type = type;
    }
    const bike1 = new Bike('Mountain');
    <span className="text-red-600">// Error: TypeError: Bike is not a constructor</span>
    // const bike2 = Bike('Road'); // Uncommenting this line will throw an error because Bike() is not used with 'new'
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট নিউ কীওয়ার্ড </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. বেসিক নিউ এক্সাম্পল</h2>
        <p>
          <code>new</code> কীওয়ার্ড ব্যবহার করে নতুন অবজেক্ট তৈরি করা হয় যা কনস্ট্রাক্টর ফাংশন দ্বারা ইনিশিয়ালাইজ করা হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> Person(name, age) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">this</span>.name = name;
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">this</span>.age = age;
              <br />
              {"}"}
              <br />
              Person.<span className="text-yellow-600">prototype.greet</span> = function() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">'Hello, my name is ' + this.name</span>);
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> person1 = <span className="text-yellow-600">new</span> Person(<span className="text-green-300">'Alice'</span>, <span className="text-green-300">30</span>);
              <br />
              <span className="text-yellow-600">person1.greet</span>(); <span className="text-gray-500"> {/* Output: Hello, my name is Alice */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. ক্লাসের সাথে নিউ</h2>
        <p>
          ক্লাসের সাথে <code>new</code> কীওয়ার্ড ব্যবহার করে নতুন অবজেক্ট তৈরি করা হয় যা কনস্ট্রাক্টর দ্বারা ইনিশিয়ালাইজ করা হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Car {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">constructor</span>(make, model) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.make = make;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.model = model;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">displayInfo</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">'Car: ' + this.make + ' ' + this.model</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> car1 = <span className="text-yellow-600">new</span> Car(<span className="text-green-300">'Toyota'</span>, <span className="text-green-300">'Corolla'</span>);
              <br />
              <span className="text-yellow-600">car1.displayInfo</span>(); <span className="text-gray-500"> {/* Output: Car: Toyota Corolla */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. নিউ এরর এক্সাম্পল</h2>
        <p>
          <code>new</code> কীওয়ার্ড ব্যবহার না করলে ত্রুটি ঘটতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> Bike(type) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">this</span>.type = type;
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> bike1 = <span className="text-yellow-600">new</span> Bike(<span className="text-green-300">'Mountain'</span>);
              <br />
              <span className="text-red-600">// Error: TypeError: Bike is not a constructor</span>
              <br />
              {/* <span className="text-yellow-600">const</span> bike2 = Bike(<span className="text-green-300">'Road'</span>); // Uncommenting this line will throw an error */}
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          <code>new</code> কীওয়ার্ড নতুন অবজেক্ট তৈরি করতে ব্যবহৃত হয় যা কনস্ট্রাক্টর ফাংশন বা ক্লাসের মাধ্যমে ইনিশিয়ালাইজ হয়। এটি অবজেক্টের প্রোটোটাইপ সেট করে এবং কনস্ট্রাক্টর ফাংশন চালায়।
        </p>
      </section>
    </div>
  );
};

export default NewKeywordTutorial;
