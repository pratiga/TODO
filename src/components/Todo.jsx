import React from 'react'

const Todo = ({todo,handleCompleted,handleEditClick,handleDeleteClick}) => {
 
    
  return (
    <>
    <div>
    <h2>Category:  {todo.value}</h2>
  </div>
    <div className='todo'>
    <li className={`todo-item ${todo.completed? "completed": ""}`}>
    {todo.text}
     </li>
    
      <button onClick={() => handleCompleted(todo)}className='complete-btn'>
      <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn'
        onClick={() => handleDeleteClick(todo.id)}
      >
      <i className='fas fa-trash'></i>
      </button>
      <button className='edit-btn'
       onClick={() => handleEditClick(todo)}
      >
      <i className='fas fa-edit'></i>
      </button>
    </div>
    
    </>
  )
}

export default Todo