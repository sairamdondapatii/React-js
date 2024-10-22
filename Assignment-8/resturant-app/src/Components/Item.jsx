import React from 'react'

const Item = ({itemData}) => {
  return (
    <div className='items'>
        {itemData.map((item)=>{
            return(<div key={item.id} className='item'>
                <div className='item-container'>
                    <div className='item-left-part'>
                        <div className='item-img'>
                            <img src={item.image}/>
                        </div>
                        <div className='item-info'>
                            <h1>{item.restaurantName}</h1>
                            <p>{item.categories.join()}</p>
                            <p>Cost ₹ {item.cost_for_one} for one</p>
                            <h5>Min ₹ {item.min}</h5>
                            <h5>{item.payment.cash === false ? 'Accepts online payments only' : 'Cash on delivery availble'}</h5>
                        </div>
                    </div>
                    <div className='item-right-part'>
                        <span>{item.rating}</span>
                        <p>{item.votes} Votes</p>
                        <p>{item.reviews} Reviews</p>
                    </div>
                </div>
                <div className='item-btn'>
                    <button >Order Online › </button>
                </div>
            </div>)
        })}
    </div>
  )
}

export default Item