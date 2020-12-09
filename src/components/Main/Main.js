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
    data && setTodos(JSON.parse(data)); // om det er data i localstorage, settes todos-arrayet i state med denne dataen
  }, []);
  
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]); // oppdaterer localStorage når det skjer endringer i state

  const createTodoAtIndex = (i) => {
    const newTodos = [...todos]; // opprett et midlertidig array, en kopi av state
    newTodos.splice(i + 1, 0, { // sett inn et nytt objekt på den aktuelle indeksen
      key: uuidv4(), // et generert nummer, fra det importerte biblioteket uuidv4 ("universally unique identifier")
      content: input ? input : '', // om det er innhold i input-feltet legges dette inn. ellers er dett en tom streng
      isCompleted: false, // er gjøremålet markert som ferdig?
      isImportant: false, // er gjøremålet markert som vitkig?
    });
    setTodos(newTodos); // sender det midlertidige arrayet inn og erstatter state
    setInput(''); // input-feltet i toppen av siden tømmes
  };

  const handleTodoIsDeleted = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  }

  const handleTodoIsChanged = (e, i) => {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value; // endre innhold i todo-item ved å redigere input-feltene
    setTodos(newTodos);
  }

  const handleTodoIsChecked = (i) => {
    const newTodos = [...todos];
    newTodos[i].isCompleted = !newTodos[i].isCompleted; // toggle isCompleted
    newTodos[i].isCompleted && newTodos.push(newTodos.splice(i, 1)[0]) // todo-item sendes til slutten av arrayet
    setTodos(newTodos);
  }

  const handleTodoIsImportant = (i) => {
    const newTodos = [...todos];
    newTodos[i].isImportant = !newTodos[i].isImportant; // toggle isImportant
    (newTodos[i].isImportant && !newTodos[i].isCompleted) && newTodos.unshift(newTodos.splice(i, 1)[0]) // todo-item sendes til starten av arrayet
    setTodos(newTodos);
  }

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
      <ClearAllTodosButton 
        todos={todos}
        setTodos={setTodos}
      />
    </main>
  );
}

export default Main;