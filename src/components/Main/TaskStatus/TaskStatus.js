import React from 'react';
import styled from 'styled-components';

const TaskStatus = (props) => {

  const pendingTodos = props.todos.filter(todo => todo.isCompleted === !true) // nytt array med alle ikke-completed items
  const completedTodos = props.todos.filter(todo => todo.isCompleted === true) // nytt array med alle completed items
  const allCompleted = pendingTodos.length === 0;

  const Statusbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem;
    padding: 0.5em;
    border: 2px solid ${!allCompleted ? "rgb(226, 73, 55)" : "rgb(43, 164, 37)"}; 
    border-radius: 0.5em;
    width: 100%;
    min-width: 330px;
    max-width: 500px;
  `;

  return (
    <Statusbar>
      <div>{(allCompleted) ?  `All caught up 🔥` : `Pending: ${pendingTodos.length}`}</div>
      <div>Completed: {completedTodos.length}</div>
    </Statusbar>
  )
}

export default TaskStatus