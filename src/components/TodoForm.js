import React, {useState} from 'react'

function TodoForm() {
    const [input, setInputs] = useState('')

    return (
        <div className="todo-form">
            <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-input"/>
            <button className="todo-button">Add Todo</button>
        </div>
    )
}

export default TodoForm
