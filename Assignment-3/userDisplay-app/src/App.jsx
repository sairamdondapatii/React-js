import React from 'react'
import Title from './components/Title'
import UsersCard from './components/UsersCard'
import Courses from './components/Courses'
import './App.css'

const App = () => {
  return (
    <div>
      <div className='user'>
        <Title/>
        <UsersCard name={'Sairam Dondapati'} address={'7-112, Tarakaturu Palem'} posts={0} followers={'100.20k'} avatar={'https://cdn1.iconfinder.com/data/icons/business-finance-vol-2-33/512/12-1024.png'} />
      </div>
      <Courses/>
    </div>
  )
}

export default App