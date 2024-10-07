import Editor from '@monaco-editor/react';

function EditorComp({ lang, setCode }) {
  if(lang=="c++") lang = "cpp";

  const defaultValue = `// Start writing your code in ${lang}`;


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
