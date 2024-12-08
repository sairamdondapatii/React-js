import React, { useState } from 'react'
import { BsFillMoonFill,BsFillSunFill, BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';
import { useSelector } from 'react-redux';

const themes = {
    winter:'winter',
    dracula:'dracula',
}
const getTheme = localStorage.getItem('theme') || themes.winter;
document.documentElement.setAttribute('data-theme',getTheme)
const Navbar = () => {
    const [theme, setTheme] = useState(getTheme)
    const handleTheme = ()=>{
        const {winter,dracula} = themes
        const newTheme = theme === winter ? dracula :winter;
        document.documentElement.setAttribute('data-theme',newTheme)
        localStorage.setItem('theme',newTheme)
        setTheme(newTheme)
    }
    const cartDetails = useSelector((state)=>state.cartState)
  return (
    <nav className='bg-base-300 '>
        <div className='navbar content-style'>
            <div className="navbar-start">
                <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl'>Store</NavLink>
                <div className='dropdown'>
                    <label className='btn btn-ghost lg:hidden'>
                        <FaBarsStaggered tabIndex={0} className='h-6 w-6'/>
                    </label>
                    <ul className='menu w-screen lg:hidden dropdown-content bg-base-100 z-[1] shadow-sm' tabIndex={0}>
                        <Navlinks/>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal' >
                    <Navlinks/>
                </ul>
            </div>
            <div className="navbar-end px-4">
                <label className="swap swap-rotate px-4">
                    <input type="checkbox" onChange={handleTheme} />
                    <BsFillSunFill className='swap-on h-6 w-6'/>
                    <BsFillMoonFill className='swap-off h-6 w-6'/>
                </label>
                <div className="indicator pl-2">
                    <span className="indicator-item badge badge-xs badge-primary text-xs">{cartDetails.numberOfItemsInCart}</span>
                    <NavLink to='/cart' ><BsCart3 className='h-6 w-6'/></NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar