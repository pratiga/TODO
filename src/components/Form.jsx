import React, { useState } from "react";

export default function Form({
  addTodo,
  setStatus,
  handleUpdateTodo,
  currentTodo,
  setCurrentTodo,
}) {
  const [todo, setTodo] = useState(currentTodo ? currentTodo : { text: 'enter text', option: '', id: Math.random() * 1000 })

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!currentTodo) {
      addTodo(todo);
      setTodo({ text: "enter text", value: "" });
    } else {
      handleUpdateTodo(currentTodo.id, todo);
      setTodo("");
    }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const todoHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    const value = e.target.value;
    const name = e.target.name;

    setTodo((preValue) => {
      if (name === "text") {
        return {
          text: value,
          option: preValue.option,
        };
      } else if (name === "option") {
        return {
          text: preValue.text,
          option: value,
        }
      }
    })
  }

  return (
    <>
      <header>
        <h1>Add ToDo</h1>
      </header>
      <form onSubmit={submitTodoHandler}>
        <input
          type="text"
          name="text"
          className="todo-input"
          onChange={todoHandler}
          value={todo.text}

        />

        <label>
          Pick the category:
          <select
            name="option"
            value={todo.option}
            onChange={todoHandler}
          >

            <option value="Work">Work</option>
            <option value="Home">Home</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button type="submit" className="todo-button">
          {!currentTodo ? "Add Todo" : "Edit Todo"}
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
}
