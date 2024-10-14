import React, { useState } from 'react'
import { useEffect } from 'react';
import BtnContainer from './Components/BtnContainer';
import JobInfo from './Components/JobInfo';
import './App.css'

const App = () => {

  const [loading,setLoading] = useState(true);
  const [data,setData] = useState([]);
  const [currentjob,setCurrentjob] =useState(0);

  const dataUrl = 'https:/www.course-api.com/react-tabs-project';
  useEffect(()=>{
    fetching();
  },[]);


  const fetching = async function() {
    try {
      let response = await fetch(dataUrl)
      let data = await response.json()
      setData(data);
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  if(loading){
    return(
      <div>
        <h1>Loading....</h1>
      </div>
    )
  };
  return (
    <div className='tabs-container'>
      <div className='btn-container'>
        {
          data.map((item,index)=>{
            return <BtnContainer key={item.id} index={index} company={item.company} currentjob={currentjob} setCurrentjob={setCurrentjob} />
          })
        }
      </div>
      <JobInfo data={data} currentjob={currentjob}/>
    </div>
  )
}

export default App