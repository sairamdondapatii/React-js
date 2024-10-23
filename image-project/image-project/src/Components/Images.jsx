import React from 'react'
import { useGlobalContext } from './Context/DarkModeContextProvider'

const Images = () => {
    const{searchvalue} = useGlobalContext();
    console.log(searchvalue)
  return (
    <div>images</div>
  )
}

export default Images