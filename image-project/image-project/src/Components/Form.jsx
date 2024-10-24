import React from 'react'
import { useGlobalContext } from './Context/DarkModeContextProvider';

const Form = () => {
    const {setSearchvalue} = useGlobalContext()
    function handlesubmit(e){
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        setSearchvalue(searchValue);
        e.target.elements.search.value = '';
    }

  return (
    <div className='form-container'>
        <div className='title'>
            <h1>Images</h1>
        </div>
        <form onSubmit={handlesubmit}>
            <input type="text" name="search" id="search" placeholder='search for images ...' />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Form