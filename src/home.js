import React, { useState, useEffect } from "react";
import Food from "./Food";
import Search from "./Search";
import './Home.css'
import Cart from "./Cart";

function Home(addToCart){
    
    const [cartItems, setCartItems] = useState([])
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [cartActive, setCartActive] = useState(false)


    

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])


    let updateSearchValue = a => (
        setSearchValue(a)
    );

    

    useEffect(() => {
        console.log(searchValue)
    }, [searchValue])

    useEffect(() => {

        let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=519e028716474661b87a2ac94b122d52&query="+searchValue
        
        fetch(url)
            .then((res) => res.json())
            .then((json) => {

                        if(json.results){
                            setData(json.results);
                            setLoaded(true);

                        }
            })
            .catch(err=>{
                console.error(err.message);
            })
        }, [searchValue])
           
        


    useEffect(()=>{

        console.log("Data:",typeof(data));
        console.log(data);
    },[data]);


    

    let cartActiveUpdate = () => {
        setCartActive(false)
    }

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

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])


    if (cartActive){
        return(
            <div>
                <Cart items={cartItems} cartActiveUpdate={cartActiveUpdate} updateCartItems={updateCartItems}/>
            </div>
        )
    }
    if (!loaded){
        return (
            <div>
                <div>
                <Search updateSearchValue={updateSearchValue}/>
                </div>

                <h3>Please wait...</h3>
            </div>
        )
    }
    return (
        <div className='home'>
            <div className="header">
                <div className="home">
                    <h3>Add your foods here</h3>
                </div>

                <div>
                    <Search updateSearchValue={updateSearchValue}/>
                </div>

                <div className='cart'>
                    <h3>Your cart:</h3>
                    <button className='cart_button' onClick={()=>{
                        setCartActive(true)
                    }
                    }>View cart</button>
                    

                </div>
            </div>

            <div className='foods_display'>

                {
                    data.map((i) => (

                        <Food
                            key={i.id}
                            id={i.id}
                            name={i.title}
                            cost="50Rs"
                            img={i.image}
                            addToCart={addCartItems}
                        />
                    ))
                }

                {/* {data}.map((i) => (
                    <Food
                        name={i.name}
                        description={i.username}
                        cost={i.id}
                    />
                )
                ) */}
            </div>
        </div>
        
    )
}

export default Home