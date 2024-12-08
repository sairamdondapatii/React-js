import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'

const defaultState = {
    cartItem:[],
    numberOfItemsInCart:0,
    carTotal:0,
    shipping:500,
    tax:0,
    orderTotal:0,
}

const cartSlice = createSlice({
    name:'car',
    initialState:defaultState,
    reducers:{
        addItem:(state,action)=>{
            const {product} = action.payload;
            const item = state.cartItem.find((i)=>{
                return i.cartID === product.cartID
            })
            if(item){
                item.quantity += product.quantity;
            }else{
                state.cartItem.push(product);
            }
            state.numberOfItemsInCart += product.quantity;
            state.carTotal += product.price * product.quantity;
            state.tax = 0.1 * state.carTotal
            state.orderTotal = state.carTotal + state.shipping + state.tax;
            localStorage.setItem('cartData',JSON.stringify(state))
            toast.success("Item added to cart", {
                position: "bottom-left"
              });
        },
        clearCart:(state)=>{},
        removeItem:(state,action) =>{},
        editItem: (state,action)=>{},
    }
})
export const {addItem,clearCart,removeItem,editItem} = cartSlice.actions;
export default cartSlice.reducer;