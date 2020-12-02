import React from 'react';

function AddNewTodo(props) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            createTodo(e);
        } 
    }

    const createTodo = (e) => {
        const newTodos = [...props.todos];
        newTodos.unshift({
            content: e.target.value,
            isCompleted: false,
        });
        props.setTodos(newTodos);
    }

    return (
            <div className={`todo`}>
                <input
                    value={props.todos.content}
                    placeholder="add new todo"
                    type="text"
                    onKeyDown={e => handleKeyDown(e)}
                />
                <div className={'addBtn'} onClick={(e, i) => createTodo(e, i)}><span>add</span></div>
            </div>
    )
}

export default AddNewTodo