import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatedPrice } from '../Utils'

const Products = () => {
    const {featuredProductsData} = useLoaderData()
  return (
    <div className='p-16 pt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {featuredProductsData.map((product)=>{
            const {price,image,title} = product.attributes;
            return <Link to={`/products/${product.id}`} key={product.id} className='card w-full shadow-xl hover:shadow-2xl'>
                <figure className='px-3 pt-3'>
                    <img src={image} className='h-64 rounded-xl w-full object-cover' />
                </figure>
                <div className='card-body items-center'>
                    <h2 className='card-title tracking-wider text-primary capitalize'>{title}</h2>
                    <span className='text-secondary'>{formatedPrice(price)}</span>
                </div>
            </Link>
        })}
    </div>
  )
}

export default Products