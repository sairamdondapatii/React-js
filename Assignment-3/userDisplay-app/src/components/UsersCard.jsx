import React, { useState } from 'react'

function UsersCard({name,avatar,posts,followers,address}) {
    let [btnText,setBtnText] = useState('Follow');
    function changeStatus(){
        setBtnText( btnText === 'Follow' ? btnText = 'Following' : btnText = 'Follow')
    }
  return (
    <div className='userCard'>
        <img src={avatar} alt={name} style={{width: '100px', borderRadius:'50%' , backgroundColor:'blue'}} />
        <div>
            <h2 data-testid="user_name">{name}</h2>
            <p data-testid="user_address">{address}</p>
        </div>
        <div>
            <h3>Posts</h3>
            <p data-testid="user_posts">{posts}</p>
        </div>
        <div>
            <h3>Followers</h3>
            <p data-testid="user_followers">{followers}</p>
        </div>
        <button onClick={changeStatus}>{btnText}</button>
    </div>
  )
}

export default UsersCard