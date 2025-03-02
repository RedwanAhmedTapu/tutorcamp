import React from "react";
import { Element } from "react-scroll";
import { FaCode } from "react-icons/fa";
import { menuItems } from "../../../../data/chapterList";

// Import your DSA components here
import DSAIntro from "./chapter_1/DSAIntro";
import ImportanceDSA from "./chapter_1/ImportanceDSA";
import Complexity from "./chapter_1/Complexity";
import BigONotation from "./chapter_1/BigONotation";
import Recursion from "./chapter_1/Recursion";
// import Arrays from "./chapter_2/Arrays";
// import LinkedLists from "./chapter_2/LinkedLists";
// import Stacks from "./chapter_2/Stacks";
// import Queues from "./chapter_2/Queues";
// import HashTables from "./chapter_2/HashTables";
// import Trees from "./chapter_3/Trees";
// import BinaryTrees from "./chapter_3/BinaryTrees";
// import BST from "./chapter_3/BST";
// import Heaps from "./chapter_3/Heaps";
// import Graphs from "./chapter_3/Graphs";
// import TreeTraversals from "./chapter_4/TreeTraversals";
// import AVLTrees from "./chapter_4/AVLTrees";
// import RedBlackTrees from "./chapter_4/RedBlackTrees";
// import BTrees from "./chapter_4/BTrees";
// import SegmentTrees from "./chapter_5/SegmentTrees";
// import FenwickTrees from "./chapter_5/FenwickTrees";
// import Trie from "./chapter_5/Trie";
// import GraphRepresentation from "./chapter_6/GraphRepresentation";
// import BFSDFS from "./chapter_6/BFSDFS";
// import ShortestPath from "./chapter_6/ShortestPath";
// import MST from "./chapter_6/MST";
// import TopologicalSort from "./chapter_6/TopologicalSort";
import BubbleSort from "./chapter_7/BubbleSort";
import SelectionSort from "./chapter_7/SelectionSort";
import InsertionSort from "./chapter_7/InsertionSort";
import MergeSort from "./chapter_7/MergeSort";
import QuickSort from "./chapter_7/QuickSort";
import HeapSort from "./chapter_7/HeapSort";
import BinarySearch from "./chapter_7/BinarySearch";
import LinearSearch from "./chapter_7/LinearSearch";
// import GreedyIntro from "./chapter_8/GreedyIntro";
// import FractionalKnapsack from "./chapter_8/FractionalKnapsack";
// import ActivitySelection from "./chapter_8/ActivitySelection";
// import HuffmanCoding from "./chapter_8/HuffmanCoding";
// import DPIntro from "./chapter_9/DPIntro";
// import Memoization from "./chapter_9/Memoization";
// import Tabulation from "./chapter_9/Tabulation";
// import Knapsack from "./chapter_9/Knapsack";
// import LCS from "./chapter_9/LCS";
// import MatrixChain from "./chapter_9/MatrixChain";
// import CoinChange from "./chapter_9/CoinChange";
// import Backtracking from "./chapter_10/Backtracking";
// import DivideConquer from "./chapter_10/DivideConquer";
// import SlidingWindow from "./chapter_10/SlidingWindow";
// import TwoPointer from "./chapter_10/TwoPointer";
// import BitManipulation from "./chapter_10/BitManipulation";

// Map component names to their respective IDs
const components = {
  dsa_intro: DSAIntro,
  importance_dsa: ImportanceDSA,
  complexity: Complexity,
  big_o: BigONotation,
  recursion: Recursion,
  // arrays: Arrays,
  // linked_lists: LinkedLists,
  // stacks: Stacks,
  // queues: Queues,
  // hash_tables: HashTables,
  // trees: Trees,
  // binary_trees: BinaryTrees,
  // bst: BST,
  // heaps: Heaps,
  // graphs: Graphs,
  // tree_traversals: TreeTraversals,
  // avl_trees: AVLTrees,
  // red_black_trees: RedBlackTrees,
  // b_trees: BTrees,
  // segment_trees: SegmentTrees,
  // fenwick_trees: FenwickTrees,
  // trie: Trie,
  // graph_representation: GraphRepresentation,
  // bfs_dfs: BFSDFS,
  // shortest_path: ShortestPath,
  // mst: MST,
  // topological_sort: TopologicalSort,
  bubble_sort: BubbleSort,
  selection_sort: SelectionSort,
  insertion_sort: InsertionSort,
  merge_sort: MergeSort,
  quick_sort: QuickSort,
  heap_sort: HeapSort,
  binary_search: BinarySearch,
  linear_search: LinearSearch,
  // greedy_intro: GreedyIntro,
  // fractional_knapsack: FractionalKnapsack,
  // activity_selection: ActivitySelection,
  // huffman_coding: HuffmanCoding,
  // dp_intro: DPIntro,
  // memoization: Memoization,
  // tabulation: Tabulation,
  // knapsack: Knapsack,
  // lcs: LCS,
  // matrix_chain: MatrixChain,
  // coin_change: CoinChange,
  // backtracking: Backtracking,
  // divide_conquer: DivideConquer,
  // sliding_window: SlidingWindow,
  // two_pointer: TwoPointer,
  // bit_manipulation: BitManipulation,
};

const DSAHomePage = () => {
  const renderTopics = (topics) => {
    return topics.map((topic) => {
      const Component = components[topic.id];

      if (!Component) {
        console.error(`Component not found for id: ${topic.id}`);
        return (
          <Element name={topic.id} key={topic.id}>
            <div className="text-red-500">Component not found: {topic.topicName}</div>
          </Element>
        );
      }

      return (
        <Element name={topic.id} key={topic.id}>
          <Component />
        </Element>
      );
    });
  };

  return (
    <div className="w-full h-auto flex flex-col gap-y-8 p-8 bg-gray-900 overflow-x-hidden">
      <div className="w-20 h-20 text-blue-400 self-center">
        <FaCode className="w-full h-full" />
      </div>
      <p className="text-blue-500 text-3xl text-center">Data Structures & Algorithms</p>
      {menuItems
        .filter((item) => item.title === "DSA")
        .map((item) =>
          item.chapters.map((chapter) => (
            <div key={chapter.name}>{renderTopics(chapter.topics)}</div>
          ))
        )}
    </div>
  );
};

export default DSAHomePage;