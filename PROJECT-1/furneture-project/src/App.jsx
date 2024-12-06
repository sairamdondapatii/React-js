import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { About, Cart, Checkout, Error, ErrorElement, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './Pages'
import { loader as LandingLoader } from './Pages/Landing'
import { loader as singleProductLoader } from './Pages/SingleProduct'
import {loader as productsLoader} from './Pages/Products'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Landing/>,
          loader:LandingLoader,
          errorElement:<ErrorElement/>,
          
        },
        {
          path:'/about',
          element:<About/>,
        },
        {
          path:'/cart',
          element:<Cart/>,
        },
        {
          path:'/checkout',
          element:<Checkout/>,
        },
        {
          path:'/orders',
          element:<Orders/>,
        },
        {
          path:'/products',
          element:<Products/>,
          loader:productsLoader,
        },
        {
          path:'/products/:id',
          element:<SingleProduct/>,
          loader:singleProductLoader,
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<Error/>,
    },
    {
      path:'/register',
      element:<Register/>,
      errorElement:<Error/>,
    },
  ],
  
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App