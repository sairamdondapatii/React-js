import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'


export const DarkModeContext = createContext();

const getInitialMode = ()=>{
  let preferMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
  const storedMode = localStorage.getItem('darkTheem');
  if(storedMode == null){
    return preferMode;
  }
  return storedMode ==='true';

};



const DarkModeContextProvider = ({children}) => {
 
  const [isDarkMode,setIsDarkMode] = useState(getInitialMode());
  const [searchvalue,setSearchvalue] = useState('');
  function toggleDark(){
    let newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkTheem',newMode);
  }

  useEffect(()=>{
    document.body.classList.toggle('dark-mode',isDarkMode);
  },[isDarkMode])

  return (
    <DarkModeContext.Provider value={{isDarkMode,toggleDark,searchvalue,setSearchvalue}}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContextProvider


export const useGlobalContext =()=> useContext(DarkModeContext);