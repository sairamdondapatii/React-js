import React from 'react'
import { useGlobalContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
  const {isAuth} = useGlobalContext()

  if(!isAuth){
    return (
      <Navigate to={'/login'}/>
    )
  }
  return children;
}

export default PrivateRoute