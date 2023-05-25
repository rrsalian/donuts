import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DonutHome } from './components/DonutHome';
import { DonutDetails } from './components/DonutDetails';
import { Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DonutHome></DonutHome>} />
        <Route path="/donuts/:id" element={<DonutDetails></DonutDetails>} />
      </Routes>     
    </div>
  );
}

export default App;
