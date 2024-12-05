import React from 'react'
import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../Utils'

export const loader = async ()=>{
  const response = await customFetch(url);
  const featuredProductsData = response.data.data
  return {featuredProductsData}
}

const url = '/products/?featured=true'
const Landing = () => {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}

export default Landing