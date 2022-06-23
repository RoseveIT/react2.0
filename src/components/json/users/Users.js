import {useEffect, useState} from "react";
import {User} from "../index";


export default function Users() {
    let [users, setUsers] = useState([]);
    let [post, setPost] = useState({});

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

    let chosen = (item) => {
        setPost(item)
    };

    return (
        <div>
            {
                post.id && <div>{post.id}</div>
            }
            {
                users.map((value, index) =>
                    <User
                        key={index}
                        item={value}
                        chosen={chosen}
                    />)
            }

        </div>
    );
}