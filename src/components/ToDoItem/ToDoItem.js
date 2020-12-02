import React from 'react';
import './ToDoItem.css';

function ToDoItem(props) {

    const handleKeyDown = (e, i) => {
        if (e.key === 'Enter') { // sjekk om return/enter-knappen blir trykket
            createTodoAtIndex(e, i); // kall funksjonen som legger til et nytt todo-objekt
        } if (e.key === 'Backspace' && props.todos[i].content === '') { // sjekk om delete-knappen blir trykket
            e.preventDefault();
            return removeTodoAtIndex(i); // kall funksjonen som sletter det aktuelle todo-objektet
        }
    }

    const createTodoAtIndex = (e, i) => {
        const newTodos = [...props.todos]; // opprett en kopi av todo-arrayet i state
        // vi oppretter et nytt todo-objekt etter det aktive todo-objektet vi returner fra
        // det er indeksen fra dette forrige objektet vi henter her
        newTodos.splice(i + 1, 0, {
            content: '',
            isCompleted: false,
        });
        props.setTodos(newTodos); // oppdater todo-arrayet i state med den nye kopien
        // sett fokus til det nye todo-objektet
        // we add a timeout delay to the focus to wait for the state to finish updating before focusing on the newly rendered input.
        setTimeout(() => {
            document.forms[0].elements[i + 1].focus();
        }, 0);
    }

    const removeTodoAtIndex = (i) => {
        if (i === 0 && props.todos.length === 1);
        props.setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length))); // concat combines two arrays
        setTimeout(() => {
            if (i === 0) {
                document.forms[0].elements[i].focus()
            } else {
                document.forms[0].elements[i - 1].focus()
            }
        }, 0);
    }

    const updateTodoAtIndex = (e, i) => {
        const newTodos = [...props.todos]; // opprett en kopi av todo-arrayet i state
        // vi finner det aktuelle todo-objektet med indeks
        // todo-objektets content-key blir oppdatert med verdien til event-objektet (fra input-feltet)
        newTodos[i].content = e.target.value;
        props.setTodos(newTodos); // oppdater todo-arrayet i state med den nye kopien
    }

    const toggleTodoCompleteAtIndex = (index) => {
        const temporaryTodos = [...props.todos];
        temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
        if (temporaryTodos[index].isCompleted) {temporaryTodos.push(temporaryTodos.splice(index, 1)[0])};
        props.setTodos(temporaryTodos);
    }

    return (
        props.todos.map((todo, i) => (
            <li className={`todo ${todo.isCompleted && 'todo-is-completed'}`}> {/*apply class if to do is completed*/}
                <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                    {todo.isCompleted && (<span>✓</span>)} {/*om todo.isCompleted er "true" vises et checkmark*/}
                </div>
                <input
                    value={todo.content}
                    type="text"
                    placeholder="add new todo"
                    // call a function when a key is pressed in the input-field, send input event and todo index
                    // the funciton will check if "enter is pressed" and calls another function that creates a new todo-object in state
                    onKeyDown={e => handleKeyDown(e, i)}
                    // call a function when something is changed in the input-field, send input event and todo index
                    // the funciton updates the todo-object in state
                    onChange={e => updateTodoAtIndex(e, i)}
                />
                <div className={'removeBtn'} onClick={() => removeTodoAtIndex(i)}><span>✕</span></div>
            </li>
        ))
    )
}

export default ToDoItem