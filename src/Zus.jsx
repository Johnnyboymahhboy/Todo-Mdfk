import React, { useState } from 'react'
import './index.css'
import { MyStore } from './store/MyStore'
import { MdDeleteForever, MdOutlineEditNote } from 'react-icons/md';
function Zus() {
  const [input, setInput] = useState('')
  const [updatedId, setUpdatedId]  = useState(null)
  const [updatedInput, setupdatedInput] = useState('')
  const {item, AddData, RemoveData, Update} = MyStore(state => state)
  const [error, setError] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  const handleAdd = () => {

    if(!input){
      setError(true)
      setTimeout(() => {
        setError(false)
        navigator.vibrate(1000);
      }, 1000);
      return;
    }

    const newObj = {
      Name: input,
      id: Math.floor(Math.random() * 100)
    }
    AddData(newObj)
    setInput('')
  }

  const handleRemove = (id) => {
    RemoveData(id)
  }

  const handleShowEdit = (id) => {
    setUpdatedId(id)
    const mapName = item.find(data => {
      return data.id === id
    })
    setupdatedInput('')
  }

  const handleSubmitUpdate = (id) => {
    if(!updatedInput){
      setUpdateError(true)
      setTimeout(() => {
        setUpdateError(false)
        navigator.vibrate(1000);
      }, 1000);
      return;
    }

    Update(id, updatedInput)
    setUpdatedId(null)
  }
  const handleCancelUpdate = () => {
   
    setUpdatedId(null)
  }


  console.log(item);



  return (
        <div className='MainContainer'>
          <div className='SecondContainer'>
              <h1>Todo List</h1>
              <div className='AddForm'>
                      <form className={error ? 'invalidAddForm' : 'Forms'} onSubmit={e => e.preventDefault()}>
                          <input
                          placeholder={error ? 'You need to put something in there motherfucker!': 'Enter Todo...'}
                          className='f'
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          />
                          <button className='f addBtn' onClick={handleAdd}>Add</button>
                        </form>
                </div>
             
               
                
              <div className='ListForm'>
                  {item.map((data) =>  {
                return (
                                <>
                                {updatedId === data.id ? (
                                  
                                    <form  className={updateError ? 'invalid' : 'ifForm'} onSubmit={e => e.preventDefault()}>
                                          <input
                                            className='inn'
                                            placeholder={updateError ? 'You need to change something in there motherfucker!': 'Edit...'}
                                            type="text"
                                            value={updatedInput}
                                            onChange={(e) => setupdatedInput(e.target.value)}
                                            />
                                          <button className='saveBtn' onClick={() => handleSubmitUpdate(data.id)}>Save</button>
                                          <button className='saveBtn' onClick={() => handleCancelUpdate(data.id)}>Cancel</button>
                                          
                                    </form>
                                    
                                  ) : (
                                            <div className='list'>
                                                <div className='ok'>
                                                  <ul>
                                                    <li>{data.Name}</li>
                                                    < MdDeleteForever className='btns MdButton' onClick={() => handleRemove(data.id)}  cursor="pointer"/>
                                                    <MdOutlineEditNote className='btns EditBtn' onClick={() => handleShowEdit(data.id)} cursor="pointer"/>
                                                  </ul>
                                                </div>
                                            </div>
                                  )}
                                </>
                          )
              })}
            </div>
            </div>
        </div>
  )
}


export default Zus
