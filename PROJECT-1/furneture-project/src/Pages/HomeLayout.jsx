import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'

const HomeLayout = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <section className='content-style pt-8'>
          <Outlet/>
        </section>
    </>
  )
}

export default HomeLayout