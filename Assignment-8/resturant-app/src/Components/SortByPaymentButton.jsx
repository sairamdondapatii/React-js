import React from 'react'

const SortByPaymentButton = ({text, sortByPayment}) => {
  return (
    <button onClick={()=> sortByPayment(text.toLowerCase())}>{text}</button>
  )
}

export default SortByPaymentButton