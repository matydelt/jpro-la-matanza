/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import HomePage from './components/homepage';
import { Route, Routes } from 'react-router';
import Sumate from './components/sumate/sumate';
import { useEffect, useState } from 'react';
import ComoParticipar from './components/comoparticipar/comoparticipar';
import Historia from './components/historia/historia';
import Positivismo from './components/pilares/positivismo';
import Cercania from './components/pilares/cercania';
import Futuro from './components/pilares/futuro';
import QuePensamos from './components/quepensamos/quepensamos';
import Secretarias from './components/secretarias/secretarias';
import Nosotros from './components/nosotros/nosotros';
import QueHacemos from './components/quehacemos/quehacemos';

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
        <Route path="/Futuro" element={<Futuro dimension={dimension} />} />
        <Route path="/Cercania" element={<Cercania dimension={dimension} />} />
        <Route path="/Positivismo" element={<Positivismo dimension={dimension} />} />
        <Route path="/que-pensamos" element={<QuePensamos dimension={dimension} />} />
        <Route path="/Nuestras-Secretarias" element={<Secretarias dimension={dimension} />} />
        <Route path="/Representantes" element={<Nosotros dimension={dimension} />} />Que-Estamos-Haciendo
        <Route path="/Que-Estamos-Haciendo" element={<QueHacemos dimension={dimension} />} />
      </Routes>
    </div>
  );
}

export default App;
