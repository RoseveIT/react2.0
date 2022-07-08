import {useLocation, useParams} from "react-router-dom";
import PostDetailsComponent from "../components/PostDetailsComponent";

export default function PostDetailsPage() {
    let {state} = useLocation();
    console.log(state)
    return (
        <div>
            <PostDetailsComponent/>
        </div>
    );
}