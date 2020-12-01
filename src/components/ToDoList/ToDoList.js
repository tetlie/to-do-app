import React, { useState } from 'react';
import './ToDoList.css'
import ToDoItem from './ToDoItem/ToDoItem'

function ToDoList() {
  const [todos, setTodos] = useState([
    {
      content: 'click check to finish an item',
      isCompleted: true,
    },
    {
      content: 'delete an item by deleting its content',
      isCompleted: false,
    },
    {
      content: 'click enter to create a new item',
      isCompleted: false,
    }
  ]);


  return (
      <form className="todo-list">
        <ul>
          <ToDoItem
            todos={todos}
            setTodos={setTodos}
          />
        </ul>
      </form>
  );
}

export default ToDoList;