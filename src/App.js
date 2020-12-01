import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem/ToDoItem'

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ]);

  
  return (
    <div className="app">
      <div className="header">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <h1>Din to-do liste</h1>
        <p>Trykk enter for å legge til et nytt element</p>
        <p>Fjern innholdet i elementet for å slette det</p>
      </div>
      <form className="todo-list">
        <ul>
        <ToDoItem
          toDo={todos}
          func={setTodos}
        />
        </ul>
      </form>
    </div>
  );
}

export default App;