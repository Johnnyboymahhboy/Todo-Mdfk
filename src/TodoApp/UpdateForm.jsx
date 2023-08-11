import React, { useState, createContext, useCallback, useContext } from 'react'
import { TodoContext } from './Todo';
function UpdateForm({Id}) {
  const [todoInput, setTodoInput] = useState('');
  const {setTodos, todos, setShow} = useContext(TodoContext)

  const handleUpdate = (id) => {
      const newArr = todos.map((item) => {
        return item.id === id ? {...todos, todo: todoInput, id: id} : item
      })
      setTodos(newArr)
      setShow(false)
  }


  return (
    <div className='Wholeformat'>
      <form className='formra' onSubmit={e => e.preventDefault()}>
        <input 
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={() => handleUpdate(Id)}>Update</button>
      </form>
    </div>
  )
}

export default UpdateForm