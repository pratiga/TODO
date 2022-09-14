import React,{useState} from 'react';


export default function Form({addTodo,setStatus, handleUpdateTodo
              ,currentTodo,setCurrentTodo }) {
const [inputText, setInputText] = useState(" ");
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler= (e) =>{
        e.preventDefault();
        addTodo(inputText)
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
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
      {currentTodo ? (
           <div>
           <header><h1>edit todo</h1></header>
            <form >
            <input  type="text" className="todo-input"
             onChange={handleEditInputChange}
             value={currentTodo.inputText}
             placeholder={currentTodo.text}
              />
            <button type="submit" className='todo-button'
                onClick = {handleEditFormSubmit} >
                <i className='fas fa-plus-square'></i>
            </button>
            <button type="submit" className='todo-button'
                onClick={()=> setCurrentTodo("")}>
            <i className='fas fa-minus-square'></i>
            </button>
            <div className='select'>
            </div>
           </form> 
           </div> 
      ):(
          <div>
        <header><h1>Add ToDo</h1></header>
        <form onSubmit={submitTodoHandler}>
        <input  type="text" className="todo-input"
         onChange={inputTextHandler}
         value={inputText}
          />
        <button  type="submit" className='todo-button'>
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

