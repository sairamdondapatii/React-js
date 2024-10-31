import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { DefaultPage,Home,About,Newsletter,Cocktail,Error } from './Pages/index';
import {loader as landingLoader} from './Pages/Home'
import {loader as singleCocktailLoader} from './Pages/Cocktail';
import {action as newsLetterAction} from './Pages/Newsletter'

const router = createBrowserRouter([
  {
    path:'/',
    element:<DefaultPage/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        errorElement:<h2 style={{textAlign:'center'}}>Something went wrong...</h2>,
        loader:landingLoader,
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'newsletter',
        element:<Newsletter/>,
        action:newsLetterAction,
      },
      {
        path:'cocktail/:id',
        errorElement:<h2 style={{textAlign:'center'}}>There Was An Error...</h2>,
        loader:singleCocktailLoader,
        element:<Cocktail/>,
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App