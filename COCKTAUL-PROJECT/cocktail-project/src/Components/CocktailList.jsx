import React from 'react'
import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';

const CocktailList = ({drinks}) => {

    if(drinks == 'no data found'){
        return(
            <h3 style={{textAlign:'center'}}>No matching records found</h3>
        )
    }

    const requiredData = drinks.map((item)=>{
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item;
        return {id:idDrink,drink:strDrink,image:strDrinkThumb,alcohol:strAlcoholic,glass:strGlass}
    })
  return (
    <Wrapper>
        {requiredData.map((item)=>{
         return <CocktailCard key={item.id} {...item}/>
        })}
    </Wrapper>
  )
}

export default CocktailList