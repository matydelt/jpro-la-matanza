import './App.css';
import HomePage from './components/homepage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage />}  >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
