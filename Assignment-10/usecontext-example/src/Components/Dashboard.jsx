import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

const Dashboard = () => {
    const {logout,token} = useContext(AuthContext)
    return (
        <div>
          <h1>Welcome to the Dashboard</h1>
          <h2>Token {token}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      );
    };



export default Dashboard