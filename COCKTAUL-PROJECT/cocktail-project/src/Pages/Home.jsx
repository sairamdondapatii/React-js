import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router'
import CocktailList from '../Components/CocktailList';
import SearchForm from '../Components/SearchForm';

const cocktailurl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


export async function loader({request}){
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('SearchQuery') || 'vodka';
  const response = await axios.get(`${cocktailurl}${searchTerm}`)
  return {'drinks':response.data.drinks, searchTerm}
}

const Home = () => {
  const {drinks,searchQuery} = useLoaderData()
  return (
    <>
      <SearchForm/>
      <CocktailList drinks = {drinks}/>
    </>
  )
}

export default Home