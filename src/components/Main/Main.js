import "./Main.css";

import React, { useEffect, useState } from "react";

import AddNewTodo from "./AddNewTodo/AddNewTodo";
import ClearAllTodosButton from "./ClearAllTodosButton/ClearAllTodosButton";
import TaskStatus from "./TaskStatus/TaskStatus";
import ToDoItem from "./ToDoItem/ToDoItem";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todo-list");
    data && setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);

  const createTodoAtIndex = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      key: uuidv4(),
      content: input ? input : "",
      isCompleted: false,
      isImportant: false,
    });
    setTodos(newTodos);
    setInput("");
  };

  const handleTodoIsDeleted = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  const handleTodoIsChanged = (e, i) => {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  };

  const handleTodoIsChecked = (i) => {
    const newTodos = [...todos];
    newTodos[i].isCompleted = !newTodos[i].isCompleted;
    newTodos[i].isCompleted && newTodos.push(newTodos.splice(i, 1)[0]);
    setTodos(newTodos);
  };

  const handleTodoIsImportant = (i) => {
    const newTodos = [...todos];
    newTodos[i].isImportant = !newTodos[i].isImportant;
    newTodos[i].isImportant &&
      !newTodos[i].isCompleted &&
      newTodos.unshift(newTodos.splice(i, 1)[0]);
    setTodos(newTodos);
  };

  return (
    <main className="Main">
      <div className="newTodoSection" role="form" name="add-new-todo">
        <AddNewTodo
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
          createTodoAtIndex={createTodoAtIndex}
        />
      </div>
      <form className="todoListSection" name="todo-list">
        <h2>📄Tasks</h2>
        <TaskStatus todos={todos} />
        <ul className="todoList">
          <ToDoItem
            todos={todos}
            setTodos={setTodos}
            createTodoAtIndex={createTodoAtIndex}
            handleTodoIsDeleted={handleTodoIsDeleted}
            handleTodoIsChanged={handleTodoIsChanged}
            handleTodoIsChecked={handleTodoIsChecked}
            handleTodoIsImportant={handleTodoIsImportant}
          />
        </ul>
      </form>
      <ClearAllTodosButton todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default Main;
