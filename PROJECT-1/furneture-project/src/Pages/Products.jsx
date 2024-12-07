import React from 'react'
import { customFetch } from '../Utils'
import { ChangeLayout, Filters } from '../components';
const url = '/products'

export const loader = async ({request})=>{
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  console.log(params)
  const response = await customFetch(url,{params:params,});
  const productsData = response.data.data;
  const metaData = response.data.meta
  return {productsData, metaData,params};
}

const Products = () => {
  return (
    <section className='lg:max-w-6xl mx-auto'>
      <Filters/>
      <ChangeLayout/>
    </section>
  )
}

export default Products