import React from 'react';

const AddNewTodo = (props) => {

  return (
    <div className="AddNewTodo">
      <input
        placeholder="add new to-do"
        value={props.input}
          type="text"
          onKeyDown={(e, i = -1) => e.key === 'Enter' && props.input ? props.createTodoAtIndex(i) : null}
          onChange={e => props.setInput(e.target.value)}
      />
      <div
        className={'AddNewTodo__addBtn'}
        onClick={props.input ? props.createTodoAtIndex : null}>
          <span>＋</span>
      </div>
    </div>
    )
}

export default AddNewTodo