import React from "react";

const ClassInheritanceTutorial = () => {
    const name="Rover";
    const breed="Labrador";
  // Code text for formatting
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

  const superMethodExample = `
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
        // Calling the superclass method
        return \`The \${this.name} barks.\` + " " + super.speak();
      }
    }
    
    const dog = new Dog("Rover");
    console.log(dog.speak()); // Output: The Rover barks. The Rover makes a noise.
  `;

  const constructorInheritanceExample = `
    class Animal {
      constructor(name) {
        this.name = name;
      }
      
      speak() {
        return \`The \${this.name} makes a noise.\`;
      }
    }
    
    class Dog extends Animal {
      constructor(name, breed) {
        // Calling the superclass constructor
        super(name);
        this.breed = breed;
      }
      
      speak() {
        return \`The \${this.breed} \${this.name} barks.\`;
      }
    }
    
    const dog = new Dog("Rover", "Labrador");
    console.log(dog.speak()); // Output: The Labrador Rover barks.
  `;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">জাভাস্ক্রিপ্ট ক্লাস ইনহেরিট্যান্স </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. ক্লাস ইনহেরিট্যান্স কী?</h2>
        <p>
          ক্লাস ইনহেরিট্যান্স হল একটি বৈশিষ্ট্য যা একটি ক্লাসকে অন্য ক্লাসের বৈশিষ্ট্য এবং পদ্ধতি উত্তরাধিকার সূত্রে প্রদান করে। এটি কোডের পুনঃব্যবহারযোগ্যতা এবং সংগঠন উন্নত করতে সাহায্য করে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. বেসিক ইনহেরিট্যান্স উদাহরণ</h2>
        <p>
          একটি ক্লাস কীভাবে অন্য ক্লাসকে এক্সটেন্ড করতে হয় এবং এটি কিভাবে কাজ করে তার একটি মৌলিক উদাহরণ।
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
        <h2 className="text-2xl font-semibold mb-2">3. সুপার মেথড কল করা</h2>
        <p>
          সুপার ক্লাসের মেথড কল করে, আপনি একটি সাবক্লাসের মধ্যে সুপার ক্লাসের ফাংশনালিটি পুনঃব্যবহার করতে পারেন।
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
                  <span className="text-yellow-600">return</span> \`The \${name} barks.\` + " " + <span className="text-yellow-600">super</span>.speak();
                <br />
                {'}'}
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">const</span> dog = <span className="text-yellow-600">new</span> Dog(<span className="text-yellow-500">"Rover"</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(dog.speak()); <span className="text-gray-500">// Output: The Rover barks. The Rover makes a noise.</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. কনস্ট্রাকটর ইনহেরিট্যান্স</h2>
        <p>
          সাবক্লাসের কনস্ট্রাকটর মেথড সুপারক্লাসের কনস্ট্রাকটর মেথডকে কল করে প্রপার্টি এবং স্টেট ইনিশিয়ালাইজ করে।
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
                <span className="text-yellow-600">constructor</span>(name, breed) {'{'}
                <br />
                  <span className="text-yellow-600">super</span>(name);
                  <br />
                  <span className="text-yellow-600">this</span>.breed = breed;
                <br />
                {'}'}
                <br />
                <span className="text-yellow-600">speak</span>() {'{'}
                <br />
                  <span className="text-yellow-600">return</span> \`The \${breed} \${name} barks.\`;
                <br />
                {'}'}
              <br />
              {'}'}
              <br />
              <span className="text-yellow-600">const</span> dog = <span className="text-yellow-600">new</span> Dog(<span className="text-yellow-500">"Rover"</span>, <span className="text-yellow-500">"Labrador"</span>);
              <br />
              <span className="text-yellow-600">console.log</span>(dog.speak()); <span className="text-gray-500">// Output: The Labrador Rover barks.</span>
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">সারাংশ</h2>
        <p>
          ক্লাস ইনহেরিট্যান্স জাভাস্ক্রিপ্টের একটি শক্তিশালী বৈশিষ্ট্য যা একটি ক্লাসকে অন্য ক্লাসের বৈশিষ্ট্য এবং পদ্ধতি উত্তরাধিকার সূত্রে প্রদান করে। এটি কোড পুনঃব্যবহারযোগ্যতা, প্রসারযোগ্যতা, এবং পরিষ্কার সংগঠন উন্নত করে।
        </p>
      </section>
    </div>
  );
};

export default ClassInheritanceTutorial;
