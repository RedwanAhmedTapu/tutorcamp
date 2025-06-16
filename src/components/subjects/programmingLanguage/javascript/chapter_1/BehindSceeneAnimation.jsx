import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaRedo, FaArrowRight, FaDatabase, FaClock, FaLayerGroup, FaCode } from 'react-icons/fa';

const RuntimeVisualizer = () => {
  // Runtime components
  const [callStack, setCallStack] = useState([]);
  const [heap, setHeap] = useState({});
  const [webApis, setWebApis] = useState([]);
  const [taskQueue, setTaskQueue] = useState([]);
  const [microtaskQueue, setMicrotaskQueue] = useState([]);
  const [output, setOutput] = useState([]);
  
  // Execution control
  const [isRunning, setIsRunning] = useState(false);
  const [executionSpeed, setExecutionSpeed] = useState(1000);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionComplete, setExecutionComplete] = useState(false);
  
  // Color-coded code blocks
  const codeBlocks = [
    { code: 'var a = 10', type: 'declaration', color: 'text-blue-400' },
    { code: 'console.log("Start")', type: 'sync', color: 'text-purple-400' },
    { code: 'console.log(a)', type: 'sync', color: 'text-purple-400' },
    { code: 'setTimeout(() => console.log("Timeout 1"), 0)', type: 'async', color: 'text-amber-400' },
    { code: 'Promise.resolve().then(() => console.log("Promise 1"))', type: 'promise', color: 'text-green-400' },
    { code: 'setTimeout(() => console.log("Timeout 2"), 0)', type: 'async', color: 'text-amber-400' },
    { 
      code: `Promise.resolve().then(() => {
  console.log("Promise 2");
  Promise.resolve().then(() => console.log("Promise 3"));
})`, 
      type: 'promise', 
      color: 'text-green-400' 
    },
    { 
      code: `async function asyncFunction() {
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log("Asynchronous Function called");
}`,
      type: 'async-fn',
      color: 'text-cyan-400'
    },
    { code: 'asyncFunction()', type: 'async-call', color: 'text-cyan-400' },
    { 
      code: `function syncFunction() {
  console.log("Synchronous Function");
}`,
      type: 'sync-fn',
      color: 'text-purple-400'
    },
    { code: 'syncFunction()', type: 'sync-call', color: 'text-purple-400' },
    { code: 'console.log("End")', type: 'sync', color: 'text-purple-400' }
  ];

  // Predefined execution flow
  const executionFlow = useRef([
    // Memory Allocation
    {
      type: 'memory',
      actions: [
        { variable: 'a', value: undefined },
        { function: 'asyncFunction', type: 'function' },
        { function: 'syncFunction', type: 'function' }
      ]
    },
    // Execution Steps
    { type: 'exec', name: 'var a = 10', blockIndex: 0, output: null },
    { type: 'exec', name: 'console.log("Start")', blockIndex: 1, output: 'Start' },
    { type: 'exec', name: 'console.log(a)', blockIndex: 2, output: 10 },
    { 
      type: 'exec', 
      name: 'setTimeout', 
      blockIndex: 3,
      webApi: { type: 'timeout', callback: '() => console.log("Timeout 1")' } 
    },
    { 
      type: 'exec', 
      name: 'Promise.resolve().then', 
      blockIndex: 4,
      webApi: { type: 'promise', callback: '() => console.log("Promise 1")' } 
    },
    { 
      type: 'exec', 
      name: 'setTimeout', 
      blockIndex: 5,
      webApi: { type: 'timeout', callback: '() => console.log("Timeout 2")' } 
    },
    { 
      type: 'exec', 
      name: 'Promise.resolve().then', 
      blockIndex: 6,
      webApi: { 
        type: 'promise', 
        callback: `() => {
          console.log("Promise 2");
          Promise.resolve().then(() => console.log("Promise 3"));
        }` 
      } 
    },
    { 
      type: 'exec', 
      name: 'asyncFunction()', 
      blockIndex: 8,
      webApi: { type: 'timeout', callback: 'resolve => setTimeout(resolve, 0)' },
      async: true
    },
    { 
      type: 'exec', 
      name: 'syncFunction()', 
      blockIndex: 10,
      output: 'Synchronous Function' 
    },
    { type: 'exec', name: 'console.log("End")', blockIndex: 11, output: 'End' },
    // Microtasks
    { type: 'microtask', callback: '() => console.log("Promise 1")' },
    { type: 'microtask', callback: '() => console.log("Promise 2")' },
    { type: 'microtask', callback: '() => console.log("Promise 3")' },
    // Tasks
    { type: 'task', callback: '() => console.log("Timeout 1")' },
    { type: 'task', callback: '() => console.log("Timeout 2")' },
    // Async resolution
    { type: 'task', callback: '() => console.log("Asynchronous Function called")' }
  ]);

  const reset = () => {
    setCallStack([]);
    setHeap({});
    setWebApis([]);
    setTaskQueue([]);
    setMicrotaskQueue([]);
    setOutput([]);
    setCurrentStep(0);
    setIsRunning(false);
    setExecutionComplete(false);
  };

  const executeStep = () => {
    if (currentStep >= executionFlow.current.length) {
      setIsRunning(false);
      setExecutionComplete(true);
      return;
    }

    const step = executionFlow.current[currentStep];
    
    switch (step.type) {
      case 'memory':
        const newHeap = {};
        step.actions.forEach(action => {
          if (action.variable !== undefined) {
            newHeap[action.variable] = action.value;
          } else if (action.function !== undefined) {
            newHeap[action.function] = action.type;
          }
        });
        setHeap(newHeap);
        setCurrentStep(prev => prev + 1);
        break;

      case 'exec':
        setCallStack(prev => [...prev, { name: step.name }]);
        
        setTimeout(() => {
          setCallStack(prev => prev.slice(0, -1));
          
          if (step.output) {
            setOutput(prev => [...prev, step.output]);
          }
          
          if (step.webApi) {
            const id = Date.now();
            setWebApis(prev => [...prev, { ...step.webApi, id }]);
            
            setTimeout(() => {
              setWebApis(prev => prev.filter(api => api.id !== id));
              
              if (step.webApi.type === 'timeout') {
                if (step.async) {
                  setTaskQueue(prev => [...prev, {
                    id,
                    callback: '() => console.log("Asynchronous Function called")'
                  }]);
                } else {
                  setTaskQueue(prev => [...prev, {
                    id,
                    callback: step.webApi.callback
                  }]);
                }
              } else if (step.webApi.type === 'promise') {
                setMicrotaskQueue(prev => [...prev, {
                  id,
                  callback: step.webApi.callback,
                  isNested: step.webApi.callback.includes('Promise.resolve().then')
                }]);
              }
            }, executionSpeed * 2);
          }
          
          setCurrentStep(prev => prev + 1);
        }, executionSpeed);
        break;

      case 'microtask':
        if (microtaskQueue.length === 0) {
          setCurrentStep(prev => prev + 1);
          return;
        }
        
        const nextMicrotask = microtaskQueue[0];
        if (!nextMicrotask?.callback) {
          setCurrentStep(prev => prev + 1);
          return;
        }

        setCallStack(prev => [...prev, { name: 'Microtask: ' + nextMicrotask.callback }]);
        
        setTimeout(() => {
          setMicrotaskQueue(prev => prev.slice(1));
          
          if (nextMicrotask.callback.includes('console.log(')) {
            const message = nextMicrotask.callback.match(/console\.log\("?(.*?)"?\)/)?.[1];
            if (message) {
              setOutput(prev => [...prev, message]);
            }
          }
          
          if (nextMicrotask.isNested) {
            const nestedId = Date.now();
            setMicrotaskQueue(prev => [...prev, {
              id: nestedId,
              callback: '() => console.log("Promise 3")'
            }]);
          }
          
          setCallStack(prev => prev.slice(0, -1));
          setCurrentStep(prev => prev + 1);
        }, executionSpeed);
        break;

      case 'task':
        if (taskQueue.length === 0) {
          setCurrentStep(prev => prev + 1);
          return;
        }
        
        const nextTask = taskQueue[0];
        if (!nextTask?.callback) {
          setCurrentStep(prev => prev + 1);
          return;
        }

        setCallStack(prev => [...prev, { name: 'Task: ' + nextTask.callback }]);
        
        setTimeout(() => {
          setTaskQueue(prev => prev.slice(1));
          
          if (nextTask.callback.includes('console.log(')) {
            const message = nextTask.callback.match(/console\.log\("?(.*?)"?\)/)?.[1];
            if (message) {
              setOutput(prev => [...prev, message]);
            }
          }
          
          setCallStack(prev => prev.slice(0, -1));
          setCurrentStep(prev => prev + 1);
        }, executionSpeed);
        break;

      default:
        setCurrentStep(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (isRunning && !executionComplete) {
      const timer = setTimeout(executeStep, executionSpeed);
      return () => clearTimeout(timer);
    }
  }, [isRunning, currentStep, executionComplete, executionSpeed]);

  return (
 <div className="min-h-screen w-full bg-slate-900 p-2 text-gray-100">
 <div className="min-h-screen w-full bg-slate-900 p-2 text-gray-100">
  <div className="max-w-7xl mx-auto">
    <header className="mb-6 md:mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">JavaScript Runtime Visualizer</h1>
      <p className="text-slate-400">Color-Coded Execution Flow</p>
    </header>

    {/* Controls remain the same */}
    <div className="flex gap-3 md:gap-4">
      <button 
        onClick={() => setIsRunning(!isRunning)}
        className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg ${
          isRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
        } text-white font-medium transition-colors text-sm md:text-base`}
        disabled={executionComplete}
      >
        {isRunning ? <><FaPause /> Pause</> : <><FaPlay /> Start</>}
      </button>
      <button 
        onClick={reset}
        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors text-sm md:text-base"
      >
        <FaRedo /> Reset
      </button>
      <div className="flex items-center gap-2 ml-auto">
        <label className="text-xs text-slate-400">Speed:</label>
        <select
          value={executionSpeed}
          onChange={(e) => setExecutionSpeed(Number(e.target.value))}
          className="bg-slate-700 text-white text-xs rounded px-2 py-1"
          disabled={isRunning}
        >
          <option value={500}>Fast</option>
          <option value={1000}>Normal</option>
          <option value={1500}>Slow</option>
          <option value={2000}>Very Slow</option>
        </select>
      </div>
    </div>

    {/* Three-box flex layout */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
      {/* Code Execution - Narrow */}
      <div className="flex-1 md:flex-[0_0_22%] bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
        <div className="bg-slate-700 text-cyan-400 px-4 py-3 flex items-center gap-2 border-b border-slate-600">
          <FaCode className="text-cyan-400" />
          <h3 className="font-medium text-sm">Code Execution</h3>
          {currentStep > 0 && (
            <span className="text-xs text-slate-400 ml-auto">
              Step {currentStep} of {executionFlow.current.length}
            </span>
          )}
        </div>
        <div className="w-full p-2 font-mono text-xs bg-slate-800 text-slate-200 h-64 md:h-96 overflow-auto">
          {codeBlocks.map((block, index) => {
            const currentExecStep = executionFlow.current[currentStep - 1];
            const isActive = currentExecStep?.blockIndex === index;
            const isCompleted = currentStep > 0 && 
              executionFlow.current.findIndex(
                step => step.blockIndex === index
              ) < currentStep - 1;
            
            return (
              <div 
                key={index} 
                className={`py-1 px-1 rounded ${isActive ? 'bg-blue-900/50' : ''} ${block.color}`}
              >
                <div className={`${isCompleted ? 'opacity-70' : ''}`}>
                  {block.code.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Console Output - Narrow */}
      <div className="flex-1 md:flex-[0_0_22%] bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
        <div className="bg-slate-700 text-cyan-400 px-4 py-3 border-b border-slate-600">
          <h3 className="font-medium text-sm">Console Output</h3>
          {executionComplete && (
            <span className="text-xs text-emerald-400 ml-2">Execution Complete</span>
          )}
        </div>
        <div className="p-2 font-mono bg-slate-800 text-gray-100 h-64 md:h-96 overflow-auto text-xs">
          {output.length === 0 ? (
            <div className="text-slate-500 italic">Output will appear here...</div>
          ) : (
            output.map((line, index) => (
              <div key={index} className="py-1 text-emerald-400">
                {line}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Runtime Visualization - Wider */}
      <div className="flex-1 md:flex-[0_0_53%] bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
        <div className="bg-slate-700 text-cyan-400 px-4 py-3 border-b border-slate-600">
          <h3 className="font-medium">Runtime Visualization</h3>
        </div>
        <div className="p-3 md:p-4 bg-slate-800 h-[500px] md:h-96 flex flex-col gap-y-4 overflow-auto relative">
          {/* Rest of the runtime visualization content remains the same */}
          {/* Top Row - Heap, Call Stack, Web API */}
          <div className="flex flex-col md:flex-row justify-between gap-3">
            {/* Heap - Left */}
            <div className="w-full md:w-1/3">
              <div className="bg-blue-900/50 border border-blue-800 rounded-lg p-2 h-full">
                <div className="flex items-center gap-2 text-blue-300 mb-2">
                  <FaDatabase className="text-sm" />
                  <h4 className="font-medium text-xs">Heap</h4>
                </div>
                <div className="space-y-1 text-xs max-h-24 overflow-y-auto">
                  {Object.keys(heap).length === 0 ? (
                    <div className="text-slate-500 italic">Empty</div>
                  ) : (
                    Object.keys(heap).map((key) => (
                      <div
                        key={key}
                        className="bg-blue-900/30 p-1 rounded border border-blue-800"
                      >
                        <div className="font-mono text-blue-200 truncate">
                          {key}: {typeof heap[key] === 'function' ? 'function' : JSON.stringify(heap[key])}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Call Stack - Center */}
            <div className="w-full md:w-1/3">
              <div className="bg-purple-900/50 border border-purple-800 rounded-lg p-2 h-full">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <FaLayerGroup className="text-sm" />
                  <h4 className="font-medium text-xs">Call Stack</h4>
                </div>
                <div className="space-y-1 text-xs max-h-24 overflow-y-auto">
                  {callStack.length === 0 ? (
                    <div className="text-slate-500 italic text-center py-4">
                      Empty
                    </div>
                  ) : (
                    callStack
                      .map((item, index) => (
                        <div
                          key={index}
                          className="bg-purple-900/30 p-1 rounded border border-purple-800 text-purple-200 font-mono"
                        >
                          {item.name}
                        </div>
                      ))
                      .reverse()
                  )}
                </div>
              </div>
            </div>

            {/* Web API - Right */}
            <div className="w-full md:w-1/3">
              <div className="bg-amber-900/50 border border-amber-800 rounded-lg p-2 h-full">
                <div className="flex items-center gap-2 text-amber-300 mb-2">
                  <FaClock className="text-sm" />
                  <h4 className="font-medium text-xs">Web APIs</h4>
                </div>
                <div className="space-y-1 text-xs max-h-24 overflow-y-auto">
                  {webApis.length === 0 ? (
                    <div className="text-slate-500 italic">Empty</div>
                  ) : (
                    webApis.map((item) => (
                      <div
                        key={item.id}
                        className="bg-amber-900/30 p-1 rounded border border-amber-800 text-amber-200 font-mono"
                      >
                        {item.type === 'promise' ? 'Promise' : 'setTimeout'}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Event Loop - Positioned between queues on mobile */}
          <div className="flex justify-center md:absolute md:left-1/2 md:bottom-44 md:transform md:-translate-x-1/2 z-10">
            <div className="flex flex-col items-center">
              <div className="bg-emerald-900/50 border border-emerald-800 rounded-full p-2 w-12 h-12 flex items-center justify-center">
                <FaRedo
                  className="text-emerald-400 text-lg animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              <span className="text-xs font-medium text-slate-300 mt-1">
                Event Loop
              </span>
            </div>
          </div>

          {/* Microtask Queue - Stacked below Event Loop on mobile */}
          <div className="mt-4 md:absolute md:left-2 md:right-2 md:bottom-28">
            <div className="bg-green-900/50 border border-green-800 rounded-lg p-2">
              <div className="flex items-center gap-2 text-green-300 mb-1">
                <h4 className="font-medium text-xs">Microtask Queue</h4>
                <FaArrowRight className="ml-auto text-xs" />
              </div>
              <div className="flex gap-2 overflow-x-auto py-1">
                {microtaskQueue.length === 0 ? (
                  <div className="text-slate-500 italic text-xs">Empty</div>
                ) : (
                  microtaskQueue.map((item, index) => (
                    <div
                      key={index}
                      className="bg-green-900/30 p-1 rounded border border-green-800 text-green-200 font-mono text-xs whitespace-nowrap flex-shrink-0"
                    >
                      {item.callback.match(/console\.log\("?(.*?)"?\)/)?.[1] || 'Microtask'}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Task Queue - Stacked below Microtask Queue on mobile */}
          <div className="mt-4 md:absolute md:left-2 md:right-2 md:top-72">
            <div className="bg-red-900/50 border border-red-800 rounded-lg p-2">
              <div className="flex items-center gap-2 text-red-300 mb-1">
                <h4 className="font-medium text-xs">Task Queue</h4>
                <FaArrowRight className="ml-auto text-xs" />
              </div>
              <div className="flex gap-2 overflow-x-auto py-1">
                {taskQueue.length === 0 ? (
                  <div className="text-slate-500 italic text-xs">Empty</div>
                ) : (
                  taskQueue.map((item, index) => (
                    <div
                      key={index}
                      className="bg-red-900/30 p-1 rounded border border-red-800 text-red-200 font-mono text-xs whitespace-nowrap flex-shrink-0"
                    >
                      {item.callback.match(/console\.log\("?(.*?)"?\)/)?.[1] || 'Task'}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    {/* Explanation */}
        <div className="mt-6 md:mt-8 bg-slate-800 rounded-xl shadow-lg p-4 md:p-6 border border-slate-700">
          <h2 className="text-lg md:text-xl font-bold text-cyan-400 mb-3 md:mb-4">Execution Flow</h2>
          <div className="space-y-2 md:space-y-4 text-slate-300 text-sm md:text-base">
            <p><strong className="text-blue-300">1. Memory Allocation Phase:</strong> All variables and functions are allocated in heap first.</p>
            <p><strong className="text-purple-300">2. Execution Phase:</strong> Code runs line by line, pushing and popping from call stack.</p>
            <p><strong className="text-amber-300">3. Web APIs:</strong> Async operations like setTimeout and Promises are handled by browser APIs.</p>
            <p><strong className="text-green-300">4. Microtask Queue:</strong> Promise callbacks go here and run immediately after current execution.</p>
            <p><strong className="text-red-300">5. Task Queue:</strong> setTimeout callbacks go here and run after microtasks.</p>
            <p><strong className="text-emerald-300">6. Event Loop:</strong> Continuously checks call stack and queues to determine what to run next.</p>
          </div>
        </div>
</div>
  );
};

export default RuntimeVisualizer;