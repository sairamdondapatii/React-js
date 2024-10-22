import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {

    let links =[
        {
            path:"/login",
            text:"Login",
        },
        {
            path:"/",
            text:"Home",
        },
        {
            path:"/about",
            text:"About",
        },
        {
            path:"/contact",
            text:"Contact",
        },
        {
            path:"/products",
            text:"Products",
        },
    ]

  return (
    <div className={styles.NavBar}>
       <nav>
       {
            links.map((link)=>{
                return <Link to={link.path} key={link.path} className={styles.link}>
                {link.text}
                </Link>
            })
        }
       </nav>
    </div>
  )
}

export default NavBar