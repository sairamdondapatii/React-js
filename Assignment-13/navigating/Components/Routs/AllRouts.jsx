import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../App/Login'
import Home from '../App/Home'
import About from '../App/About'
import Contact from '../App/Contact'
import Products from '../App/Products'
import PrivateRoute from './PrivateRoute'

const AllRouts = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/products' element={<PrivateRoute>
        <Products/>
      </PrivateRoute>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  )
}

export default AllRouts