import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'


const DefaultPage = () => {
  return (
    <div>
        <Navbar/>
        <section className='page'>
            <Outlet/>
        </section>
    </div>
  )
}

export default DefaultPage