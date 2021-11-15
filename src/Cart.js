import React, {useState,useEffect, useContext} from 'react'
import './Food.css'
import './cart.css'

import {CartContext} from './cartContext'
import { Link } from 'react-router-dom'
function Cart(props) {
    
    const [cartItems, setCartItems, addCartItems, updateCartItems] = useContext(CartContext)
    
    return (
        <div className="cart">
        <div className="cart_header">
            <Link to='/'>
            <button className="back_button">Back</button>
            </Link>
        </div>
        <div className='foods_display'>
        {
            
            cartItems.map((item) => (
            
                <div className='food_display'>
                    <div className='img'>
                        <img src={item.img} alt="" />
                    </div>

                    <div>
                        <h5>{item.name}</h5>
                        <h5>{item.cost}</h5>

                        <div>

                        <div className='quantity'>
                            <button className='sub_button' onClick={()=>{
                                if (item.quantity > 0){
                                    let temp = cartItems;
                                    temp[temp.findIndex((obj => obj.id === item.id))].quantity -= 1;
                                    console.log("this is updated")
                                    updateCartItems(temp)
                                }

                            }

                            }>-</button>
                            <h5>{item.quantity}</h5>
                            <button className='increase_button' onClick={()=>{
                                let temp = cartItems;
                                temp[temp.findIndex((obj => obj.id === item.id))].quantity += 1;
                                console.log("this is updated")
                                updateCartItems(temp)

                            }
                            }>+</button>
                        </div>
                        </div>  
                    </div>
                </div>
            
            ))
            
        }
        </div>

        </div>
        
        
    )
}

export default Cart
