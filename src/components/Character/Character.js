import React from 'react';

const Character = (props) => {
    let {name, par, img} = props
    return (
        <div>
            <h2>{name}</h2>
            <p>{par}</p>
            <img src={img} alt={name}/>
        </div>
    );
};

export default Character;