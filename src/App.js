import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import CardLibro from './components/cardlibro';
import { CardGroup } from 'react-bootstrap';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Cards from './components/cards';
import Detail from './components/cardDetail';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path=""  element={<Login/>}/>
          <Route path="home"  element={<Cards/>}/>
          <Route path="home/:id"  element={<Detail/>}/>
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
