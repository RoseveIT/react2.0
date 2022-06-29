import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api.service";
import User from "../user/User";

export default function Users({elevate}) {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers.then(({data}) => setUsers([...data]))
    },[])
    return (
        <div>
            {
                users.map(user => <User
                    item={user}
                    key={user.id}
                    elevate={elevate}
                />)
            }
        </div>
    );
}