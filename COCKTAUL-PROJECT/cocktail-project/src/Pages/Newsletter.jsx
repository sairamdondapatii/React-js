import React from 'react'
import Wrapper from '../assets/wrappers/Newsletter'
import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const newsLetterUrl =  "https://www.course-api.com/cocktails-newsletter";
export const action = async ({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
 try {
  const response = await axios.post(newsLetterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  
 } catch (error) {
  console.log(error)
  toast.error(error.message,{
    position:'top-center'
  })
 }
  return null;
}

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  console.log(navigation)
  return (
    <Wrapper>
        <Form method='POST'  className='form'>
          <h3 className='title'>Our Newsletter</h3>
          <div className='form-row'>
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" id='name' name='name' className='form-input' defaultValue='Dondapati' required/>
          </div>
          <div className='form-row'>
            <label htmlFor="lastName" className='form-label'>Last Name</label>
            <input type="text" id='lastName' name='lastName' className='form-input' defaultValue='Sai Ram' required />
          </div>
          <div className='form-row'>
            <label htmlFor="email" className='form-label'>email</label>
            <input type="email" id="email" name='email' className='form-input' defaultValue='test@test.com'  required />
          </div>
          <button type='submit' className='btn btn-block' disabled={isSubmitting}>{isSubmitting? 'Submitting...' : 'Submit'}</button>
        </Form>
    </Wrapper>
  )
}

export default Newsletter