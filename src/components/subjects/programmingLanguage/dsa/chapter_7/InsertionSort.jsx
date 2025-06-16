import React, { useState } from "react";

const InsertionSort = () => {
  const [array, setArray] = useState([12, 11, 13, 5, 6]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userArray, setUserArray] = useState("");

  const insertionSort = () => {
    const arr = array.slice();
    const newSteps = [];

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      newSteps.push({
        array: [...arr],
        keyIndex: i,
        comparedIndices: [j, i],
        inserted: false,
        explanation: `Selecting element ${key} at index ${i} to insert into the sorted portion.`,
      });

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        newSteps.push({
          array: [...arr],
          keyIndex: i,
          comparedIndices: [j, j + 1],
          inserted: false,
          explanation: `Shifting ${arr[j]} to the right to make space for ${key}.`,
        });
        j--;
      }

      arr[j + 1] = key;
      newSteps.push({
        array: [...arr],
        keyIndex: j + 1,
        comparedIndices: [j + 1, i],
        inserted: true,
        explanation: `Inserted ${key} at index ${j + 1}.`,
      });
    }

    setSteps(newSteps);
    setCurrentStep(0);
  };

  const renderArray = () => {
    const step = steps[currentStep];
    return array.map((num, index) => {
      let className =
        "p-4 border-2 border-gray-300 m-1 transition-all duration-500 text-center rounded-md w-12";
      if (step) {
        if (step.comparedIndices.includes(index)) {
          className += " bg-yellow-200"; // Highlight compared indices
        }
        if (index === step.keyIndex) {
          className += " bg-red-200"; // Highlight the key element
        }
        if (step.inserted && index === step.keyIndex) {
          className += " bg-green-200"; // Highlight the inserted element
        }
      }
      return (
        <div key={index} className={className}>
          {step ? step.array[index] : num}
        </div>
      );
    });
  };

  const getStepExplanation = (step) => {
    if (!step) return "";

    if (step.inserted) {
      return step.explanation;
    } else {
      return step.explanation;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Insertion Sort Visualization
      </h1>

      <div className="w-full max-w-4xl bg-white p-6 rounded-md shadow-md flex flex-col gap-4">
        {/* Input Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium">Enter Array:</label>
            <input
              type="text"
              value={userArray}
              onChange={(e) => setUserArray(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="e.g., 12, 11, 13, 5, 6"
            />
            <button
              onClick={() =>
                setArray(
                  userArray
                    .split(",")
                    .map(Number)
                    .filter((num) => !isNaN(num))
                )
              }
              className="mt-2 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Update Array
            </button>
          </div>
          <div>
            <button
              onClick={insertionSort}
              className="mt-8 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Sort
            </button>
          </div>
        </div>

        {/* Array Visualization */}
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center">array: {renderArray()}</div>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:bg-gray-300"
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
            className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:bg-gray-300"
            disabled={currentStep >= steps.length - 1}
          >
            Next
          </button>
        </div>

        {/* Step Information */}
        {steps.length > 0 && (
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg font-medium">Step {currentStep + 1}:</p>
            <p className="mt-2 text-gray-700">
              {getStepExplanation(steps[currentStep])}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsertionSort;