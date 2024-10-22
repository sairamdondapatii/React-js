import React from 'react'
import Title from '../Components/Title'
import Card from '../Components/Card'
import './App.css'

const App = () => {
  return (
    <div>
      <Title title={'Our Tours'}/>
      <div className='cards'>
        <Card 
        image={'../images/card-1.jpg'} 
        heading={'Best of Paris in 7 Days Tour'} 
        content={'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...'}
        btntext={'Not Intersted'} />
        <Card 
        image={'../images/card-1.jpg'} 
        heading={'Best of Paris in 7 Days Tour'} 
        content={'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...'}
        btntext={'Not Intersted'} />
        <Card 
        image={'../images/card-1.jpg'} 
        heading={'Best of Paris in 7 Days Tour'} 
        content={'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...'}
        btntext={'Not Intersted'} />
        <Card 
        image={'../images/card-1.jpg'} 
        heading={'Best of Paris in 7 Days Tour'} 
        content={'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...'}
        btntext={'Not Intersted'} />
        <Card 
        image={'../images/card-1.jpg'} 
        heading={'Best of Paris in 7 Days Tour'} 
        content={'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...'}
        btntext={'Not Intersted'} />
        <Card 
        image={'../images/card-1.jpg'} 
        heading={'Best of Paris in 7 Days Tour'} 
        content={'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...'}
        btntext={'Not Intersted'} />
      </div>
    </div>
  )
}

export default App