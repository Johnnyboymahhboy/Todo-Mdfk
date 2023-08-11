import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Blogwebb/Home'
import NewBlog from './Blogwebb/NewBlog'
import AddNewBlog from './Blogwebb/AddNewBlog'
import EachPost from './Blogwebb/EachPost'






function App() {
  
  return (
      <div>   

      

         <Router>
            <div className='Navbar'>
                <div className='HeaderOne'>
                    <h1>Johnny's Blog</h1>
                </div>
                <div className='Links'>
                    <Link className='li' to='/'>Home</Link>
                    <Link className='li' to='/newblog' >NewBlogs</Link>
                    <Link className='li' to='/addnewblog' >Add New Blog</Link>
                  
                </div>
            </div>
            <div className='rotas'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/newblog' element={<NewBlog/>} />
              <Route path='/addnewblog' element={<AddNewBlog/>} />
              <Route path='/eachpost/:id' element={<EachPost/>} />
         
            </Routes>
            </div>
          </Router> 
           
      </div>
    )
}



export default App
