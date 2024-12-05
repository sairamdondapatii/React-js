import React, { useState } from 'react'
import { customFetch, formatedPrice } from '../Utils'
import { Link, useLoaderData } from 'react-router-dom'


export const loader = async ({params})=>{
  const response = await customFetch(`/products/${params.id}`)
  const products = response.data.data
  return{products}
}
const SingleProduct = () => {
    const {products} = useLoaderData()
    const {price,image,title,description,colors,company} = products.attributes;
    const [productColor,setProductColor] = useState(colors[0])
    const [quantity,setQuantity] = useState(1)
  return (
    <section className='p-16'>
      <div className='text-md breadcrumbs'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </div>
      <div className='mt-6 grid lg:grid-cols-2 lg:max-w-6xl mx-auto gap-y-6 lg:gap-x-16'>
        <div>
          <img src={image} className='h-72 lg:h-96 rounded-xl w-96 lg:w-full object-cover' />
        </div>
        <div>
          <h1 className='text-3xl capitalize font-bold'>{title}</h1>
          <p className='text-xl text-neutral-content font-bold'>{company}</p>
          <p className='mt-6 text-xl'>{formatedPrice(price)}</p>
          <p className='mt-6 leading-8'>{description}</p>
        </div>
        <div>
          <h4 className='text-xl'>Colors/Variants</h4>
          <div className='mt-2'>
            {colors.map((color)=>{
              return (
              <button 
                type='button' 
                key={color} 
                className={`badge w-10 h-6 mr-2 ${color === productColor && "border-2 border-secondary"}`} 
                style={{backgroundColor:color}} 
                onClick={()=> setProductColor(color)}>
              </button>)
            })}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default SingleProduct;