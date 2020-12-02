import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="app">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;