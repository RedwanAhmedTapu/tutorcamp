import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const DEFAULT_LANGUAGE = "javascript";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="ml-2 mb-4">
      <p className="mb-2 text-lg">Language:</p>
      <select
        className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        value={language}
        onChange={(e) => onSelect(e.target.value)}
      >
        {languages.map(([lang, version]) => (
          <option key={lang} value={lang} className="text-white bg-gray-900">
            {lang} ({version})
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
