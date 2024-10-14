import React from 'react'

const BtnContainer = ({company,currentjob, setCurrentjob,index}) => {
  return (
    <button className={index === currentjob ? "job-btn active" : "job-btn"} onClick={()=> setCurrentjob(index)}>{company}</button>
  )
}

export default BtnContainer