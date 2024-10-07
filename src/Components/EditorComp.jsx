import Editor from '@monaco-editor/react';

function EditorComp({ lang, setCode }) {
  if(lang=="c++") lang = "cpp";

  const boilerplate = {
    javascript: `// Start writing your JavaScript code here\nconsole.log("Hello, World!");`,
    cpp: `// Start writing your C++ code here\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
    java: `// Start writing your Java code here\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
    python: `# Start writing your Python code here\nprint("Hello, World!")`
  };

  const defaultValue = boilerplate[lang] || `// Start writing your code in ${lang}`;


  return (
    <div className='my-2 ml-4 h-5/6'>
      <Editor
        height="100%"
        language={lang}
        theme='vs-dark'
        defaultLanguage="javascript"
        value={defaultValue}
        onChange={(value) => setCode(value)} // This updates the code in the App state
      />
    </div>
  );
}

export default EditorComp;
