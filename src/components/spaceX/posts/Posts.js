import {useEffect, useState} from "react";
import {Post} from "../index";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
}