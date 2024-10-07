import Editor from '@monaco-editor/react';

function EditorComp({lang}){
    return (
        <div className='my-2 ml-4 h-5/6'>
            <Editor height="100%" language={lang} theme='vs-dark' defaultLanguage="javascript" value={`//Start Writing your Code in ${lang}`} />;
        </div>
    )
}

export default EditorComp;