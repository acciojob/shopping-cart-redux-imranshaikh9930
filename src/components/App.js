
import React,{} from "react";
import './../styles/App.css';
import { useEffect, useReducer } from "react";
import reducer, { initialState } from "../reducer";

const App = () => {
 const [state,dispatch] =  useReducer(reducer,initialState);
 
  const products = [
    {id:1,name:"Tshirt",price:150,address:"Railway Station"},
    {id:2,name:"Jacket",price:150,address:"Bus stand"}
  ]

  const addToCart = (product)=>{
    dispatch({type:"ADD_TO_CART",payload:product})
  };
  const removeCart = (prodId)=>{
    dispatch({type:"REMOVE_FROM_CART",payload:prodId});
  }
  const addToWishList = (product)=>{

    dispatch({type:"ADD_TO_WISHLIST",payload:product})
  };

  const increaseQuant = (itemId)=>{
    dispatch({type:"INCREASE_QUANTITY",payload:itemId})
  };
  const decreaseQuant = (itemId)=>{
    dispatch({type:"DECREASE_QUANTITY",payload:itemId})
  };

  const removeWishList = (itemid)=>{
    dispatch({type:"REMOVE_WISHLIST",payload:itemid})
  }
  useEffect(()=>{

  },[dispatch])
  console.log(state.cart);
  // console.log(state.wishList);

  return (
    <div>
        {products.map((prod)=>(
          <div key={prod.id}>
            <h2>{prod.name}</h2>
            <p>{prod.address}</p>
            <h4>{prod.price}$</h4>
            <button onClick={()=>addToCart(prod)}>Add To Cart</button>
            <button onClick={()=>addToWishList(prod)}>Add To WishList</button>
          </div>
        ))}


        <h1>Cart Products</h1>

        {state.cart.map((item)=>(
          <div key={item.id}>
             <h2>{item.name}</h2>
            <p>{item.address}</p>
            <h4>{item.price}$</h4>
            <h1>Quantity 
              <button onClick={()=>increaseQuant(item.id)}>+</button>
              <p>{item.quantity}</p>
              <button onClick={()=>decreaseQuant(item.id)}>-</button>
              
            </h1>
            <button onClick={()=>removeCart(item.id)}>Remove from Cart</button>
          </div>
        ))}

        <h1>WishList</h1>
        {
          state.wishList.map((item)=>(
            <div key={item.id}>
             <h2>{item.name}</h2>
            <p>{item.address}</p>
            <h4>{item.price}$</h4>
         
            <button onClick={()=>removeWishList(item.id)}>Remove from WishList</button>
          </div>
          ))
        }

    </div>
  )
}

export default App
