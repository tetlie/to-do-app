import React from 'react';

const AddNewTodo = (props) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            createTodoAtIndexZero(e);
        }
    }

    const createTodoAtIndexZero = (e) => {
        if (e.target.value !== '')
        console.log(e);
        const newTodos = [...props.todos];
        newTodos.unshift({
            content: e.target.value,
            isCompleted: false,
        });
        props.setTodos(newTodos);
        emptyInputField(e);
    }

    const emptyInputField = (e) => {
        e.target.value = '';
    }

    return (
        <div className="AddNewTodo todo">
            <input
                placeholder="add new todo"
                type="text"
                onKeyDown={e => handleKeyDown(e)}
            />
            <button className={'addBtn'} onClick={(e) => createTodoAtIndexZero(e)}><span>＋</span></button>
        </div>
    )
}

export default AddNewTodo