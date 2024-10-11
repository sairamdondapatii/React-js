import React, { useEffect, useState } from 'react'
import ReviewCard from './Components/ReviewCard'
import './App.css'

const App = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    getData()
  },[])
  function getData(){
    let response = fetch('http://localhost:3000/Reviews');
    response.then((response)=>{
      let data = response.json()
      return data;
    }).then((data)=>{
      setData(data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      {
        data.map((item)=>{
          return <ReviewCard key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export default App