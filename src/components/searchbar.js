import React from "react";

const Searchbar = ({modifyFood}) => {

    let handleSearch = (e) => {
        modifyFood(e.target.value);
    }

    return(
        <div className='search'>
            <strong>Search</strong>
            <br></br><br></br>
            <input type='text' placeholder='Find a Food' onChange={handleSearch}></input>
        </div>
    )
}

export {Searchbar}