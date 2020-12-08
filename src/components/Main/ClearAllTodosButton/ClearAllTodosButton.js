import React from 'react'
import './ClearAllTodosButton.css'

const ClearAllTodosButton = (props) => {

  const handleClearAll = () => {
    props.setTodos([])
  }

  return (
    <button 
      className="ClearAllTodosButton"
      onClick={ ()=> handleClearAll() }>
        <span>Clear all</span>
    </button>
  );
};

export default ClearAllTodosButton
