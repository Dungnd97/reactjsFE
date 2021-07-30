import React, { useContext }from 'react'
import {TodoContext} from '../../contexts/TodoContext'

const TodoList = ({ todo }) => {
    const style1 = {
        background: 'rgb(240,240,240)',
        color: 'black',
        textDecoration: 'line-through'
    }

    const style2 = {
        background: 'rgb(240,240,240)',
        color: 'black',
    }

    const style = todo.completed ? style1 : style2

    const styleButton = {
        background: 'rgb(240,240,240)',
        color: 'black',
        float: 'right',
        cursor: 'pointer',
    }

    const {deleteTodo} = useContext(TodoContext)

    return (
        <li style={style}>
            {todo.title}

            {todo.completed ?
                '' : <input
                 type="button"
                 value="Done"
                 style={styleButton}
             />}

            <input
                type="button"
                value="Delete"
                style={styleButton}
                onClick={() => deleteTodo(todo.id)}
            />
        </li>
    )
}

export default TodoList;
