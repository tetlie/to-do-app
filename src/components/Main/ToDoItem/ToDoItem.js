import React from 'react';
import './ToDoItem.css';

const ToDoItem = (props) => {

    const handleKeyDown = (e, i) => {
        if (e.key === 'Enter' && props.todos[i].content !== '') {
            props.createTodoAtIndex(i);
            setTimeout(() => {
                document.forms[0].elements[i + 1].focus();
            }, 0);
        } if (e.key === 'Backspace' && props.todos[i].content === '') {
            e.preventDefault();
            props.removeTodoAtIndex(i);
            setTimeout(() => {
                if (props.todos.length > 1) {
                    (i === 0) ? document.forms[0].elements[i].focus() : document.forms[0].elements[i - 1].focus()
                }
            }, 0);
        }
    }

    return (
        props.todos.map((todo, i) => (
            <li className={`todo ${todo.isCompleted && 'todo-is-completed'}`}> {/*apply class if to do is completed*/}
                <div type="checkbox" className={'checkbox'} onClick={() => props.toggleIsCompleted(i)}>
                    {todo.isCompleted && (<span>✓</span>)}
                </div>
                <input
                    value={todo.content}
                    type="text"
                    placeholder="new todo"
                    onKeyDown={e => handleKeyDown(e, i)}
                    onChange={e => props.updateTodoAtIndex(e, i)}
                />
                <div className={'removeBtn'} onClick={() => props.removeTodoAtIndex(i)}><span>✕</span></div>
            </li>
        ))
    )
}

export default ToDoItem