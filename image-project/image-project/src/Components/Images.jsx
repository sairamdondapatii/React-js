import React from 'react'
import { useGlobalContext } from './Context/DarkModeContextProvider'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}`
const Images = () => {
    const{searchvalue} = useGlobalContext();
    const response = useQuery({
      queryKey:["images",searchvalue],
      queryFn: async ()=>{
        const result = await axios.get(`${url}&query=${searchvalue}`)
        return result.data
      }
    })
    console.log(response)
    if(response.isLoading){
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
    const results = response.data.results;
    if(results.length<1){
      return(
        <div>
          <h1>No results found</h1>
        </div>
      )
    }

  return (
    <section className='image-container'>{
      results.map((item)=>{
        return <img src={item.urls.regular} alt="" key={item.id} className='img' />
      })
      }

    </section>
  )
}

export default Images