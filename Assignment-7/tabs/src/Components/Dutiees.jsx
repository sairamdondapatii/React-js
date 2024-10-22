import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaAnglesRight } from "react-icons/fa6";

const Dutiees = ({duties}) => {
  return (
    <div>
        {
            duties.map((item,index)=>{
                const id = uuidv4();
                return (
                    <div className='dutie' key={id}>
                        <FaAnglesRight className='job-icon' />
                        <p>{item}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Dutiees