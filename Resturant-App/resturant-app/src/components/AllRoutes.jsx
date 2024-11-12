import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '..//pages/Home'
import AddResturant from '..//pages/AddResturant'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addresturant' element={<AddResturant/>}/>
    </Routes>
  )
}

export default AllRoutes