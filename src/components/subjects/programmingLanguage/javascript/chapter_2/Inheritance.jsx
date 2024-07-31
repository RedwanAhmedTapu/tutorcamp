import React from "react";

const InheritanceTutorial = () => {
  // Code text for formatting
  const inheritanceES5 = `
    function Animal(name) {
      this.name = name;
    }
    Animal.prototype.speak = function() {
      console.log(this.name + ' makes a noise.');
    };

    function Dog(name, breed) {
      Animal.call(this, name); // Call the parent constructor
      this.breed = breed;
    }
    Dog.prototype = Object.create(Animal.prototype); // Set the prototype
    Dog.prototype.constructor = Dog;

    Dog.prototype.speak = function() {
      console.log(this.name + ' barks.');
    };

    const dog1 = new Dog('Rex', 'German Shepherd');
    dog1.speak(); // Output: Rex barks.
  `;

  const inheritanceES6 = `
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
        super(name); // Call the parent constructor
        this.breed = breed;
      }
      speak() {
        console.log(this.name + ' barks.');
      }
    }

    const dog1 = new Dog('Rex', 'German Shepherd');
    dog1.speak(); // Output: Rex barks.
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট ইনহেরিটেন্স </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">১. ইনহেরিটেন্স কী?</h2>
        <p>
          ইনহেরিটেন্স হল এমন একটি প্রক্রিয়া যার মাধ্যমে একটি ক্লাস অন্য একটি ক্লাসের প্রোপার্টি এবং মেথডগুলিকে উত্তরাধিকার সূত্রে পায়। এটি কোড পুনঃব্যবহারযোগ্যতা এবং শ্রেণি সম্পর্ক স্থাপনে সহায়ক।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">২. ES5 ইনহেরিটেন্স</h2>
        <p>
          ES5 এ, ইনহেরিটেন্স কনস্ট্রাক্টর ফাংশন এবং প্রোটোটাইপ চেইন ব্যবহার করে সম্পন্ন হয়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">function</span> Animal(name) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">this</span>.name = name;
              <br />
              {"}"}
              <br />
              Animal.<span className="text-yellow-600">prototype.speak</span> = <span className="text-yellow-600">function</span>() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.name + ' makes a noise.'</span>);
              <br />
              {"}"}
              <br /><br />
              <span className="text-yellow-600">function</span> Dog(name, breed) {"{"}
              <br />
              &nbsp;&nbsp;Animal.<span className="text-yellow-600">call</span>(<span className="text-yellow-500">this</span>, name); <span className="text-gray-500">// Call the parent constructor</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">this</span>.breed = breed;
              <br />
              {"}"}
              <br />
              Dog.<span className="text-yellow-600">prototype</span> = <span className="text-yellow-600">Object.create</span>(Animal.prototype); <span className="text-gray-500">// Set the prototype</span>
              <br />
              Dog.<span className="text-yellow-600">prototype.constructor</span> = Dog;
              <br /><br />
              Dog.<span className="text-yellow-600">prototype.speak</span> = <span className="text-yellow-600">function</span>() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.name + ' barks.'</span>);
              <br />
              {"}"}
              <br /><br />
              <span className="text-yellow-600">const</span> dog1 = <span className="text-yellow-600">new</span> Dog(<span className="text-green-300">'Rex'</span>, <span className="text-green-300">'German Shepherd'</span>);
              <br />
              <span className="text-yellow-600">dog1.speak</span>(); <span className="text-gray-500"> {/* Output: Rex barks. */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">৩. ES6 ইনহেরিটেন্স</h2>
        <p>
          ES6 এ, ইনহেরিটেন্স ক্লাস এবং এক্সটেন্ডস কীওয়ার্ড ব্যবহার করে সম্পন্ন হয়।
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
              &nbsp;&nbsp;speak() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.name + ' makes a noise.'</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br /><br />
              <span className="text-yellow-600">class</span> Dog <span className="text-yellow-600">extends</span> Animal {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-600">constructor</span>(name, breed) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">super</span>(name); <span className="text-gray-500">// Call the parent constructor</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">this</span>.breed = breed;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;speak() {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">console.log</span>(<span className="text-yellow-500">this.name + ' barks.'</span>);
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br /><br />
              <span className="text-yellow-600">const</span> dog1 = <span className="text-yellow-600">new</span> Dog(<span className="text-green-300">'Rex'</span>, <span className="text-green-300">'German Shepherd'</span>);
              <br />
              <span className="text-yellow-600">dog1.speak</span>(); <span className="text-gray-500"> {/* Output: Rex barks. */}</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">summary</h2>
        <p>
          ইনহেরিটেন্স হল একটি গুরুত্বপূর্ণ বৈশিষ্ট্য যা কোড পুনঃব্যবহারযোগ্যতা এবং শ্রেণি সম্পর্ক স্থাপনে সহায়ক। ES5 এ এটি কনস্ট্রাক্টর ফাংশন এবং প্রোটোটাইপ চেইন ব্যবহার করে সম্পন্ন হয় এবং ES6 এ ক্লাস এবং এক্সটেন্ডস কীওয়ার্ড ব্যবহার করে।
        </p>
      </section>
    </div>
  );
};

export default InheritanceTutorial;
