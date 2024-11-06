import React, { useState } from 'react'

const AddTodoItems = ({addTask}) => {
    const [title,setTitle] = useState(''); 
    const add = ()=>{
        addTask(title);
        setTitle('');
    }
  return (
    <div>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default AddTodoItems