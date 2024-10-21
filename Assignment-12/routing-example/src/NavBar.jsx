import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const links =[
        {
            path:'/',
            text:'Home'
        },
        {
            path:'/about',
            text:'About'
        },
        {
            path:'/cart',
            text:'Cart',
        },
        {
            path:'/user',
            text:'User',
        }
    ]
    const defaultStyle = {
        color:'black',
        textDecoration:'none',
        fontSize:'26px',
        fontWeight:'bold',
    }
    const activeStyle ={
        color:'green',
        textDecoration:'none',
        fontSize:'26px',
        fontWeight:'bold',
    }
  return (
    <div style={{display:'flex',gap:'20px',}}>
        {
            links.map((link)=>{
                return <NavLink to={link.path} key={link.path} style={({isActive})=>{
                    return isActive ? activeStyle : defaultStyle;
                }}>
                    {link.text}
                </NavLink>
            })
        }
    </div>
  )
}

export default NavBar