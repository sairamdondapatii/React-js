import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleUser = () => {
    const [data,setData] = useState({});
    const params = useParams();
    console.log(params)
    async function fetching(){
        try {
            let response = await fetch(`https://reqres.in/api/users/${params.id}`)
            let data = await response.json();
            setData(data.data || [])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetching()
    },[])

  return (
    <div>
        <NavBar/>
        <div>
        <h1>SingleUser</h1>
        <img src={data.avatar}/>
        <p>{data.first_name}</p>
        <Link to='/user'>
        <button>Go Back</button>
        </Link>
    </div>
    </div>
  )
}

export default SingleUser