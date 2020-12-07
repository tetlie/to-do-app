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
      props.handleTodoIsDeleted(i);
      setTimeout(() => { // flytt fokus til linjen over
        if (props.todos.length > 1) { // om det er flere enn ett item
          (i === 0) ? document.forms[0].elements[i].focus() : document.forms[0].elements[i - 1].focus()
        }
      }, 0);
    }
  }

  return (
    props.todos.map((todo, i) => (

      <li 
        key={todo.key}
        className={`
          TodoItem 
          ${todo.isCompleted && 'TodoItem--isCompleted'} 
          ${todo.isImportant && 'TodoItem--isImportant'}
      `}>

        <div
          type="checkbox"
          className={'TodoItem__checkBox'}
          onClick={() => props.handleTodoIsChecked(i)}>
          {todo.isCompleted && (<span>✓</span>)}
        </div>

        <input
          type="text"
          placeholder="new to-do"
          value={todo.content} // double-bind to state
          onChange={e => props.handleTodoIsChanged(e, i)} // double-bind to state
          onKeyDown={e => handleKeyDown(e, i)}
        />

        <div
          className={'TodoItem__importantBtn'}
          onClick={() => props.handleTodoIsImportant(i)}>
          <span>!</span>
        </div>

        <div
          className={'TodoItem__removeBtn'}
          onClick={() => props.handleTodoIsDeleted(i)}>
          <span>✕</span>
        </div>

      </li>
    ))
  )
}

export default ToDoItem