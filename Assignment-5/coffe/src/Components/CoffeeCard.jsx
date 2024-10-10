import React from 'react'

const CoffeeCard = ({id, title,description,image,price}) => {
    
  return (
    <div>
      <img src={image} alt={title} />
      <p>{price}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default CoffeeCard