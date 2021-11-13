import React, {useState,useEffect} from 'react'
import './Food.css'
import './cart.css'

function Cart(props) {
    
    
    
    return (
        <div className="cart">
        <div className="cart_header">
            <button className="back_button" onClick={()=>{
                props.cartActiveUpdate()
            }
            }>Back</button>
        </div>
        <div className='foods_display'>
        {
            
            props.items.map((item) => (
            
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
                                    let temp = props.items;
                                    temp[temp.findIndex((obj => obj.id === item.id))].quantity -= 1;
                                    console.log("this is updated")
                                    props.updateCartItems(temp)
                                }

                            }

                            }>-</button>
                            <h5>{item.quantity}</h5>
                            <button className='increase_button' onClick={()=>{
                                let temp = props.items;
                                temp[temp.findIndex((obj => obj.id === item.id))].quantity += 1;
                                console.log("this is updated")
                                props.updateCartItems(temp)

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
