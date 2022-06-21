import React, {useEffect, useState} from 'react';
import UserCharacter from "./UserCharacter";
import {getUsers} from "../../services/serviceRM";

const CharacterRm = () => {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value))
    },[])

    return (
        <div>
            {
                users.map(value => <UserCharacter key={value.id} item={value}/>)
            }
        </div>
    );
};

export default CharacterRm;