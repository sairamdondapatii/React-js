import React, { useState } from 'react'
import Button from './button';

const Counter = () => {
  const [count,setCount] = useState(0);

  function incrementCounter(){
    setCount(count + 1)
  };
  function decrementCounter(){
    setCount(count - 1)
  };
  function doubleCounter(){
    setCount(count * 2)
  };

  return (
    <div>
        <div>
            <h2 style={{color:'red'}}>Counter</h2>
            <h3>{count}</h3>
        </div>
        <div>
            <Button Counter={incrementCounter} text={'+'}/>
            <Button Counter={decrementCounter} text={'-'}/>
            <Button Counter={doubleCounter} text={'double'}/>
        </div>
    </div>
  )
}




export default Counter