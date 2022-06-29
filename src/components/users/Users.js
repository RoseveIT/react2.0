import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/users.api.service";

export default function Users({elevate}) {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers()
            .then(({data}) => setUsers([...data]))
    },[])

    return (
        <div>
            {
                users.map(user => <User
                    user={user}
                    key={user.id}
                    elevate={elevate}
                />)
            }
        </div>
    );
}