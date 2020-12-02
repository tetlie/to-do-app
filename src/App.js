import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import ToDoItem from './components/ToDoItem/ToDoItem'
import AddNewTodo from './components/ToDoItem/AddNewTodo/AddNewTodo'
import TaskStatus from './components/TaskStatus/TaskStatus'
import Footer from './components/Footer/Footer'

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'press enter to create a new item',
      isCompleted: false,
    },
    {
      content: 'delete an item by deleting its content',
      isCompleted: false,
    },
    {
      content: 'click check to finish an item',
      isCompleted: true,
    }
  ]);

  return (
    <div className="App">
      <Header />

      <div className="Main">
        <AddNewTodo
              todos={todos}
              setTodos={setTodos}
          />
        <form className="todo-list">
          <h2>Tasks</h2>
          <TaskStatus todos={todos}/>
          <ul>
            <ToDoItem
              todos={todos}
              setTodos={setTodos}
            />
          </ul>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;