// import React from 'react'

export const initialState = {
    cart:[],
    wishList:[],
    quantity:1
}
const reducer = (state = initialState,action) => {
  switch(action.type){

    case "ADD_TO_CART":
        return {
            ...state,
            cart:[...state.cart,{...action.payload,quantity:1}]
        }
       
    
    case "REMOVE_FROM_CART":
        return {
            ...state,
            cart:state.cart.filter(item=>item.id !== action.payload)
        }
    
    case "INCREASE_QUANTITY":
        return {
            ...state,
            cart: state.cart.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        }
    case "DECREASE_QUANTITY":
        return {
            ...state,
            cart: state.cart.map(item =>
                item.id === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0),
        }
    
    case "ADD_TO_WISHLIST":
        return {
            ...state,
            wishList:[...state.wishList,action.payload],
        }
    
    case "REMOVE_WISHLIST":
        return {
            ...state,
            wishList:state.wishList.filter((item)=>item.id !== action.payload)
        }
    case 'APPLY_COUPON':
            const discount = action.payload === 'DISCOUNT10' ? 10 : 0;
            return {
                ...state,
                discount,
            };
    
    
    default :
    return state;
  }
}

export default reducer