import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './components/cards';

function App() {
  const [rol, setRole] = useState([])
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path=""  element={<Login setRole={setRole} />}/>
          <Route path="home"  element={<Cards rol={rol}/>}/>
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
