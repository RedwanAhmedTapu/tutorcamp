import React, { useState } from "react";

const BubbleSort = () => {
  const [array, setArray] = useState([5, 3, 8, 4, 6]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userArray, setUserArray] = useState("");

  const bubbleSort = () => {
    const arr = array.slice();
    const newSteps = [];
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        newSteps.push({
          array: [...arr],
          comparedIndices: [i, i + 1],
          swapped: false,
          explanation: `Comparing ${arr[i]} and ${arr[i + 1]}`,
        });

        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;

          newSteps[newSteps.length - 1].swapped = true;
          newSteps[newSteps.length - 1].explanation += `\nSwapping ${arr[i + 1]} and ${arr[i]} because ${arr[i + 1]} > ${arr[i]}`;
        }
      }
    } while (swapped);

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
          className += step.swapped
            ? " bg-red-200"
            : " bg-yellow-200";
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

    if (step.swapped) {
      return `Swapped ${step.array[step.comparedIndices[0]]} and ${
        step.array[step.comparedIndices[1]]
      } because ${step.array[step.comparedIndices[0]]} > ${
        step.array[step.comparedIndices[1]]
      }.`;
    } else {
      return `No swap needed between ${step.array[step.comparedIndices[0]]} and ${
        step.array[step.comparedIndices[1]]
      }.`;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Bubble Sort Visualization
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
              placeholder="e.g., 5, 3, 8, 4, 6"
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
              onClick={bubbleSort}
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
            <p>
              Comparing indices {steps[currentStep].comparedIndices[0]} and{" "}
              {steps[currentStep].comparedIndices[1]}.
            </p>
            <p className="mt-2 text-gray-700">
              {getStepExplanation(steps[currentStep])}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BubbleSort;