import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'


const Navbar = () => {
  return (
    <Wrapper>
        <div className='nav'>
            <span className='nav-logo'>Cocktail</span>
            <div className='nav-links'>
                <NavLink to='/' className='nav-link' >Home</NavLink>
                <NavLink to='/about' className='nav-link'>About</NavLink>
                <NavLink to='/newsletter' className='nav-link'>NewsLetter</NavLink>
            </div>
        </div>
    </Wrapper>
  )
}

export default Navbar