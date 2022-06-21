import React from 'react';

const UserCharacter = (props) => {
    let {item:{id,name,status,species,gender,image}} = props
    return (
        <div>
            <h2>{name} - {id}</h2>
            <p>{status} <br/> {species} <br/> {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default UserCharacter;