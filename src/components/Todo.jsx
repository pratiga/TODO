import React from 'react'

const Todo = ({text,todo,todos,setTodos,status,inputText,setInputText,
               setCurrentTodo,currentTodo,setIsEditing }) => {
    const deleteHandler = ()=> {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const handleEditClick = (todo)=>{
    //set editing to true
    setIsEditing(true);
    setCurrentTodo({...todo })
   
    }
    const completeHandler = () => {
      setTodos(
        todos.map((item) => {
          if(item.id === todo.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        })
      )
    }
  return (
      
    <div className='todo'>
    <li className={`todo-item ${todo.completed? "completed": ""}`}>
    {text}
    </li>
      <button onClick={completeHandler} className='complete-btn'>
      <span>{status}</span>
      <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn'
        onClick={deleteHandler}
      >
      <i className='fas fa-trash'></i>
      </button>
      <button className='edit-btn'
       onClick={() => handleEditClick(todo)}
      >
      <i className='fas fa-edit'></i>
      </button>
    </div>
    
    
  )
}

export default Todo
