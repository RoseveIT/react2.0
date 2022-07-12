import {Outlet} from "react-router-dom";

import {CommentsComponent} from "../components/comments/CommentsComponent";

export default function CommentsPage(props) {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
}