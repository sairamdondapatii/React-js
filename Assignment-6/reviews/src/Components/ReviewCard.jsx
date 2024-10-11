import React from 'react'

const ReviewCard = ({id,name,job,image,text}) => {
    
  return (
    <div className='reviewCard'>
        <div>
            <img src={image} alt={name} />
        </div>
        <div>
            <h2>{name}</h2>
            <p style={{color:'dodgerblue'}}>{job}</p>
            <p>{text}</p>
            <button>Suprise Me</button>
        </div>
    </div>
  )
}

export default ReviewCard