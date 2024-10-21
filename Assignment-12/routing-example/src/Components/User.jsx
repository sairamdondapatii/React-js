import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'

const User = () => {
    const[users,setUsers] = useState([])
    
    async function fetching(){
        try {
            let response = await fetch(`https://reqres.in/api/users`)
            let data = await response.json();
            setUsers(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetching()
    },[])

  return (
    <>
        <NavBar/>
        <h1>Users</h1>
        {
            users.map((user)=>{
                return (
                    <div key={user.id}>
                        <img src={user.avatar} alt="" />
                        <Link to={`${user.id}`}>
                            <p>{user.first_name}</p>
                        </Link>
                    </div>
                )
            })
        }
    </>
  )
}

export default User