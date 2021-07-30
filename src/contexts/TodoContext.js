import React, {createContext, useState} from 'react'

export const TodoContext  = createContext()

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Todo 1', completed: true},
        { id: 2, title: 'Todo 2', completed: false },
        { id: 3, title: 'Todo 3', completed: true },
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const todoContextData = {
        todos,
        addTodo,
        deleteTodo
    }

    return (
        <TodoContext.Provider value={todoContextData}>
        {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider