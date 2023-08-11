import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Update from './Update'
import RemoveModal from './RemoveModal'

export default function EachPost() {
  const [show ,showBtn] = useState(false)
  const [showRemoves ,setShowRemoves] = useState(false)
  const [ahem, setAhem] = useState(false)
  const [datass, setDatass] = useState([])
  
  const navigate = useNavigate()
  const id = useParams()
  const ids = id.id
 

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await axios.get(`http://localhost:3001/blogs/${ids}`)
          setDatass(response.data)
          console.log("Mounted")
          
      }catch(error){
        console.log(error);
      }
    }
   
    getData()

  }, [])


  const Close = () => {
    showBtn(false)
  }

  const CsloseBtn = () => {
    setShowRemoves(false)
  }
  
  const Remove = () => {
    setAhem(true)
    axios.delete(`http://localhost:3001/blogs/${ids}`)
    navigate('/')
  }

  const showRemove = () => {
    setShowRemoves(true)    
  }

 
 

  return (
    <>
     {datass.map((el) => {
         return (
              <div className='whole'  key={el.id}>  
              <h1 className='title'>{el.blog_title}</h1>
            <div className='body' >
            "{el.blog_body}"
            </div>
            <div className='author' >
            --{el.blog_author}--
            </div>
            {show && (
            <Update CloseBtn={Close} ida={el.id}  setDatass={setDatass} datass={datass}/>
          )}
          
          {showRemoves && (
            <RemoveModal  Remove={Remove} CsloseBtn={CsloseBtn}/>
          )}
          </div>
         )
      })}
      <div className='btnUpdate'>
          <button 
          className='addBtn'
          onClick={() => showBtn(true)}
           >
            Update
          </button>
          <button 
          className='addBtn'
          onClick={showRemove}
           >
            Remove
          </button>
        </div>
        
    </>
  )
}
