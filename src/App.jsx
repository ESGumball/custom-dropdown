import React from 'react';
import "./App.css";
import { useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState(false);
  const [state, setState] = useState("Select an item");
  const item = ["First item", "Second item", "Third item", "Fourth item", "Fifth item"];
  const handleShow = () => {
    setSelected(!selected);
  };
  const thaydoi = (a) => {
    setState(a);
    setSelected(!selected);
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
  <div className="w-full max-w-sm">
    <p
      className="flex cursor-pointer items-center justify-between rounded-full border-2 border-blue-400 bg-white px-6 py-4 text-center text-lg font-medium text-slate-800 shadow-sm transition hover:border-blue-500 hover:shadow-md"
      onClick={handleShow}
    >
      <span className="flex-1">{state}</span>
      <span className="te xt-blue-500">⌄</span>
    </p>

    {selected && (
      <ul className="mt-3 space-y-1 rounded-2xl border border-blue-100 bg-white p-2 shadow-lg">
        
          {item.map((p) => (
            <li 
            key = {p}
            onClick={() => thaydoi(p)}
            className="cursor-pointer rounded-xl bg-blue-50 px-5 py-4 font-medium text-slate-800 transition hover:bg-blue-100">
              {p}
             </li>
          ))}
       
      </ul>
    )}
  </div>
</div>
  )
}

export default App
