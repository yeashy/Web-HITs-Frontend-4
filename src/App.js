import './App.css';
import News from './News';
import ToDoList from './ToDoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<News />}></Route>
        <Route path="/ToDoList" element={<ToDoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
