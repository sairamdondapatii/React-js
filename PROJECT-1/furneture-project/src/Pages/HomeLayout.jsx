import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
        <div>
            <p className='text-3xl bg-green-100 text-green-500'>Navbar in Future</p>
        </div>
        <Outlet/>
    </>
  )
}

export default HomeLayout