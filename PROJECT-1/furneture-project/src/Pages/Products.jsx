import React from 'react'
import { customFetch } from '../Utils'
import { ChangeLayout } from '../components';
const url = '/products'

export const loader = async ({request})=>{
  const response = await customFetch(url);
  const productsData = response.data.data;
  const metaData = response.data.meta
  return {productsData, metaData};
}

const Products = () => {
  return (
    <section className='lg:max-w-6xl mx-auto'>
      <ChangeLayout/>
    </section>
  )
}

export default Products