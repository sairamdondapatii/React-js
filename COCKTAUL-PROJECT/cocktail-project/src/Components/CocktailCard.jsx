import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'

const CocktailCard = ({id,drink,image,alcohol,glass}) => {
  return (
    <Wrapper>
        <div className='img-container'>
            <img src={image} alt={drink} className='img' />
        </div>
        <div className='content'>
            <h4>{drink}</h4>
            <h5>{glass}</h5>
            <p>{alcohol}</p>
            <Link to={`cocktail/${id}`} className='btn'>Details</Link>
        </div>
    </Wrapper>
  )
}

export default CocktailCard