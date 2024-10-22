import React from 'react'
import { useGlobalContext } from '../Context/AuthContextProvider'

const Home = () => {
  const{isAuth} =  useGlobalContext()
  return (
    <div>
      <div><h1>Welcome To Home Page</h1></div>
      <div><p>{isAuth&&'Login Sucesfully'}</p></div>
      
    </div>
  )
}

export default Home