import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    getLocalTodos();
  }, []);
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[todos, status]);
  
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
      setFilteredTodos(todos)
      break;
    }
  }
  //save to local
  const saveLocalTodos = ()=> {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = ()=> {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  
  return (
    <div className="App">
     <header><h1>ToDo List</h1></header>
     <Form 
     inputText={inputText}
     todos={todos}
     setTodos={setTodos}
      setInputText={setInputText}
      status={status}
      setStatus={setStatus}
       />
     <Todolist
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
