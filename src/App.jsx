import './App.css'
import Editor from './Components/EditorComp'
import { useState } from 'react'

function App() {
  let [selectedLang , setSelectedLang] = useState("javascript");

  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
  };

  return (
      <div className=' flex h-screen w-screen bg-black'>
        <div className='w-9/12 h-full bg-green-400'>
          <div className='flex justify-between'>
            <select className='rounded p-3 m-4 bg-black text-white' name="options" id="1"  value={selectedLang} 
            onChange={handleLangChange}>
              <option value="javascript">Javascript</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <button className='flex items-center bg-green-500 text-white p-2 m-4 rounded'>
              <span className='mr-2'>RUN</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4v12l12-6L4 4z" />
              </svg>
            </button>
          </div>
          <Editor lang={selectedLang}/>
        </div>

        {/* Right-Portion */}
        <div className='w-3/12 h-full bg-blue-300'>
          <div className='h-2/5 bg-slate-50'></div>
          <div className='h-3/5 bg-slate-400'></div>
        </div>
      </div>
  )
}

export default App
