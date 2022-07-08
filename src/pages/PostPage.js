import {useParams, Outlet} from "react-router-dom";
import PostsComponent from "../components/PostsComponent";

export default function PostPage() {
    let {id} = useParams();
    return (
        <div>
            <PostsComponent id={id}/>
            <hr/>
            <Outlet/>
        </div>
    );
}