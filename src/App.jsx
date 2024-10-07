import React, { useState, useEffect } from 'react';
import './App.css';
import EditorComp from './Components/EditorComp';
import axios from 'axios';

function App() {
  const [runtimes, setRuntimes] = useState([]);
  const [selectedLang, setSelectedLang] = useState('javascript');
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const fetchRuntimes = async () => {
      try {
        const response = await axios.get('https://emkc.org/api/v2/piston/runtimes');
        setRuntimes(response.data);
        
        if (response.data.length > 0) {
          setSelectedLang(response.data[0].language);
        }
      } catch (error) {
        console.error('Error fetching the runtimes:', error);
      }
    };

    fetchRuntimes();
  }, []);

  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
    console.log('Selected language:', event.target.value);
  };

  const handleRunCode = async () => {
    try {
      const selectedRuntime = runtimes.find(runtime => runtime.language === selectedLang);
      
      const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
        language: selectedRuntime.language,
        version: selectedRuntime.version,
        files: [
          {
            content: code
          }
        ],
        stdin: input 
      });

      const output = response.data.run.stdout || response.data.run.stderr || 'No output received';
      setOutput(output);
    } catch (error) {
      setOutput(`Error: ${error.response?.data?.message || error.message || 'Unknown error'}`);
    }
  };

  return (
    <div className='flex h-screen w-screen bg-black'>
      {/* Left-Portion */}
      <div className='w-9/12 h-full bg-green-400'>
        <div className='flex justify-between'>
        <select
          className='rounded p-3 m-4 bg-black text-white'
          value={selectedLang}
          onChange={handleLangChange}
        >
          {runtimes.map((runtime) => (
            <option key={`${runtime.language}-${runtime.version}`} value={runtime.language}>
              {runtime.language}
            </option>
          ))}
        </select>


          <button
            className='flex items-center bg-green-500 text-white p-2 m-4 rounded'
            onClick={handleRunCode}
          >
            <span className='mr-2'>RUN</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4v12l12-6L4 4z" />
            </svg>
          </button>
        </div>
        <EditorComp lang={selectedLang} setCode={setCode} />
      </div>

      {/* Right-Portion */}
      <div className='w-3/12 h-full bg-slate-600'>
        <div className='h-2/5 bg-slate-600'>
          <h2 className='p-4'>Input</h2>
          <textarea
            className='h-4/5 w-full ml-4 rounded-lg p-4'
            placeholder='Enter the input'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className='h-3/5 bg-slate-600 border-t-2 border-slate-800 rounded'>
          <h2 className='p-4'>Output</h2>
          <textarea
            className='h-4/5 w-full ml-4 rounded-lg p-4'
            placeholder='Output will show here'
            value={output}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
