import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = () => {
    const navigation = useNavigation();
    const isNavigating = navigation.state === 'loading';
  return (
    <Wrapper>
        <Form className='form'>
            <input type="text" className='form-input' name='SearchQuery' defaultValue='vodka' />
            <button type='submit' className='btn'>{isNavigating?'Searching..': 'search'}</button>
        </Form>
    </Wrapper>
  )
}

export default SearchForm