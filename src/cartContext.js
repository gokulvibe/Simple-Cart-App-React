import {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();


export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])


    let addCartItems = (food) => {
        let itemArray = [...cartItems]
        let found = itemArray.findIndex(o => o.id === food.id)
        console.log(found)
        if (found !== -1){
            itemArray[found].quantity += food.quantity
            setCartItems(itemArray)
            return
        }
        itemArray.push(food)
        setCartItems(itemArray)
    }

    let updateCartItems = (items) => {
        let tempItems = [...cartItems]
        console.log(tempItems)
        tempItems.map(obj => items.find(o => o.id === obj.id) || obj);
        console.log(tempItems)
        setCartItems(tempItems);
    }

    return (
        <CartContext.Provider value={[cartItems, setCartItems, addCartItems, updateCartItems]}>
            {props.children}
        </CartContext.Provider>
    )
}
