import React from 'react'

import './Food.css'

function Food({img, name, cost, id, addToCart}) {
    return (
        <div className='food_display'>
            <div className='img'>
                <img src={img} alt="" />
            </div>

            <div>
                <h5>{name}</h5>
                <h5>{cost}</h5>
            </div>
            
            <div className='add_button_div'>
                <button className='add_button' onClick={()=>{
                    let item = {
                        "id":id,
                        "img":img,
                        "name":name,
                        "cost":cost,
                        "quantity":1,

                    }
                    addToCart(item)
                }}>Add</button>
            </div>
        </div>
    )
}

export default Food
