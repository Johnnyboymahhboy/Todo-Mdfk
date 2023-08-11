import React, { useState, createContext, useCallback, useContext } from 'react'
import { TodoContext } from './Todo';
function TodoForm() {
  const [todoInput, setTodoInput] = useState('');
  const {setTodos, todos} = useContext(TodoContext)
  const handleSubmitTodo = () => {
    const newArr = {
      todo: todoInput,
      id: Math.floor(Math.random() * 50)
    }
    setTodos([...todos, newArr])
    setTodoInput('Add Task....')
  }


  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input 
        placeholder='Add Task....'
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={handleSubmitTodo}>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm
