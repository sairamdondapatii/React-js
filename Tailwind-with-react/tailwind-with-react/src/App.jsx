import React, { useState } from 'react'

const App = () => {
  const [color,setColor] = useState('');
  function formSubmit(e){
    // e.preventDefault();
    console.log('submit')
  }
  return (
    <div>
      <div>
        <h3 className=''>Color Generator</h3>
        <form onSubmit={formSubmit} method='GET'>
          <input type='color'  placeholder='select color' onChange={(e)=>{setColor(e.target.value)}}/>
          <input type='text' className='border-2 text-slate-400'name='color' defaultValue={color} />
          <input type='text' name='lname'/>
          <button type='submit' className='bg-blue-500 text-white rounded py-1 px-3 hover:bg-blue-600'>Submit</button>
        </form>
        <div className='w-20 h-20' style={{backgroundColor:`${color}`}}>
          <p>{color}</p>
        </div>
      </div>
    </div>
  )
}

export default App