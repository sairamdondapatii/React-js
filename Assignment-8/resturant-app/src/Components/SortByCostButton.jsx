import React from 'react'

const SortByCostButton = ({text,sortByCost}) => {
  return (
    <button onClick={()=> sortByCost(text.toLowerCase())}>{text}</button>
  )
}

export default SortByCostButton