import React from 'react'

const Form = ({  todos, setTodos,  setStatus,inputText,setInputText,
               isEditing,setIsEditing,currentTodo,setCurrentTodo }) => {
   
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler= (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed:false, id: Math.random()*1000},
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    function handleUpdateTodo(id, updatedTodo) {
       
        const updatedItem = todos.map((todo) => {
          return todo.id === id ? updatedTodo : todo;
        });
        setIsEditing(false);
        setTodos(updatedItem);
      }
    const handleEditFormSubmit=(e)=> {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
    }
    function handleEditInputChange(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
        console.log(currentTodo);
      }
  return (
      <>
      {isEditing ? (
           <div>
           <header><h1>edit todo</h1></header>
            <form onSubmit={handleEditFormSubmit}>
            <input  type="text" className="todo-input"
             onChange={handleEditInputChange}
             value={currentTodo.inputText}
             placeholder="edit text"
              />
            <button type="submit" className='todo-button'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
           </form> 
           </div> 
      ):(
          <div>
        <header><h1>Add ToDo</h1></header>
        <form>
        <input  type="text" className="todo-input"
         onChange={inputTextHandler}
         value={inputText}
          />
        <button onClick={submitTodoHandler} type="submit" className='todo-button'>
            <i className='fas fa-plus-square'></i>
        </button>
        <div className='select'>
            <select onChange={statusHandler} name="todos" className='filter-todo'>
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </div>
       </form> 
       </div>
          
      )
      }
      </>
  )
}

export default Form
