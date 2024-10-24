import React from 'react'
import ToggleDarkMode from './Components/ToggleDarkMode'
import Form from './Components/Form'
import Images from './Components/Images'
import './App.css'

const App = () => {
  return (
    <div>
      <ToggleDarkMode/>
      <Form/>
      <Images/>
    </div>
  )
}

export default App