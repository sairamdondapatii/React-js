import React, { useState } from 'react'
import Form from './Components/Form'
import ShowFormData from './Components/ShowFormData';


const App = () => {
  
  let initialObj = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus: 'false', // default
    gender: ""
};

const [formData,setFormData] = useState(initialObj);
const [formState,setFormState] = useState(false)
const [showdata,setShowData] = useState({})

function handleSubmit(e){
    e.preventDefault();
    setFormState(true) //true ---> state = false 
    setFormData(initialObj) // intialobj ----> state = formdata = {somedata}
    setShowData(formData) // formdata = {somedata} ---> state = {}
    // after re rendering state gets updated
}

function handleChange(e){
    const {name, value} = e.target;
    setFormData((prevState)=>{
        return {...prevState, [name]:value }
    })
}
  return (
    <>
    <div className='title'>
      <h1>React Form Assignment</h1>
    </div>
      <div className='form-container'>
        <Form formData={formData} handleSubmit={handleSubmit} handleChange ={handleChange}/>
        {formState && <ShowFormData showdata={showdata}  />}
      </div>
    </>
    
  )
}

export default App