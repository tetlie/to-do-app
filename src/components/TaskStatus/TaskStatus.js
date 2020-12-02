import React from 'react';
import './TaskStatus.css'

const TaskStatus = (props) => {

    const pending = props.todos.filter(todo => todo.isCompleted === !true)
    const completed = props.todos.filter(todo => todo.isCompleted === true)

    const allCompleted = pending.length === 0;

    return (
            <div className={`TaskStatus ${(allCompleted) && 'taskStatusCompleted'}`}>
                <div>{(allCompleted) ?  `You're all caught up 🔥` : `Pending: ${pending.length}`}</div>
                <div>Completed: {completed.length}</div>
            </div>
    )
}

export default TaskStatus