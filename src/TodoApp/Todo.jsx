import React, { useState, createContext, useCallback } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
export const TodoContext = createContext(null);

function Todo() {
  const [todos, setTodos] = useState([{todo: "Work Out", id: 1}]);
  const [show, setShow] = useState(false);
  return (

      <TodoContext.Provider value={{todos, setTodos, show, setShow}}>
        <div>
          <TodoList/>
          <TodoForm/>
        </div>
      </TodoContext.Provider>

  )
}

export default Todo
