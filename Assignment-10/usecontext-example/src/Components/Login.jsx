import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

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
            login(data.token)
        } catch (error) {
            console.log("Login failed:", error)
        }
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
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
        <div>
            <p>LoginWith</p>
            <p>Email: eve.holt@reqres.in</p>
            <p>Password: cityslicka</p>
        </div>
    </>
  );
};

export default Login;
