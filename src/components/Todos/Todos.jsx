import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import { AuthContext } from '../../contexts/AuthContext'

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
    // Load todo context
    const { todos } = useContext(TodoContext)

    // Load auth context
    const { isAuth } = useContext(AuthContext)

    return (
        isAuth ? (<div className="todo-list">
            <TodoForm />
            <ul>
                {todos.map(todo => (
                    <TodoList todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>) : (<p style={{ textAlign: 'center' }}>Not auth</p>)
    )
}

export default Todos
