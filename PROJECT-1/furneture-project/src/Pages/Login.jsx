import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen grid place-items-center'>
        <Form method='POST' className='card w-96 bg-base-100 shadow-lg  gap-y-3 p-8'> 
            <h1 className='text-center text-4xl font-bold'>Login</h1>
            <FormInput label='Email' name='identifier' defaultValue='test@test.com' type='text' />
            <FormInput label='Password' name='identifier' defaultValue='secret' type='password' />
            <div className='flex justify-evenly mt-3'>
            <SubmitBtn text='Login'/>
            <button type='button' className='btn btn-primary text-lg'>Guest User</button>
            </div>
            <p className='text-center'>Not a member yet? <Link to='/register' className='link link-primary link-hover capitalize'>Create account</Link></p>
        </Form>
    </div>
  )
}

export default Login