import React,{ useEffect, useState } from 'react'
import CoffeeCard from './CoffeeCard'

const Coffee = () => {
  const[getDataFromDb,setGetDataFromDb] = useState([])
  // useEffect(()=>{getData()
  // })

  async function getData(){
    try {
      let response = await fetch('http://localhost:3000/coffee')
      let data = await response.json();
      console.log(data)
      setGetDataFromDb(data)
    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <>
    <button onClick={getData}>Get Coffee</button>
    {getDataFromDb.map((item)=>{
      return <CoffeeCard key={item.id} {...item} />
    })}
    </>
  )
}

export default Coffee