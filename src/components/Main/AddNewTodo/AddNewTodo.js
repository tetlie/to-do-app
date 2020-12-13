import React from 'react';

const AddNewTodo = (props) => {
  return (
    <div className="AddNewTodo">
      <input
        title="Text for to-do-item"
        for="add-new-todo"
        placeholder="add new to-do"
        type="text"
        value={props.input} // dobbel-bind input til state
        onChange={e => props.setInput(e.target.value)} // dobbel-bind input til state
        onKeyDown={(e, i = -1) => e.key === 'Enter' && props.input ? props.createTodoAtIndex(i) : null} // send inn index som -1 for at den skal havne på 0
      />
      <button
        type="submit"
        tabindex="0"
        className={'AddNewTodo__addBtn'}
        onClick={props.input ? props.createTodoAtIndex : null}>
          <span>＋</span>
      </button>
    </div>
    )
}
export default AddNewTodo