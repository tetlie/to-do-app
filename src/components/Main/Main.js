import React, { useState } from 'react';
import './Main.css';
import ToDoItem from './ToDoItem/ToDoItem'
import AddNewTodo from './AddNewTodo/AddNewTodo'
import TaskStatus from './TaskStatus/TaskStatus'

const Main = () => {

  const [todos, setTodos] = useState([]);

  return (
    <div className="Main">
      <AddNewTodo
        todos={todos}
        setTodos={setTodos}
      />
      <form className="todo-section">
        <h2>📄Tasks</h2>
        <TaskStatus todos={todos} />
        <ul className="todo-list">
          <ToDoItem
            todos={todos}
            setTodos={setTodos}
          />
        </ul>
      </form>
    </div>
  );
}

export default Main;