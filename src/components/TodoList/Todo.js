import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{textDecotation: completed ? 'line-through' : 'none'}}
        >
        {text}
    </li>
);

// eslint-disable-next-line react/no-typos
Todo.PropTypes = {
    onclick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo;
