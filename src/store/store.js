// src/store.js
import create from 'zustand';

const useStore = create((set) => ({
  question: '',
  selectedAlgorithm: null,
  setQuestion: (question) => set({ question }),
  setSelectedAlgorithm: (selectedAlgorithm) => set({ selectedAlgorithm }),
}));

export default useStore;
