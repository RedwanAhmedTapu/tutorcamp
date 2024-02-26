import React, { useState } from 'react';

const SolutionComponent = () => {
  const [solution, setSolution] = useState('This is the solution in Bengali.'); // Set your Bengali solution here
  const [showSolution, setShowSolution] = useState(false);

  const handleSeeSolution = () => {
    setShowSolution(true);
  };

  const speakSolution = () => {
    const utterance = new SpeechSynthesisUtterance(solution);
    utterance.lang = 'bn-IN'; // Set the language to Bengali
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h2>Problem Statement</h2>
      {/* Your problem statement goes here */}

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={speakSolution}>Speak Solution</button>
        <button onClick={handleSeeSolution}>See Solution</button>
      </div>

      {showSolution && (
        <div>
          <h3>Solution</h3>
          {solution.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          {/* You can customize the rendering of solution lines as needed */}
        </div>
      )}
    </div>
  );
};

export default SolutionComponent;
