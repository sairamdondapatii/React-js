import React from 'react'

const Todo = ({id,title,status,todoDelete,todoUpdate}) => {  
  return (
    <li>
        <span>{title}</span>
        <span>{status?' DONE':' NOT DONE'}</span>
        <button onClick={()=>{todoUpdate(id)}}>{status? 'undo' : 'Complete'}</button>
        <button onClick={()=>{todoDelete(id)}}>Delete</button>
    </li>
  )
}

export default Todo