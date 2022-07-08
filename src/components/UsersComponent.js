import {useEffect, useState} from "react";
import UserComponent from "./UserComponent";

export default function UsersComponent() {

    let [users, setUsers]= useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(data => setUsers([...data]))
    },[])
    return (
        <div>
            {
                users.map(user =><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
}