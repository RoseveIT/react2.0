import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPostsCurrentComments} from "../../services";
import {PostComponent} from "./PostComponent";


const PostsCurrentComment = () => {

    const {postId} = useParams();

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        getPostsCurrentComments(postId).then(value => setPosts([{...value}]))
    },[postId])

    return (
        <div>
            {
                posts.map(value => <PostComponent key={value.id} item={value}/>)
            }
        </div>
    );
}



export {PostsCurrentComment}