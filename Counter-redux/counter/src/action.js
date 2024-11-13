export const increment = (payload)=>{
    return{type:'ADD',payload}
}
export const decrement = (payload)=>{
    return{type:'SUB',payload}
}
export const light = ()=>{
    return{type:'LIGHT',payload:false}
}
export const dark = ()=>{
    return{type:'DARK',payload:true}
}