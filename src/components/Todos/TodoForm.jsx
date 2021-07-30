import React, { useContext, useState } from 'react'
import {ThemeContext} from '../../contexts/ThemeContext'
import {TodoContext} from '../../contexts/TodoContext'
import {v4 as uuidv4} from 'uuid'

const TodoForm = () => {

    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme
    const style = isLightTheme ? light : dark

    const {addTodo} = useContext(TodoContext)

// For this component only
    const [title, setTitle] = useState('')
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id: uuidv4(),
            title,
            completed: false,
        });
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="text"
                name="title"
                placeholder="Add todo"
                onChange={handleTitleChange}
                value={title}
                required
            />
            <input type="submit" value="Add" style={style}/>
        </form>
    )
}

export default TodoForm
