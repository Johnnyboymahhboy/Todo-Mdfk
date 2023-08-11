import React, { useState, createContext, useCallback, useContext } from 'react'
import { TodoContext } from './Todo';
import UpdateForm from './UpdateForm'
function TodoList() {
 
  const {todos, show, setShow, setTodos} = useContext(TodoContext);

  const Remove = (id) => {
    const newArr = todos.filter((item) => {
      return item.id !== id
    })

    setTodos(newArr)
  }

  console.log(todos);
  return (
    <div>
      {todos.map((item) => {
        return <li>{item.todo}
        <button onClick={() => setShow(true)}>Edit</button>
        <button onClick={() => Remove(item.id)}>Remove</button>
        {show && <UpdateForm Id={item.id}/>}
        </li>
    
      })}


    </div>
  )
}

export default TodoList
