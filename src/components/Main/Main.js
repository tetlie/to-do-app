import React, { useState } from 'react';

import './Main.css';

import ToDoItem from './ToDoItem/ToDoItem'
import AddNewTodo from './AddNewTodo/AddNewTodo'
import TaskStatus from './TaskStatus/TaskStatus'

const Main = () => {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([]);

  const createTodoAtIndex = (i = 0) => {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: input ? input : '',
      isCompleted: false,
      isImportant: false,
    });
    setTodos(newTodos);
    setInput('');
  }

  const removeTodoAtIndex = (i) => {
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
  }

  const updateTodoAtIndex = (e, i) => {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  const toggleIsImportant = (i) => {
    const temporaryTodos = [...todos];
    temporaryTodos[i].isImportant = !temporaryTodos[i].isImportant;
    if (temporaryTodos[i].isImportant && !temporaryTodos[i].isCompleted) {
        temporaryTodos.unshift(temporaryTodos.splice(i, 1)[0])
    };
    setTodos(temporaryTodos);
  }

  const toggleIsCompleted = (i) => {
    const temporaryTodos = [...todos];
    temporaryTodos[i].isCompleted = !temporaryTodos[i].isCompleted;
    if (temporaryTodos[i].isCompleted) {
        temporaryTodos.push(temporaryTodos.splice(i, 1)[0])
    };
    setTodos(temporaryTodos);
  }

  return (
    <div className="Main">
      <AddNewTodo
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        createTodoAtIndex={createTodoAtIndex}
      />
      <form className="todo-section">
        <h2>📄Tasks</h2>
        <TaskStatus todos={todos} />
        <ul className="todo-list">
          <ToDoItem
            todos={todos}
            setTodos={setTodos}
            createTodoAtIndex={createTodoAtIndex}
            removeTodoAtIndex={removeTodoAtIndex}
            updateTodoAtIndex={updateTodoAtIndex}
            toggleIsCompleted={toggleIsCompleted}
            toggleIsImportant={toggleIsImportant}
          />
        </ul>
      </form>
    </div>
  );
}

export default Main;