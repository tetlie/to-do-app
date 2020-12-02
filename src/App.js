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
    ]);


  return (
    <div className="App">
      <Header />

      <div className="Main">
        <AddNewTodo
              todos={todos}
              setTodos={setTodos}
          />
        <form className="todo-section">
          <h2>Tasks</h2>
          <TaskStatus todos={todos}/>
          <div className="todo-list">
            <ToDoItem
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;