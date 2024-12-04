import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

const Register = () => {
  return (
    <div className='h-screen grid place-items-center'>
        <Form method='POST' className='card w-96 bg-base-100 shadow-lg  gap-y-3 p-8'> 
            <h1 className='text-center text-4xl font-bold'>Register</h1>
            <FormInput label='Name' name='name'  type='text' />
            <FormInput label='Email' name='email'  type='text' />
            <FormInput label='Password' name='password'  type='password' />
            <FormInput label='Re-type Password' name='Cpassword'  type='password' />
            <div className=' mt-3 flex justify-end'>
            <SubmitBtn text='Submit' block='btn-block'/>
            </div>
            <p className='text-center'>Already a member ? <Link to='/login' className='link link-primary link-hover capitalize'>login</Link></p>
        </Form>
    </div>
  )
}

export default Register