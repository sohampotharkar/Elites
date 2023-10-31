import React from "react";

const Card = (props)=> {
    const {name,email,id} = props
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200*200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        
    );
}

export default Card;
// Instead of the div element there is a shothand way to return the div elements. 
// https://blog.logrocket.com/rendering-child-elements-react-fragments/