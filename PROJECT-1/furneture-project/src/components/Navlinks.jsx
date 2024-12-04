import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {id:1,url:'/',text:'Home'},
    {id:2,url:'/about',text:'About'},
    {id:3,url:'/products',text:'Products'},
    {id:4,url:'/checkout',text:'Checkout'},
    {id:5,url:'/orders',text:'Orders'},
    {id:6,url:'/cart',text:'Cart'},


]

const Navlinks = () => {
  return (
    links.map((link)=>{
        return (
            <li key={link.id}><NavLink to={link.url}>{link.text}</NavLink></li>
        )
    })
  )
}

export default Navlinks