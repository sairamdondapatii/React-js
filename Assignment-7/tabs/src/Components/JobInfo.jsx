import React from 'react'
import Dutiees from './Dutiees';

const JobInfo = ({data,currentjob}) => {
    const{title,duties,dates,company} = data[currentjob];
  return (
    <div className='job-info'>
        <h1>{title}</h1>
        <span className='company-name'>{company}</span>
        <p className='job-date'>{dates}</p>
        <Dutiees duties={duties} />
    </div>
  )
}

export default JobInfo