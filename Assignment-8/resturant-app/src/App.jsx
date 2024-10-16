import React, { useState } from 'react'
import data from './data.json'
import Item from './Components/Item';
import './App.css'
import SortButton from './Components/SortButton';
import SortByPaymentButton from './Components/SortByPaymentButton';
import SortByCostButton from './Components/SortByCostButton';


const App = () => {
  const [itemData,setItemData] = useState(data)

  // sort by rating and show 
  function sortData(value){
    let filterdData = data.filter((item)=>{
      if(item.rating >= value && item.rating < value+1){
        return item
      }
    });
    let sortedData =filterdData.sort((a, b) => b.rating - a.rating)
    setItemData(sortedData)
  }

  // sort by payment method and show 
  function sortByPayment(text){
    let filterdData = data.filter((item)=>{
      if(item.payment[text]){
        return item;
      }
      if(text === 'all'){
        return item;
      }
    });
    setItemData(filterdData)
  }

  // sort by cost and show
  
  function sortByCost(text){
    let filterdData = data.filter((item)=>{
      if(item.cost_for_one){
        return item
      }
    });
    
    if(text === 'desc'){
      let sortedData = filterdData.sort((a,b)=> b.cost_for_one - a.cost_for_one)
      setItemData(sortedData)
    }
    if(text === 'asce'){
      let sortedData = filterdData.sort((a,b)=> a.cost_for_one - b.cost_for_one)
      setItemData(sortedData)
    }
  }
  console.log('re rendered')

  return (
    <div>
      <div className='sort-btns'>
        <div className='sort-by-rating'>
          <SortButton text={1} sortData ={sortData}/>
          <SortButton text={2} sortData ={sortData}/>
          <SortButton text={3} sortData ={sortData}/>
          <SortButton text={4} sortData ={sortData}/>
        </div>
        <div className='sort-by-payment'>
          <SortByPaymentButton text={'Cash'} sortByPayment={sortByPayment}/>
          <SortByPaymentButton text={'Upi'} sortByPayment={sortByPayment}/>
          <SortByPaymentButton text={'Card'} sortByPayment={sortByPayment}/>
          <SortByPaymentButton text={'All'} sortByPayment={sortByPayment}/>
        </div>
        <div className='sort-by-cost'>
          <SortByCostButton text={'desc'} sortByCost={sortByCost}/>
          <SortByCostButton text={'asce'} sortByCost={sortByCost}/>
        </div>
      </div>
      <div>
        <p>{itemData.length} items found</p>
      </div>
      <Item itemData = {itemData}/>
    </div>
  )
}

export default App