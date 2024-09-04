import React from 'react';
import './App.css';
import { default as TodoPage } from './feature/todo/presentation/todo_page';
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme();


function App() {
  

  return (
    <div className="App">
      <TodoPage></TodoPage>
    </div>
  );
}

export default App;
