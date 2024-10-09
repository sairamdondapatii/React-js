import React, { useState } from 'react'

const Card = ({image,heading,content,btntext}) => {
    console.log('re-render')
    let [text , setText] = useState('Read More')
    function changeText(){
       setText(text === 'Read More' ? text = 'Show Less' : text = 'Read More');
    }
  return (
    <div className='card'>
        <img src={image} className='image' style={{width:'352px', height:'320px'}} />
        <h3 className='heading'>{heading}</h3>
        <p className='content'>{content}</p>
        <p className='readmore' onClick={changeText}>{text}</p>
        <button  className='btn'>{btntext}</button>
    </div>
  )
}


export default Card