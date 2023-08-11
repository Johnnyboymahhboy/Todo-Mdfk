import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
export default function Home() {
  const [datas, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3001/blogs")
        setData(res.data)
        console.log("Mounted");
    }
    getData();

    return () => {
        console.log("Unmounted");
    }
  
  },[])

  

    
  return (
    <>
      {datas.map(el => {
        return (
          <div className='whole' onClick={() => navigate(`/eachpost/${el.id}`)}  key={el.id}>
            
              <h1 className='title'>{el.blog_title}</h1>
            <div className='body'>
            "{el.blog_body}"
            </div>
            <div className='author'>
            --{el.blog_author}--
            </div>
          </div>
          
        )
      })}
    </>
  )
}
