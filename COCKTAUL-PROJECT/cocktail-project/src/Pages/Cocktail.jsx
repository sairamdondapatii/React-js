import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Cocktail';

const idUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


export const loader = async ({params})=>{
  const id = params.id;
  const response = await axios.get(`${idUrl}${id}`);
  let item = response.data.drinks[0];
  return item;
}
const Cocktail = () => {
 const item = useLoaderData();
  const {strDrinkThumb,strDrink,strCategory,strAlcoholic,strGlass,strInstructions,strIngredient1,strIngredient2,strIngredient3} = item;
  return (
    <Wrapper>
      <div className='header'>
        <Link to='/' className='btn'>Back Home</Link>
        <h3>{strDrink}</h3>
      </div>
      <div className='drink-container'>
        <div className='image-container'>
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className='drink-content'>
          <p><span>Name:</span>{strDrink}</p>
          <p><span>Catageroy:</span>{strCategory}</p>
          <p><span>Info:</span>{strAlcoholic}</p>
          <p><span>Glass:</span>{strGlass}</p>
          <p><span>Ingrediants:</span> {`${strIngredient1},${strIngredient2},${strIngredient3}`}</p>
          <p><span>Instructions:</span>{strInstructions}</p>

        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail