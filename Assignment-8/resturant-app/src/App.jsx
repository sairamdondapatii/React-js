import React, { useState } from 'react'
import data from './data.json'
import Item from './Components/Item';
import './App.css'

const App = () => {
  const [itemData,setItemData] = useState(data)
  return (
    <div>
      <Item itemData = {itemData}/>
    </div>
  )
}

export default App