import React from 'react'
import { BsFillMoonFill, BsFillSunFill, BsSunFill } from "react-icons/bs";
import { useGlobalContext } from './Context/DarkModeContextProvider'

const ToggleDarkMode = () => {
    const{isDarkMode,toggleDark} = useGlobalContext();

  return (
    <div className='toggle-container'>
        {isDarkMode?
        <button onClick={toggleDark} title='switch to light mode' className='toggle-btn'><BsFillMoonFill  style={{color:'#f0f0f0'}} className='toggle-icon'/></button> :
        <button onClick={toggleDark} title='switch to dark mode' className='toggle-btn'><BsSunFill className='toggle-icon'/></button>}    </div>
  )
}

export default ToggleDarkMode