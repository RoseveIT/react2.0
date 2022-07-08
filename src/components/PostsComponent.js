import {useEffect, useState} from "react";

import PostComponent from "./PostComponent";

export default function PostsComponent({id}) {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        if (id){
            fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
                .then(value => value.json())
                .then(data =>{
                    setPosts([...data]);
                })
        }else {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(data => {
                    setPosts([...data])
                })
        }
    },[id])

    return (
        <div>
            {
                posts.map(value => <PostComponent key={value.id} post={value}/>)
            }
        </div>
    );
}