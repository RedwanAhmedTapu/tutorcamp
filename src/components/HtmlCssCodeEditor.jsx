import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3 } from "react-icons/fa";

const codeSections = [
  {
    id: 'html',
    label: 'HTML',
    color: "text-orange-600",
    default: `<!DOCTYPE html>
<html lang="en">
<head>
  <style></style>
</head>
<body>
  <h1>hello world!</h1>
</body>
</html>`,
    icon: <FaHtml5 className="text-orange-600" />,
  },
  // {
  //   id: 'css',
  //   label: 'CSS',
  //   color: "text-blue-600",
  //   default: 'body { font-family: Arial, sans-serif; }',
  //   icon: <FaCss3 className="text-indigo-500" />,
  // },
];

const HtmlCssCodeEditor = () => {
  const [codes, setCodes] = useState(() => {
    return codeSections.reduce((acc, section) => {
      acc[section.id] = localStorage.getItem(`${section.id}_code`) || section.default;
      return acc;
    }, {});
  });

  const iframeRef = useRef(null);

  useEffect(() => {
    const document = iframeRef.current.contentDocument;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${codes.css}</style>
      </head>
      <body>
        ${codes.html}
      </body>
      </html>
    `;
    document.open();
    document.write(documentContents);
    document.close();

    Object.keys(codes).forEach((id) => {
      localStorage.setItem(`${id}_code`, codes[id]);
    });
  }, [codes]);

  const handleChange = (id, value) => {
    setCodes((prevCodes) => ({
      ...prevCodes,
      [id]: value,
    }));
  };

  const handleClear = () => {
    codeSections.forEach(section => {
      localStorage.removeItem(`${section.id}_code`);
    });
    setCodes(codeSections.reduce((acc, section) => {
      acc[section.id] = section.default;
      return acc;
    }, {}));
    alert('Code cleared!');
  };

  return (
    <div className=" mdUp:h-[90vh] w-full h-[80rem] grid grid-cols-1 mdUp:grid-cols-2 rounded-sm overflow-hidden">
      <div className="grid grid-rows-1 overflow-y-auto bg-slate-600 text-white opacity-75 p-4">
        {codeSections.map((section) => (
          <div key={section.id} className={`${section.id}-code mb-4`}>
            <h1 className="font-bold text-xl mb-4 text-white flex items-center">
              {section.icon}
              {section.label}
            </h1>
            <textarea
              className="w-full h-[calc(100%-4rem)] bg-slate-950 text-white border-none p-4 text-lg resize-vertical scrollbar-thumb-pink scrollbar-track-blue scrollbar-thin"
              value={codes[section.id]}
              onChange={(e) => handleChange(section.id, e.target.value)}
            />
          </div>
        ))}
        <button
          className="py-2 px-4 bg-teal-500 text-white font-bold rounded hover:bg-red-700 transition"
          onClick={handleClear}
        >
          Clear Code
        </button>
      </div>
      <iframe id="result" ref={iframeRef} className="w-full h-full border-none bg-white" />
    </div>
  );
};

export default HtmlCssCodeEditor;
