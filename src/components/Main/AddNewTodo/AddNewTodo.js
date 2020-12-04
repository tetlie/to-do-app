import React, { useState } from 'react';

const AddNewTodo = (props) => {
    return (
        <div className="AddNewTodo todo">
            <input
                placeholder="add new todo"
                value={props.input}
                type="text"
                onKeyDown={e => e.key === 'Enter' && props.input ? props.createTodoAtIndex() : null}
                onChange={e => props.setInput(e.target.value)}
            />
            <button
                className={'addBtn'}
                onClick={props.input ? props.createTodoAtIndex : null}>
                <span>＋</span>
            </button>
        </div>
    )
}

export default AddNewTodo