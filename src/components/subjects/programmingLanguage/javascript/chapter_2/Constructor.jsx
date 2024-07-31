import React from "react";

const ConstructorTutorial = () => {
  // Code text for formatting
  const basicConstructor = `
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      greet() {
        console.log('Hello, my name is ' + this.name);
      }
    }
    const person1 = new Person('Alice', 30);
    person1.greet(); // Output: Hello, my name is Alice
  `;

  const constructorInheritance = `
    class Animal {
      constructor(name) {
        this.name = name;
      }
      speak() {
        console.log(this.name + ' makes a noise.');
      }
    }
    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }
      speak() {
        console.log(this.name + ' barks.');
      }
    }
    const dog1 = new Dog('Rex', 'Labrador');
    dog1.speak(); // Output: Rex barks.
  `;

  const defaultConstructor = `
    class Person {
      constructor(name = 'Unknown', age = 0) {
        this.name = name;
        this.age = age;
      }
    }
    const person1 = new Person();
    console.log(person1.name); // Output: Unknown
    console.log(person1.age); // Output: 0
  `;

  const constructorWithMethods = `
    class Rectangle {
      constructor(width, height) {
        this.width = width;
        this.height = height;
      }
      area() {
        return this.width * this.height;
      }
      perimeter() {
        return 2 * (this.width + this.height);
      }
    }
    const rect = new Rectangle(5, 10);
    console.log(rect.area()); // Output: 50
    console.log(rect.perimeter()); // Output: 30
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট কনস্ট্রাক্টর </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. বেসিক কনস্ট্রাক্টর</h2>
        <p>
          কনস্ট্রাক্টর হল একটি বিশেষ মেথড যা ক্লাসের নতুন অবজেক্ট তৈরি এবং ইনিশিয়ালাইজ করতে ব্যবহৃত হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Person {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">constructor</span>(name, age) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.name = name;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.age = age;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">greet</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">'Hello, my name is ' + this.name</span>);
              <br />
              &nbsp;&nbsp;{"}"}
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
        <h2 className="text-2xl font-semibold mb-2">২. ইনহেরিট্যান্স সহ কনস্ট্রাক্টর</h2>
        <p>
          কনস্ট্রাক্টর ইনহেরিট্যান্সে একটি ক্লাস অন্য ক্লাসের কনস্ট্রাক্টর ব্যবহার করতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Animal {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">constructor</span>(name) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.name = name;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">speak</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.name + ' makes a noise.'</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">class</span> Dog <span className="text-yellow-600">extends</span> Animal {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">constructor</span>(name, breed) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">super</span>(name);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.breed = breed;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">speak</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.name + ' barks.'</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> dog1 = <span className="text-yellow-600">new</span> Dog(<span className="text-green-300">'Rex'</span>, <span className="text-green-300">'Labrador'</span>);
              <br />
              <span className="text-yellow-600">dog1.speak</span>(); <span className="text-gray-500"> {/* Output: Rex barks. */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. ডিফল্ট কনস্ট্রাক্টর</h2>
        <p>
          কনস্ট্রাক্টরের প্যারামিটারগুলির ডিফল্ট মান প্রদান করা যেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Person {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">constructor</span>(name = <span className="text-green-300">'Unknown'</span>, age = <span className="text-green-300">0</span>) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.name = name;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.age = age;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> person1 = <span className="text-yellow-600">new</span> Person();
              <br />
              <span className="text-yellow-600">console.log</span>(person1.name); <span className="text-gray-500"> {/* Output: Unknown */}</span>
              <br />
              <span className="text-yellow-600">console.log</span>(person1.age); <span className="text-gray-500"> {/* Output: 0 */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">৪. কনস্ট্রাক্টরের সাথে মেথডস</h2>
        <p>
          কনস্ট্রাক্টরের মাধ্যমে ফাংশন এবং মেথডস সংজ্ঞায়িত করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Rectangle {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">constructor</span>(width, height) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.width = width;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.height = height;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">area</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">return</span> this.width * this.height;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">perimeter</span>() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">return</span> 2 * (this.width + this.height);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <span className="text-yellow-600">const</span> rect = <span className="text-yellow-600">new</span> Rectangle(<span className="text-green-300">5</span>, <span className="text-green-300">10</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(rect.area()); <span className="text-gray-500"> {/* Output: 50 */}</span>
              <br />
              <span className="text-yellow-600">console.log</span>(rect.perimeter()); <span className="text-gray-500"> {/* Output: 30 */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          কনস্ট্রাক্টর হল একটি বিশেষ মেথড যা নতুন অবজেক্ট তৈরির সময় ব্যবহার করা হয়। এটি অবজেক্টের প্রপার্টি এবং মেথড ইনিশিয়ালাইজ করতে সহায়ক।
        </p>
      </section>
    </div>
  );
};

export default ConstructorTutorial;
