// src/App.js
import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import useStore from '../../../../../store/store';

import 'tailwindcss/tailwind.css';

// Custom node components
const CustomNodeStyles = {
  inputOutput: {
    border: '1px solid #777',
    padding: '10px',
    background: '#ffcc00',
    width: '120px',
    height: '50px',
    textAlign: 'center',
    transform: 'skewX(-20deg)', // Skew to create a parallelogram effect
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startEnd: {
    border: '1px solid #777',
    padding: '10px',
    borderRadius: '50px',
    background: '#00ccff',
    width: '120px',
    textAlign: 'center',
  },
  process: {
    border: '1px solid #777',
    padding: '10px',
    borderRadius: '5px',
    background: '#ccffcc',
    width: '120px',
    textAlign: 'center',
  },
  condition: {
    border: '1px solid #777',
    padding: '10px',
    borderRadius: '5px',
    background: '#ff99cc',
    width: '120px',
    textAlign: 'center',
    transform: 'rotate(45deg)',
  },
  joint: {
    border: '1px solid #777',
    padding: '10px',
    borderRadius: '50%',
    background: '#ffccff',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

const InputOutputNode = ({ data }) => (
  <div style={CustomNodeStyles.inputOutput}>
    <div style={{ transform: 'skewX(20deg)' }}>{data.label}</div>
  </div>
);

const StartEndNode = ({ data }) => (
  <div style={CustomNodeStyles.startEnd}>{data.label}</div>
);

const ProcessNode = ({ data }) => (
  <div style={CustomNodeStyles.process}>{data.label}</div>
);

const ConditionNode = ({ data }) => (
  <div style={CustomNodeStyles.condition}>
    <div style={{ transform: 'rotate(-45deg)' }}>{data.label}</div>
  </div>
);

const JointNode = ({ data }) => (
  <div style={CustomNodeStyles.joint}>{data.label}</div>
);

const nodeTypes = {
  inputOutput: InputOutputNode,
  startEnd: StartEndNode,
  process: ProcessNode,
  condition: ConditionNode,
  joint: JointNode,
};

// Define the algorithms and flowcharts
const algorithms = {
  sumOfThreeNumbers: {
    steps: [
      'Start',
      'Input A, B, C',
      'Sum = A + B + C',
      'Print Sum',
      'End'
    ],
    flowchart: () => [
      { id: '1', type: 'startEnd', data: { label: 'Start' }, position:  { x: 100, y: 100 } },
      { id: '2', type: 'inputOutput', data: { label: 'Input A, B, C' }, position:  { x: 100, y: 100 } },
      { id: '3', type: 'process', data: { label: 'Sum = A + B + C' }, position:  { x: 100, y: 100 }},
      { id: '4', type: 'inputOutput', data: { label: 'Print Sum' }, position:  { x: 100, y: 100 } },
      { id: '5', type: 'startEnd', data: { label: 'End' }, position:  { x: 100, y: 100 } },
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e2-3', source: '2', target: '3', animated: true },
      { id: 'e3-4', source: '3', target: '4', animated: true },
      { id: 'e4-5', source: '4', target: '5', animated: true }
    ]
  },
  averageOfThreeNumbers: {
    steps: [
      'Start',
      'Input A, B, C',
      'Sum = A + B + C',
      'X = Sum / 3',
      'Print X',
      'End'
    ],
    flowchart: () => [
      { id: '1', type: 'startEnd', data: { label: 'Start' }, position: { x: 100, y: 100 } },
      { id: '2', type: 'inputOutput', data: { label: 'Input A, B, C' }, position:  { x: 100, y: 200 } },
      { id: '3', type: 'process', data: { label: 'Sum = A + B + C' }, position: { x: 100, y: 300 } },
      { id: '4', type: 'process', data: { label: 'X = Sum / 3' }, position:  { x: 100, y: 400 } },
      { id: '5', type: 'inputOutput', data: { label: 'Print X' }, position:  { x: 100, y: 500 }},
      { id: '6', type: 'startEnd', data: { label: 'End' }, position:  { x: 100, y: 100 } },
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e2-3', source: '2', target: '3', animated: true },
      { id: 'e3-4', source: '3', target: '4', animated: true },
      { id: 'e4-5', source: '4', target: '5', animated: true },
      { id: 'e5-6', source: '5', target: '6', animated: true }
    ]
  },
  areaOfCircle: {
    steps: [
      'Start',
      'Input r',
      'Area = π * r * r',
      'Print Area',
      'End'
    ],
    flowchart: () => [
      { id: '1', type: 'startEnd', data: { label: 'Start' }, position:  { x: 100, y: 100 } },
      { id: '2', type: 'inputOutput', data: { label: 'Input r' }, position:  { x: 100, y: 200 } },
      { id: '3', type: 'process', data: { label: 'Area = π * r * r' }, position:  { x: 100, y: 300 } },
      { id: '4', type: 'inputOutput', data: { label: 'Print Area' }, position:  { x: 100, y: 400 } },
      { id: '5', type: 'startEnd', data: { label: 'End' }, position:  { x: 100, y: 500 }},
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e2-3', source: '2', target: '3', animated: true },
      { id: 'e3-4', source: '3', target: '4', animated: true },
      { id: 'e4-5', source: '4', target: '5', animated: true }
    ]
  }
};

// Random position generator for flowchart nodes
// const getRandomPosition = () => ({
//   x: Math.random() * 400,
//   y: Math.random() * 400
// });

// Component to display algorithm steps and flowchart
const AlgorithmFlowchart = ({ algorithm }) => {
  const initialNodes = algorithm.flowchart().filter((item) => !item.source && !item.target);
  const initialEdges = algorithm.flowchart().filter((item) => item.source && item.target);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const regenerateFlowchart = useCallback(() => {
    const newNodes = algorithm.flowchart();
    setNodes(newNodes.filter((e) => !e.id.startsWith("e")));
    setEdges(newNodes.filter((e) => e.id.startsWith("e")));
  }, [algorithm, setNodes, setEdges]);

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-2">Algorithm Steps:</h2>
      <ul className="mb-4 text-white">
        {algorithm.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Flowchart:</h2>
      <div className="text-white" style={{ height: 500, border: '1px solid #ddd', borderRadius: '4px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={params => setEdges(eds => addEdge(params, eds))}
          nodeTypes={nodeTypes}
          style={{ width: '100%', height: '100%' }}
        >
          <Controls />
          {/* <MiniMap /> */}
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      <button
        onClick={regenerateFlowchart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Regenerate Flowchart
      </button>
    </div>
  );
};

// Main component to handle user input and display selected algorithm
const LMMGenerator = () => {
  const { question, selectedAlgorithm, setQuestion, setSelectedAlgorithm } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const lowerCaseQuestion = question.toLowerCase();
    if (lowerCaseQuestion.includes('sum of three numbers')) {
      setSelectedAlgorithm(algorithms.sumOfThreeNumbers);
    } else if (lowerCaseQuestion.includes('average of three numbers')) {
      setSelectedAlgorithm(algorithms.averageOfThreeNumbers);
    } else if (lowerCaseQuestion.includes('area of circle')) {
      setSelectedAlgorithm(algorithms.areaOfCircle);
    } else {
      setSelectedAlgorithm(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">LMM Generator</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="4"
          placeholder="Ask a question about sum, average, or area of circle..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate Answer
        </button>
      </form>
      {selectedAlgorithm && <AlgorithmFlowchart algorithm={selectedAlgorithm} />}
    </div>
  );
};

export default LMMGenerator;

// src/store.js

