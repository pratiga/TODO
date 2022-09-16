import React, { useState, useEffect } from "react";

export default function Form({
    addTodo,
    setStatus,
    handleUpdateTodo,
    currentTodo,
    setCurrentTodo,
}) {
    const [inputText, setInputText] = useState("");
    const [optionValue, setOptionValue] = useState("");

    useEffect(() => {
        if (currentTodo) {
            setInputText(currentTodo.text);
        } else {
            setInputText("");
        }
    }, [setInputText, currentTodo]);

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (!currentTodo) {
            addTodo(inputText, optionValue);
            setInputText("");
            setOptionValue("");
        } else {
            handleUpdateTodo(currentTodo.id, inputText, optionValue);
        }
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <>
            <header>
                <h1>Add ToDo</h1>
            </header>
            <form onSubmit={submitTodoHandler}>
                <input
                    type="text"
                    className="todo-input"
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                    placeholder={"enter todo"}
                />

                <label>
                    Pick the category:
                    <select
                        value={optionValue}
                        onChange={(e) => setOptionValue(e.target.value)}
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
