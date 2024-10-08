import React from 'react'
import Title from './components/Title'
import UsersCard from './components/UsersCard'
import Courses from './components/Courses'
import './App.css'

const App = () => {
  return (
    <div>
      <Title/>
      <UsersCard name={'Sairam Dondapati'} address={'7-112, Tarakaturu Palem'} posts={0} followers={100} />
      <Courses/>
    </div>
  )
}

export default App