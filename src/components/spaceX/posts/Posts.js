import {useEffect, useState} from "react";
import {Post} from "../index";

function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setPosts(value.filter(value => value.launch_year !== '2020')))
    },[])

    return (
        <div>
            {
                posts.map((value, index) => <Post key={index} item={value}/>)
            }
        </div>
    );
}

export {Posts}