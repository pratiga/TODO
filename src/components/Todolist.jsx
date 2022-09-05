import React from 'react'
import Todo from './Todo'

const Todolist = ({ todos,setTodos, filteredTodos }) => {
  console.log(todos)
  return (
    <div>
      <div className='todo-container'>
     
        <ul className='todo-list'>
    
         {filteredTodos.map((todo) => (
          <Todo 
          setTodos={setTodos}
          todos={todos}
          key={todo.id} 
          todo={todo}
          text={todo.text} />
        ))} 
          
        </ul>
      </div>
    </div>
  )
}

export default Todolist
