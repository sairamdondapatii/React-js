import React, { useContext, useState } from 'react'
import { createContext } from "react";

const AuthContext = createContext();


const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState(false)

    const login = ()=>{
        setIsAuth(true)
    }

    const logout = ()=>{
        setIsAuth(false)
    }
    
  return (
    <AuthContext.Provider value={{isAuth,login,logout,setIsAuth}} > 
       {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useGlobalContext = ()=>{
    return useContext(AuthContext);
}