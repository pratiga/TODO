import React,{useState} from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  
 
  return (
    <div className="App">
     <header><h1>ToDo List</h1></header>
     <Todolist/>
    </div>
  );
}

export default App;
