import {useEffect, useState} from "react";

import {getComments} from "../../services";
import {CommentComponent} from "./CommentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        getComments().then(value => setComments([...value]))
    },[])
    return (
        <div>
            {
                comments.map(value => <CommentComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export {CommentsComponent};