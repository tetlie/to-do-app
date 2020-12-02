import React from 'react';
import './TaskStatus.css'

const TaskStatus = (props) => {

    const pending = () => props.todos.filter(el => {
            let completed = el.isCompleted;
            return completed.lenght;
    })


    const completed = () => props.todos.length


    return (
            <div className="TaskStatus">
                <div>Pending: { pending }</div>
                <div>Completed: { completed }</div>
            </div>
    )
}

export default TaskStatus