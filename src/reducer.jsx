// import React from 'react'

export const initialState = {
    cart:[],
    wishList:[],
    quantity:1,
    totalCost:0
}
const reducer = (state = initialState,action) => {
  switch(action.type){

    case "ADD_TO_CART":

    const existsProduct = state.cart.find((item)=> item.id === action.payload.id);

        return {
            ...state,
            cart:existsProduct ? state.cart.map((item)=> item.id === action.payload.id ?
            {...item,quantity:item.quantity+1}:item
        )
            :
            [...state.cart,{...action.payload,quantity:1}],
            totalCost: state.totalCost + action.payload.price
        }
       
    
    case "REMOVE_FROM_CART":

    const existingItem = state.cart.find((item)=> item.id === action.payload.id);
        return {
            ...state,
            cart:existingItem.quantity > 1 ? 
            state.cart.map((item)=>
                item.id === action.payload.id ? {...item,quantity:item.quantity - 1}
            :item
            ) : state.cart.filter(item=>item.id !== action.payload.id),
            totalCost:  state.totalCost - existingItem.price
        }
    
    case "INCREASE_QUANTITY":
        const existItem = state.cart.find((item)=> item.id === action.payload.id);
        return {
            ...state,
            cart: state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
            totalCost:state.totalCost + existItem.price 
        }
    case "DECREASE_QUANTITY":
        const existItem2 = state.cart.find((item)=> item.id === action.payload.id);
        return {
            ...state,
            cart: existItem2.quantity > 1 ? state.cart.map((item)=> item.id === action.payload.id ? {...item,quantity:item.quantity - 1 }:item)
            :state.cart.filter((item)=> item.id !==action.payload.id),
            totalCost:existItem2.quantity > 1 ? state.totalCost - existItem2.price
            :state.totalCost - (existItem2.price * existItem2.quantity)
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
            const discountAmount = (state.totalCost * discount)/100
            return {
                ...state,
                totalCost:state.totalCost - discountAmount,
            };
    
    
    default :
    return state;
  }
}

export default reducer