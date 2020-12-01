import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList'

function App() {

  return (
    <div className="app">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;