import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './Pages'

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
        },
        {
          path:'/singleproduct',
          element:<SingleProduct/>,
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
  ]
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App