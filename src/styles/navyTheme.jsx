// src/styles/navyTheme.js
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const navyTheme = {
  ...prism,
  'pre[class*="language-"]': {
    backgroundColor: '#001F3F', // Navy background
    color: '#E0E0E0', // Light gray text
    padding: '16px',
    borderRadius: '8px',
    overflowX: 'auto',
  },
  'code[class*="language-"]': {
    color: '#E0E0E0', // Light gray text
  },
  // Define colors for syntax elements
  'token.comment': {
    color: '#7FDBFF', // Light blue for comments
  },
  'token.keyword': {
    color: '#FFDC00', // Yellow for keywords
  },
  'token.string': {
    color: '#39CCCC', // Teal for strings
  },
  'token.function': {
    color: '#01FF70', // Green for functions
  },
  'token.variable': {
    color: '#FF851B', // Orange for variables
  },
  'token.number': {
    color: '#DDDDDD', // Light gray for numbers
  },
  'token.async': {
    color: '#FF4136', // Red for async
  },
  'token.promise': {
    color: '#FF6347', // Tomato for promises
  },
};

export default navyTheme;
