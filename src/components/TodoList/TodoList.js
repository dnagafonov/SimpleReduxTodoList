import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {toggleTodo} from "../actions";

const TodoList = ({todos, ontoggle}) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
        ))}
    </ul>
);

// eslint-disable-next-line react/no-typos
TodoList.PropTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
        ).isRequired,
    toggleTodo: PropTypes.func.isRuquired
}

export default TodoList;