import React,{ useEffect, useState } from 'react'
import CoffeeCard from './CoffeeCard'

const Coffee = () => {
  const[text,setText] = useState('Get Coffee')
  useEffect(()=>{getData()
  },[text])

  async function getData(){
    try {
      let response = await fetch('http://localhost:3000/coffee')
      let data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
    <button onClick={getData}>Get Coffee</button>
    <CoffeeCard data={getData}/>
    </>
  )
}

export default Coffee