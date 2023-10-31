import React from "react";

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div  className ="pa2 " >
            <input // used to take the input , type specifies the search type.
                className="pa3 tc bg-light-blue ba shadow-3"
                type="search"
                placeholder="searchrobots"   // to specify what is written in the space holder.
                onChange={searchChange}   // 
            />            
        </div>
    )
} 
export default  SearchBox;