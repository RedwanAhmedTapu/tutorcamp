import React, { useState, useEffect, useRef } from 'react';
import 'prismjs/themes/prism.css';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';

const HTMLTags = () => {
  const initialHtmlCode = [
    { tag: '<h1></h1>', description: 'Header 1', code: '<h1>Hello World</h1>', output: '<h1>Hello World</h1>' },
    { tag: '<p></p>', description: 'Paragraph', code: '<p>This is a paragraph.</p>', output: '<p>This is a paragraph.</p>' },
    { tag: '<a></a>', description: 'Anchor', code: '<a href="http://www.google.com" target="_blank">Google</a>', output: '<a href="http://www.google.com" target="_blank">Google</a>' },
    { tag: '<div></div>', description: 'Division', code: '<div>Division Content</div>', output: '<div>Division Content</div>' },
    { tag: '<img/>', description: 'Image', code: '<img src="https://cdn.pixabay.com/photo/2021/01/06/12/14/church-5894267_1280.jpg" width="100%" height="100%"/>', output: '<img src="https://cdn.pixabay.com/photo/2021/01/06/12/14/church-5894267_1280.jpg" width="100%" height="100%"/>' },
    { tag: '<sup></sup>', description: 'Superscript', code: '<p>10<sup>2</sup> = 100</p>', output: '<p>10<sup>2</sup> = 100</p>' },
    { tag: '<sub></sub>', description: 'Subscript', code: '<p>H<sub>2</sub>O</p>', output: '<p>H<sub>2</sub>O</p>' },
    { tag: '<strong></strong>', description: 'Strong', code: '<strong>Important text</strong>', output: '<strong>Important text</strong>' },
    { tag: '<b></b>', description: 'Bold', code: '<b>Bold text</b>', output: '<b>Bold text</b>' },
    { tag: '<u></u>', description: 'Underline', code: '<u>Underlined text</u>', output: '<u>Underlined text</u>' },
    { tag: '<pre></pre>', description: 'Preformatted text', code: '<pre>Preformatted\ntext</pre>', output: '<pre>Preformatted\ntext</pre>' },
    { tag: '<table></table>', description: 'Table', code: '<table border="1"><tr><th>Header</th></tr><tr><td>Data</td></tr></table>', output: '<table border="1"><tr><th>Header</th></tr><tr><td>Data</td></tr></table>' },
    { tag: '<caption></caption>', description: 'Table Caption', code: '<table border="1"><caption>Table Caption</caption><tr><th>Header</th></tr><tr><td>Data</td></tr></table>', output: '<table border="1"><caption>Table Caption</caption><tr><th>Header</th></tr><tr><td>Data</td></tr></table>' },
    { tag: '<td rowspan="n"></td>', description: 'Rowspan', code: '<table border="1"><tr><td rowspan="2">Rowspan</td><td>Data</td></tr><tr><td>More Data</td></tr></table>', output: '<table border="1"><tr><td rowspan="2">Rowspan</td><td>Data</td></tr><tr><td>More Data</td></tr></table>' },
    { tag: '<td colspan="n"></td>', description: 'Colspan', code: '<table border="1"><tr><td colspan="2">Colspan</td></tr><tr><td>Data</td><td>Data</td></tr></table>', output: '<table border="1"><tr><td colspan="2">Colspan</td></tr><tr><td>Data</td><td>Data</td></tr></table>' },
    { tag: '<marquee></marquee>', description: 'Marquee', code: '<marquee>Scrolling text</marquee>', output: '<marquee>Scrolling text</marquee>' }
  ];

  const [htmlCode, setHtmlCode] = useState(initialHtmlCode);
  const iframeRefs = useRef([]);

  const handleCodeChange = (index, newCode) => {
    const newHtmlCode = [...htmlCode];
    newHtmlCode[index].code = newCode;
    setHtmlCode(newHtmlCode);
  };

  const handleRunCode = (index) => {
    const newHtmlCode = [...htmlCode];
    newHtmlCode[index].output = newHtmlCode[index].code;
    setHtmlCode(newHtmlCode);

    const iframe = iframeRefs.current[index];
    const document = iframe.contentDocument;
    document.open();
    document.write(newHtmlCode[index].output);
    document.close();
  };

  useEffect(() => {
    htmlCode.forEach((item, index) => {
      const iframe = iframeRefs.current[index];
      const document = iframe.contentDocument;
      document.open();
      document.write(item.output);
      document.close();
    });
  }, [htmlCode]);

  return (
    <div className="w-screen sm:w-full h-auto overflow-x-auto bg-gray-900 text-white p-4">
      <h1 className="text-2xl sm:text-3xl text-teal-500 text-center mb-8">HTML Syntax Table with Code Editor</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-gray-800 rounded shadow-lg">
          <thead>
            <tr className="bg-blue-600">
              <th className="p-2 sm:p-4">Tag Name</th>
              <th className="p-2 sm:p-4">Description</th>
              <th className="p-2 sm:p-4">Code Editor</th>
              <th className="p-2 sm:p-4">Output</th>
            </tr>
          </thead>
          <tbody>
            {htmlCode.map((item, index) => (
              <tr key={index} className="bg-gray-700">
                <td className="p-2 sm:p-4 border border-gray-600">{item.tag}</td>
                <td className="p-2 sm:p-4 border border-gray-600">{item.description}</td>
                <td className="p-2 sm:p-4 border border-gray-600 overflow-x-auto">
                  <Editor
                    value={item.code}
                    onValueChange={newCode => handleCodeChange(index, newCode)}
                    highlight={code => Prism.highlight(code, Prism.languages.html, 'html')}
                    padding={10}
                    className="bg-gray-800 text-white rounded"
                    style={{ minHeight: '100px', whiteSpace: 'pre-wrap' }}
                  />
                  <button
                    onClick={() => handleRunCode(index)}
                    className="mt-2 px-4 py-2 bg-teal-800 text-white rounded"
                  >
                    Run
                  </button>
                </td>
                <td className=" sm:p-4 border border-gray-600 bg-gray-900">
                  <iframe ref={el => iframeRefs.current[index] = el} className="w-full h-full sm:h-48 bg-white rounded" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HTMLTags;
