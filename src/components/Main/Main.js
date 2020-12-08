import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Main.css';

import ToDoItem from './ToDoItem/ToDoItem'
import AddNewTodo from './AddNewTodo/AddNewTodo'
import TaskStatus from './TaskStatus/TaskStatus'
import ClearAllTodosButton from './ClearAllTodosButton/ClearAllTodosButton'

const Main = () => {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todo-list");
    data && setTodos(JSON.parse(data)); // sets state if data from localstorage
  }, []);
  
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);

  const createTodoAtIndex = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      key: uuidv4(),
      content: input ? input : '', // om det er innhold i input-feltet legges dette inn. ellers er den tom
      isCompleted: false,
      isImportant: false,
    });
    setTodos(newTodos);
    setInput('');
  };

  const handleTodoIsDeleted = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  }

  const handleTodoIsChanged = (e, i) => {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value; // endre innhold i todo-item ved å redigere teksten
    setTodos(newTodos);
  }

  const handleTodoIsChecked = (i) => {
    const newTodos = [...todos];
    newTodos[i].isCompleted = !newTodos[i].isCompleted;
    if (newTodos[i].isCompleted) {
      newTodos.push(newTodos.splice(i, 1)[0]) // todo-item sendes til slutten av arrayet
    };
    setTodos(newTodos);
  }

  const handleTodoIsImportant = (i) => {
    const newTodos = [...todos];
    newTodos[i].isImportant = !newTodos[i].isImportant;
    if (newTodos[i].isImportant && !newTodos[i].isCompleted) {
      newTodos.unshift(newTodos.splice(i, 1)[0]) // todo-item sendes til slutten av arrayet
    };
    setTodos(newTodos);
  }

  return (
    <main className="Main">
      <div className="newTodoSection">
        <AddNewTodo
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
          createTodoAtIndex={createTodoAtIndex}
        />
      </div>
      <form className="todoListSection">
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
        {/* flytt til egen komponent */}
      </form>

      <ClearAllTodosButton 
        todos={todos}
        setTodos={setTodos}
      />


    </main>
  );
}

export default Main;