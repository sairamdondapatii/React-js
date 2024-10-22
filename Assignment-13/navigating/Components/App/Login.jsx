import React, { useState } from 'react'
import { useGlobalContext } from '../Context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setIsAuth} = useGlobalContext();
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/login',{
          method: "POST",
          body: JSON.stringify(
            { email, password }
          ),
          headers: {
            "Content-type": "application/json"
          }
      })
      const data = await response.json()
      setIsAuth(true)
      if(data.token){
        navigate('/')
        toast("Wow so easy!")
      }
      if(data.error){
        setError(data.error)
        toast("Login Failed 'User Not Found'")
      }

    } catch (error) {
      console.log("Login failed:", error)
    }
  }
  return (
    <div>
      <div><h1>Login</h1></div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div style={{textAlign:'center'}}>
        <p style={{color:'red', height:'15px'}}>{error}</p>
      </div>
        <div style={{textAlign:'center'}}>
          <p>LoginWith</p>
          <p>Email: eve.holt@reqres.in</p>
          <p>Password: cityslicka</p>
          <ToastContainer />
        </div>
    </div>
  )
}

export default Login