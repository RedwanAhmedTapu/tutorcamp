import React, { useState } from "react";

const BinarySearchVisualizer = () => {
  const [array, setArray] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
  const [target, setTarget] = useState("");
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userArray, setUserArray] = useState("");

  const binarySearch = () => {
    const arr = array.slice();
    let low = 0;
    let high = arr.length - 1;
    const newSteps = [];

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      newSteps.push({
        low,
        high,
        mid,
        found: arr[mid] === target,
        explanation: `Calculating mid: mid = Math.floor((low + high) / 2) = Math.floor((${low} + ${high}) / 2) = ${mid}`,
      });

      if (arr[mid] === target) {
        setSteps(newSteps);
        setCurrentStep(0);
        return;
      } else if (arr[mid] < target) {
        low = mid + 1;
        newSteps[newSteps.length - 1].explanation += `\nSince arr[mid] (${
          arr[mid]
        }) < target (${target}), updating low to mid + 1 = ${mid + 1}`;
      } else {
        high = mid - 1;
        newSteps[newSteps.length - 1].explanation += `\nSince arr[mid] (${
          arr[mid]
        }) > target (${target}), updating high to mid - 1 = ${mid - 1}`;
      }
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
        if (index === step.low) className += " bg-red-200";
        if (index === step.mid) className += " bg-yellow-200";
        if (index === step.high) className += " bg-green-200";
      }
      return (
        <div key={index} className={className}>
          {num}
        </div>
      );
    });
  };
  const renderIndices = () => {
    const step = steps[currentStep];
    return array.map((_, index) => {
      let className = "p-4 border-2 m-1 text-center";
      if (step) {
        if (index === step.low) className += " text-red-600 font-bold"; // Low index
        if (index === step.mid) className += " text-yellow-600 font-bold"; // Mid index
        if (index === step.high) className += " text-green-600 font-bold"; // High index
      }
      return (
        <div key={index} className={className}>
          {index}
        </div>
      );
    });
  };

  const getStepExplanation = (step) => {
    if (!step) return "";

    if (step.found) {
      return `Element found at index ${step.mid}. The mid value is calculated as mid = (low + high) / 2 = (${step.low} + ${step.high}) / 2 = ${step.mid}.`;
    }

    if (array[step.mid] < target) {
      return `Since ${
        array[step.mid]
      } < ${target}, the target is on the right side. Update low = mid + 1 = ${
        step.mid + 1
      }.`;
    } else {
      return `Since ${
        array[step.mid]
      } > ${target}, the target is on the left side. Update high = mid - 1 = ${
        step.mid - 1
      }.`;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Binary Search Visualization
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
              placeholder="e.g., 1, 3, 5, 7, 9"
            />
            <button
              onClick={() =>
                setArray(
                  userArray
                    .split(",")
                    .map(Number)
                    .sort((a, b) => a - b)
                )
              }
              className="mt-2 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Update Array
            </button>
          </div>
          <div>
            <label className="block text-lg font-medium">Enter Target:</label>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={binarySearch}
              className="mt-2 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Search
            </button>
          </div>
        </div>

        {/* Array Visualization */}
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center">index:  {renderIndices()} </div>
          <div className="flex items-center">array: {renderArray()}  </div>
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
              <p><span className="text-red-600">Low</span>: {steps[currentStep].low}, <span className="text-yellow-600">Mid</span>: {steps[currentStep].mid}, <span className="text-green-600">High</span>: {steps[currentStep].high}</p>
              <p>
                {steps[currentStep].found
                  ? `Element found at index ${steps[currentStep].mid}`
                  : "Element not found in this range"}
              </p>
              <p className="mt-2 text-gray-700">{getStepExplanation(steps[currentStep])}</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default BinarySearchVisualizer;
