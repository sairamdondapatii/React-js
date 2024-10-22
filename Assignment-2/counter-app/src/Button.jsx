import React from 'react'

function Button({Counter,text}){
    return <button onClick={Counter}>{text}</button>
}


export default Button