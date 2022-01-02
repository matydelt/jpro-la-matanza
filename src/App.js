/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import HomePage from './components/homepage';
import { Route, Routes } from 'react-router';
import Sumate from './components/sumate/sumate';
import { useEffect, useState } from 'react';
import ComoParticipar from './components/comoparticipar/comoparticipar';
import Historia from './components/historia/historia';

function App() {
  const [dimension, updateDimention] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    window.addEventListener("resize", () => {
      updateDimention({
        ...dimension,
        width: window.innerWidth,
        height: window.innerHeight
      });
    })
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage dimension={dimension} />} />
        <Route path="/sumate" element={<Sumate dimension={dimension} />} />
        <Route path="/como-participar" element={<ComoParticipar dimension={dimension} />} />
        <Route path="/Historia" element={<Historia dimension={dimension} />} />
      </Routes>
    </div>
  );
}

export default App;
