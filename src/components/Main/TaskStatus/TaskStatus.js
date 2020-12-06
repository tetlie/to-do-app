import React from 'react';
import './TaskStatus.css'

const TaskStatus = (props) => {

    const pending = props.todos.filter(todo => todo.isCompleted === !true) // nytt array med alle ikke-completed items
    const completed = props.todos.filter(todo => todo.isCompleted === true) // nytt array med alle completed items
    const allCompleted = pending.length === 0; // boolean

    return (
            <div className={`TaskStatus ${(allCompleted) && 'taskStatusCompleted'}`}>
                <div>{(allCompleted) ?  `All caught up 🔥` : `Pending: ${pending.length}`}</div>
                <div>Completed: {completed.length}</div>
            </div>
    )
}

export default TaskStatus