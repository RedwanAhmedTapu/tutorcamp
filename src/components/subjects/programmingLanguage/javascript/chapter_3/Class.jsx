import React from "react";

const ClassTutorial = () => {
    const name="John"
  // Code text for formatting
  const basicClassExample = `
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      
      greet() {
        return \`Hello, my name is \${this.name}\`;
      }
    }
    
    const person = new Person("John", 30);
    console.log(person.greet()); // Output: Hello, my name is John
  `;

  const inheritanceExample = `
    class Animal {
      constructor(name) {
        this.name = name;
      }
      
      speak() {
        return \`The \${this.name} makes a noise.\`;
      }
    }
    
    class Dog extends Animal {
      speak() {
        return \`The \${this.name} barks.\`;
      }
    }
    
    const dog = new Dog("Rover");
    console.log(dog.speak()); // Output: The Rover barks.
  `;

  const staticMethodExample = `
    class MathHelper {
      static add(a, b) {
        return a + b;
      }
    }
    
    console.log(MathHelper.add(5, 10)); // Output: 15
  `;

  const getterSetterExample = `
    class Person {
      constructor(name, age) {
        this._name = name;
        this._age = age;
      }
      
      get name() {
        return this._name;
      }
      
      set name(value) {
        this._name = value;
      }
      
      get age() {
        return this._age;
      }
      
      set age(value) {
        if (value > 0) this._age = value;
      }
    }
    
    const person = new Person("John", 30);
    console.log(person.name); // Output: John
    person.age = 35;
    console.log(person.age); // Output: 35
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট ক্লাস </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. ক্লাস কী?</h2>
        <p>
          ক্লাস হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের (OOP) ধারণা উপলব্ধি করতে সাহায্য করে। এটি অবজেক্ট তৈরি করার একটি শুদ্ধ এবং আধুনিক পদ্ধতি।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. বেসিক ক্লাস উদাহরণ</h2>
        <p>
          একটি ক্লাস কিভাবে তৈরি করতে হয় এবং এটি কিভাবে ব্যবহার করা হয় তার একটি মৌলিক উদাহরণ।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Person {'{'}
              <br />
                <span className="text-yellow-600">constructor</span>(name, age) {'{'}
                <br />
                  <span className="text-yellow-600">this</span>.name = name;
                  <br />
                  <span className="text-yellow-600">this</span>.age = age;
                <br />
                {'}'}
                <br />
                <span className="text-yellow-600">greet</span>() {'{'}
                <br />
                  <span className="text-yellow-600">return</span> \`Hello, my name is \${name}\`;
                <br />
                {'}'}
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">const</span> person = <span className="text-yellow-600">new</span> Person(<span className="text-yellow-500">"John"</span>, <span className="text-yellow-500">30</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(person.greet()); <span className="text-gray-500">// Output: Hello, my name is John</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. ইনহেরিট্যান্স (উত্তরাধিকার)</h2>
        <p>
          ক্লাস ইনহেরিট্যান্সের মাধ্যমে একটি ক্লাস অন্য ক্লাস থেকে বৈশিষ্ট্য এবং পদ্ধতি উত্তরাধিকার সূত্রে পেতে পারে।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Animal {'{'}
              <br />
                <span className="text-yellow-600">constructor</span>(name) {'{'}
                <br />
                  <span className="text-yellow-600">this</span>.name = name;
                <br />
                {'}'}
                <br />
                <span className="text-yellow-600">speak</span>() {'{'}
                <br />
                  <span className="text-yellow-600">return</span> \`The \${name} makes a noise.\`;
                <br />
                {'}'}
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">class</span> Dog <span className="text-yellow-600">extends</span> Animal {'{'}
              <br />
                <span className="text-yellow-600">speak</span>() {'{'}
                <br />
                  <span className="text-yellow-600">return</span> \`The \${name} barks.\`;
                <br />
                {'}'}
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">const</span> dog = <span className="text-yellow-600">new</span> Dog(<span className="text-yellow-500">"Rover"</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(dog.speak()); <span className="text-gray-500">// Output: The Rover barks.</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. স্ট্যাটিক মেথড</h2>
        <p>
          স্ট্যাটিক মেথডগুলি ক্লাসের ইনস্ট্যান্স তৈরি না করেও কল করা যায়।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> MathHelper {'{'}
              <br />
                <span className="text-yellow-600">static</span> add(a, b) {'{'}
                <br />
                  <span className="text-yellow-600">return</span> a + b;
                <br />
                {'}'}
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">console.log</span>(MathHelper.add(<span className="text-yellow-500">5</span>, <span className="text-yellow-500">10</span>)); <span className="text-gray-500">// Output: 15</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. গেটার এবং সেটার</h2>
        <p>
          গেটার এবং সেটার মেথড ব্যবহার করে প্রোপার্টির মান নিয়ন্ত্রণ করতে পারেন।
        </p>
        <div className="bg-gray-900 p-4 rounded-md mt-2">
          <pre>
            <code className="whitespace-pre-line">
              <span className="text-yellow-600">class</span> Person {'{'}
              <br />
                <span className="text-yellow-600">constructor</span>(name, age) {'{'}
                <br />
                  <span className="text-yellow-600">this</span>._name = name;
                  <br />
                  <span className="text-yellow-600">this</span>._age = age;
                <br />
                {'}'}
                <br />
                <span className="text-yellow-600">get</span> name() {'{'}
                <br />
                  <span className="text-yellow-600">return</span> <span className="text-yellow-600">this</span>._name;
                <br />
                {'}'}
                <br />
                <span className="text-yellow-600">set</span> name(value) {'{'}
                <br />
                  <span className="text-yellow-600">this</span>._name = value;
                <br />
                {'}'}
                <br />
                <span className="text-yellow-600">get</span> age() {'{'}
                <br />
                  <span className="text-yellow-600">return</span> <span className="text-yellow-600">this</span>._age;
                <br />
                {'}'}
                <br />
                <span className="text-yellow-600">set</span> age(value) {'{'}
                <br />
                  <span className="text-yellow-600">if</span> (value > <span className="text-yellow-500">0</span>) <span className="text-yellow-600">this</span>._age = value;
                <br />
                {'}'}
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">const</span> person = <span className="text-yellow-600">new</span> Person(<span className="text-yellow-500">"John"</span>, <span className="text-yellow-500">30</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(person.name); <span className="text-gray-500">// Output: John</span>
              <br />
              person.age = <span className="text-yellow-500">35</span>;
              <br />
              <span className="text-yellow-600">console.log</span>(person.age); <span className="text-gray-500">// Output: 35</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          জাভাস্ক্রিপ্ট ক্লাসগুলি অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের জন্য একটি শক্তিশালী টুল। এটি ক্লাস তৈরি, ইনহেরিট্যান্স, স্ট্যাটিক মেথড, এবং গেটার/সেটার মেথডের মাধ্যমে কোডের পুনরব্যবহারযোগ্যতা এবং সংগঠন উন্নত করতে সাহায্য করে।
        </p>
      </section>
    </div>
  );
};

export default ClassTutorial;
