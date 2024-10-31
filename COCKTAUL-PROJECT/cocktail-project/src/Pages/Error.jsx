import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/404Error.svg'
import Wrapper from '../assets/wrappers/Error'
const Error = () => {
  const error = useRouteError()
  console.log(error)

  if(error.status === 404){
    return(
      <Wrapper>
          <img src={img} alt="" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for.</p>
          <Link to='/'>Back Home</Link>
      </Wrapper>

    )
  }

  return (
    <Wrapper><h3>Somthing went wrong</h3></Wrapper>
  )
}

export default Error