import React from 'react'

const SortButton = ({text,sortData}) => {
  return (
    <button onClick={()=>{sortData(text)}}>{text} Star </button>
  )
}

export default SortButton