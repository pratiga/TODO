import React,{useState, useEffect} from 'react';
import Todo from './Todo'
import Form from './Form';

const Todolist = () => {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState(" ");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  
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
    <>
    
     <Form 
     todos={todos}
     setTodos={setTodos}
      status={status}
      setStatus={setStatus}
      inputText={inputText}
      setInputText={setInputText}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      currentTodo={currentTodo}
      setCurrentTodo={setCurrentTodo}
       />
    
    {/* // display: list of todo */}
    
    <div>
      <div className='todo-container'>
     
        <ul className='todo-list'>
    
         {filteredTodos.map((todo) => (
          <Todo 
          setTodos={setTodos}
          todos={todos}
          key={todo.id} 
          todo={todo}
          status={status}
          text={todo.text} 
          inputText={inputText}
          setInputText={setInputText}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
      />
        ))} 
          
        </ul>
      </div>
    </div>
    </>
  )
}

export default Todolist
