import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import Cart from './Components/Cart'
import SingleUser from './Components/SingleUser'

const App = () => {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/cart' element={<Cart/>} />
        <Route  path='/user' element={<User/>} />
        <Route  path='/user/:id' element={<SingleUser/>} />
      </Routes>
    </>
  )
}

export default App