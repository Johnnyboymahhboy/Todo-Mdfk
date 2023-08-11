import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AddNewBlog() {
  const [blogTitle, setBlogTitle] = useState('')
  const [blogBody, setBlogBody] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alert, setAlert] = useState(false)

  
  const handlSubmit = async e => {
    e.preventDefault()
    setIsSubmitted(true)

    if(!blogTitle || !blogBody || !blogAuthor){
      setTimeout(() => {
         setAlert(false)
         return
      }, 1000);
         setAlert(true)
        setIsSubmitted(false)
        return;
    }else{
     await axios.post("http://localhost:3001/blogs", {
        blog_title: blogTitle,
        blog_body: blogBody,
        blog_author: blogAuthor
      }).then((res) => {
        console.log("Inserted successfully");
        setTimeout(() => {
          setIsSubmitted(false);
          
          setBlogTitle('')
          setBlogBody('')
          setBlogAuthor('')
        }, 1000);
      })
    }
  }

  
  return (
    <>
    
      <div className='WholeForm'>
        
        <h1 className='addnewh1'>Add New Blog</h1>
     
        <div className='Form'>
      
            <form onSubmit={handlSubmit}>
              <div className='Inputs'>
              <label>Blog Title: </label>
                <div className='title1'>
                <input
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
                </div>
                <label>Blog Body: </label>
                <div className='body1'>
                <textarea 
                  value={blogBody}
                  onChange={(e) => setBlogBody(e.target.value)}
                  />
                </div>
                <label>Blog Author: </label>
                <div className='author1'>
                <input 
                  value={blogAuthor}
                  onChange={(e) => setBlogAuthor(e.target.value)}
                  />
                </div>
              </div>
              {alert ? <p className='alert'>Make sure to complete the input fields!!</p> : ""}
              <div className='SubmitBtn'>
                {!isSubmitted && <button className='addBtn'>Add Blog</button>}
                  {isSubmitted &&  <button className='adddisableBtn' disabled>Adding Blog..</button>}
              </div>

            
            </form>
        </div>
        
      </div>
    </>
  )
}
