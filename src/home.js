import React, { useState, useEffect } from "react";
import Food from "./Food";
import Search from "./Search";
import './Home.css'
import Cart from "./Cart";

import {Link} from  'react-router-dom';

function Home(addToCart){
    
    
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    // const [cartActive, setCartActive] = useState(false)


    

    


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
                    <Link to='/cart'>
                    <button className='cart_button'>View cart</button>
                    </Link>

                </div>
            </div>

            <div className='foods_display'>
{
            (data.length === 0)? 
                        <h3>No Food</h3>
                    :null
}
                {
                
                    data.map((i) => (

                        <Food
                            key={i.id}
                            id={i.id}
                            name={i.title}
                            cost="50Rs"
                            img={i.image}
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