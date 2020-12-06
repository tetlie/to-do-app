import React from 'react';
import './ToDoItem.css';

const ToDoItem = (props) => {

  const handleKeyDown = (e, i) => {
    if (e.key === 'Enter' && props.todos[i].content !== '') {
      props.createTodoAtIndex(i);
      setTimeout(() => { // flytt fokus til linjen under
        document.forms[0].elements[i + 1].focus();
      }, 0);
    } if (e.key === 'Backspace' && props.todos[i].content === '') {
      e.preventDefault();
      props.removeTodoAtIndex(i);
      setTimeout(() => {
        if (props.todos.length > 1) { // flytt fokus til linjen over
          (i === 0) ? document.forms[0].elements[i].focus() : document.forms[0].elements[i - 1].focus()
        }
      }, 0);
    }
  }

  return (
    props.todos.map((todo, i) => (

      <li 
        className={`
          TodoItem 
          ${todo.isCompleted && 'TodoItem--isCompleted'} 
          ${todo.isImportant && 'TodoItem--isImportant'}
      `}>

        <div
          type="checkbox"
          className={'TodoItem__checkBox'}
          onClick={() => props.toggleIsCompleted(i)}>
          {todo.isCompleted && (<span>✓</span>)}
        </div>

        <input
          value={todo.content}
          type="text"
          placeholder="new to-do"
          onKeyDown={e => handleKeyDown(e, i)}
          onChange={e => props.updateTodoAtIndex(e, i)}
        />

        <div
          className={'TodoItem__importantBtn'}
          onClick={() => props.toggleIsImportant(i)}>
          <span>!</span>
        </div>

        <div
          className={'TodoItem__removeBtn'}
          onClick={() => props.removeTodoAtIndex(i)}>
          <span>✕</span>
        </div>

      </li>
    ))
  )
}

export default ToDoItem