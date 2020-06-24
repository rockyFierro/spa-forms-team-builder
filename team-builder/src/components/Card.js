import React from 'react';

const Card =(props)=> {
    return(
            <div className="card">
                <h2>name:{props.name}</h2>
                <p>role:{props.role}</p>
                <p>contact:{props.contact}</p>
            </div>
    )
}

export default Card;