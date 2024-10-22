import React, { useState } from 'react'

const CoffeeCard = ({id, title,description,image,price,ingredients}) => {
  const items = ingredients.map((element,index) => {
    return <li key={index}>{element}</li>
  });
   
  return (
    <div className='coffeeCard'>
      <img src={image} alt={title} />
      <div>
      <h2>{title}</h2>
      <p>₹ {price}</p>
      <p>{description}</p>
      <p>Ingredients:</p>
      <ul>{items}</ul>
      </div>
    </div>
  )
}




export default CoffeeCard