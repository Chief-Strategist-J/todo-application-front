import React from 'react';
import  { useState, Dispatch } from 'react';
import './App.css';
import { default as TodoPage } from './feature/todo/presentation/todo_page';




function App() {
  

  return (
    <div className="App">
      <TodoPage currentContent="so I caa pass property using props" unused={null}></TodoPage>
    </div>
  );
}

export default App;
