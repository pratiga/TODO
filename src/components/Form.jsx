import React,{useState} from 'react';


export default function Form({addTodo,setStatus, handleUpdateTodo
              ,currentTodo,setCurrentTodo }) {
const [inputText, setInputText] = useState("");
const [optionValue, setOptionValue] = useState("")
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler= (e) =>{
        e.preventDefault();
        addTodo(inputText,optionValue)
        setInputText("");
        setOptionValue("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
   
    const handleEditFormSubmit=(e)=> {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
    }
     function handleEditInputChange(e) {
         setCurrentTodo({ ...currentTodo, text: e.target.value});
        console.log(currentTodo);
       }
       function handleEditOption(e) {
        setCurrentTodo({ ...currentTodo, value: e.target.value});
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
             value={currentTodo.text}
             placeholder={currentTodo.text}
              />
              <label>
          Edit the category:
          <select  value= {currentTodo.value} onChange={handleEditOption}>
            <option value="Work">Work</option>
            <option value="Home">Home</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
        </label>
          
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
         placeholder={"enter todo"}
          />
          
          <label>
          Pick the category:
          <select  value={optionValue} onChange={(e) => setOptionValue(e.target.value)}>
          <option value="Work">Work</option>
            <option value="Home">Home</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
        </label>
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

