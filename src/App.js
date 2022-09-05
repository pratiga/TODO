import React,{useState} from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  
  const [todos, setTodos] = useState([])
 
  return (
    <div className="App">
     <header><h1>ToDo List</h1></header>
     <Todolist
      todos={todos} 
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;
