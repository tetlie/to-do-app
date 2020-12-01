import React from 'react';
// import logo from './logo.svg';

function ToDoItem(props) {

    function handleKeyDown(e, i) {
        if (e.key === 'Enter') { // sjekk om return/enter-knappen blir trykket
            createTodoAtIndex(e, i); // kall funksjonen som legger til et nytt todo-objekt
        } if (e.key === 'Backspace' && props.toDo[i].content === '') { // sjekk om delete-knappen blir trykket
            e.preventDefault();
            return removeTodoAtIndex(i); // kall funksjonen som sletter det aktuelle todo-objektet
        }
    }

    function createTodoAtIndex(e, i) {
        const newTodos = [...props.toDo]; // opprett en kopi av todo-arrayet i state
        // vi oppretter et nytt todo-objekt etter det aktive todo-objektet vi returner fra
        // det er indeksen fra dette forrige objektet vi henter her
        newTodos.splice(i + 1, 0, {
            content: '',
            isCompleted: false,
        });
        props.func(newTodos); // oppdater todo-arrayet i state med den nye kopien
        // sett fokus til det nye todo-objektet
        // we add a timeout delay to the focus to wait for the state to finish updating before focusing on the newly rendered input.
        setTimeout(() => {
            document.forms[0].elements[i + 1].focus();
        }, 0);
    }

    function removeTodoAtIndex(i) {
        if (i === 0 && props.toDo.length === 1) return;
        props.func(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length))); // concat combines two arrays
        setTimeout(() => {
            if (i === 0) {
                document.forms[0].elements[i].focus()
            } else {
                document.forms[0].elements[i - 1].focus()
            }
        }, 0);
    }

    function updateTodoAtIndex(e, i) {
        const newTodos = [...props.toDo]; // opprett en kopi av todo-arrayet i state
        // vi finner det aktuelle todo-objektet med indeks
        // todo-objektets content-key blir oppdatert med verdien til event-objektet (fra input-feltet)
        newTodos[i].content = e.target.value;
        props.func(newTodos); // oppdater todo-arrayet i state med den nye kopien
    }

    function toggleTodoCompleteAtIndex(index) {
        const temporaryTodos = [...props.toDo];
        temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
        props.func(temporaryTodos);
    }

    return (
        props.toDo.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
            <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
              {todo.isCompleted && (<span>&#x2714;</span>)} {/*om todo.isCompleted er "true" vises et checkmark*/}
            </div>
              <input
                type="text"
                value={todo.content}
                // call a function when a key is pressed in the input-field, send input event and todo index
                // the funciton will check if "enter is pressed" and calls another function that creates a new todo-object in state
                onKeyDown={e => handleKeyDown(e, i)}
                // call a function when something is changed in the input-field, send input event and todo index
                // the funciton updates the todo-object in state
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))
    )
}

export default ToDoItem