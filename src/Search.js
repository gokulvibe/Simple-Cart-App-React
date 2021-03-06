import React, {useRef} from 'react'

// import SearchIcon from '@material-ui/icons-material/Search';

import './search.css'

function Search(props) {
    const val = useRef(null);



    let updateSearch = a => (
        props.updateSearchValue(a)
    );


    let handleEnter = (e) => {
        if (e.key == 'Enter'){
            props.updateSearchValue(val.current.value)
        }
    }
    return (
        
        <div className='search_bar'>
            <input type='text' className='search_input' id='search' ref={val}
            onKeyDown={handleEnter}></input>
            {/* <SearchIcon /> */}
            <button
            className='search_button'
            onClick={()=>{
                updateSearch(val.current.value)
                console.log(val.current.value);
            }}>Search</button>
        </div>

        
    )
}

export default Search
