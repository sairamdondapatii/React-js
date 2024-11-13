import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,light,dark } from './action'
const App = () => {
  const counter = useSelector((store)=>store.counter)
  const isDark = useSelector((store)=>store.isDark)
  console.log(isDark)
  const dispatch = useDispatch()
  const handleInc =()=>{
    dispatch(increment(1))
  }
  const handleDec =()=>{
    dispatch(decrement(1))
  }
  const lightMode = ()=>{
    dispatch(light())
  }
  const darkMode = ()=>{
    dispatch(dark())
  }
  document.body.style.backgroundColor=isDark ? '#333':'#f0f0f0'
  document.body.style.color = isDark ? '#f0f0f0' : '#333'
  return (
    <div className='content'>
      <div>
        <button onClick={lightMode}>Switch To Light</button>
        <button onClick={darkMode}>Switch To Dark</button>
      </div>
      <h1>{counter}</h1>
      <button onClick={handleInc}>Add</button>
      <button onClick={handleDec}>Reduce</button>
    </div>
  )
}

export default App