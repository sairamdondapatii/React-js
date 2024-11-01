import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import Navbar from '../Components/Navbar'


const DefaultPage = () => {
  const navigation = useNavigation()
  console.log(navigation)
  const isLoading = navigation.state === 'loading';
  return (
    <div>
        <Navbar/>
        <section className='page'>
            {isLoading? <div className='loading-container'><div className='loading'/></div> : <Outlet/>}
        </section>
    </div>
  )
}

export default DefaultPage