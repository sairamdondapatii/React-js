import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './products.module.css'
const Products = () => {
 const [getData,setGetData] = useState([]);
  useEffect(()=>{
    productData()
  },[])

  async function productData() {
    try {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products');
      setGetData(response.data.data)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div><h1>All Products</h1></div>
      <div className={styles.items}>
        {getData.map((item)=>{
          return(
            <div key={item.id} className={styles.item}>
              <h3>{item.title}</h3>
              <h4>{item.brand}</h4>
              <p>{item.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products