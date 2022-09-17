/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Form from "./Form";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  function addTodo(todo) {
    setTodos([
      ...todos,
      { text: todo.text, option: todo.option, completed: false, id: Math.random() * 1000 },
    ]);
  }

  function handleUpdateTodo(id, updatetodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? { text: updatetodo.text, option: updatetodo.option } : todo;
    });

    setTodos(updatedItem);
    setCurrentTodo("");
  }

  function handleCompleted(todo) {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  function handleEditClick(todo) {

    setCurrentTodo({ ...todo });
    console.log(setCurrentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  return (
    <>
      <Form
        handleUpdateTodo={handleUpdateTodo}
        // status={status}
        // setStatus={setStatus}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        addTodo={addTodo}
      />

      {/* // display: list of todo */}

      <div>
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo) => (
              <Todo
                todo={todo}
                handleCompleted={handleCompleted}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todolist;
