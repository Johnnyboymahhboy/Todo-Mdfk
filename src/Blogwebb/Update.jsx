import axios from 'axios'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import EachPost from './EachPost';


export default function UpdateForm({CloseBtn, ida , setDatass, getData,}) {
  const [blogInputs, setBlogInputs] = useState({ 
    blog_title: '',
    blog_body: '',
    blog_author: ''
  })

  
  const [error, setError] = useState(false)
  const [close, setClose] = useState(true)
  const navigate = useNavigate()
  const id = useParams()
  const ids = id.id




  const handleSubmit = async () => {
      if(!blogInputs.blog_title || !blogInputs.blog_body || !blogInputs.blog_author){
        setTimeout(() => {
           setError(false)
    
        }, 1000);
        setError(true)
      }else{
        const newarr = {
          id: ids,
          blog_title: blogInputs.blog_title,
          blog_body: blogInputs.blog_body,
          blog_author: blogInputs.blog_author
        }
        try{
            await axios.put(`http://localhost:3001/blogs/${ids}`, newarr).then((res) => {
                setDatass([newarr])
                CloseBtn(true)
            })    
        }catch(err){
          console.log(err);
        }
      
      }

  
  }


  const handleTitle = (e) => {
      setBlogInputs({...blogInputs, blog_title: e.target.value})
  }


  const handleBody = (e) => {
    setBlogInputs({...blogInputs, blog_body: e.target.value})
  }

  const handleAuthor = (e) => {
    setBlogInputs({...blogInputs, blog_author: e.target.value })
  }

  const Close = () => {
    CloseBtn(false)
  }

  
  return (
    <>
  
     
      {close &&( 
    <div className='Wholeformat'>
       
       <form className='formra' onSubmit={(e) => e.preventDefault()}>
       <h1 className='addnewh1'>Update< MdClose  cursor="pointer" onClick={Close}/></h1>
        <div className='Inputs'>
            <label>Blog Title: </label>
              <div className='title1'>
                <input
                  value={blogInputs.blog_title}
                  onChange={handleTitle}
                />
              </div>
            <label>Blog Body: </label>
              <div className='body1'>
                <textarea 
                   value={blogInputs.blog_body}
                   onChange={handleBody}
                  />
                </div>
            <label>Blog Author: </label>
              <div className='author1'>
                <input 
                   value={blogInputs.blog_author}
                   onChange={handleAuthor}
                  />
                </div>
              </div>
              {error ? <p className='alert'>Make sure to complete the input fields!!</p> : ""}
        <div className='SubmitBtn'>
          <button className='addBtn' onClick={handleSubmit}>Update</button>
        </div>
        </form>
      
    </div>
    ) }
    </>
  )
}
