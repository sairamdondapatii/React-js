import React from 'react'
import './ShowFormData.css'

const ShowFormData = ({showdata}) => {
    const {firstName,lastName,email,password,phNumber,country,birthDate,marriageStatus,avatar,gender} = showdata;
  return (
    <div className='form-data'>
        <div>
            <h1>Form Data</h1>
        </div>
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Phone: {phNumber}</p>
            <p>Country: {country}</p>
            <p>Birth Date: {birthDate}</p>
            <p>Marriage Status: {marriageStatus ==='false' ? 'No' : 'Yes'}</p>
            <p>Image: {avatar}</p>
            <p>Gender: {gender}</p>
        </div>
    </div>

  )
}

export default ShowFormData