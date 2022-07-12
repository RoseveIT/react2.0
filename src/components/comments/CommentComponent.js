import {Link} from "react-router-dom";

const CommentComponent = ({item}) => {
    return (
        <div>
            <h3>{item.id} --- {item.name} --- {item.email}</h3>
            <span><Link to={item.postId.toString()}>details</Link></span>
        </div>
    );
};

export {CommentComponent};